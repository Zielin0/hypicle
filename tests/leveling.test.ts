import { describe, expect, test } from '@jest/globals';
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
});
