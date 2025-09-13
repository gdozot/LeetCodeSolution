export function maxFreqSum(s) {
    const vowel = s.match(/[aeiou]/g);
    const consonants = s.match(/[^aeiou]/g);

    const countedVowel = vowel?.reduce((o, v) => (o[v] ??= 0, o[v]++, o), {});
    const countedConsonants = consonants?.reduce((o, v) => (o[v] ??= 0, o[v]++, o), {});

    const maxVowel = countedVowel ? Math.max(...Object.values(countedVowel)) : 0;
    const maxConsonants = countedConsonants ? Math.max(...Object.values(countedConsonants)) : 0;

    return maxVowel + maxConsonants;
};