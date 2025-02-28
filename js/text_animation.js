// Moving text, Codepen

(function () {
  var skillsAnimationId,
    parentAnimationElementWidth,
    startPosAnimationElement,
    posAnimationElement,
    animationElement;

  function setSkillsElement() {
    animationElement = document.querySelector(".skills-text");
    parentAnimationElementWidth =
      animationElement.parentElement.parentElement.offsetWidth;
    startPosAnimationElement = -animationElement.offsetWidth;
    posAnimationElement = startPosAnimationElement;
    animationElement.style.right = posAnimationElement + "px";
  }

  function moveSkillsElement() {
    posAnimationElement += 2;
    animationElement.style.right = posAnimationElement + "px";
    if (posAnimationElement > parentAnimationElementWidth)
      posAnimationElement = startPosAnimationElement;
    skillsAnimationId = requestAnimationFrame(moveSkillsElement);
  }

  setSkillsElement();
  moveSkillsElement();
  window.addEventListener("resize", refreshAnimation, false);

  var resizeTimeout;
  function refreshAnimation() {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function () {
        resizeTimeout = null;
        window.cancelAnimationFrame(skillsAnimationId);
        setSkillsElement();
        moveSkillsElement();
      }, 100);
    }
  }
})();
