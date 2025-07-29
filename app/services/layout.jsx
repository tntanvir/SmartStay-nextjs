import SideBer from "../Components/SideBer";


export default function Layout({ children }) {


    return (
        <div className="flex">
            {/* Sidebar Section */}
            <SideBer />

            {/* Main Content Section */}
            <main className="flex-1 p-6 bg-gray-50 rounded-xl overflow-hidden">
                {children}
            </main>
        </div>
    );
}

