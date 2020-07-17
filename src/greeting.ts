const greetings: string[] = [
    "hello",
    "hola",
    "ahoi",
    "aloha",
]

const greeting = (): string => greetings[Math.floor(Math.random() * greetings.length)]

const hello = (): string => `${greeting()} world!`

export {
    greeting,
    hello,
}