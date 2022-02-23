const TheaterLayout = ({ theater }) => {

  function checkSpace(index, obj) {
    let space = obj.find((key) => key.rowNumber == index);
    if (space != undefined) {
      return [...Array(space.count)].map((e, i) => (
        <td className="border border-transparent w-6 h-6">&nbsp;</td>
      ));
    }
  }
  
  return (
    <>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full w-full my-10 flex flex-col-reverse items-center px-4">
          {theater.rows.map((row, index) => (
            <>
              {row.name == "empty" ? (
                <>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                </>
              ) : row.name == "balcony" ? (
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
                <tr className="flex items-center flex-row-reverse py-1">
                  <td className="text-sm mx-1 font-semibold">{row.name}</td>
                  {[...Array(row.size)].map((e, i) => (
                    <>
                      {checkSpace(i, row.space)}
                      <td className="border w-6 h-6 text-xs text-gray-500 flex items-center justify-center">
                        {i + 1}
                      </td>
                    </>
                  ))}
                  <td className="text-sm mx-1 font-semibold">{row.name}</td>
                </tr>
              )}
            </>
          ))}
        </table>
        <div className="h-10 w-full max-w-md mx-auto text-sm font-medium border flex items-center justify-center mb-10">
          STAGE
        </div>
      </div>
    </>
  );
};

export default TheaterLayout