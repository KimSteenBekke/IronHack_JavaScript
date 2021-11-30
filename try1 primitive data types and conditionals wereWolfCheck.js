function werewolfCheck(name) {
    let checkName = name.slice(0, 4);
  
    if (checkName === `were`) {
      return `it is a werewolf`;
    } else return `just a regular person`;
  }