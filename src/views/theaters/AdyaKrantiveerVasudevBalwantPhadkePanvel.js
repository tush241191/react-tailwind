import TheaterLayout from "../../components/Common/TheaterLayout";

const AdyaKrantiveerVasudevBalwantPhadkePanvel = () => {
  const theater = {
    name: "Adya Krantiveer Vasudev Balwant Phadke: Panvel",
    rows: [
      {
        name: "A",
        size: 24,
        price: 400,
        space: [
          {
            rowNumber: 9,
            count: 2,
          },
          {
            rowNumber: 15,
            count: 2,
          },
        ],
      },
      {
        name: "B",
        price: 400,
        size: 25,
        space: [
          {
            rowNumber: 9,
            count: 2,
          },
          {
            rowNumber: 16,
            count: 2,
          },
        ],
      },
      {
        name: "C",
        price: 400,
        size: 27,
        space: [
          {
            rowNumber: 10,
            count: 2,
          },
          {
            rowNumber: 17,
            count: 2,
          }
        ],
      },
      {
        name: "D",
        price: 400,
        size: 28,
        space: [
          {
            rowNumber: 10,
            count: 2,
          },
          {
            rowNumber: 18,
            count: 2,
          },
        ],
      },
      {
        name: "E",
        price: 400,
        size: 28,
        space: [
          {
            rowNumber: 10,
            count: 2,
          },
          {
            rowNumber: 18,
            count: 2,
          },
        ],
      },
      {
        name: "F",
        price: 400,
        size: 31,
        space: [
          {
            rowNumber: 11,
            count: 2,
          },
          {
            rowNumber: 20,
            count: 2,
          },
        ],
      },
      {
        name: "G",
        price: 400,
        size: 31,
        space: [
          {
            rowNumber: 11,
            count: 2,
          },
          {
            rowNumber: 20,
            count: 2,
          },
        ],
      },
      {
        name: "H",
        price: 400,
        size: 32,
        space: [
          {
            rowNumber: 11,
            count: 2,
          },
          {
            rowNumber: 21,
            count: 2,
          },
        ],
      },
      {
        name: "I",
        price: 400,
        size: 34,
        space: [
          {
            rowNumber: 12,
            count: 2,
          },
          {
            rowNumber: 22,
            count: 2,
          },
        ],
      },
      {
        name: "empty",
      },
      {
        name: "J",
        price: 400,
        size: 35,
        space: [
          {
            rowNumber: 12,
            count: 2,
          },
          {
            rowNumber: 23,
            count: 2,
          },
        ],
      },
      {
        name: "K",
        price: 400,
        size: 37,
        space: [
          {
            rowNumber: 13,
            count: 2,
          },
          {
            rowNumber: 24,
            count: 2,
          },
        ],
      },
      {
        name: "L",
        price: 400,
        size: 38,
        space: [
          {
            rowNumber: 13,
            count: 2,
          },
          {
            rowNumber: 25,
            count: 2,
          },
        ],
      },
      {
        name: "M",
        price: 400,
        size: 41,
        space: [
          {
            rowNumber: 14,
            count: 2,
          },
          {
            rowNumber: 27,
            count: 2,
          },
        ],
      },
      {
        name: "N",
        price: 400,
        size: 41,
        space: [
          {
            rowNumber: 14,
            count: 2,
          },
          {
            rowNumber: 27,
            count: 2,
          },
        ],
      },
      {
        name: "O",
        price: 400,
        size: 42,
        space: [
          {
            rowNumber: 15,
            count: 2,
          },
          {
            rowNumber: 27,
            count: 2,
          },
        ],
      },
      {
        name: "empty",
      },
      {
        name: "P",
        price: 400,
        size: 41,
        space: [
          {
            rowNumber: 14,
            count: 2,
          },
          {
            rowNumber: 26,
            count: 2,
          },
        ],
      },
      {
        name: "Q",
        price: 400,
        size: 42,
        space: [
          {
            rowNumber: 14,
            count: 2,
          },
          {
            rowNumber: 27,
            count: 2,
          },
        ],
      },
      {
        name: "R",
        price: 400,
        size: 44,
        space: [
          {
            rowNumber: 15,
            count: 2,
          },
          {
            rowNumber: 28,
            count: 2,
          },
        ],
      },
      {
        name: "S",
        price: 300,
        size: 44,
        space: [
          {
            rowNumber: 15,
            count: 2,
          },
          {
            rowNumber: 28,
            count: 2,
          },
        ],
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto flex flex-col overflow-hidden bg-gray-100">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <TheaterLayout theater={theater} colReverse={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdyaKrantiveerVasudevBalwantPhadkePanvel;
