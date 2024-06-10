export const MIN_LENGTH: number = 3;
export const exclude_emogis_regex: RegExp = /[\u{1F600}-\u{1F64F}]/u;
export const exclude_blank_regex2: RegExp = /\s/;

export class GenerateCombinations {
  excludeRegEx: RegExp[] = [exclude_emogis_regex, exclude_blank_regex2];
  minLength = MIN_LENGTH;
  constructor(minLength = MIN_LENGTH, excludeRegEx: RegExp[] | undefined = undefined) {
    this.minLength=minLength;
    if (excludeRegEx) {
      this.excludeRegEx = excludeRegEx;
    }
  }

  private buildInternal(combinations: Set<string>, str: string): void {
    for (let len = this.minLength; len <= str.length; len++) {
      for (let i = 0; i <= str.length - len; i++) {
        const combination = str.slice(i, i + len);
        if (this.excludeRegEx) {
          var exclude: boolean = false;
          for (let ri = 0; ri < this.excludeRegEx.length; ri++) {
            if (this.excludeRegEx[ri].test(combination)) {
              exclude = true;
              break;
            }
          }

          if (!exclude) {
            combinations.add(combination);
          }
        } else {
          combinations.add(combination);
        }
      }
    }
  }

  build(str: string): string[] {
    var combinations: Set<string> = new Set<string>();
    this.buildInternal(combinations, str);
    return Array.from(combinations);
  }

  buildFromArray(strs: string[]): string[] {
    var combinations: Set<string> = new Set<string>();
    for (let si = 0; si < strs.length; si++) {
      var str: string = strs[si];
      this.buildInternal(combinations, str);
    }

    return Array.from(combinations);
  }
}

export const BuildCombinations = new GenerateCombinations().build;
export const BuildCombinationsFromArray = new GenerateCombinations().buildFromArray;
