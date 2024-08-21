// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
1) function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
2) function makeNegative(num) {
  return num > 0 ? num*(-1) : num
}

// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
3) function move(position, roll) {
  return position + (roll*2)
}

// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
4) function greet(name, owner) {
  return name == owner ? "Hello boss" : "Hello guest"
}

// https://www.codewars.com/kata/keep-hydrated-1/train/javascript
5) function litres(time) {
  return parseInt(time * 0.5);
}

// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
6) function lovefunc(flower1, flower2){
  if(flower1 % 2 == 0){
    if(flower2 % 2 !== 0)
      {
        return true;
      }
    else{
      return false;
    }
  }
  else if(flower1 % 2 !== 0){
    if(flower2 % 2 == 0){
      return true;
    }
    else{
      return false;
    }
  }
}
