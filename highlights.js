
/*
 * KBFC Empire — Highlight utilities
 * Detects candidate moments from changes in video-frame motion.
 * This is NOT reliable AI goal/skill recognition yet.
 */

const KBFC_HIGHLIGHT_CONFIG = {
  slowMotionSpeed: 0.5,
  clipDurationSeconds: 4,
  scanIntervalSeconds: 0.5
};

function kbfcCreateHighlight(startTime, duration = 4) {
  return {
    start: Math.max(0, startTime),
    end: Math.max(0, startTime) + duration,
    playbackRate: 0.5,
    label: "Possible Highlight"
  };
}

function kbfcGetSlowMotionSettings(highlight) {
  return {
    start: highlight.start,
    end: highlight.end,
    playbackRate: 0.5
  };
}

window.KBFCEmpireHighlights = {
  config: KBFC_HIGHLIGHT_CONFIG,
  createHighlight: kbfcCreateHighlight,
  getSlowMotionSettings: kbfcGetSlowMotionSettings
};
