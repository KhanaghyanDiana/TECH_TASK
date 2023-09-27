import { v4 as uuidv4 } from 'uuid';

export const services = [
    {
       id:uuidv4(),
        spec:"Dermatologist",
        price:"$150",
        duration:"30min"
    },
    {
    id:uuidv4(),
        spec:"Cardiologist",
    price:"$500",
    duration:"60min"
},
    {
        id:uuidv4(),
        spec:"Therapist",
        price:"$300",
        duration:"90min"
    }
]


export const professionals = [
    {
        id:uuidv4(),
        spec:"Dermatologist",
        fullName:"Leanne Graham Bret ",

    },
    {
        id:uuidv4(),
        spec:"Cardiologist",
        fullName:"Ervin Howell Antonette"
    },
    {
        id:uuidv4(),
        spec:"Therapist",
        fullName:"Clementine Bauch Samantha",

    }
]

export const available_hours = [
    {
        id:uuidv4(),
        spec:"Dermatologist",
        time:"14:00PM",
        fullName:"Leanne Graham Bret ",

    },
    {
        id:uuidv4(),
        spec:"Cardiologist",
        time:"13:00PM",
        fullName:"Ervin Howell Antonette"
    },
    {
        id:uuidv4(),
        spec:"Therapist",
        time:"17:00PM",
        fullName:"Clementine Bauch Samantha",
    }

]