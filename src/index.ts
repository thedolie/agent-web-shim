// This library provides a MOCK pack and unpack library for the agent to agent messaging

interface IAgentMessage {
    type: string,
    packed: boolean,
    body: any
}

interface IPackedMessage extends IAgentMessage {
    packed: true
}
interface IUnPackedMessage extends IAgentMessage {
    packed: false
}

export const pack = (message: any): IPackedMessage => { return {type: 'SSS', packed: true, body: message} }

export const unpack = (message: any): IUnPackedMessage => { return {type: 'SSS', packed: false, body: message} }
