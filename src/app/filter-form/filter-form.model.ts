export interface ICity {
    'id': number;
    'code': string;
    'label': string;
}

export interface IClassTypes {
    'id': number;
    'type': string;
    'code': 'ecn' | 'becn' | 'mecn'
}

export interface IPassengerTypes {
    'id': number;
    'type': 'Adult' | 'Child' | 'Senior'
}

export const PassengerTypes: IPassengerTypes[] = [
    {
        id: 0,
        type: 'Adult'
    },
    {
        id: 1,
        type: 'Child'
    },
    {
        id: 2,
        type: 'Senior'
    }
]

export const Cities: ICity[] = [
    {
        id: 0,
        code: 'PNQ',
        label: '(PNQ) Lohegaon Airport Pune, India'
    },
    {
        id: 1,
        code: 'DEL',
        label: '(DEL) Indira Gandhi Airport Delhi, India'
    },
    {
        id: 2,
        code: 'LKO',
        label: '(LKO) Amausi Airport Lucknow, India'
    },
    {
        id: 3,
        code: 'VNS',
        label: '(VNS) Babatpur Airport Varanasi, India'
    }
]

export const ClassTypes: IClassTypes[] = [
    {
        id: 0,
        code: 'ecn',
        type: 'Economy'
    },
    {
        id: 1,
        code: 'becn',
        type: 'Basic Economy'
    },
    {
        id: 2,
        code: 'mecn',
        type: 'Main Cabin'
    }
]