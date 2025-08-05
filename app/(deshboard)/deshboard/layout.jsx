import DeshboardSidebar from '@/app/Components/DeshboardSidebar';



export default function deshboardLayout({ children }) {


    return (
        <div className="flex">
            <DeshboardSidebar />
            <main
                className={`transition-all duration-300 w-full p-6 bg-gray-50 min-h-screen `}
            >
                {children}
            </main>
        </div>
    );
}
