import { useState, useEffect } from "react";
import {
    StateTelaError,
    StateTelaProps,
} from "../../interfaces/UteisInterfaces";
import { Coordinates, isEmployeeAtWork } from "../../uteis/localization";
import { buscarPorData, changeRequest, checkin } from "../../uteis";
import * as C from "./style";
import { Registries } from "../../components/registries";
import { Button } from "../../components/button";
import { Infos } from "../../components/infos";
import { colors } from "../../theme";
import {
    LocationAccuracy,
    requestForegroundPermissionsAsync,
    watchPositionAsync,
} from "expo-location";

//-23.00572079809164, -43.31035254571648

export const Home = () => {
    const [data, setData] = useState<StateTelaProps[] | []>([]);
    const [titleBtn, setTitleBtn] = useState<string>("entrada");
    const [idRegistro, setIdRegistro] = useState<number>(0);
    const [totalTrab, setTotalTrab] = useState<string[]>([]);
    const [diferenca, setDiferenca] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [textoLoading, setTextoLoading] = useState<String>("AGUARDE...");
    const [isAtWork, setIsAtWork] = useState<boolean>(false);

    const requestLocationPermissions = async () => {
        const { granted } = await requestForegroundPermissionsAsync();
    };

    const buscarDados = async () => {
        const dados: StateTelaProps[] | StateTelaError = await checkin(
            titleBtn,
            idRegistro
        );

        if ("error" in dados) {
            alert(dados.mensagem);
            return;
        }

        setIdRegistro(dados[0].id);
        setTitleBtn(changeRequest(titleBtn));
        setTotalTrab(dados[0].totalTrabalhado.split(":"));
        setDiferenca(dados[0].diferenca.split(":"));
        const dadosAtualizados = [...data, ...dados];
        setData(dadosAtualizados);
    };

    useEffect(() => {
        async function getDados() {
            const dadosTela: StateTelaProps[] | StateTelaError =
                await buscarPorData();

            console.log(dadosTela, "dadosTela");

            if ("error" in dadosTela) {
                setLoading(false);
                return;
            }

            setData(dadosTela);
            if (dadosTela.length > 0) {
                setTotalTrab(dadosTela[0].totalTrabalhado.split(":"));
                setDiferenca(dadosTela[0].diferenca.split(":"));
                setIdRegistro(dadosTela[0].id);
                setTitleBtn(
                    changeRequest(dadosTela[dadosTela.length - 1].title)
                );
            }
            setLoading(false);
        }
        getDados();
    }, []);

    useEffect(() => {
        requestLocationPermissions();
    }, []);

    useEffect(() => {
        watchPositionAsync(
            {
                accuracy: LocationAccuracy.Highest,
                timeInterval: 60000,
                distanceInterval: 1,
            },
            (response) => {
                const employeeLocation: Coordinates = {
                    latitude: response.coords.latitude,
                    longitude: response.coords.longitude,
                };
                console.log(titleBtn, "title");
                console.log(isEmployeeAtWork(employeeLocation));
                if (
                    isEmployeeAtWork(employeeLocation) &&
                    titleBtn == "entrada"
                ) {
                    setIsAtWork(true);
                }
            }
        );
    }, []);

    return (
        <>
            {loading && (
                <C.Container>
                    <C.Texto>{textoLoading}</C.Texto>
                </C.Container>
            )}
            {!loading && (
                <C.Container>
                    {titleBtn != "" && isAtWork && (
                        <Button
                            titleButton={`Registrar ${titleBtn}`}
                            handleRegistry={buscarDados}
                        />
                    )}
                    <C.AreaResgistries>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <Registries
                                    key={index}
                                    hour={item.hora}
                                    title={item.title}
                                />
                            ))
                        ) : (
                            <C.Texto>
                                Nenhum horário registrado para hoje
                            </C.Texto>
                        )}
                    </C.AreaResgistries>
                    {data.length > 0 && (
                        <C.AreaInfos>
                            <Infos
                                title="Total Trabalhado"
                                valor={`${totalTrab[0]} horas e ${totalTrab[1]} min`}
                                color={colors.primaryLight}
                            />
                            <Infos
                                title="Faltando"
                                valor={`${diferenca[0]} horas e ${diferenca[1]} min`}
                                color={colors.error}
                            />
                        </C.AreaInfos>
                    )}
                </C.Container>
            )}
        </>
    );
};
