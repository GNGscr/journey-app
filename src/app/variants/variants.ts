export const landingPageVariant = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -100
  },
  transition: {
    duration: 0.5
  }
};

export const sparklesVariant = {
  initial: {
    scale: 0,
    rotate: -180
  },
  animate: {
    scale: 1,
    rotate: 0
  },
  transition: {
    type: "spring",
    stiffness: 100,
    delay: 0.2
  }
};

export const chooseJourneyVariant = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    delay: 0.4
  }
};

export const embarkAdventureVariant = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    delay: 0.6
  }
};

export const startJourneyVariant = {
  initial: {
    opacity: 0,
    scale: 0.5
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  transition: {
    delay: 0.8,
    type: "spring",
    stiffness: 200,
  },
  whileHover: {
    scale: 1.1
  },
  whileTap: {
    scale: 0.95
  }
};

export const choiceStepPageVariant = {
  initial: {
    opacity: 0,
    x: 100
  },
  animate: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: -100
  }
};

export const cardVariant = {
  initial: {
    opacity: 0,
    x: 100
  },
  animate: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: -100
  }
};

export const stepIconVariant = {
  initial: {
    opacity: 0,
    y: -20
  },
  animate: {
    opacity: 1,
    y: 0
  }
};

export const progressIndicatorVariant = {
  initial: {
    opacity: 0,
    y: -20
  },
  animate: {
    opacity: 1,
    y: 0
  }
};

export const summaryPageVariant = {
  initial: {
    opacity: 0,
    x: 100
  },
  animate: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: -100
  }
};

export const summarySpringVariant = {
  initial: {
    opacity: 0,
    scale: 0.5
  },
  animate: {
    opacity: 1,
    scale: 1 
  },
  transition: {
    type: "spring",
    stiffness: 100,
  }
};

export const rotateThreeSixtyVariant = {
  animate: {
    rotate: [0, 360]
  },
  transition: {
    duration: 1,
    delay: 0.3
  }
};

export const selectionVariant = {
  initial: {
    opacity: 0,
    x: -100
  },
  animate: {
    opacity: 1,
    x: 0
  }
};

export const restartWrpVariant = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    delay: 1.1
  }
};

export const restartVariant = {
  whileHover: {
    scale: 1.05
  },
  whileTap: {
    scale: 0.95
  }
};

export const themeToggleVariant = {
  whileHover: {
    scale: 1.1,
    rotate: 180
  },
  whileTap: {
    scale: 0.9
  },
  transition: {
    type: "spring",
    stiffness: 300,
  }
};
