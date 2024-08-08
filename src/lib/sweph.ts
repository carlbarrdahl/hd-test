// import { getDay, getHours, getMonth, getYear } from "date-fns";
import sweph from "swisseph";

console.log(sweph.swe_julday);
sweph.swe_set_ephe_path(__dirname + "/ephe");

// const date = { year: 2015, month: 1, day: 1, hour: 0 };

export default sweph;
/*
- date to juldate
- juldate to create date
    - sun_long = swe.calc_ut(juldate)
    - long = swe.degnorm(sun_long - design_pos)
    - res = swe.solcross_ut(long, juldate - 100)
    - create_date = swe.revjul(res)
    - create_julday = swe.julday(create_date)
*/

// const PLANETS = {
//   Sun: 0,
//   Earth: 0, // Sun position -180 longitude
//   Moon: 1,
//   North_Node: 11, // Disussion wheater mean or True node?! here North Node -> true Node
//   South_Node: 11, // North_Node position -180 longitude
//   Mercury: 2,
//   Venus: 3,
//   Mars: 4,
//   Jupiter: 5,
//   Saturn: 6,
//   Uranus: 7,
//   Neptune: 8,
//   Pluto: 9,
// };

// const ICHING = [
//   41, 19, 13, 49, 30, 55, 37, 63, 22, 36, 25, 17, 21, 51, 42, 3, 27, 24, 2, 23,
//   8, 20, 16, 35, 45, 12, 15, 52, 39, 53, 62, 56, 31, 33, 7, 4, 29, 59, 40, 64,
//   47, 6, 46, 18, 48, 57, 32, 50, 28, 44, 1, 43, 14, 34, 9, 5, 26, 11, 10, 58,
//   38, 54, 61, 60,
// ].reduce((acc, x) => ({ ...acc, [x]: x }), {});

// export function calculateDesign(date: Date) {
//   console.log("calculate design for:", date);

//   //   const birth = swisseph.swe_julday(
//   // getYear(date),
//   // getMonth(date),
//   // getDay(date),
//   // getHours(date),
//   //     swisseph.SE_GREG_CAL,
//   //   );

//   const birth = swe.julday(
//     getYear(date),
//     getMonth(date),
//     getDay(date),
//     getHours(date),
//     swe.constants.SE_GREG_CAL,
//   );

//   console.log(birth);
//   const flag = swe.constants.SEFLG_SWIEPH | swe.constants.SEFLG_SPEED;
//   const sun = swe.calc_ut(birth, swe.constants.SE_SUN, flag);

//   console.log({ sun });

//   const long = swe.degnorm(sun.data[0] - 88);
//   console.log({ long });

//   const res = swe.solcross_ut(long, birth - 100, flag);
//   //   var flag = swisseph.SEFLG_MOSEPH;
//   console.log({ res });

//   const createDate = swe.revjul(res.date, flag);
//   const createJulDay = swe.julday(
//     createDate.year,
//     createDate.month,
//     createDate.day,
//     createDate.hour,
//     swe.constants.SE_GREG_CAL,
//   );
//   console.log({ createDate });
//   console.log({ createJulDay });

//   Object.entries(PLANETS).map(([planet, code]) => {
//     // console.log(planet, code);

//     let [long] = swe.calc_ut(birth, code, flag).data;

//     if (["Earth", "South_Node"].includes(planet)) {
//       // console.log("-----", long);
//       long = (long + 180) % 360;
//     }
//     const angle = (long + 58) % 360;
//     const percentage = angle / 360;
//     // console.log(long, angle, percentage);
//     // console.log(percentage * 64);
//     const gate = ICHING[Math.floor(percentage * 64)];
//     console.log({ planet, gate, percentage });
//   });
//   //   var body = swisseph.swe_calc_ut(birth, swisseph.SE_SUN, flag);
//   //   console.log("Sun ecliptic position:", body);

//   //   flag = swisseph.SEFLG_EQUATORIAL | swisseph.SEFLG_MOSEPH;
//   //   body = swisseph.swe_calc_ut(birth, swisseph.SE_SUN, flag);
//   //   console.log("Sun equatorial position:", body);

//   //   flag = swisseph.SEFLG_XYZ | swisseph.SEFLG_MOSEPH;
//   //   body = swisseph.swe_calc_ut(birth, swisseph.SE_SUN, flag);
//   //   console.log("Sun in cartesian coordinates:", body);

//   // const sun = swisseph.swe_calc_ut(birth, swisseph.SE_SUN, 2) as {
//   //   longitude: number;
//   // };

//   //   const long = swisseph.swe_degnorm(sun.longitude - 88);

//   //   console.log(long);

//   //   console.log(swisseph.swe_solcross_ut);
//   //   const res = swisseph.

//   // jd0 = jd_ut_birth -100;  // start looking 100 days before birth
//   // jd = swe_solcross_ut(xcross, jd0, 0, serr)

//   //   swisseph.swe_degnorm()

//   //   const createDate = calcCreateDate(date);

//   //   console.log(createDate);
// }

// // function calcCreateDate(date: Date) {

// //   const createDate = swe.swe_calc_ut(+date, swe.SE_SUN, 2);

// //   return createDate;
// // }
