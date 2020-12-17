import Discord, { Message } from 'discord.js';

export const getCallbackChannelMsg = (messageEvent: Message): Message | void => {
    const { channel } = messageEvent;
    if (channel.type === 'text' && channel.name === 'event_callback') {
        return messageEvent;
    } else {
        return;
    }
};

export const getBotMessage = (messageEvent: Message): Message | void => {
    const { author } = messageEvent;
    if (author.bot) return messageEvent;
    else return;
};
