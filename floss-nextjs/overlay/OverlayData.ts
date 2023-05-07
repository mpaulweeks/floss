import { AnimationDance, AnimationLayout, Settings, SettingsRowData, defaultSettings } from "@/types";

export function OverlaySettingsRows(settings: Settings): SettingsRowData[] {
  return [{
    opts: [{
      label: 'floss',
      onClick: () => ({ dance: AnimationDance.Floss, }),
    }, {
      label: 'shuffle',
      onClick: () => ({ dance: AnimationDance.Shuffle, }),
    }],
  }, {
    opts: [{
      label: 'still',
      onClick: () => ({ layout: AnimationLayout.Still, }),
    }, {
      label: 'row',
      onClick: () => ({ layout: AnimationLayout.Row, }),
    }, {
      label: 'col',
      onClick: () => ({ layout: AnimationLayout.Column, }),
    }, {
      label: 'twirl',
      onClick: () => ({ layout: AnimationLayout.Twirl, }),
    }],
  }, {
    label: `count ${settings.count}`,
    opts: [{
      label: 'fewer',
      onClick: s => ({ count: Math.max(1, s.count - 1), }),
    }, {
      label: 'reset',
      onClick: () => ({ count: defaultSettings().count, }),
    }, {
      label: 'more',
      onClick: s => ({ count: Math.min(10, s.count + 1), }),
    }],
  }, {
    label: `danceSpeed ${settings.danceSpeed}`,
    opts: [{
      label: 'dance slow',
      onClick: s => ({ danceSpeed: Math.max(0, s.danceSpeed - 1), }),
    }, {
      label: 'reset',
      onClick: () => ({ danceSpeed: defaultSettings().danceSpeed, }),
    }, {
      label: 'dance fast',
      onClick: s => ({ danceSpeed: Math.min(10, s.danceSpeed + 1), }),
    }],
  }, {
    label: `moveSpeed ${settings.moveSpeed}`,
    opts: [{
      label: 'move slow',
      onClick: s => ({ moveSpeed: Math.max(1, s.moveSpeed - 1), }),
    }, {
      label: 'reset',
      onClick: () => ({ moveSpeed: defaultSettings().moveSpeed, }),
    }, {
      label: 'move fast',
      onClick: s => ({ moveSpeed: Math.min(10, s.moveSpeed + 1), }),
    }],
  }];
}
