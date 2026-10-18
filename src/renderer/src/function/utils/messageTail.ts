let previousTail: string | undefined

export function getMessageTail(config: Record<string, unknown>): string {
    if (config.random_msg_tail === true) {
        if (typeof config.random_msg_tail_text !== 'string') return ''
        const candidates = [...new Set(config.random_msg_tail_text.split(/\r\n|\n|\r/)
            .filter((line) => line.trim() !== '')
            .map((line) => line.replaceAll('\\n', '\n')))]
        if (candidates.length === 0) return ''
        const alternatives = candidates.filter((line) => line !== previousTail)
        const pool = alternatives.length > 0 ? alternatives : candidates
        previousTail = pool[Math.floor(Math.random() * pool.length)]
        return previousTail
    }
    return typeof config.msg_taill === 'string' ? config.msg_taill.replaceAll('\\n', '\n') : ''
}
