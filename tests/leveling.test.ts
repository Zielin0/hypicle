import { describe, expect, test } from '@jest/globals';
import { PlayerLeveling } from '../api';
import { BedwarsLeveling, SkyWarsLeveling } from '../api/player/minigames.handler';

describe('Leveling', () => {
    test('BedWars Leveling', async () => {
      const level_0 = BedwarsLeveling.getLevelByExp(0); // 0
      const level_1 = BedwarsLeveling.getLevelByExp(110286); // 24
      const level_2 = BedwarsLeveling.getLevelByExp(1174460); // 242

      expect(level_0).toBe(0);
      expect(level_1).toBe(24);
      expect(level_2).toBe(242);
    });

    test('SkyWars Leveling', async () => {
      const level_0 = SkyWarsLeveling.getLevelByExp(0); // 1
      const level_1 = SkyWarsLeveling.getLevelByExp(3307); // 8
      const level_2 = SkyWarsLeveling.getLevelByExp(27380); // 13.231

      expect(level_0).toBe(1);
      expect(level_1).toBe(8);
      expect(level_2).toBe(13.231);
    });

    test('Player leveling', async () => {
      const level_0 = PlayerLeveling.getLevel(0); // 1
      const level_1 = PlayerLeveling.getLevel(2970169); // 46
      const level_2 = PlayerLeveling.getLevel(17178466); // 114
      const level_3 = PlayerLeveling.getLevel(110838552); // 295

      expect(level_0).toBe(1);
      expect(level_1).toBe(46);
      expect(level_2).toBe(114);
      expect(level_3).toBe(295);

      const exact_level_0 = PlayerLeveling.getExactLevel(0); // 1
      const exact_level_1 = PlayerLeveling.getExactLevel(2970169).toFixed(2); // 46.37
      const exact_level_2 = PlayerLeveling.getExactLevel(17178466).toFixed(2); // 114.78
      const exact_level_3 = PlayerLeveling.getExactLevel(110838552).toFixed(2); // 295.30

      expect(exact_level_0).toBe(1);
      expect(parseFloat(exact_level_1)).toBe(46.37);
      expect(parseFloat(exact_level_2)).toBe(114.78);
      expect(parseFloat(exact_level_3)).toBe(295.30);
    });
});
