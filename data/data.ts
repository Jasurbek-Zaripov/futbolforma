export const nextEntpoint = process.env.NUXT_PUBLIC_ENTPOINT || '';
export const cashboxid = process.env.NUXT_PUBLIC_ENTPOINT || '';
export const cashboxPassword = process.env.NUXT_PUBLIC_ENTPOINT || '';

export const cardCreateOptions = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'X-Auth': '',
        'Cache-Control': 'no-cache'
    }
};