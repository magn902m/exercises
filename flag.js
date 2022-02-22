`use stirct`;

// haveIDrowend(200, true, true);
haveIDrowend(200, false, true);
// haveIDrowend(200, true, false);
function haveIDrowend(seeLevel, wetSuit, postionIsUp) {
  let retrunFlag = false;
  if (seeLevel >= 200) {
    if (!wetSuit) {
      console.log("You did not wear a wetsuit");
      retrunFlag = true;
    }
  } else if (seeLevel <= 100) {
    if (!postionIsUp) {
      console.log("You where lying down");
      retrunFlag = true;
    }
  }
  console.log("You are swiming");
  return retrunFlag;
}
