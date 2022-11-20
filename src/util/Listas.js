const getWeather = (a, b) => {
    for (let i = 0; i < b.length; i++)
        if (b[i][1] === a) return b[i][0]
};

const WeatherEmojis = [
    ["☁️", "Clouds"],
    ["⛈️", "Rain"],
    ["🌨️", "Snow"],
    ["🌧️", "Drizzle"],
    ["⛈️", "Thunderstorm"],
    ["☀️", "Clear"],
]

// Define quantos gifs contem a pasta ./img/{Weather}
const WeatherGifs = [
    [3, "Clear"],
    [4, "Clouds"],
    [2, "Drizzle"],
    [4, "Rain"],
    [4, "Snow"],
    [3, "Thunderstorm"],
]

const Capitais = [
    ["Porto Velho", "Rondônia"],
    ["Manaus", "Amazonas"],
    ["Rio Branco", "Acre"],
    ["Campo Grande, MS", "Mato Grosso do Sul"],
    ["Macapá", "Amapá"],
    ["Brasília", "Distrito Federal"],
    ["Boa Vista", "Roraima"],
    ["Cuiabá", "Mato Grosso"],
    ["Palmas", "Tocantins"],
    ["São Paulo", "São Paulo"],
    ["Teresina", "Piauí"],
    ["Rio de Janeiro", "Rio de Janeiro"],
    ["Belém", "Pará"],
    ["Goiânia", "Goiás"],
    ["Salvador", "Bahia"],
    ["Florianópolis", "Santa Catarina"],
    ["São Luís", "Maranhão"],
    ["Maceió", "Alagoas"],
    ["Porto Alegre", "Rio Grande do Sul"],
    ["Curitiba", "Paraná"],
    ["Belo Horizonte", "Minas Gerais"],
    ["Fortaleza", "Ceará"],
    ["Recife", "Pernambuco"],
    ["João Pessoa", "Paraíba"],
    ["Aracaju", "Sergipe"],
    ["Natal", "Rio Grande do Norte"],
    ["Vitória", "Espírito Santo"]
];

export { WeatherEmojis, Capitais, WeatherGifs, getWeather }; 