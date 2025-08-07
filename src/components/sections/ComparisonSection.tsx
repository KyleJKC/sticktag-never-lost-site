import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Thickness",
    sticktag: "1.6mm",
    airtag: "8mm",
    tile: "5.3mm"
  },
  {
    feature: "Adhesive",
    sticktag: true,
    airtag: false,
    tile: false
  },
  {
    feature: "Price",
    sticktag: "$14.99",
    airtag: "$29.00",
    tile: "$24.99"
  },
  {
    feature: "Battery Life",
    sticktag: "6 mo - 1 year",
    airtag: "1 year",
    tile: "3 years"
  },
  {
    feature: "Easily Replaceable",
    sticktag: true,
    airtag: false,
    tile: false
  },
  {
    feature: "Perfect for Small Items",
    sticktag: true,
    airtag: false,
    tile: false
  }
];

export function ComparisonSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            StickTag vs. The Competition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See why StickTag is the smarter choice for tracking your valuable items
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-radius-lg shadow-medium overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-lg font-semibold text-neon-teal bg-neon-teal/10">
                      StickTag
                    </th>
                    <th className="px-6 py-4 text-center text-lg font-semibold text-gray-600">
                      AirTag
                    </th>
                    <th className="px-6 py-4 text-center text-lg font-semibold text-gray-600">
                      Tile
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr 
                      key={row.feature} 
                      className={`border-t border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center bg-neon-teal/5">
                        {typeof row.sticktag === 'boolean' ? (
                          row.sticktag ? (
                            <Check className="w-6 h-6 text-neon-teal mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold text-neon-teal">{row.sticktag}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.airtag === 'boolean' ? (
                          row.airtag ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-600">{row.airtag}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.tile === 'boolean' ? (
                          row.tile ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-600">{row.tile}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button 
              className="btn-hero text-lg px-8 py-4"
              onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Choose StickTag Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}