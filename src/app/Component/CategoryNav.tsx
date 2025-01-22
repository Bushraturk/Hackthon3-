// components/CategoryNav.tsx

const categories = ['tshirt', 'short', 'jeans', 'hoodie', 'shirt'];

const CategoryNav = () => (
  <nav className="bg-gray-800 text-white p-4">
    <ul className="flex justify-center space-x-6">
      {categories.map((category) => (
        <li key={category}>
            <span className="hover:text-yellow-400">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
        </li>
      ))}
    </ul>
  </nav>
);

export default CategoryNav;
