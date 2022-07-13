const getSeason = () => {
  let month = new Date().getMonth();
  let season;

  //For production, we'll display a banner image,
  //so the switch statement will set the img src="" for it.

  switch (month) {
    case 11:
      season = "winter";
      break;

    case 3:
      season = "spring";
      break;

    case 6:
      season = "summer";
      break;

    case 9:
      season = "fall";
      break;

    default:
      break;
  }

  return season;
};

export default getSeason;
