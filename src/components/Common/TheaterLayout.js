const bookingStatusColor = {
  available:
    "border-green-400 bg-white hover:bg-green-400 hover:text-white text-gray-500 cursor-pointer",
  booked: "border-blue-500 bg-blue-500 text-white cursor-not-allowed",
  blocked: "border-gray-300 bg-gray-300 text-white cursor-not-allowed",
};
const TheaterLayout = ({ theater, colReverse = false, rowReverse = false }) => {
  const data = [
    {
      row: "A",
      available: [2, 4, 6, 8, 16, 18, 20],
      booked: [10, 12, 14],
    },
    {
      row: "B",
      available: [10, 12, 14, 16, 18, 20],
      booked: [2, 4, 6, 8],
    },
  ];

  function checkSpace(index, obj) {
    let space = obj.find((key) => key.rowNumber === index);
    if (space !== undefined) {
      return [...Array(space.count)].map((e, i) => (
        <td className="border border-transparent w-6 h-6">&nbsp;</td>
      ));
    }
  }

  function createSeats(rowName, seatNumber) {
    let obj = data.find((e) => e.row === rowName);
    return (
      <>
        {obj !== undefined ? (
          <>
            {obj.available.find((e) => e === seatNumber) !== undefined ? (
              <>
                {returnSeatBlock(rowName,seatNumber,bookingStatusColor.available)}
              </>
            ) : obj.booked.find((e) => e === seatNumber) !== undefined ? (
              <>
                {returnSeatBlock(rowName,seatNumber,bookingStatusColor.booked)}
              </>
            ) : (
              <>
                {returnSeatBlock(rowName,seatNumber,bookingStatusColor.blocked)}
              </>
            )}
          </>
        ) : (
          <>
            {returnSeatBlock(rowName,seatNumber,bookingStatusColor.blocked)}
          </>
        )}
      </>
    );
  }

  function returnSeatBlock(rowName, seatNumber, css) {
    return (
      <td
        key={`${rowName}-${seatNumber}`}
        id={`${rowName}-${seatNumber}`}
        className={`${css} mr-0.5 border w-6 h-6 text-xs flex items-center justify-center rounded-md`}
      >
        {seatNumber < 10 ? `0${seatNumber}` : seatNumber}
      </td>
    );
  }

  return (
    <>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table
          className={`${
            colReverse ? "flex-col-reverse" : "flex-col"
          } min-w-full w-full my-10 flex items-center px-4`}
        >
          {theater.rows.map((row, index) => (
            <>
              {row.name === "empty" ? (
                <>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                </>
              ) : row.name === "balcony" ? (
                <>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr className="w-full">
                    <td className="w-full flex items-center justify-center text-sm font-semibold uppercase">
                      Balcony
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                </>
              ) : (
                <tr
                  key={`${row.name}-${index}`}
                  id={`${row.name}`}
                  className={`${
                    rowReverse ? "flex-row-reverse" : ""
                  } flex items-center py-1`}
                >
                  <td className="text-sm mx-1 font-semibold text-gray-900">
                    {row.name}
                  </td>
                  {[...Array(row.size)].map((e, i) => (
                    <>
                      {checkSpace(i, row.space)}
                      {createSeats(row.name, i + 1)}
                    </>
                  ))}
                  <td className="text-sm mx-1 font-semibold text-gray-900">
                    {row.name}
                  </td>
                </tr>
              )}
            </>
          ))}
        </table>
        <div className="bg-gray-50 h-10 w-full max-w-md mx-auto text-sm font-medium border flex items-center justify-center mb-10 rounded-t-md">
          STAGE
        </div>
      </div>
    </>
  );
};

export default TheaterLayout;
