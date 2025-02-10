import Card from "./components/Card";
import List from "./components/List";

interface SidebarProps {
    items: string[];
    onSelect: (elemento: string) => void;
}

function Sidebar({ items, onSelect }: SidebarProps) {
    return (
        <Card>
            <h2>Instagram</h2>
            <List data={items} onSelect={onSelect} />
        </Card>
    );
}

export default Sidebar;
