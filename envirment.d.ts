declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            DATABASE_URL: string;
            ENTPOINT: string;
            X_AUTH: string;
            NEXT_PUBLIC_API: string;
        }
    }
}
export { };