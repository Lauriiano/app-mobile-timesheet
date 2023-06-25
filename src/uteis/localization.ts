export interface Coordinates {
    latitude: number;
    longitude: number;
}

export function isEmployeeAtWork(employeeLocation: Coordinates): boolean {
    const distanceThreshold = 20; // Distância em metros
    const workLocation: Coordinates = {
        latitude: -22.9430157,
        longitude: -43.3618699,
    };

    /**
     * Golden
     * latitude: -23.0064269,
        longitude: -43.3115999,
     */

    /*
        casa
        latitude: -22.9430157,
        longitude: -43.3618699,
    */

    const earthRadius = 6371 * 1000; // Raio da Terra em metros

    const toRadians = (degrees: number): number => {
        return degrees * (Math.PI / 180);
    };

    const calculateDistance = (
        lat1: number,
        lon1: number,
        lat2: number,
        lon2: number
    ): number => {
        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(lat1)) *
                Math.cos(toRadians(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return earthRadius * c;
    };

    const distance = calculateDistance(
        workLocation.latitude,
        workLocation.longitude,
        employeeLocation.latitude,
        employeeLocation.longitude
    );

    return distance <= distanceThreshold;
}
