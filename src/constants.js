export const CHARACTER_SETS = {
    en: /[^a-zA-Z0-9,./<>?;:'"[\]\\|~!§@#$%^&*{}() +-=]/g,
    de: /[^a-zA-Z0-9,./<>?;:'"[\]\\|~!§@#$%^&*{}() +-=ÜüÄäÖöß]/g,
}

export const SYMBOLS = ',./<>?;:\'"[]\\{}|~!@#$%^&*()-_=+'.split('')
export const NUMBERS = '0123456789'.split('')
export const RANDOM_LENGTH = 20

export const NEW_TEXT = 'NEW_TEXT'

export const EXCLUSION_KEYWORDS = [
    'bezeichnet:',
    'steht für:',
    'folgender Personen:',
    'folgenden Personen:',
    'verschiedener Personen:',
    'folgender Orte:',
    'verschiedener Orte:',
    'Objekte:',
    'Vorlage:Infobox',
    'refer to:',
    '(disambiguation)',
    '(Begriffsklärung)',
]

export const MODE = {
    QUOTE: 'QUOTE',
    WIKI: 'WIKI',
    KAFKA: 'KAFKA',
    RANDOM: 'RANDOM',
    SYMBOLS: 'SYMBOLS',
    NUMBERS: 'NUMBERS',
    WORDS: 'WORDS',
    SETTINGS: 'SETTINGS',
    CUSTOM: 'CUSTOM',
}
