const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="mb-8 sm:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Over ons</h3>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit turpis at accumsan interdum.</p>
                    </div>
                    <div className="mb-8 sm:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p className="text-sm">Adres: 123 Straatnaam, Stad</p>
                        <p className="text-sm">Telefoon: 123-456-7890</p>
                        <p className="text-sm">E-mail: info@example.com</p>
                    </div>
                    <div className="mb-8 sm:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Refunds</h3>
                        <p className="text-sm">Voor refunds, neem contact op via:</p>
                        <p className="text-sm">E-mail: refunds@example.com</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Volg ons</h3>
                        <p className="text-sm">Social media links en iconen kunnen hier worden toegevoegd.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;