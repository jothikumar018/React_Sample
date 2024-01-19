import { PropsWithChildren } from 'react';


const Main = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <main className="content">
            {children}
        </main>
    );
};

export default Main;