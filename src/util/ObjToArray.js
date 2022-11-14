const ObjToArray = tempo => {
    try {
      tempo = Object.entries(tempo?.weather);
      tempo = tempo[0][1]?.main;
    }
    catch(err) {
      tempo = tempo?.weather;
    }

    return tempo;
}

export default ObjToArray;