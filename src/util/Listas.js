const pesquisa = a => {
    for (let i = 0; i < WeatherEmojis.length; i++)
      WeatherEmojis[i][1] === a && console.log(WeatherEmojis[i][0])
  };

const WeatherEmojis = [
    ["☁️","Clouds"],
    ["⛈️","Rain"],
    ["🌨️","Snow"],
    ["🌧️","Drizzle"],
    ["⛈️","Thunderstorm"],
    ["☀️","clear sky"],
]

const Capitais = [
    ["Porto Velho", "Rondônia"],
    ["Manaus", "Amazonas"],
    ["Rio Branco", "Acre"],
    ["Campo Grande", "Mato Grosso do Sul"],
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

export {WeatherEmojis, Capitais}; 