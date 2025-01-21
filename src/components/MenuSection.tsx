import { Card, CardContent } from "./ui/card";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

export const MenuSection = ({ title, items }: MenuSectionProps) => {
  return (
    <div className="mb-12 animate-fadeIn">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-restaurant-purple">{item.name}</h3>
                <span className="text-lg font-semibold text-gray-700">{item.price}</span>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};