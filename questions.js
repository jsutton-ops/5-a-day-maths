// Question bank: one array of 5 questions per day, in order from the start date.
// Each question: topic, tier (F/H), q, options (4), answer (index 0-3), explain.
window.QUESTION_BANK = {
"title": "Measure Up",
"subtitle": "GCSE Maths: measurement, 5 a day",
"days": [
[
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 883.4 ml into cl.",
"options": [
"88.34 cl",
"883.4 cl",
"8.834 cl",
"8,834 cl"
],
"answer": 0,
"explain": "1 cl = 10 ml. Going from ml to cl (a bigger unit) you divide by 10: 883.4 ÷ 10 = 88.34 cl."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 50 km in 2 hours. What is the average speed?",
"options": [
"100 km/h",
"16.7 km/h",
"25 km/h",
"0.4 km/h"
],
"answer": 2,
"explain": "Speed = distance ÷ time. 50 ÷ 2 = 25 km/h."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 112 km into miles.",
"options": [
"70 miles",
"14 miles",
"179.2 miles",
"560 miles"
],
"answer": 0,
"explain": "112 ÷ 8 = 14 lots of 8 km. 14 × 5 = 70 miles."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 6,800 g, correct to the nearest 100. What is the upper bound?",
"options": [
"6,840 g",
"6,900 g",
"6,850 g",
"6,750 g"
],
"answer": 2,
"explain": "Half of 100 is 50. Upper bound = 6,800 + 50 = 6,850 g."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 24.5 m/s into km/h.",
"options": [
"24,500 km/h",
"6.81 km/h",
"1,470 km/h",
"88.2 km/h"
],
"answer": 3,
"explain": "In 1 hour there are 3600 seconds, so 24.5 m/s = 24.5 × 3600 = 88,200 m per hour = 88.2 km/h. (Shortcut: × 3.6.)"
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 75 miles at an average speed of 25 mph. How long does the journey take?",
"options": [
"4 h",
"3 h 30 min",
"3 h",
"3 h 15 min"
],
"answer": 2,
"explain": "Time = distance ÷ speed = 75 ÷ 25 = 3 hours."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 20 m, a perpendicular height of 7 m and a sloping side of 11 m. Find its area.",
"options": [
"220 m²",
"140 m²",
"70 m²",
"62 m²"
],
"answer": 1,
"explain": "Area of a parallelogram = base × perpendicular height = 20 × 7 = 140 m². The sloping side is not needed."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 6 cm. Find its area, to 1 decimal place.",
"options": [
"37.7 cm²",
"113.1 cm²",
"18.8 cm²",
"28.3 cm²"
],
"answer": 3,
"explain": "First halve the diameter: r = 6 ÷ 2 = 3. Area = πr² = π × 3² = 28.3 cm² (1 d.p.)."
},
{
"topic": "Density",
"tier": "F",
"q": "A block has a density of 11.3 g/cm³ and a mass of 711.9 g. Find its volume.",
"options": [
"63 cm³",
"8,044.47 cm³",
"0.0159 cm³",
"630 cm³"
],
"answer": 0,
"explain": "Volume = mass ÷ density = 711.9 ÷ 11.3 = 63 cm³."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 100,000. Two towns are 5.5 cm apart on the map. How far apart are they in real life?",
"options": [
"0.55 km",
"5.5 km",
"55 km",
"550 km"
],
"answer": 1,
"explain": "Real distance = 5.5 × 100,000 = 550,000 cm. Divide by 100 for metres (5,500 m) and by 1000 for km: 5.5 km."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 08:50 and ends at 14:20. How long is this?",
"options": [
"4 h 30 min",
"6 h 30 min",
"5 h 30 min",
"5 h 20 min"
],
"answer": 2,
"explain": "Count on from 08:50: up to the next whole hour, then whole hours, then the minutes to 14:20. The total is 5 h 30 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 9 m and height 8 m. The prism is 21 m long. Find its volume.",
"options": [
"178.5 m³",
"36 m³",
"1,512 m³",
"756 m³"
],
"answer": 3,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 9 × 8 = 36. 36 × 21 = 756 m³."
},
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a density of 0.9 g/cm³ and a volume of 117 cm³. Find its mass.",
"options": [
"117.9 g",
"130 g",
"105.3 g",
"1,053 g"
],
"answer": 2,
"explain": "Mass = density × volume = 0.9 × 117 = 105.3 g."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 28.3 cm, correct to 1 decimal place. What is the upper bound?",
"options": [
"28.25 cm",
"28.35 cm",
"28.4 cm",
"28.34 cm"
],
"answer": 1,
"explain": "Half of 0.1 is 0.05. Upper bound = 28.3 + 0.05 = 28.35 cm."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 26 m² into cm².",
"options": [
"2,600 cm²",
"0.0026 cm²",
"260,000 cm²",
"26,000 cm²"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 26 × 10,000 = 260,000 cm². A common mistake is multiplying by 100 only."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 60 km/h for 1 hour 30 minutes. How far does it travel?",
"options": [
"90 km",
"5,400 km",
"40 km",
"78 km"
],
"answer": 0,
"explain": "Distance = speed × time. 1 hour 30 minutes = 1.5 hours, so 60 × 1.5 = 90 km."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 306.4 mm into cm.",
"options": [
"306.4 cm",
"3.064 cm",
"30.64 cm",
"3,064 cm"
],
"answer": 2,
"explain": "1 cm = 10 mm. Going from mm to cm (a bigger unit) you divide by 10: 306.4 ÷ 10 = 30.64 cm."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 16 cm long and 4 cm wide. What is its perimeter?",
"options": [
"40 cm",
"64 cm",
"36 cm",
"20 cm"
],
"answer": 0,
"explain": "Perimeter is the distance all the way round: 16 + 4 + 16 + 4 = 40 cm."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 2 litres per minute. How long does it take to fill 8 litres?",
"options": [
"4 minutes",
"16 minutes",
"6 minutes",
"0.25 minutes"
],
"answer": 0,
"explain": "Time = amount ÷ rate = 8 ÷ 2 = 4 minutes."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 18 cm, a perpendicular height of 12 cm and a sloping side of 17 cm. Find its area.",
"options": [
"70 cm²",
"108 cm²",
"216 cm²",
"306 cm²"
],
"answer": 2,
"explain": "Area of a parallelogram = base × perpendicular height = 18 × 12 = 216 cm². The sloping side is not needed."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a mass of 951.6 g and a volume of 122 cm³. Find its density.",
"options": [
"78 g/cm³",
"0.128 g/cm³",
"116,095.2 g/cm³",
"7.8 g/cm³"
],
"answer": 3,
"explain": "Density = mass ÷ volume = 951.6 ÷ 122 = 7.8 g/cm³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 30 cm into mm.",
"options": [
"3,000 mm",
"300 mm",
"3 mm",
"30 mm"
],
"answer": 1,
"explain": "1 cm = 10 mm. Going from cm to mm (a smaller unit) you multiply by 10: 30 × 10 = 300 mm."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 9 hours 15 minutes as a decimal number of hours.",
"options": [
"5.55 hours",
"9.25 hours",
"9.75 hours",
"9.15 hours"
],
"answer": 1,
"explain": "15 minutes = 15 ÷ 60 = 0.25 of an hour, so 9 h 15 min = 9.25 hours."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 72 m. One side is 21 m. How long is the other side?",
"options": [
"36 m",
"15 m",
"51 m",
"60 m"
],
"answer": 1,
"explain": "Two sides of 21 make 42. 72 − 42 = 30, which is shared between the other two sides: 30 ÷ 2 = 15 m."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 960 N acts on an area of 0.8 m². Find the pressure.",
"options": [
"1,200 N/m²",
"0.0008 N/m²",
"768 N/m²",
"600 N/m²"
],
"answer": 0,
"explain": "Pressure = force ÷ area = 960 ÷ 0.8 = 1,200 N/m²."
}
],
[
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "A tank holds 10 m³ of water. How many litres is this?",
"options": [
"1,000 litres",
"10,000,000 litres",
"0.01 litres",
"10,000 litres"
],
"answer": 3,
"explain": "1 m³ = 1,000,000 cm³ and 1 litre = 1000 cm³, so 1 m³ = 1000 litres. 10 × 1000 = 10,000 litres."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 5,443 cm into m.",
"options": [
"5.443 m",
"544,300 m",
"544.3 m",
"54.43 m"
],
"answer": 3,
"explain": "1 m = 100 cm. Going from cm to m (a bigger unit) you divide by 100: 5,443 ÷ 100 = 54.43 m."
},
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a mass of 226.5 g and a volume of 151 cm³. Find its density.",
"options": [
"15 g/cm³",
"0.667 g/cm³",
"34,201.5 g/cm³",
"1.5 g/cm³"
],
"answer": 3,
"explain": "Density = mass ÷ volume = 226.5 ÷ 151 = 1.5 g/cm³."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 16 mm. Find its area, to 1 decimal place.",
"options": [
"201.1 mm²",
"804.2 mm²",
"100.5 mm²",
"50.3 mm²"
],
"answer": 0,
"explain": "First halve the diameter: r = 16 ÷ 2 = 8. Area = πr² = π × 8² = 201.1 mm² (1 d.p.)."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 40 km into miles.",
"options": [
"5 miles",
"64 miles",
"25 miles",
"200 miles"
],
"answer": 2,
"explain": "40 ÷ 8 = 5 lots of 8 km. 5 × 5 = 25 miles."
}
],
[
{
"topic": "Area units",
"tier": "F",
"q": "Convert 950 cm² into m².",
"options": [
"9,500,000 m²",
"9.5 m²",
"0.95 m²",
"0.095 m²"
],
"answer": 3,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 950 ÷ 10,000 = 0.095 m²."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 08:20 and arrives at 11:40. How long is this?",
"options": [
"2 h 20 min",
"3 h 10 min",
"4 h 20 min",
"3 h 20 min"
],
"answer": 3,
"explain": "Count on from 08:20: up to the next whole hour, then whole hours, then the minutes to 11:40. The total is 3 h 20 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Density",
"tier": "F",
"q": "A block has a mass of 15.2 g and a volume of 19 cm³. Find its density.",
"options": [
"288.8 g/cm³",
"8 g/cm³",
"1.25 g/cm³",
"0.8 g/cm³"
],
"answer": 3,
"explain": "Density = mass ÷ volume = 15.2 ÷ 19 = 0.8 g/cm³."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 315.3 ml into cl.",
"options": [
"3,153 cl",
"3.153 cl",
"315.3 cl",
"31.53 cl"
],
"answer": 3,
"explain": "1 cl = 10 ml. Going from ml to cl (a bigger unit) you divide by 10: 315.3 ÷ 10 = 31.53 cl."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 3 m and a height of 14 m. Find its volume, to 1 decimal place.",
"options": [
"395.8 m³",
"131.9 m³",
"263.9 m³",
"1,583.4 m³"
],
"answer": 0,
"explain": "Volume of a cylinder = πr²h = π × 3² × 14 = π × 9 × 14 = 395.8 m³ (1 d.p.)."
}
],
[
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 8 litres per minute. How long does it take to fill 48 litres?",
"options": [
"0.167 minutes",
"384 minutes",
"6 minutes",
"40 minutes"
],
"answer": 2,
"explain": "Time = amount ÷ rate = 48 ÷ 8 = 6 minutes."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 3 m and height 6 m. The prism is 17 m long. Find its volume.",
"options": [
"306 m³",
"153 m³",
"76.5 m³",
"9 m³"
],
"answer": 1,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 3 × 6 = 9. 9 × 17 = 153 m³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 647.6 mm into cm.",
"options": [
"6.476 cm",
"6,476 cm",
"647.6 cm",
"64.76 cm"
],
"answer": 3,
"explain": "1 cm = 10 mm. Going from mm to cm (a bigger unit) you divide by 10: 647.6 ÷ 10 = 64.76 cm."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 50 mph for 1 hour 30 minutes. How far does it travel?",
"options": [
"4,500 miles",
"33.3 miles",
"75 miles",
"65 miles"
],
"answer": 2,
"explain": "Distance = speed × time. 1 hour 30 minutes = 1.5 hours, so 50 × 1.5 = 75 miles."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 520 N/m² acts on an area of 1.5 m². Find the force.",
"options": [
"346.67 N",
"521.5 N",
"7,800 N",
"780 N"
],
"answer": 3,
"explain": "Force = pressure × area = 520 × 1.5 = 780 N."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 12 m long and 6 m wide. What is its perimeter?",
"options": [
"30 m",
"18 m",
"72 m",
"36 m"
],
"answer": 3,
"explain": "Perimeter is the distance all the way round: 12 + 6 + 12 + 6 = 36 m."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 67.5 miles at an average speed of 30 mph. How long does the journey take?",
"options": [
"2 h 25 min",
"3 h 15 min",
"2 h 30 min",
"2 h 15 min"
],
"answer": 3,
"explain": "Time = distance ÷ speed = 67.5 ÷ 30 = 2.25 hours. 0.25 hours × 60 = 15 minutes, so the time is 2 h 15 min."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 10 m and a height of 13 m. Find its volume, to 1 decimal place.",
"options": [
"816.8 m³",
"408.4 m³",
"16,336.3 m³",
"4,084.1 m³"
],
"answer": 3,
"explain": "Volume of a cylinder = πr²h = π × 10² × 13 = π × 100 × 13 = 4,084.1 m³ (1 d.p.)."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 17 cm. Find its circumference, to 1 decimal place.",
"options": [
"213.6 cm",
"106.8 cm",
"907.9 cm",
"53.4 cm"
],
"answer": 1,
"explain": "Circumference = 2πr (or πd) = 2 × π × 17 = 106.8 cm (1 d.p.)."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 10 litres per minute. How long does it take to fill 260 litres?",
"options": [
"26 minutes",
"250 minutes",
"0.038 minutes",
"2,600 minutes"
],
"answer": 0,
"explain": "Time = amount ÷ rate = 260 ÷ 10 = 26 minutes."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 45 km/h for 2 hours 30 minutes. How far does it travel?",
"options": [
"112.5 km",
"103.5 km",
"18 km",
"6,750 km"
],
"answer": 0,
"explain": "Distance = speed × time. 2 hours 30 minutes = 2.5 hours, so 45 × 2.5 = 112.5 km."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of P from X is 348°. What is the bearing of X from P?",
"options": [
"012°",
"348°",
"168°",
"192°"
],
"answer": 2,
"explain": "A back bearing is 180° different. 348° is more than 180°, so subtract 180°: 168°."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 6,900 cm² into m².",
"options": [
"69 m²",
"6.9 m²",
"0.69 m²",
"69,000,000 m²"
],
"answer": 2,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 6,900 ÷ 10,000 = 0.69 m²."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 4,372 kg into tonnes.",
"options": [
"43.72 tonnes",
"4,372,000 tonnes",
"0.4372 tonnes",
"4.372 tonnes"
],
"answer": 3,
"explain": "1 tonne = 1,000 kg. Going from kg to tonnes (a bigger unit) you divide by 1,000: 4,372 ÷ 1,000 = 4.372 tonnes."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 7,700 g, correct to the nearest 100. What is the lower bound?",
"options": [
"7,690 g",
"7,750 g",
"7,600 g",
"7,650 g"
],
"answer": 3,
"explain": "Half of 100 is 50. Lower bound = 7,700 − 50 = 7,650 g."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 20 cm long and 5 cm wide. What is its perimeter?",
"options": [
"50 cm",
"25 cm",
"100 cm",
"45 cm"
],
"answer": 0,
"explain": "Perimeter is the distance all the way round: 20 + 5 + 20 + 5 = 50 cm."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 15:50 and finishes at 18:30. How long is this?",
"options": [
"2 h 40 min",
"1 h 40 min",
"3 h 40 min",
"2 h 30 min"
],
"answer": 0,
"explain": "Count on from 15:50: up to the next whole hour, then whole hours, then the minutes to 18:30. The total is 2 h 40 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 125 miles at an average speed of 50 mph. How long does the journey take?",
"options": [
"2 h 45 min",
"2 h 30 min",
"3 h 30 min",
"2 h 50 min"
],
"answer": 1,
"explain": "Time = distance ÷ speed = 125 ÷ 50 = 2.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 2 h 30 min."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 8.8 m² into cm².",
"options": [
"0.00088 cm²",
"880 cm²",
"88,000 cm²",
"8,800 cm²"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 8.8 × 10,000 = 88,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 360 km/h into m/s.",
"options": [
"6,000 m/s",
"6 m/s",
"100 m/s",
"1,296 m/s"
],
"answer": 2,
"explain": "360 km/h = 360,000 m in 3600 seconds. 360,000 ÷ 3600 = 100 m/s. (Shortcut: ÷ 3.6.)"
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 17 m. Find its area, to 1 decimal place.",
"options": [
"106.8 m²",
"2,852.3 m²",
"3,631.7 m²",
"907.9 m²"
],
"answer": 3,
"explain": "Area = πr² = π × 17² = π × 289 = 907.9 m² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 500,000. Two places are 60 km apart in real life. How far apart are they on the map?",
"options": [
"120 cm",
"1.2 cm",
"1,200 cm",
"12 cm"
],
"answer": 3,
"explain": "60 km = 6,000,000 cm. Map distance = 6,000,000 ÷ 500,000 = 12 cm."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 18 kg into pounds.",
"options": [
"396 pounds",
"20.2 pounds",
"39.6 pounds",
"8.2 pounds"
],
"answer": 2,
"explain": "Multiply by 2.2: 18 × 2.2 = 39.6 pounds."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 125 miles in 2 hours 30 minutes. What is the average speed?",
"options": [
"312.5 mph",
"50 mph",
"0.8 mph",
"54.3 mph"
],
"answer": 1,
"explain": "Speed = distance ÷ time. Write the time in hours: 2 hours 30 minutes = 2.5 hours. 125 ÷ 2.5 = 50 mph."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 5 times those of the smaller one. The smaller shape has an area of 7 cm². Find the area of the larger shape.",
"options": [
"175 cm²",
"875 cm²",
"35 cm²",
"70 cm²"
],
"answer": 0,
"explain": "Length scale factor 5 → area scale factor 5² = 25. 7 × 25 = 175 cm²."
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 470 m, correct to the nearest 10. What is the lower bound?",
"options": [
"460 m",
"475 m",
"465 m",
"469 m"
],
"answer": 2,
"explain": "Half of 10 is 5. Lower bound = 470 − 5 = 465 m."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a density of 0.5 g/cm³ and a volume of 173 cm³. Find its mass.",
"options": [
"865 g",
"86.5 g",
"346 g",
"173.5 g"
],
"answer": 1,
"explain": "Mass = density × volume = 0.5 × 173 = 86.5 g."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 13:20 and arrives at 15:30. How long is this?",
"options": [
"2 h",
"2 h 10 min",
"1 h 10 min",
"3 h 10 min"
],
"answer": 1,
"explain": "Count on from 13:20: up to the next whole hour, then whole hours, then the minutes to 15:30. The total is 2 h 10 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 13 cm, a perpendicular height of 12 cm and a sloping side of 16 cm. Find its area.",
"options": [
"78 cm²",
"156 cm²",
"208 cm²",
"58 cm²"
],
"answer": 1,
"explain": "Area of a parallelogram = base × perpendicular height = 13 × 12 = 156 cm². The sloping side is not needed."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 25 m long and 15 m wide. What is its perimeter?",
"options": [
"375 m",
"80 m",
"40 m",
"65 m"
],
"answer": 1,
"explain": "Perimeter is the distance all the way round: 25 + 15 + 25 + 15 = 80 m."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A block has a density of 1.5 g/cm³ and a volume of 89 cm³. Find its mass.",
"options": [
"90.5 g",
"1,335 g",
"133.5 g",
"59.33 g"
],
"answer": 2,
"explain": "Mass = density × volume = 1.5 × 89 = 133.5 g."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 13 m and a perpendicular height of 20 m. Find its area.",
"options": [
"130 m²",
"33 m²",
"260 m²",
"65 m²"
],
"answer": 0,
"explain": "Area of a triangle = ½ × base × height = ½ × 13 × 20 = 130 m²."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 06:15 and arrives at 08:10. How long is this?",
"options": [
"2 h 55 min",
"55 min",
"1 h 55 min",
"1 h 45 min"
],
"answer": 2,
"explain": "Count on from 06:15: up to the next whole hour, then whole hours, then the minutes to 08:10. The total is 1 h 55 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 100,000. Two places are 12 km apart in real life. How far apart are they on the map?",
"options": [
"120 cm",
"1,200 cm",
"1.2 cm",
"12 cm"
],
"answer": 3,
"explain": "12 km = 1,200,000 cm. Map distance = 1,200,000 ÷ 100,000 = 12 cm."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 7 cm long and 6 cm wide. What is its perimeter?",
"options": [
"13 cm",
"26 cm",
"20 cm",
"42 cm"
],
"answer": 1,
"explain": "Perimeter is the distance all the way round: 7 + 6 + 7 + 6 = 26 cm."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 9 m and 11 m, and a perpendicular height of 3 m. Find its area.",
"options": [
"3 m²",
"148.5 m²",
"60 m²",
"30 m²"
],
"answer": 3,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (9 + 11) × 3 = ½ × 20 × 3 = 30 m²."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 987.4 ml into cl.",
"options": [
"98.74 cl",
"9,874 cl",
"987.4 cl",
"9.874 cl"
],
"answer": 0,
"explain": "1 cl = 10 ml. Going from ml to cl (a bigger unit) you divide by 10: 987.4 ÷ 10 = 98.74 cl."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 40 mph for 3 hours 30 minutes. How far does it travel?",
"options": [
"8,400 miles",
"132 miles",
"140 miles",
"11.4 miles"
],
"answer": 2,
"explain": "Distance = speed × time. 3 hours 30 minutes = 3.5 hours, so 40 × 3.5 = 140 miles."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 6.6 hours in hours and minutes.",
"options": [
"6 h 6 min",
"6 h 60 min",
"6 h 36 min",
"6 h 24 min"
],
"answer": 2,
"explain": "0.6 of an hour = 0.6 × 60 = 36 minutes, so 6.6 hours = 6 h 36 min. It is not 6 h 60 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Density",
"tier": "F",
"q": "A bar has a mass of 321 g and a volume of 107 cm³. Find its density.",
"options": [
"34,347 g/cm³",
"30 g/cm³",
"0.333 g/cm³",
"3 g/cm³"
],
"answer": 3,
"explain": "Density = mass ÷ volume = 321 ÷ 107 = 3 g/cm³."
}
],
[
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 12 cm by 12 cm by 10 cm. Find its total surface area.",
"options": [
"864 cm²",
"768 cm²",
"1,440 cm²",
"384 cm²"
],
"answer": 1,
"explain": "A cuboid has 3 pairs of faces: 2 × (12×12) + 2 × (12×10) + 2 × (12×10) = 2 × (144 + 120 + 120) = 768 cm²."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 18.3 kg, correct to 1 decimal place. What is the lower bound?",
"options": [
"18.29 kg",
"18.25 kg",
"18.2 kg",
"18.35 kg"
],
"answer": 1,
"explain": "Half of 0.1 is 0.05. Lower bound = 18.3 − 0.05 = 18.25 kg."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 758.8 ml into cl.",
"options": [
"758.8 cl",
"7,588 cl",
"7.588 cl",
"75.88 cl"
],
"answer": 3,
"explain": "1 cl = 10 ml. Going from ml to cl (a bigger unit) you divide by 10: 758.8 ÷ 10 = 75.88 cl."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 5.1 m² into cm².",
"options": [
"51,000 cm²",
"5,100 cm²",
"0.00051 cm²",
"510 cm²"
],
"answer": 0,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 5.1 × 10,000 = 51,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 11:25 and finishes at 16:15. How long is this?",
"options": [
"3 h 50 min",
"4 h 50 min",
"4 h 40 min",
"5 h 50 min"
],
"answer": 1,
"explain": "Count on from 11:25: up to the next whole hour, then whole hours, then the minutes to 16:15. The total is 4 h 50 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
}
],
[
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 4 cm by 12 cm by 2 cm. Find its total surface area.",
"options": [
"288 cm²",
"80 cm²",
"96 cm²",
"160 cm²"
],
"answer": 3,
"explain": "A cuboid has 3 pairs of faces: 2 × (4×12) + 2 × (4×2) + 2 × (12×2) = 2 × (48 + 8 + 24) = 160 cm²."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 44 litre tank in 11 minutes. What is the rate of flow?",
"options": [
"40 litres/min",
"0.25 litres/min",
"4 litres/min",
"484 litres/min"
],
"answer": 2,
"explain": "Rate = amount ÷ time = 44 ÷ 11 = 4 litres per minute."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 900 cm² into m².",
"options": [
"0.09 m²",
"9 m²",
"0.9 m²",
"9,000,000 m²"
],
"answer": 0,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 900 ÷ 10,000 = 0.09 m²."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a density of 3 g/cm³ and a volume of 109 cm³. Find its mass.",
"options": [
"3,270 g",
"327 g",
"112 g",
"36.33 g"
],
"answer": 1,
"explain": "Mass = density × volume = 3 × 109 = 327 g."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 6 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"24 cm",
"26 cm",
"25.6 cm",
"22 cm"
],
"answer": 1,
"explain": "Upper bound of the side = 6 + 0.5 = 6.5 cm. Upper bound perimeter = 4 × 6.5 = 26 cm."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A bar has a density of 0.8 g/cm³ and a mass of 23.2 g. Find its volume.",
"options": [
"290 cm³",
"29 cm³",
"18.56 cm³",
"0.0345 cm³"
],
"answer": 1,
"explain": "Volume = mass ÷ density = 23.2 ÷ 0.8 = 29 cm³."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 700 cm² into m².",
"options": [
"7 m²",
"0.7 m²",
"0.07 m²",
"7,000,000 m²"
],
"answer": 2,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 700 ÷ 10,000 = 0.07 m²."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 8 hours 21 minutes as a decimal number of hours.",
"options": [
"5.01 hours",
"8.21 hours",
"8.35 hours",
"8.65 hours"
],
"answer": 2,
"explain": "21 minutes = 21 ÷ 60 = 0.35 of an hour, so 8 h 21 min = 8.35 hours."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 28.6 pounds into kg.",
"options": [
"13 kg",
"1.3 kg",
"26.4 kg",
"62.92 kg"
],
"answer": 0,
"explain": "Divide by 2.2: 28.6 ÷ 2.2 = 13 kg."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 495 litre tank in 33 minutes. What is the rate of flow?",
"options": [
"150 litres/min",
"15 litres/min",
"16,335 litres/min",
"0.067 litres/min"
],
"answer": 1,
"explain": "Rate = amount ÷ time = 495 ÷ 33 = 15 litres per minute."
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 6.8 m into cm.",
"options": [
"680 cm",
"0.068 cm",
"6,800 cm",
"68 cm"
],
"answer": 0,
"explain": "1 m = 100 cm. Going from m to cm (a smaller unit) you multiply by 100: 6.8 × 100 = 680 cm."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 12:00 and finishes at 18:30. How long is this?",
"options": [
"6 h 30 min",
"5 h 30 min",
"7 h 30 min",
"6 h 20 min"
],
"answer": 0,
"explain": "Count on from 12:00: up to the next whole hour, then whole hours, then the minutes to 18:30. The total is 6 h 30 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 72 m. One side is 20 m. How long is the other side?",
"options": [
"64 m",
"16 m",
"52 m",
"36 m"
],
"answer": 1,
"explain": "Two sides of 20 make 40. 72 − 40 = 32, which is shared between the other two sides: 32 ÷ 2 = 16 m."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 3,671 cm³?",
"options": [
"3.671 litres",
"3,671,000 litres",
"36.71 litres",
"367.1 litres"
],
"answer": 0,
"explain": "1 litre = 1000 cm³, so divide by 1000: 3,671 ÷ 1000 = 3.671 litres."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 12 cm and height 10 cm. The prism is 14 cm long. Find its volume.",
"options": [
"1,680 cm³",
"840 cm³",
"154 cm³",
"60 cm³"
],
"answer": 1,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 12 × 10 = 60. 60 × 14 = 840 cm³."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a density of 7.8 g/cm³ and a mass of 1,123.2 g. Find its volume.",
"options": [
"1,440 cm³",
"0.0069 cm³",
"8,760.96 cm³",
"144 cm³"
],
"answer": 3,
"explain": "Volume = mass ÷ density = 1,123.2 ÷ 7.8 = 144 cm³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 26 km into m.",
"options": [
"26,000 m",
"2,600 m",
"260,000 m",
"0.026 m"
],
"answer": 0,
"explain": "1 km = 1,000 m. Going from km to m (a smaller unit) you multiply by 1,000: 26 × 1,000 = 26,000 m."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 12 cm. Find its circumference, to 1 decimal place.",
"options": [
"452.4 cm",
"37.7 cm",
"150.8 cm",
"75.4 cm"
],
"answer": 3,
"explain": "Circumference = 2πr (or πd) = 2 × π × 12 = 75.4 cm (1 d.p.)."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 0.4 litres?",
"options": [
"0.0004 cm³",
"40 cm³",
"400,000 cm³",
"400 cm³"
],
"answer": 3,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 0.4 × 1000 = 400 cm³."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 100,000. Two places are 8 km apart in real life. How far apart are they on the map?",
"options": [
"8 cm",
"80 cm",
"800 cm",
"0.8 cm"
],
"answer": 0,
"explain": "8 km = 800,000 cm. Map distance = 800,000 ÷ 100,000 = 8 cm."
}
],
[
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 10 m by 7 m by 8 m. Find its volume.",
"options": [
"206 m³",
"70 m³",
"412 m³",
"560 m³"
],
"answer": 3,
"explain": "Volume of a cuboid = length × width × height = 10 × 7 × 8 = 560 m³."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 6 m and a perpendicular height of 20 m. Find its area.",
"options": [
"60 m²",
"120 m²",
"26 m²",
"30 m²"
],
"answer": 0,
"explain": "Area of a triangle = ½ × base × height = ½ × 6 × 20 = 60 m²."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a density of 0.8 g/cm³ and a volume of 132 cm³. Find its mass.",
"options": [
"1,056 g",
"165 g",
"132.8 g",
"105.6 g"
],
"answer": 3,
"explain": "Mass = density × volume = 0.8 × 132 = 105.6 g."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 100,000. Two towns are 6.5 cm apart on the map. How far apart are they in real life?",
"options": [
"65 km",
"6.5 km",
"0.65 km",
"650 km"
],
"answer": 1,
"explain": "Real distance = 6.5 × 100,000 = 650,000 cm. Divide by 100 for metres (6,500 m) and by 1000 for km: 6.5 km."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 14:10 and arrives at 20:25. How long is this?",
"options": [
"7 h 15 min",
"5 h 15 min",
"6 h 15 min",
"6 h 5 min"
],
"answer": 2,
"explain": "Count on from 14:10: up to the next whole hour, then whole hours, then the minutes to 20:25. The total is 6 h 15 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 7 m, a perpendicular height of 15 m and a sloping side of 16 m. Find its area.",
"options": [
"52.5 m²",
"105 m²",
"112 m²",
"46 m²"
],
"answer": 1,
"explain": "Area of a parallelogram = base × perpendicular height = 7 × 15 = 105 m². The sloping side is not needed."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 3.6 hours in hours and minutes.",
"options": [
"3 h 24 min",
"3 h 60 min",
"3 h 36 min",
"3 h 6 min"
],
"answer": 2,
"explain": "0.6 of an hour = 0.6 × 60 = 36 minutes, so 3.6 hours = 3 h 36 min. It is not 3 h 60 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 8.4 m² into cm².",
"options": [
"840 cm²",
"84,000 cm²",
"8,400 cm²",
"0.00084 cm²"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 8.4 × 10,000 = 84,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 135 miles in 2 hours 15 minutes. What is the average speed?",
"options": [
"60 mph",
"1 mph",
"303.8 mph",
"62.8 mph"
],
"answer": 0,
"explain": "Speed = distance ÷ time. Write the time in hours: 2 hours 15 minutes = 2.25 hours. 135 ÷ 2.25 = 60 mph."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 20 m into cm.",
"options": [
"0.2 cm",
"20,000 cm",
"200 cm",
"2,000 cm"
],
"answer": 3,
"explain": "1 m = 100 cm. Going from m to cm (a smaller unit) you multiply by 100: 20 × 100 = 2,000 cm."
}
],
[
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 5.84 cl into ml.",
"options": [
"0.584 ml",
"5.84 ml",
"584 ml",
"58.4 ml"
],
"answer": 3,
"explain": "1 cl = 10 ml. Going from cl to ml (a smaller unit) you multiply by 10: 5.84 × 10 = 58.4 ml."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 27.5 miles in 30 minutes. What is the average speed?",
"options": [
"13.8 mph",
"91.7 mph",
"0.9 mph",
"55 mph"
],
"answer": 3,
"explain": "Speed = distance ÷ time. Write the time in hours: 30 minutes = 0.5 hours. 27.5 ÷ 0.5 = 55 mph."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 18 cm long and 7 cm wide. What is its perimeter?",
"options": [
"43 cm",
"50 cm",
"25 cm",
"126 cm"
],
"answer": 1,
"explain": "Perimeter is the distance all the way round: 18 + 7 + 18 + 7 = 50 cm."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 14 m. Find its area, to 1 decimal place.",
"options": [
"2,463 m²",
"615.8 m²",
"1,934.4 m²",
"88 m²"
],
"answer": 1,
"explain": "Area = πr² = π × 14² = π × 196 = 615.8 m² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 1,900 cm² into m².",
"options": [
"1.9 m²",
"0.19 m²",
"19,000,000 m²",
"19 m²"
],
"answer": 1,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 1,900 ÷ 10,000 = 0.19 m²."
}
],
[
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 9 m by 10 m by 3 m. Find its volume.",
"options": [
"147 m³",
"90 m³",
"270 m³",
"294 m³"
],
"answer": 2,
"explain": "Volume of a cuboid = length × width × height = 9 × 10 × 3 = 270 m³."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 338.9 cl into litres.",
"options": [
"33.89 litres",
"33,890 litres",
"0.3389 litres",
"3.389 litres"
],
"answer": 3,
"explain": "1 litre = 100 cl. Going from cl to litres (a bigger unit) you divide by 100: 338.9 ÷ 100 = 3.389 litres."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 5 cm. Find its area, to 1 decimal place.",
"options": [
"314.2 cm²",
"78.5 cm²",
"246.7 cm²",
"31.4 cm²"
],
"answer": 1,
"explain": "Area = πr² = π × 5² = π × 25 = 78.5 cm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 50 km at an average speed of 20 km/h. How long does the journey take?",
"options": [
"2 h 30 min",
"2 h 45 min",
"3 h 30 min",
"2 h 50 min"
],
"answer": 0,
"explain": "Time = distance ÷ speed = 50 ÷ 20 = 2.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 2 h 30 min."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 5 cm by 12 cm by 9 cm. Find its total surface area.",
"options": [
"426 cm²",
"360 cm²",
"213 cm²",
"540 cm²"
],
"answer": 0,
"explain": "A cuboid has 3 pairs of faces: 2 × (5×12) + 2 × (5×9) + 2 × (12×9) = 2 × (60 + 45 + 108) = 426 cm²."
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 5.3 cm into mm.",
"options": [
"53 mm",
"5.3 mm",
"530 mm",
"0.53 mm"
],
"answer": 0,
"explain": "1 cm = 10 mm. Going from cm to mm (a smaller unit) you multiply by 10: 5.3 × 10 = 53 mm."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 30 litre tank in 3 minutes. What is the rate of flow?",
"options": [
"0.1 litres/min",
"90 litres/min",
"100 litres/min",
"10 litres/min"
],
"answer": 3,
"explain": "Rate = amount ÷ time = 30 ÷ 3 = 10 litres per minute."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 500,000. Two places are 65 km apart in real life. How far apart are they on the map?",
"options": [
"13 cm",
"1,300 cm",
"130 cm",
"1.3 cm"
],
"answer": 0,
"explain": "65 km = 6,500,000 cm. Map distance = 6,500,000 ÷ 500,000 = 13 cm."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 9 m and a height of 16 m. Find its volume, to 1 decimal place.",
"options": [
"4,071.5 m³",
"16,286 m³",
"904.8 m³",
"452.4 m³"
],
"answer": 0,
"explain": "Volume of a cylinder = πr²h = π × 9² × 16 = π × 81 × 16 = 4,071.5 m³ (1 d.p.)."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 81 cm, correct to the nearest whole number. What is the upper bound?",
"options": [
"80.5 cm",
"81.4 cm",
"81.5 cm",
"82 cm"
],
"answer": 2,
"explain": "Half of 1 is 0.5. Upper bound = 81 + 0.5 = 81.5 cm."
}
],
[
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 15 m by 12 m by 7 m. Find its volume.",
"options": [
"180 m³",
"369 m³",
"1,260 m³",
"738 m³"
],
"answer": 2,
"explain": "Volume of a cuboid = length × width × height = 15 × 12 × 7 = 1,260 m³."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 70 mph for 1 hour 15 minutes. How far does it travel?",
"options": [
"87.5 miles",
"5,250 miles",
"56 miles",
"80.5 miles"
],
"answer": 0,
"explain": "Distance = speed × time. 1 hour 15 minutes = 1.25 hours, so 70 × 1.25 = 87.5 miles."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of P from Q is 279°. What is the bearing of Q from P?",
"options": [
"279°",
"099°",
"261°",
"081°"
],
"answer": 1,
"explain": "A back bearing is 180° different. 279° is more than 180°, so subtract 180°: 099°."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 8,800 cm² into m².",
"options": [
"0.88 m²",
"8.8 m²",
"88,000,000 m²",
"88 m²"
],
"answer": 0,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 8,800 ÷ 10,000 = 0.88 m²."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 6 mm. Find its area, to 1 decimal place.",
"options": [
"113.1 mm²",
"28.3 mm²",
"37.7 mm²",
"18.8 mm²"
],
"answer": 1,
"explain": "First halve the diameter: r = 6 ÷ 2 = 3. Area = πr² = π × 3² = 28.3 mm² (1 d.p.)."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 200,000. Two towns are 14 cm apart on the map. How far apart are they in real life?",
"options": [
"28 km",
"280 km",
"2,800 km",
"2.8 km"
],
"answer": 0,
"explain": "Real distance = 14 × 200,000 = 2,800,000 cm. Divide by 100 for metres (28,000 m) and by 1000 for km: 28 km."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 990 m, correct to the nearest 10. What is the lower bound?",
"options": [
"995 m",
"989 m",
"985 m",
"980 m"
],
"answer": 2,
"explain": "Half of 10 is 5. Lower bound = 990 − 5 = 985 m."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 37.5 km in 1 hour 30 minutes. What is the average speed?",
"options": [
"25 km/h",
"56.2 km/h",
"0.4 km/h",
"28.8 km/h"
],
"answer": 0,
"explain": "Speed = distance ÷ time. Write the time in hours: 1 hour 30 minutes = 1.5 hours. 37.5 ÷ 1.5 = 25 km/h."
},
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a mass of 139.2 g and a volume of 116 cm³. Find its density.",
"options": [
"0.833 g/cm³",
"12 g/cm³",
"1.2 g/cm³",
"16,147.2 g/cm³"
],
"answer": 2,
"explain": "Density = mass ÷ volume = 139.2 ÷ 116 = 1.2 g/cm³."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 1,600 N/m² acts on an area of 2 m². Find the force.",
"options": [
"32,000 N",
"800 N",
"3,200 N",
"1,602 N"
],
"answer": 2,
"explain": "Force = pressure × area = 1,600 × 2 = 3,200 N."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 06:05 and arrives at 07:25. How long is this?",
"options": [
"1 h 20 min",
"1 h 10 min",
"20 min",
"2 h 20 min"
],
"answer": 0,
"explain": "Count on from 06:05: up to the next whole hour, then whole hours, then the minutes to 07:25. The total is 1 h 20 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 873.4 cm into m.",
"options": [
"87.34 m",
"8.734 m",
"87,340 m",
"0.8734 m"
],
"answer": 1,
"explain": "1 m = 100 cm. Going from cm to m (a bigger unit) you divide by 100: 873.4 ÷ 100 = 8.734 m."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 3.9 hours in hours and minutes.",
"options": [
"3 h 9 min",
"3 h 90 min",
"3 h 54 min",
"3 h 6 min"
],
"answer": 2,
"explain": "0.9 of an hour = 0.9 × 60 = 54 minutes, so 3.9 hours = 3 h 54 min. It is not 3 h 90 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 32 km into miles.",
"options": [
"4 miles",
"51.2 miles",
"160 miles",
"20 miles"
],
"answer": 3,
"explain": "32 ÷ 8 = 4 lots of 8 km. 4 × 5 = 20 miles."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 5 times those of the smaller one. The smaller solid has a volume of 22 cm³. Find the volume of the larger solid.",
"options": [
"550 cm³",
"330 cm³",
"110 cm³",
"2,750 cm³"
],
"answer": 3,
"explain": "Length scale factor 5 → volume scale factor 5³ = 125. 22 × 125 = 2,750 cm³."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A stone has a mass of 106.2 g and a volume of 118 cm³. Find its density.",
"options": [
"0.9 g/cm³",
"12,531.6 g/cm³",
"1.111 g/cm³",
"9 g/cm³"
],
"answer": 0,
"explain": "Density = mass ÷ volume = 106.2 ÷ 118 = 0.9 g/cm³."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 75 miles into kilometres.",
"options": [
"600 km",
"120 km",
"12 km",
"46.875 km"
],
"answer": 1,
"explain": "75 ÷ 5 = 15 lots of 5 miles. 15 × 8 = 120 km."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 4 hours 45 minutes as a decimal number of hours.",
"options": [
"4.25 hours",
"2.85 hours",
"4.45 hours",
"4.75 hours"
],
"answer": 3,
"explain": "45 minutes = 45 ÷ 60 = 0.75 of an hour, so 4 h 45 min = 4.75 hours."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 258.6 mm into cm.",
"options": [
"258.6 cm",
"2,586 cm",
"2.586 cm",
"25.86 cm"
],
"answer": 3,
"explain": "1 cm = 10 mm. Going from mm to cm (a bigger unit) you divide by 10: 258.6 ÷ 10 = 25.86 cm."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 1,060 N/m² acts on an area of 0.25 m². Find the force.",
"options": [
"2,650 N",
"4,240 N",
"1,060.25 N",
"265 N"
],
"answer": 3,
"explain": "Force = pressure × area = 1,060 × 0.25 = 265 N."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 60 km/h for 3 hours. How far does it travel?",
"options": [
"10,800 km",
"240 km",
"20 km",
"180 km"
],
"answer": 3,
"explain": "Distance = speed × time. 60 × 3 = 180 km."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 12 m, a perpendicular height of 6 m and a sloping side of 11 m. Find its area.",
"options": [
"36 m²",
"132 m²",
"72 m²",
"46 m²"
],
"answer": 2,
"explain": "Area of a parallelogram = base × perpendicular height = 12 × 6 = 72 m². The sloping side is not needed."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 360 m, correct to the nearest 10. What is the lower bound?",
"options": [
"359 m",
"365 m",
"355 m",
"350 m"
],
"answer": 2,
"explain": "Half of 10 is 5. Lower bound = 360 − 5 = 355 m."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 24 m. Find its area, to 1 decimal place.",
"options": [
"150.8 m²",
"1,809.6 m²",
"75.4 m²",
"452.4 m²"
],
"answer": 3,
"explain": "First halve the diameter: r = 24 ÷ 2 = 12. Area = πr² = π × 12² = 452.4 m² (1 d.p.)."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 12:45 and ends at 18:20. How long is this?",
"options": [
"4 h 35 min",
"5 h 25 min",
"6 h 35 min",
"5 h 35 min"
],
"answer": 3,
"explain": "Count on from 12:45: up to the next whole hour, then whole hours, then the minutes to 18:20. The total is 5 h 35 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 44 pounds into kg.",
"options": [
"20 kg",
"96.8 kg",
"41.8 kg",
"2 kg"
],
"answer": 0,
"explain": "Divide by 2.2: 44 ÷ 2.2 = 20 kg."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 50 mph for 2 hours 45 minutes. How far does it travel?",
"options": [
"8,250 miles",
"137.5 miles",
"122.5 miles",
"18.2 miles"
],
"answer": 1,
"explain": "Distance = speed × time. 2 hours 45 minutes = 2.75 hours, so 50 × 2.75 = 137.5 miles."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 2 m³ into cm³.",
"options": [
"200 cm³",
"2,000 cm³",
"2,000,000 cm³",
"20,000 cm³"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 2 × 1,000,000 = 2,000,000 cm³."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 2.5 m/s into km/h.",
"options": [
"150 km/h",
"0.69 km/h",
"2,500 km/h",
"9 km/h"
],
"answer": 3,
"explain": "In 1 hour there are 3600 seconds, so 2.5 m/s = 2.5 × 3600 = 9,000 m per hour = 9 km/h. (Shortcut: × 3.6.)"
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 780 N/m² acts on an area of 2 m². Find the force.",
"options": [
"390 N",
"15,600 N",
"1,560 N",
"782 N"
],
"answer": 2,
"explain": "Force = pressure × area = 780 × 2 = 1,560 N."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 07:30 and arrives at 10:35. How long is this?",
"options": [
"4 h 5 min",
"2 h 55 min",
"2 h 5 min",
"3 h 5 min"
],
"answer": 3,
"explain": "Count on from 07:30: up to the next whole hour, then whole hours, then the minutes to 10:35. The total is 3 h 5 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 7,256 ml into litres.",
"options": [
"0.7256 litres",
"7,256,000 litres",
"72.56 litres",
"7.256 litres"
],
"answer": 3,
"explain": "1 litre = 1,000 ml. Going from ml to litres (a bigger unit) you divide by 1,000: 7,256 ÷ 1,000 = 7.256 litres."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 5 times those of the smaller one. The smaller shape has an area of 31 cm². Find the area of the larger shape.",
"options": [
"310 cm²",
"3,875 cm²",
"155 cm²",
"775 cm²"
],
"answer": 3,
"explain": "Length scale factor 5 → area scale factor 5² = 25. 31 × 25 = 775 cm²."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 74 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"5,476 cm²",
"5,550.25 cm²",
"5,402.25 cm²",
"5,475.5 cm²"
],
"answer": 2,
"explain": "Lower bound of the side = 74 − 0.5 = 73.5 cm. Lower bound area = 73.5² = 5,402.25 cm²."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 42 m/s into km/h.",
"options": [
"11.67 km/h",
"151.2 km/h",
"2,520 km/h",
"42,000 km/h"
],
"answer": 1,
"explain": "In 1 hour there are 3600 seconds, so 42 m/s = 42 × 3600 = 151,200 m per hour = 151.2 km/h. (Shortcut: × 3.6.)"
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 250,000. Two towns are 12 cm apart on the map. How far apart are they in real life?",
"options": [
"3 km",
"30 km",
"3,000 km",
"300 km"
],
"answer": 1,
"explain": "Real distance = 12 × 250,000 = 3,000,000 cm. Divide by 100 for metres (30,000 m) and by 1000 for km: 30 km."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 13 cm by 6 cm by 2 cm. Find its total surface area.",
"options": [
"116 cm²",
"156 cm²",
"468 cm²",
"232 cm²"
],
"answer": 3,
"explain": "A cuboid has 3 pairs of faces: 2 × (13×6) + 2 × (13×2) + 2 × (6×2) = 2 × (78 + 26 + 12) = 232 cm²."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 25 miles in 30 minutes. What is the average speed?",
"options": [
"83.3 mph",
"50 mph",
"0.8 mph",
"12.5 mph"
],
"answer": 1,
"explain": "Speed = distance ÷ time. Write the time in hours: 30 minutes = 0.5 hours. 25 ÷ 0.5 = 50 mph."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 2 hours 24 minutes as a decimal number of hours.",
"options": [
"2.4 hours",
"2.24 hours",
"2.6 hours",
"1.44 hours"
],
"answer": 0,
"explain": "24 minutes = 24 ÷ 60 = 0.4 of an hour, so 2 h 24 min = 2.4 hours."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 56 km into miles.",
"options": [
"280 miles",
"7 miles",
"35 miles",
"89.6 miles"
],
"answer": 2,
"explain": "56 ÷ 8 = 7 lots of 8 km. 7 × 5 = 35 miles."
}
],
[
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 9 m and a height of 14 m. Find its volume, to 1 decimal place.",
"options": [
"395.8 m³",
"14,250.3 m³",
"3,562.6 m³",
"791.7 m³"
],
"answer": 2,
"explain": "Volume of a cylinder = πr²h = π × 9² × 14 = π × 81 × 14 = 3,562.6 m³ (1 d.p.)."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 12 litres per minute. How long does it take to fill 84 litres?",
"options": [
"7 minutes",
"72 minutes",
"0.143 minutes",
"1,008 minutes"
],
"answer": 0,
"explain": "Time = amount ÷ rate = 84 ÷ 12 = 7 minutes."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 gallon ≈ 4.5 litres. Convert 5 gallons into litres.",
"options": [
"9.5 litres",
"1.11 litres",
"22.5 litres",
"225 litres"
],
"answer": 2,
"explain": "Multiply by 4.5: 5 × 4.5 = 22.5 litres."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 70 km in 2 hours. What is the average speed?",
"options": [
"35 km/h",
"23.3 km/h",
"0.6 km/h",
"140 km/h"
],
"answer": 0,
"explain": "Speed = distance ÷ time. 70 ÷ 2 = 35 km/h."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 189 km/h into m/s.",
"options": [
"52.5 m/s",
"3.15 m/s",
"3,150 m/s",
"680.4 m/s"
],
"answer": 0,
"explain": "189 km/h = 189,000 m in 3600 seconds. 189,000 ÷ 3600 = 52.5 m/s. (Shortcut: ÷ 3.6.)"
}
],
[
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 1.4 tonnes into kg.",
"options": [
"0.0014 kg",
"1,400 kg",
"140 kg",
"14,000 kg"
],
"answer": 1,
"explain": "1 tonne = 1,000 kg. Going from tonnes to kg (a smaller unit) you multiply by 1,000: 1.4 × 1,000 = 1,400 kg."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 11:05 and ends at 14:25. How long is this?",
"options": [
"3 h 20 min",
"4 h 20 min",
"3 h 10 min",
"2 h 20 min"
],
"answer": 0,
"explain": "Count on from 11:05: up to the next whole hour, then whole hours, then the minutes to 14:25. The total is 3 h 20 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 14 cm and a perpendicular height of 20 cm. Find its area.",
"options": [
"140 cm²",
"280 cm²",
"34 cm²",
"70 cm²"
],
"answer": 0,
"explain": "Area of a triangle = ½ × base × height = ½ × 14 × 20 = 140 cm²."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 110 miles into kilometres.",
"options": [
"17.6 km",
"176 km",
"68.75 km",
"880 km"
],
"answer": 1,
"explain": "110 ÷ 5 = 22 lots of 5 miles. 22 × 8 = 176 km."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 28 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"812.25 cm²",
"784 cm²",
"783.5 cm²",
"756.25 cm²"
],
"answer": 3,
"explain": "Lower bound of the side = 28 − 0.5 = 27.5 cm. Lower bound area = 27.5² = 756.25 cm²."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 21 m long and 18 m wide. What is its perimeter?",
"options": [
"378 m",
"78 m",
"39 m",
"60 m"
],
"answer": 1,
"explain": "Perimeter is the distance all the way round: 21 + 18 + 21 + 18 = 78 m."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 15 cm. Find its area, to 1 decimal place.",
"options": [
"94.2 cm²",
"2,220.7 cm²",
"2,827.4 cm²",
"706.9 cm²"
],
"answer": 3,
"explain": "Area = πr² = π × 15² = π × 225 = 706.9 cm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Density",
"tier": "F",
"q": "A stone has a mass of 189 g and a volume of 126 cm³. Find its density.",
"options": [
"15 g/cm³",
"0.667 g/cm³",
"1.5 g/cm³",
"23,814 g/cm³"
],
"answer": 2,
"explain": "Density = mass ÷ volume = 189 ÷ 126 = 1.5 g/cm³."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 31 litres into ml.",
"options": [
"3,100 ml",
"310,000 ml",
"0.031 ml",
"31,000 ml"
],
"answer": 3,
"explain": "1 litre = 1,000 ml. Going from litres to ml (a smaller unit) you multiply by 1,000: 31 × 1,000 = 31,000 ml."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 500,000. Two towns are 7 cm apart on the map. How far apart are they in real life?",
"options": [
"35 km",
"3,500 km",
"3.5 km",
"350 km"
],
"answer": 0,
"explain": "Real distance = 7 × 500,000 = 3,500,000 cm. Divide by 100 for metres (35,000 m) and by 1000 for km: 35 km."
}
],
[
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "A tank holds 15 m³ of water. How many litres is this?",
"options": [
"1,500 litres",
"15,000,000 litres",
"15,000 litres",
"0.015 litres"
],
"answer": 2,
"explain": "1 m³ = 1,000,000 cm³ and 1 litre = 1000 cm³, so 1 m³ = 1000 litres. 15 × 1000 = 15,000 litres."
},
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a density of 7.8 g/cm³ and a mass of 468 g. Find its volume.",
"options": [
"60 cm³",
"0.0167 cm³",
"3,650.4 cm³",
"600 cm³"
],
"answer": 0,
"explain": "Volume = mass ÷ density = 468 ÷ 7.8 = 60 cm³."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 690 cm² into m².",
"options": [
"0.069 m²",
"0.69 m²",
"6,900,000 m²",
"6.9 m²"
],
"answer": 0,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 690 ÷ 10,000 = 0.069 m²."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of P from X is 137°. What is the bearing of X from P?",
"options": [
"137°",
"043°",
"223°",
"317°"
],
"answer": 3,
"explain": "A back bearing is 180° different. 137° is less than 180°, so add 180°: 317°."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 4 times those of the smaller one. The smaller solid has a volume of 29 cm³. Find the volume of the larger solid.",
"options": [
"1,856 cm³",
"348 cm³",
"464 cm³",
"116 cm³"
],
"answer": 0,
"explain": "Length scale factor 4 → volume scale factor 4³ = 64. 29 × 64 = 1,856 cm³."
}
],
[
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of Q from P is 293°. What is the bearing of P from Q?",
"options": [
"293°",
"113°",
"247°",
"067°"
],
"answer": 1,
"explain": "A back bearing is 180° different. 293° is more than 180°, so subtract 180°: 113°."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 8 cm by 2 cm by 4 cm. Find its total surface area.",
"options": [
"56 cm²",
"64 cm²",
"112 cm²",
"96 cm²"
],
"answer": 2,
"explain": "A cuboid has 3 pairs of faces: 2 × (8×2) + 2 × (8×4) + 2 × (2×4) = 2 × (16 + 32 + 8) = 112 cm²."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 52.5 miles in 45 minutes. What is the average speed?",
"options": [
"39.4 mph",
"1.2 mph",
"116.7 mph",
"70 mph"
],
"answer": 3,
"explain": "Speed = distance ÷ time. Write the time in hours: 45 minutes = 0.75 hours. 52.5 ÷ 0.75 = 70 mph."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 gallon ≈ 4.5 litres. Convert 8 gallons into litres.",
"options": [
"1.78 litres",
"360 litres",
"36 litres",
"12.5 litres"
],
"answer": 2,
"explain": "Multiply by 4.5: 8 × 4.5 = 36 litres."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 5 cm and a height of 10 cm. Find its volume, to 1 decimal place.",
"options": [
"157.1 cm³",
"3,141.6 cm³",
"314.2 cm³",
"785.4 cm³"
],
"answer": 3,
"explain": "Volume of a cylinder = πr²h = π × 5² × 10 = π × 25 × 10 = 785.4 cm³ (1 d.p.)."
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 35 km into m.",
"options": [
"0.035 m",
"350,000 m",
"3,500 m",
"35,000 m"
],
"answer": 3,
"explain": "1 km = 1,000 m. Going from km to m (a smaller unit) you multiply by 1,000: 35 × 1,000 = 35,000 m."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 42 cm, correct to the nearest whole number. What is the lower bound?",
"options": [
"41 cm",
"41.9 cm",
"41.5 cm",
"42.5 cm"
],
"answer": 2,
"explain": "Half of 1 is 0.5. Lower bound = 42 − 0.5 = 41.5 cm."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 2.5 m² into cm².",
"options": [
"250 cm²",
"0.00025 cm²",
"25,000 cm²",
"2,500 cm²"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 2.5 × 10,000 = 25,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 1.6 m³ into cm³.",
"options": [
"1,600 cm³",
"160 cm³",
"1,600,000 cm³",
"16,000 cm³"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 1.6 × 1,000,000 = 1,600,000 cm³."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 9 m, a perpendicular height of 12 m and a sloping side of 14 m. Find its area.",
"options": [
"126 m²",
"54 m²",
"46 m²",
"108 m²"
],
"answer": 3,
"explain": "Area of a parallelogram = base × perpendicular height = 9 × 12 = 108 m². The sloping side is not needed."
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 66 litres, correct to the nearest whole number. What is the upper bound?",
"options": [
"66.4 litres",
"66.5 litres",
"65.5 litres",
"67 litres"
],
"answer": 1,
"explain": "Half of 1 is 0.5. Upper bound = 66 + 0.5 = 66.5 litres."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 3.7 m³ into cm³.",
"options": [
"370 cm³",
"3,700 cm³",
"3,700,000 cm³",
"37,000 cm³"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 3.7 × 1,000,000 = 3,700,000 cm³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 924.2 cm into m.",
"options": [
"9.242 m",
"0.9242 m",
"92.42 m",
"92,420 m"
],
"answer": 0,
"explain": "1 m = 100 cm. Going from cm to m (a bigger unit) you divide by 100: 924.2 ÷ 100 = 9.242 m."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 47 m/s into km/h.",
"options": [
"2,820 km/h",
"169.2 km/h",
"13.06 km/h",
"47,000 km/h"
],
"answer": 1,
"explain": "In 1 hour there are 3600 seconds, so 47 m/s = 47 × 3600 = 169,200 m per hour = 169.2 km/h. (Shortcut: × 3.6.)"
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 2 times those of the smaller one. The smaller solid has a volume of 5 cm³. Find the volume of the larger solid.",
"options": [
"10 cm³",
"40 cm³",
"30 cm³",
"20 cm³"
],
"answer": 1,
"explain": "Length scale factor 2 → volume scale factor 2³ = 8. 5 × 8 = 40 cm³."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "Write 1 hours 45 minutes as a decimal number of hours.",
"options": [
"1.25 hours",
"1.45 hours",
"1.75 hours",
"1.05 hours"
],
"answer": 2,
"explain": "45 minutes = 45 ÷ 60 = 0.75 of an hour, so 1 h 45 min = 1.75 hours."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 22 litres into cl.",
"options": [
"22,000 cl",
"220 cl",
"2,200 cl",
"0.22 cl"
],
"answer": 2,
"explain": "1 litre = 100 cl. Going from litres to cl (a smaller unit) you multiply by 100: 22 × 100 = 2,200 cl."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 6 cm. Find its area, to 1 decimal place.",
"options": [
"452.4 cm²",
"355.3 cm²",
"37.7 cm²",
"113.1 cm²"
],
"answer": 3,
"explain": "Area = πr² = π × 6² = π × 36 = 113.1 cm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Density",
"tier": "F",
"q": "A stone has a density of 2.5 g/cm³ and a volume of 196 cm³. Find its mass.",
"options": [
"4,900 g",
"490 g",
"198.5 g",
"78.4 g"
],
"answer": 1,
"explain": "Mass = density × volume = 2.5 × 196 = 490 g."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 10 cm by 4 cm by 6 cm. Find its volume.",
"options": [
"40 cm³",
"240 cm³",
"124 cm³",
"248 cm³"
],
"answer": 1,
"explain": "Volume of a cuboid = length × width × height = 10 × 4 × 6 = 240 cm³."
}
],
[
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 31 kg into g.",
"options": [
"0.031 g",
"3,100 g",
"310,000 g",
"31,000 g"
],
"answer": 3,
"explain": "1 kg = 1,000 g. Going from kg to g (a smaller unit) you multiply by 1,000: 31 × 1,000 = 31,000 g."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 850 cm² into m².",
"options": [
"0.85 m²",
"8.5 m²",
"0.085 m²",
"8,500,000 m²"
],
"answer": 2,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 850 ÷ 10,000 = 0.085 m²."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 07:35 and arrives at 13:55. How long is this?",
"options": [
"7 h 20 min",
"6 h 10 min",
"5 h 20 min",
"6 h 20 min"
],
"answer": 3,
"explain": "Count on from 07:35: up to the next whole hour, then whole hours, then the minutes to 13:55. The total is 6 h 20 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 25,000. Two towns are 7.5 cm apart on the map. How far apart are they in real life?",
"options": [
"18.75 km",
"1.875 km",
"0.1875 km",
"187.5 km"
],
"answer": 1,
"explain": "Real distance = 7.5 × 25,000 = 187,500 cm. Divide by 100 for metres (1,875 m) and by 1000 for km: 1.875 km."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 5 times those of the smaller one. The smaller solid has a volume of 28 cm³. Find the volume of the larger solid.",
"options": [
"3,500 cm³",
"700 cm³",
"420 cm³",
"140 cm³"
],
"answer": 0,
"explain": "Length scale factor 5 → volume scale factor 5³ = 125. 28 × 125 = 3,500 cm³."
}
],
[
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 13 cm by 11 cm by 8 cm. Find its volume.",
"options": [
"670 cm³",
"335 cm³",
"143 cm³",
"1,144 cm³"
],
"answer": 3,
"explain": "Volume of a cuboid = length × width × height = 13 × 11 × 8 = 1,144 cm³."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 4.1 litres?",
"options": [
"410 cm³",
"4,100,000 cm³",
"0.0041 cm³",
"4,100 cm³"
],
"answer": 3,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 4.1 × 1000 = 4,100 cm³."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 12.8 hours in hours and minutes.",
"options": [
"12 h 12 min",
"12 h 80 min",
"12 h 48 min",
"12 h 8 min"
],
"answer": 2,
"explain": "0.8 of an hour = 0.8 × 60 = 48 minutes, so 12.8 hours = 12 h 48 min. It is not 12 h 80 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 13:20 and arrives at 18:10. How long is this?",
"options": [
"5 h 50 min",
"3 h 50 min",
"4 h 50 min",
"4 h 40 min"
],
"answer": 2,
"explain": "Count on from 13:20: up to the next whole hour, then whole hours, then the minutes to 18:10. The total is 4 h 50 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 15 m² into cm².",
"options": [
"0.0015 cm²",
"1,500 cm²",
"150,000 cm²",
"15,000 cm²"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 15 × 10,000 = 150,000 cm². A common mistake is multiplying by 100 only."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 30 km/h for 45 minutes. How far does it travel?",
"options": [
"13.5 km",
"40 km",
"1,350 km",
"22.5 km"
],
"answer": 3,
"explain": "Distance = speed × time. 45 minutes = 0.75 hours, so 30 × 0.75 = 22.5 km."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 08:00 and arrives at 12:35. How long is this?",
"options": [
"4 h 25 min",
"3 h 35 min",
"5 h 35 min",
"4 h 35 min"
],
"answer": 3,
"explain": "Count on from 08:00: up to the next whole hour, then whole hours, then the minutes to 12:35. The total is 4 h 35 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 10 m. Find its area, to 1 decimal place.",
"options": [
"31.4 m²",
"78.5 m²",
"62.8 m²",
"314.2 m²"
],
"answer": 1,
"explain": "First halve the diameter: r = 10 ÷ 2 = 5. Area = πr² = π × 5² = 78.5 m² (1 d.p.)."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 19 cm and a perpendicular height of 14 cm. Find its area.",
"options": [
"33 cm²",
"266 cm²",
"66.5 cm²",
"133 cm²"
],
"answer": 3,
"explain": "Area of a triangle = ½ × base × height = ½ × 19 × 14 = 133 cm²."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 2 times those of the smaller one. The smaller solid has a volume of 12 cm³. Find the volume of the larger solid.",
"options": [
"24 cm³",
"72 cm³",
"96 cm³",
"48 cm³"
],
"answer": 2,
"explain": "Length scale factor 2 → volume scale factor 2³ = 8. 12 × 8 = 96 cm³."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 20,000. Two places are 1 km apart in real life. How far apart are they on the map?",
"options": [
"500 cm",
"0.5 cm",
"5 cm",
"50 cm"
],
"answer": 2,
"explain": "1 km = 100,000 cm. Map distance = 100,000 ÷ 20,000 = 5 cm."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 9 m by 10 m by 9 m. Find its volume.",
"options": [
"261 m³",
"810 m³",
"522 m³",
"90 m³"
],
"answer": 1,
"explain": "Volume of a cuboid = length × width × height = 9 × 10 × 9 = 810 m³."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 5.3 hours in hours and minutes.",
"options": [
"5 h 18 min",
"5 h 42 min",
"5 h 30 min",
"5 h 3 min"
],
"answer": 0,
"explain": "0.3 of an hour = 0.3 × 60 = 18 minutes, so 5.3 hours = 5 h 18 min. It is not 5 h 30 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 08:20 and ends at 10:25. How long is this?",
"options": [
"1 h 55 min",
"2 h 5 min",
"3 h 5 min",
"1 h 5 min"
],
"answer": 1,
"explain": "Count on from 08:20: up to the next whole hour, then whole hours, then the minutes to 10:25. The total is 2 h 5 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 10 cm and 14 cm, and a perpendicular height of 6 cm. Find its area.",
"options": [
"72 cm²",
"420 cm²",
"144 cm²",
"12 cm²"
],
"answer": 0,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (10 + 14) × 6 = ½ × 24 × 6 = 72 cm²."
}
],
[
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 5 litres into cl.",
"options": [
"0.05 cl",
"500 cl",
"50 cl",
"5,000 cl"
],
"answer": 1,
"explain": "1 litre = 100 cl. Going from litres to cl (a smaller unit) you multiply by 100: 5 × 100 = 500 cl."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 157.5 miles in 3 hours 30 minutes. What is the average speed?",
"options": [
"551.2 mph",
"47.7 mph",
"45 mph",
"0.8 mph"
],
"answer": 2,
"explain": "Speed = distance ÷ time. Write the time in hours: 3 hours 30 minutes = 3.5 hours. 157.5 ÷ 3.5 = 45 mph."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 9 cm and a perpendicular height of 18 cm. Find its area.",
"options": [
"162 cm²",
"81 cm²",
"27 cm²",
"40.5 cm²"
],
"answer": 1,
"explain": "Area of a triangle = ½ × base × height = ½ × 9 × 18 = 81 cm²."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 3,000 N acts on an area of 2.5 m². Find the pressure.",
"options": [
"1,200 N/m²",
"0.0008 N/m²",
"7,500 N/m²",
"600 N/m²"
],
"answer": 0,
"explain": "Pressure = force ÷ area = 3,000 ÷ 2.5 = 1,200 N/m²."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 22 m/s into km/h.",
"options": [
"79.2 km/h",
"1,320 km/h",
"22,000 km/h",
"6.11 km/h"
],
"answer": 0,
"explain": "In 1 hour there are 3600 seconds, so 22 m/s = 22 × 3600 = 79,200 m per hour = 79.2 km/h. (Shortcut: × 3.6.)"
}
],
[
{
"topic": "Area units",
"tier": "F",
"q": "Convert 30 m² into cm².",
"options": [
"300,000 cm²",
"3,000 cm²",
"30,000 cm²",
"0.003 cm²"
],
"answer": 0,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 30 × 10,000 = 300,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 15:35 and arrives at 17:10. How long is this?",
"options": [
"1 h 25 min",
"2 h 35 min",
"35 min",
"1 h 35 min"
],
"answer": 3,
"explain": "Count on from 15:35: up to the next whole hour, then whole hours, then the minutes to 17:10. The total is 1 h 35 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a density of 0.8 g/cm³ and a mass of 9.6 g. Find its volume.",
"options": [
"120 cm³",
"0.0833 cm³",
"12 cm³",
"7.68 cm³"
],
"answer": 2,
"explain": "Volume = mass ÷ density = 9.6 ÷ 0.8 = 12 cm³."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 5 times those of the smaller one. The smaller shape has an area of 29 cm². Find the area of the larger shape.",
"options": [
"145 cm²",
"725 cm²",
"290 cm²",
"3,625 cm²"
],
"answer": 1,
"explain": "Length scale factor 5 → area scale factor 5² = 25. 29 × 25 = 725 cm²."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 1,840 N acts on an area of 4 m². Find the pressure.",
"options": [
"460 N/m²",
"230 N/m²",
"0.0022 N/m²",
"7,360 N/m²"
],
"answer": 0,
"explain": "Pressure = force ÷ area = 1,840 ÷ 4 = 460 N/m²."
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 14 cm, correct to the nearest whole number. What is the upper bound?",
"options": [
"15 cm",
"14.5 cm",
"13.5 cm",
"14.4 cm"
],
"answer": 1,
"explain": "Half of 1 is 0.5. Upper bound = 14 + 0.5 = 14.5 cm."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 6 cm and a height of 9 cm. Find its volume, to 1 decimal place.",
"options": [
"169.6 cm³",
"4,071.5 cm³",
"339.3 cm³",
"1,017.9 cm³"
],
"answer": 3,
"explain": "Volume of a cylinder = πr²h = π × 6² × 9 = π × 36 × 9 = 1,017.9 cm³ (1 d.p.)."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 7 hours 27 minutes as a decimal number of hours.",
"options": [
"4.47 hours",
"7.55 hours",
"7.45 hours",
"7.27 hours"
],
"answer": 2,
"explain": "27 minutes = 27 ÷ 60 = 0.45 of an hour, so 7 h 27 min = 7.45 hours."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 7,364 cl into litres.",
"options": [
"736,400 litres",
"736.4 litres",
"73.64 litres",
"7.364 litres"
],
"answer": 2,
"explain": "1 litre = 100 cl. Going from cl to litres (a bigger unit) you divide by 100: 7,364 ÷ 100 = 73.64 litres."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 4 times those of the smaller one. The smaller shape has an area of 34 cm². Find the area of the larger shape.",
"options": [
"2,176 cm²",
"272 cm²",
"544 cm²",
"136 cm²"
],
"answer": 2,
"explain": "Length scale factor 4 → area scale factor 4² = 16. 34 × 16 = 544 cm²."
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 40 kg, correct to the nearest whole number. What is the lower bound?",
"options": [
"40.5 kg",
"39.5 kg",
"39 kg",
"39.9 kg"
],
"answer": 1,
"explain": "Half of 1 is 0.5. Lower bound = 40 − 0.5 = 39.5 kg."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 3 mm. Find its circumference, to 1 decimal place.",
"options": [
"37.7 mm",
"28.3 mm",
"18.8 mm",
"9.4 mm"
],
"answer": 2,
"explain": "Circumference = 2πr (or πd) = 2 × π × 3 = 18.8 mm (1 d.p.)."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 8,387 ml into litres.",
"options": [
"0.8387 litres",
"8.387 litres",
"8,387,000 litres",
"83.87 litres"
],
"answer": 1,
"explain": "1 litre = 1,000 ml. Going from ml to litres (a bigger unit) you divide by 1,000: 8,387 ÷ 1,000 = 8.387 litres."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 09:05 and arrives at 11:35. How long is this?",
"options": [
"2 h 20 min",
"3 h 30 min",
"2 h 30 min",
"1 h 30 min"
],
"answer": 2,
"explain": "Count on from 09:05: up to the next whole hour, then whole hours, then the minutes to 11:35. The total is 2 h 30 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 11 cm and height 7 cm. The prism is 8 cm long. Find its volume.",
"options": [
"38.5 cm³",
"72 cm³",
"308 cm³",
"616 cm³"
],
"answer": 2,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 11 × 7 = 38.5. 38.5 × 8 = 308 cm³."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 11:30 and ends at 15:35. How long is this?",
"options": [
"3 h 55 min",
"4 h 5 min",
"3 h 5 min",
"5 h 5 min"
],
"answer": 1,
"explain": "Count on from 11:30: up to the next whole hour, then whole hours, then the minutes to 15:35. The total is 4 h 5 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 10 m long and 11 m wide. What is its perimeter?",
"options": [
"21 m",
"110 m",
"42 m",
"31 m"
],
"answer": 2,
"explain": "Perimeter is the distance all the way round: 10 + 11 + 10 + 11 = 42 m."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of A from P is 134°. What is the bearing of P from A?",
"options": [
"226°",
"046°",
"134°",
"314°"
],
"answer": 3,
"explain": "A back bearing is 180° different. 134° is less than 180°, so add 180°: 314°."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 12.5 miles at an average speed of 50 mph. How long does the journey take?",
"options": [
"15 min",
"1 h 15 min",
"0 h 25 min",
"30 min"
],
"answer": 0,
"explain": "Time = distance ÷ speed = 12.5 ÷ 50 = 0.25 hours. 0.25 hours × 60 = 15 minutes, so the time is 15 min."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 1 hours 3 minutes as a decimal number of hours.",
"options": [
"1.05 hours",
"1.03 hours",
"1.95 hours",
"0.63 hours"
],
"answer": 0,
"explain": "3 minutes = 3 ÷ 60 = 0.05 of an hour, so 1 h 3 min = 1.05 hours."
}
],
[
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 6 m by 10 m by 3 m. Find its volume.",
"options": [
"216 m³",
"108 m³",
"60 m³",
"180 m³"
],
"answer": 3,
"explain": "Volume of a cuboid = length × width × height = 6 × 10 × 3 = 180 m³."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 20,000. Two places are 2.4 km apart in real life. How far apart are they on the map?",
"options": [
"1.2 cm",
"120 cm",
"12 cm",
"1,200 cm"
],
"answer": 2,
"explain": "2.4 km = 240,000 cm. Map distance = 240,000 ÷ 20,000 = 12 cm."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 95 miles into kilometres.",
"options": [
"760 km",
"152 km",
"15.2 km",
"59.375 km"
],
"answer": 1,
"explain": "95 ÷ 5 = 19 lots of 5 miles. 19 × 8 = 152 km."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 6 m long and 2 m wide. What is its perimeter?",
"options": [
"14 m",
"12 m",
"8 m",
"16 m"
],
"answer": 3,
"explain": "Perimeter is the distance all the way round: 6 + 2 + 6 + 2 = 16 m."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 10 m. Find its area, to 1 decimal place.",
"options": [
"1,256.6 m²",
"62.8 m²",
"314.2 m²",
"987 m²"
],
"answer": 2,
"explain": "Area = πr² = π × 10² = π × 100 = 314.2 m² (1 d.p.). Square the radius before multiplying by π."
}
],
[
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 5,740 kg into tonnes.",
"options": [
"5,740,000 tonnes",
"0.574 tonnes",
"5.74 tonnes",
"57.4 tonnes"
],
"answer": 2,
"explain": "1 tonne = 1,000 kg. Going from kg to tonnes (a bigger unit) you divide by 1,000: 5,740 ÷ 1,000 = 5.74 tonnes."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 12 cm and height 10 cm. The prism is 23 cm long. Find its volume.",
"options": [
"253 cm³",
"60 cm³",
"2,760 cm³",
"1,380 cm³"
],
"answer": 3,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 12 × 10 = 60. 60 × 23 = 1,380 cm³."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 160 km in 2 hours. What is the average speed?",
"options": [
"320 km/h",
"80 km/h",
"1.3 km/h",
"53.3 km/h"
],
"answer": 1,
"explain": "Speed = distance ÷ time. 160 ÷ 2 = 80 km/h."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 12:50 and ends at 19:30. How long is this?",
"options": [
"5 h 40 min",
"7 h 40 min",
"6 h 40 min",
"6 h 30 min"
],
"answer": 2,
"explain": "Count on from 12:50: up to the next whole hour, then whole hours, then the minutes to 19:30. The total is 6 h 40 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 6 m. Find its area, to 1 decimal place.",
"options": [
"113.1 m²",
"452.4 m²",
"37.7 m²",
"355.3 m²"
],
"answer": 0,
"explain": "Area = πr² = π × 6² = π × 36 = 113.1 m² (1 d.p.). Square the radius before multiplying by π."
}
],
[
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of P from A is 263°. What is the bearing of A from P?",
"options": [
"277°",
"083°",
"263°",
"097°"
],
"answer": 1,
"explain": "A back bearing is 180° different. 263° is more than 180°, so subtract 180°: 083°."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 10 m and a height of 14 m. Find its volume, to 1 decimal place.",
"options": [
"879.6 m³",
"4,398.2 m³",
"17,592.9 m³",
"439.8 m³"
],
"answer": 1,
"explain": "Volume of a cylinder = πr²h = π × 10² × 14 = π × 100 × 14 = 4,398.2 m³ (1 d.p.)."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 7 cm by 8 cm by 3 cm. Find its total surface area.",
"options": [
"168 cm²",
"202 cm²",
"101 cm²",
"336 cm²"
],
"answer": 1,
"explain": "A cuboid has 3 pairs of faces: 2 × (7×8) + 2 × (7×3) + 2 × (8×3) = 2 × (56 + 21 + 24) = 202 cm²."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 7 hours 9 minutes as a decimal number of hours.",
"options": [
"7.15 hours",
"7.85 hours",
"4.29 hours",
"7.09 hours"
],
"answer": 0,
"explain": "9 minutes = 9 ÷ 60 = 0.15 of an hour, so 7 h 9 min = 7.15 hours."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 10,000. Two towns are 12 cm apart on the map. How far apart are they in real life?",
"options": [
"1.2 km",
"12 km",
"0.12 km",
"120 km"
],
"answer": 0,
"explain": "Real distance = 12 × 10,000 = 120,000 cm. Divide by 100 for metres (1,200 m) and by 1000 for km: 1.2 km."
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 10 mm. Find its area, to 1 decimal place.",
"options": [
"314.2 mm²",
"78.5 mm²",
"62.8 mm²",
"31.4 mm²"
],
"answer": 1,
"explain": "First halve the diameter: r = 10 ÷ 2 = 5. Area = πr² = π × 5² = 78.5 mm² (1 d.p.)."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 2.6 hours in hours and minutes.",
"options": [
"2 h 24 min",
"2 h 36 min",
"2 h 6 min",
"2 h 60 min"
],
"answer": 1,
"explain": "0.6 of an hour = 0.6 × 60 = 36 minutes, so 2.6 hours = 2 h 36 min. It is not 2 h 60 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 2 cm and height 6 cm. The prism is 12 cm long. Find its volume.",
"options": [
"48 cm³",
"144 cm³",
"6 cm³",
"72 cm³"
],
"answer": 3,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 2 × 6 = 6. 6 × 12 = 72 cm³."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 32 litres, correct to the nearest whole number. What is the upper bound?",
"options": [
"32.4 litres",
"33 litres",
"32.5 litres",
"31.5 litres"
],
"answer": 2,
"explain": "Half of 1 is 0.5. Upper bound = 32 + 0.5 = 32.5 litres."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 2,900 N acts on an area of 2.5 m². Find the pressure.",
"options": [
"1,160 N/m²",
"580 N/m²",
"0.0009 N/m²",
"7,250 N/m²"
],
"answer": 0,
"explain": "Pressure = force ÷ area = 2,900 ÷ 2.5 = 1,160 N/m²."
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 15 m. Find its circumference, to 1 decimal place.",
"options": [
"706.9 m",
"188.5 m",
"47.1 m",
"94.2 m"
],
"answer": 3,
"explain": "Circumference = 2πr (or πd) = 2 × π × 15 = 94.2 m (1 d.p.)."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 200,000. Two places are 26 km apart in real life. How far apart are they on the map?",
"options": [
"130 cm",
"1,300 cm",
"1.3 cm",
"13 cm"
],
"answer": 3,
"explain": "26 km = 2,600,000 cm. Map distance = 2,600,000 ÷ 200,000 = 13 cm."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 9 m and a height of 20 m. Find its volume, to 1 decimal place.",
"options": [
"20,357.5 m³",
"565.5 m³",
"1,131 m³",
"5,089.4 m³"
],
"answer": 3,
"explain": "Volume of a cylinder = πr²h = π × 9² × 20 = π × 81 × 20 = 5,089.4 m³ (1 d.p.)."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 162 litre tank in 27 minutes. What is the rate of flow?",
"options": [
"0.167 litres/min",
"4,374 litres/min",
"60 litres/min",
"6 litres/min"
],
"answer": 3,
"explain": "Rate = amount ÷ time = 162 ÷ 27 = 6 litres per minute."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 4 times those of the smaller one. The smaller shape has an area of 24 cm². Find the area of the larger shape.",
"options": [
"1,536 cm²",
"96 cm²",
"192 cm²",
"384 cm²"
],
"answer": 3,
"explain": "Length scale factor 4 → area scale factor 4² = 16. 24 × 16 = 384 cm²."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 250,000. Two towns are 9.5 cm apart on the map. How far apart are they in real life?",
"options": [
"237.5 km",
"23.75 km",
"2.375 km",
"2,375 km"
],
"answer": 1,
"explain": "Real distance = 9.5 × 250,000 = 2,375,000 cm. Divide by 100 for metres (23,750 m) and by 1000 for km: 23.75 km."
},
{
"topic": "Density",
"tier": "F",
"q": "A bar has a density of 11.3 g/cm³ and a volume of 143 cm³. Find its mass.",
"options": [
"1,615.9 g",
"154.3 g",
"12.65 g",
"16,159 g"
],
"answer": 0,
"explain": "Mass = density × volume = 11.3 × 143 = 1,615.9 g."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 45 mph for 4 hours. How far does it travel?",
"options": [
"180 miles",
"10,800 miles",
"11.2 miles",
"225 miles"
],
"answer": 0,
"explain": "Distance = speed × time. 45 × 4 = 180 miles."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 20 m long and 12 m wide. What is its perimeter?",
"options": [
"32 m",
"240 m",
"64 m",
"52 m"
],
"answer": 2,
"explain": "Perimeter is the distance all the way round: 20 + 12 + 20 + 12 = 64 m."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 62 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"3,844 cm²",
"3,782.25 cm²",
"3,906.25 cm²",
"3,843.5 cm²"
],
"answer": 1,
"explain": "Lower bound of the side = 62 − 0.5 = 61.5 cm. Lower bound area = 61.5² = 3,782.25 cm²."
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 gallon ≈ 4.5 litres. Convert 31 gallons into litres.",
"options": [
"35.5 litres",
"1,395 litres",
"6.89 litres",
"139.5 litres"
],
"answer": 3,
"explain": "Multiply by 4.5: 31 × 4.5 = 139.5 litres."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 2.2 hours in hours and minutes.",
"options": [
"2 h 20 min",
"2 h 2 min",
"2 h 12 min",
"2 h 48 min"
],
"answer": 2,
"explain": "0.2 of an hour = 0.2 × 60 = 12 minutes, so 2.2 hours = 2 h 12 min. It is not 2 h 20 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 18 cm, a perpendicular height of 8 cm and a sloping side of 9 cm. Find its area.",
"options": [
"162 cm²",
"144 cm²",
"54 cm²",
"72 cm²"
],
"answer": 1,
"explain": "Area of a parallelogram = base × perpendicular height = 18 × 8 = 144 cm². The sloping side is not needed."
},
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a density of 11.3 g/cm³ and a volume of 124 cm³. Find its mass.",
"options": [
"1,401.2 g",
"14,012 g",
"10.97 g",
"135.3 g"
],
"answer": 0,
"explain": "Mass = density × volume = 11.3 × 124 = 1,401.2 g."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 18 mm. Find its circumference, to 1 decimal place.",
"options": [
"1,017.9 mm",
"113.1 mm",
"226.2 mm",
"56.5 mm"
],
"answer": 1,
"explain": "Circumference = 2πr (or πd) = 2 × π × 18 = 113.1 mm (1 d.p.)."
}
],
[
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 6 litres per minute. How long does it take to fill 138 litres?",
"options": [
"132 minutes",
"828 minutes",
"23 minutes",
"0.043 minutes"
],
"answer": 2,
"explain": "Time = amount ÷ rate = 138 ÷ 6 = 23 minutes."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 20,000. Two towns are 8.5 cm apart on the map. How far apart are they in real life?",
"options": [
"1.7 km",
"0.17 km",
"170 km",
"17 km"
],
"answer": 0,
"explain": "Real distance = 8.5 × 20,000 = 170,000 cm. Divide by 100 for metres (1,700 m) and by 1000 for km: 1.7 km."
},
{
"topic": "Density",
"tier": "F",
"q": "A stone has a mass of 249 g and a volume of 83 cm³. Find its density.",
"options": [
"30 g/cm³",
"3 g/cm³",
"0.333 g/cm³",
"20,667 g/cm³"
],
"answer": 1,
"explain": "Density = mass ÷ volume = 249 ÷ 83 = 3 g/cm³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 3.71 m into cm.",
"options": [
"37.1 cm",
"3,710 cm",
"371 cm",
"0.0371 cm"
],
"answer": 2,
"explain": "1 m = 100 cm. Going from m to cm (a smaller unit) you multiply by 100: 3.71 × 100 = 371 cm."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 5.1 hours in hours and minutes.",
"options": [
"5 h 10 min",
"5 h 54 min",
"5 h 6 min",
"5 h 1 min"
],
"answer": 2,
"explain": "0.1 of an hour = 0.1 × 60 = 6 minutes, so 5.1 hours = 5 h 6 min. It is not 5 h 10 min, because an hour has 60 minutes, not 100."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 9 m, a perpendicular height of 11 m and a sloping side of 13 m. Find its area.",
"options": [
"117 m²",
"44 m²",
"99 m²",
"49.5 m²"
],
"answer": 2,
"explain": "Area of a parallelogram = base × perpendicular height = 9 × 11 = 99 m². The sloping side is not needed."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 75 litre tank in 15 minutes. What is the rate of flow?",
"options": [
"0.2 litres/min",
"50 litres/min",
"1,125 litres/min",
"5 litres/min"
],
"answer": 3,
"explain": "Rate = amount ÷ time = 75 ÷ 15 = 5 litres per minute."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 25,000. Two towns are 15 cm apart on the map. How far apart are they in real life?",
"options": [
"0.375 km",
"37.5 km",
"3.75 km",
"375 km"
],
"answer": 2,
"explain": "Real distance = 15 × 25,000 = 375,000 cm. Divide by 100 for metres (3,750 m) and by 1000 for km: 3.75 km."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 29.5 kg, correct to 1 decimal place. What is the lower bound?",
"options": [
"29.55 kg",
"29.45 kg",
"29.49 kg",
"29.4 kg"
],
"answer": 1,
"explain": "Half of 0.1 is 0.05. Lower bound = 29.5 − 0.05 = 29.45 kg."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 15 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"210.25 cm²",
"224.5 cm²",
"225 cm²",
"240.25 cm²"
],
"answer": 0,
"explain": "Lower bound of the side = 15 − 0.5 = 14.5 cm. Lower bound area = 14.5² = 210.25 cm²."
}
],
[
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 0.3 m³ into cm³.",
"options": [
"300,000 cm³",
"300 cm³",
"30 cm³",
"3,000 cm³"
],
"answer": 0,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 0.3 × 1,000,000 = 300,000 cm³."
},
{
"topic": "Density",
"tier": "F",
"q": "A block has a density of 7.8 g/cm³ and a mass of 725.4 g. Find its volume.",
"options": [
"930 cm³",
"0.0108 cm³",
"93 cm³",
"5,658.12 cm³"
],
"answer": 2,
"explain": "Volume = mass ÷ density = 725.4 ÷ 7.8 = 93 cm³."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 10 cm and a height of 20 cm. Find its volume, to 1 decimal place.",
"options": [
"628.3 cm³",
"25,132.7 cm³",
"6,283.2 cm³",
"1,256.6 cm³"
],
"answer": 2,
"explain": "Volume of a cylinder = πr²h = π × 10² × 20 = π × 100 × 20 = 6,283.2 cm³ (1 d.p.)."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 8 tonnes into kg.",
"options": [
"80,000 kg",
"0.008 kg",
"8,000 kg",
"800 kg"
],
"answer": 2,
"explain": "1 tonne = 1,000 kg. Going from tonnes to kg (a smaller unit) you multiply by 1,000: 8 × 1,000 = 8,000 kg."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 5 times those of the smaller one. The smaller shape has an area of 26 cm². Find the area of the larger shape.",
"options": [
"260 cm²",
"650 cm²",
"130 cm²",
"3,250 cm²"
],
"answer": 1,
"explain": "Length scale factor 5 → area scale factor 5² = 25. 26 × 25 = 650 cm²."
}
],
[
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 8.4 litres?",
"options": [
"840 cm³",
"8,400,000 cm³",
"8,400 cm³",
"0.0084 cm³"
],
"answer": 2,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 8.4 × 1000 = 8,400 cm³."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 1,950 cm² into m².",
"options": [
"0.195 m²",
"19,500,000 m²",
"19.5 m²",
"1.95 m²"
],
"answer": 0,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 1,950 ÷ 10,000 = 0.195 m²."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 5,938 kg into tonnes.",
"options": [
"5,938,000 tonnes",
"5.938 tonnes",
"0.5938 tonnes",
"59.38 tonnes"
],
"answer": 1,
"explain": "1 tonne = 1,000 kg. Going from kg to tonnes (a bigger unit) you divide by 1,000: 5,938 ÷ 1,000 = 5.938 tonnes."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 7 cm and 9 cm, and a perpendicular height of 12 cm. Find its area.",
"options": [
"96 cm²",
"12 cm²",
"378 cm²",
"192 cm²"
],
"answer": 0,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (7 + 9) × 12 = ½ × 16 × 12 = 96 cm²."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 137.5 km in 2 hours 30 minutes. What is the average speed?",
"options": [
"59.8 km/h",
"55 km/h",
"343.8 km/h",
"0.9 km/h"
],
"answer": 1,
"explain": "Speed = distance ÷ time. Write the time in hours: 2 hours 30 minutes = 2.5 hours. 137.5 ÷ 2.5 = 55 km/h."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 50 miles at an average speed of 20 mph. How long does the journey take?",
"options": [
"2 h 50 min",
"2 h 45 min",
"3 h 30 min",
"2 h 30 min"
],
"answer": 3,
"explain": "Time = distance ÷ speed = 50 ÷ 20 = 2.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 2 h 30 min."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 500,000. Two towns are 3 cm apart on the map. How far apart are they in real life?",
"options": [
"15 km",
"1.5 km",
"1,500 km",
"150 km"
],
"answer": 0,
"explain": "Real distance = 3 × 500,000 = 1,500,000 cm. Divide by 100 for metres (15,000 m) and by 1000 for km: 15 km."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 13:15 and arrives at 14:10. How long is this?",
"options": [
"1 h 25 min",
"1 h 55 min",
"1 h 15 min",
"55 min"
],
"answer": 3,
"explain": "Count on from 13:15: up to the next whole hour, then whole hours, then the minutes to 14:10. The total is 55 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 384 litre tank in 32 minutes. What is the rate of flow?",
"options": [
"12 litres/min",
"12,288 litres/min",
"0.083 litres/min",
"120 litres/min"
],
"answer": 0,
"explain": "Rate = amount ÷ time = 384 ÷ 32 = 12 litres per minute."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 4.8 hours in hours and minutes.",
"options": [
"4 h 8 min",
"4 h 12 min",
"4 h 80 min",
"4 h 48 min"
],
"answer": 3,
"explain": "0.8 of an hour = 0.8 × 60 = 48 minutes, so 4.8 hours = 4 h 48 min. It is not 4 h 80 min, because an hour has 60 minutes, not 100."
}
],
[
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 489.8 g into kg.",
"options": [
"0.04898 kg",
"489,800 kg",
"4.898 kg",
"0.4898 kg"
],
"answer": 3,
"explain": "1 kg = 1,000 g. Going from g to kg (a bigger unit) you divide by 1,000: 489.8 ÷ 1,000 = 0.4898 kg."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 07:25 and arrives at 09:40. How long is this?",
"options": [
"2 h 15 min",
"3 h 15 min",
"2 h 5 min",
"1 h 15 min"
],
"answer": 0,
"explain": "Count on from 07:25: up to the next whole hour, then whole hours, then the minutes to 09:40. The total is 2 h 15 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 8 m and 9 m, and a perpendicular height of 8 m. Find its area.",
"options": [
"288 m²",
"4 m²",
"136 m²",
"68 m²"
],
"answer": 3,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (8 + 9) × 8 = ½ × 17 × 8 = 68 m²."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 26 mm. Find its area, to 1 decimal place.",
"options": [
"163.4 mm²",
"530.9 mm²",
"81.7 mm²",
"2,123.7 mm²"
],
"answer": 1,
"explain": "First halve the diameter: r = 26 ÷ 2 = 13. Area = πr² = π × 13² = 530.9 mm² (1 d.p.)."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 3.8 kg, correct to 1 decimal place. What is the upper bound?",
"options": [
"3.85 kg",
"3.75 kg",
"3.9 kg",
"3.84 kg"
],
"answer": 0,
"explain": "Half of 0.1 is 0.05. Upper bound = 3.8 + 0.05 = 3.85 kg."
}
],
[
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 3.79 litres into ml.",
"options": [
"3,790 ml",
"0.00379 ml",
"379 ml",
"37,900 ml"
],
"answer": 0,
"explain": "1 litre = 1,000 ml. Going from litres to ml (a smaller unit) you multiply by 1,000: 3.79 × 1,000 = 3,790 ml."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 9 mm. Find its area, to 1 decimal place.",
"options": [
"56.5 mm²",
"254.5 mm²",
"1,017.9 mm²",
"799.4 mm²"
],
"answer": 1,
"explain": "Area = πr² = π × 9² = π × 81 = 254.5 mm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 82 m. One side is 26 m. How long is the other side?",
"options": [
"41 m",
"15 m",
"60 m",
"56 m"
],
"answer": 1,
"explain": "Two sides of 26 make 52. 82 − 52 = 30, which is shared between the other two sides: 30 ÷ 2 = 15 m."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 11:55 and ends at 17:00. How long is this?",
"options": [
"5 h 45 min",
"6 h 5 min",
"4 h 5 min",
"5 h 5 min"
],
"answer": 3,
"explain": "Count on from 11:55: up to the next whole hour, then whole hours, then the minutes to 17:00. The total is 5 h 5 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 128 km into miles.",
"options": [
"80 miles",
"16 miles",
"204.8 miles",
"640 miles"
],
"answer": 0,
"explain": "128 ÷ 8 = 16 lots of 8 km. 16 × 5 = 80 miles."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 11:20 and ends at 17:15. How long is this?",
"options": [
"4 h 55 min",
"5 h 45 min",
"5 h 55 min",
"6 h 55 min"
],
"answer": 2,
"explain": "Count on from 11:20: up to the next whole hour, then whole hours, then the minutes to 17:15. The total is 5 h 55 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 9 kg into g.",
"options": [
"0.009 g",
"90,000 g",
"9,000 g",
"900 g"
],
"answer": 2,
"explain": "1 kg = 1,000 g. Going from kg to g (a smaller unit) you multiply by 1,000: 9 × 1,000 = 9,000 g."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 13 cm and a perpendicular height of 11 cm. Find its area.",
"options": [
"35.75 cm²",
"143 cm²",
"24 cm²",
"71.5 cm²"
],
"answer": 3,
"explain": "Area of a triangle = ½ × base × height = ½ × 13 × 11 = 71.5 cm²."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 4 m by 3 m by 8 m. Find its volume.",
"options": [
"68 m³",
"136 m³",
"96 m³",
"12 m³"
],
"answer": 2,
"explain": "Volume of a cuboid = length × width × height = 4 × 3 × 8 = 96 m³."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 1,100 N/m² acts on an area of 0.5 m². Find the force.",
"options": [
"2,200 N",
"550 N",
"1,100.5 N",
"5,500 N"
],
"answer": 1,
"explain": "Force = pressure × area = 1,100 × 0.5 = 550 N."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A stone has a density of 8.9 g/cm³ and a volume of 198 cm³. Find its mass.",
"options": [
"206.9 g",
"22.25 g",
"17,622 g",
"1,762.2 g"
],
"answer": 3,
"explain": "Mass = density × volume = 8.9 × 198 = 1,762.2 g."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 7 m and a height of 16 m. Find its volume, to 1 decimal place.",
"options": [
"351.9 m³",
"703.7 m³",
"2,463 m³",
"9,852 m³"
],
"answer": 2,
"explain": "Volume of a cylinder = πr²h = π × 7² × 16 = π × 49 × 16 = 2,463 m³ (1 d.p.)."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 13:10 and arrives at 18:15. How long is this?",
"options": [
"6 h 5 min",
"4 h 55 min",
"4 h 5 min",
"5 h 5 min"
],
"answer": 3,
"explain": "Count on from 13:10: up to the next whole hour, then whole hours, then the minutes to 18:15. The total is 5 h 5 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 9.4 cm into mm.",
"options": [
"94 mm",
"940 mm",
"9.4 mm",
"0.94 mm"
],
"answer": 0,
"explain": "1 cm = 10 mm. Going from cm to mm (a smaller unit) you multiply by 10: 9.4 × 10 = 94 mm."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 680 N/m² acts on an area of 0.8 m². Find the force.",
"options": [
"5,440 N",
"544 N",
"680.8 N",
"850 N"
],
"answer": 1,
"explain": "Force = pressure × area = 680 × 0.8 = 544 N."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 227.5 miles in 3 hours 30 minutes. What is the average speed?",
"options": [
"65 mph",
"68.9 mph",
"796.2 mph",
"1.1 mph"
],
"answer": 0,
"explain": "Speed = distance ÷ time. Write the time in hours: 3 hours 30 minutes = 3.5 hours. 227.5 ÷ 3.5 = 65 mph."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 gallon ≈ 4.5 litres. Convert 34 gallons into litres.",
"options": [
"7.56 litres",
"38.5 litres",
"153 litres",
"1,530 litres"
],
"answer": 2,
"explain": "Multiply by 4.5: 34 × 4.5 = 153 litres."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 63 litres, correct to the nearest whole number. What is the upper bound?",
"options": [
"63.5 litres",
"62.5 litres",
"64 litres",
"63.4 litres"
],
"answer": 0,
"explain": "Half of 1 is 0.5. Upper bound = 63 + 0.5 = 63.5 litres."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of Y from P is 070°. What is the bearing of P from Y?",
"options": [
"290°",
"110°",
"070°",
"250°"
],
"answer": 3,
"explain": "A back bearing is 180° different. 070° is less than 180°, so add 180°: 250°."
},
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a mass of 1,621.2 g and a volume of 84 cm³. Find its density.",
"options": [
"0.052 g/cm³",
"19.3 g/cm³",
"136,180.8 g/cm³",
"193 g/cm³"
],
"answer": 1,
"explain": "Density = mass ÷ volume = 1,621.2 ÷ 84 = 19.3 g/cm³."
}
],
[
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 20 litres?",
"options": [
"0.02 cm³",
"20,000,000 cm³",
"2,000 cm³",
"20,000 cm³"
],
"answer": 3,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 20 × 1000 = 20,000 cm³."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 450 litre tank in 30 minutes. What is the rate of flow?",
"options": [
"0.067 litres/min",
"150 litres/min",
"15 litres/min",
"13,500 litres/min"
],
"answer": 2,
"explain": "Rate = amount ÷ time = 450 ÷ 30 = 15 litres per minute."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 06:40 and ends at 12:05. How long is this?",
"options": [
"6 h 25 min",
"4 h 25 min",
"5 h 15 min",
"5 h 25 min"
],
"answer": 3,
"explain": "Count on from 06:40: up to the next whole hour, then whole hours, then the minutes to 12:05. The total is 5 h 25 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 12 cm long and 20 cm wide. What is its perimeter?",
"options": [
"32 cm",
"44 cm",
"240 cm",
"64 cm"
],
"answer": 3,
"explain": "Perimeter is the distance all the way round: 12 + 20 + 12 + 20 = 64 cm."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 216 km/h into m/s.",
"options": [
"3,600 m/s",
"777.6 m/s",
"60 m/s",
"3.6 m/s"
],
"answer": 2,
"explain": "216 km/h = 216,000 m in 3600 seconds. 216,000 ÷ 3600 = 60 m/s. (Shortcut: ÷ 3.6.)"
}
],
[
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 4 litres per minute. How long does it take to fill 108 litres?",
"options": [
"432 minutes",
"27 minutes",
"104 minutes",
"0.037 minutes"
],
"answer": 1,
"explain": "Time = amount ÷ rate = 108 ÷ 4 = 27 minutes."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 452.1 cl into litres.",
"options": [
"4.521 litres",
"45,210 litres",
"45.21 litres",
"0.4521 litres"
],
"answer": 0,
"explain": "1 litre = 100 cl. Going from cl to litres (a bigger unit) you divide by 100: 452.1 ÷ 100 = 4.521 litres."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 7 cm and 15 cm, and a perpendicular height of 4 cm. Find its area.",
"options": [
"210 cm²",
"16 cm²",
"44 cm²",
"88 cm²"
],
"answer": 2,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (7 + 15) × 4 = ½ × 22 × 4 = 44 cm²."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of B from P is 325°. What is the bearing of P from B?",
"options": [
"325°",
"215°",
"145°",
"035°"
],
"answer": 2,
"explain": "A back bearing is 180° different. 325° is more than 180°, so subtract 180°: 145°."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a density of 0.8 g/cm³ and a volume of 74 cm³. Find its mass.",
"options": [
"592 g",
"59.2 g",
"74.8 g",
"92.5 g"
],
"answer": 1,
"explain": "Mass = density × volume = 0.8 × 74 = 59.2 g."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 25,000. Two places are 3.25 km apart in real life. How far apart are they on the map?",
"options": [
"13 cm",
"1,300 cm",
"1.3 cm",
"130 cm"
],
"answer": 0,
"explain": "3.25 km = 325,000 cm. Map distance = 325,000 ÷ 25,000 = 13 cm."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 80 km/h for 2 hours 45 minutes. How far does it travel?",
"options": [
"13,200 km",
"29.1 km",
"220 km",
"196 km"
],
"answer": 2,
"explain": "Distance = speed × time. 2 hours 45 minutes = 2.75 hours, so 80 × 2.75 = 220 km."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 4.7 hours in hours and minutes.",
"options": [
"4 h 42 min",
"4 h 7 min",
"4 h 18 min",
"4 h 70 min"
],
"answer": 0,
"explain": "0.7 of an hour = 0.7 × 60 = 42 minutes, so 4.7 hours = 4 h 42 min. It is not 4 h 70 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 4 m and a perpendicular height of 3 m. Find its area.",
"options": [
"12 m²",
"3 m²",
"6 m²",
"7 m²"
],
"answer": 2,
"explain": "Area of a triangle = ½ × base × height = ½ × 4 × 3 = 6 m²."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 65 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"4,160.25 cm²",
"4,290.25 cm²",
"4,225 cm²",
"4,224.5 cm²"
],
"answer": 0,
"explain": "Lower bound of the side = 65 − 0.5 = 64.5 cm. Lower bound area = 64.5² = 4,160.25 cm²."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 14:35 and arrives at 21:00. How long is this?",
"options": [
"7 h 25 min",
"5 h 25 min",
"6 h 15 min",
"6 h 25 min"
],
"answer": 3,
"explain": "Count on from 14:35: up to the next whole hour, then whole hours, then the minutes to 21:00. The total is 6 h 25 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 9.6 m into cm.",
"options": [
"960 cm",
"9,600 cm",
"96 cm",
"0.096 cm"
],
"answer": 0,
"explain": "1 m = 100 cm. Going from m to cm (a smaller unit) you multiply by 100: 9.6 × 100 = 960 cm."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 20 m and a perpendicular height of 17 m. Find its area.",
"options": [
"37 m²",
"85 m²",
"170 m²",
"340 m²"
],
"answer": 2,
"explain": "Area of a triangle = ½ × base × height = ½ × 20 × 17 = 170 m²."
},
{
"topic": "Density",
"tier": "F",
"q": "A block has a density of 2.5 g/cm³ and a volume of 56 cm³. Find its mass.",
"options": [
"22.4 g",
"1,400 g",
"58.5 g",
"140 g"
],
"answer": 3,
"explain": "Mass = density × volume = 2.5 × 56 = 140 g."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 5 times those of the smaller one. The smaller solid has a volume of 17 cm³. Find the volume of the larger solid.",
"options": [
"85 cm³",
"425 cm³",
"255 cm³",
"2,125 cm³"
],
"answer": 3,
"explain": "Length scale factor 5 → volume scale factor 5³ = 125. 17 × 125 = 2,125 cm³."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "Write 4 hours 21 minutes as a decimal number of hours.",
"options": [
"4.65 hours",
"4.35 hours",
"4.21 hours",
"2.61 hours"
],
"answer": 1,
"explain": "21 minutes = 21 ÷ 60 = 0.35 of an hour, so 4 h 21 min = 4.35 hours."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 1,382 cm into m.",
"options": [
"13.82 m",
"1.382 m",
"138.2 m",
"138,200 m"
],
"answer": 0,
"explain": "1 m = 100 cm. Going from cm to m (a bigger unit) you divide by 100: 1,382 ÷ 100 = 13.82 m."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 06:50 and arrives at 10:55. How long is this?",
"options": [
"3 h 5 min",
"4 h 5 min",
"3 h 55 min",
"5 h 5 min"
],
"answer": 1,
"explain": "Count on from 06:50: up to the next whole hour, then whole hours, then the minutes to 10:55. The total is 4 h 5 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 6 mm. Find its area, to 1 decimal place.",
"options": [
"37.7 mm²",
"452.4 mm²",
"355.3 mm²",
"113.1 mm²"
],
"answer": 3,
"explain": "Area = πr² = π × 6² = π × 36 = 113.1 mm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 280 miles in 4 hours. What is the average speed?",
"options": [
"56 mph",
"1,120 mph",
"1.2 mph",
"70 mph"
],
"answer": 3,
"explain": "Speed = distance ÷ time. 280 ÷ 4 = 70 mph."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 200,000. Two places are 34 km apart in real life. How far apart are they on the map?",
"options": [
"1,700 cm",
"17 cm",
"1.7 cm",
"170 cm"
],
"answer": 1,
"explain": "34 km = 3,400,000 cm. Map distance = 3,400,000 ÷ 200,000 = 17 cm."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a mass of 1,735.5 g and a volume of 195 cm³. Find its density.",
"options": [
"8.9 g/cm³",
"89 g/cm³",
"338,422.5 g/cm³",
"0.112 g/cm³"
],
"answer": 0,
"explain": "Density = mass ÷ volume = 1,735.5 ÷ 195 = 8.9 g/cm³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 6.09 km into m.",
"options": [
"60,900 m",
"0.00609 m",
"6,090 m",
"609 m"
],
"answer": 2,
"explain": "1 km = 1,000 m. Going from km to m (a smaller unit) you multiply by 1,000: 6.09 × 1,000 = 6,090 m."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 157.5 km at an average speed of 45 km/h. How long does the journey take?",
"options": [
"3 h 50 min",
"4 h 30 min",
"3 h 30 min",
"3 h 45 min"
],
"answer": 2,
"explain": "Time = distance ÷ speed = 157.5 ÷ 45 = 3.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 3 h 30 min."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 2,250 cm² into m².",
"options": [
"2.25 m²",
"22.5 m²",
"0.225 m²",
"22,500,000 m²"
],
"answer": 2,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 2,250 ÷ 10,000 = 0.225 m²."
}
],
[
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 3.7 litres?",
"options": [
"3,700,000 cm³",
"370 cm³",
"0.0037 cm³",
"3,700 cm³"
],
"answer": 3,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 3.7 × 1000 = 3,700 cm³."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 21 cm long and 12 cm wide. What is its perimeter?",
"options": [
"54 cm",
"252 cm",
"33 cm",
"66 cm"
],
"answer": 3,
"explain": "Perimeter is the distance all the way round: 21 + 12 + 21 + 12 = 66 cm."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of A from B is 239°. What is the bearing of B from A?",
"options": [
"301°",
"121°",
"059°",
"239°"
],
"answer": 2,
"explain": "A back bearing is 180° different. 239° is more than 180°, so subtract 180°: 059°."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 1,500 g, correct to the nearest 100. What is the upper bound?",
"options": [
"1,540 g",
"1,450 g",
"1,600 g",
"1,550 g"
],
"answer": 3,
"explain": "Half of 100 is 50. Upper bound = 1,500 + 50 = 1,550 g."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 11:40 and arrives at 15:00. How long is this?",
"options": [
"2 h 20 min",
"3 h 20 min",
"4 h 20 min",
"3 h 10 min"
],
"answer": 1,
"explain": "Count on from 11:40: up to the next whole hour, then whole hours, then the minutes to 15:00. The total is 3 h 20 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 28 cm. One side is 12 cm. How long is the other side?",
"options": [
"2 cm",
"8 cm",
"14 cm",
"16 cm"
],
"answer": 0,
"explain": "Two sides of 12 make 24. 28 − 24 = 4, which is shared between the other two sides: 4 ÷ 2 = 2 cm."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 9.3 litres?",
"options": [
"9,300,000 cm³",
"0.0093 cm³",
"930 cm³",
"9,300 cm³"
],
"answer": 3,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 9.3 × 1000 = 9,300 cm³."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 2.7 kg into g.",
"options": [
"0.0027 g",
"270 g",
"2,700 g",
"27,000 g"
],
"answer": 2,
"explain": "1 kg = 1,000 g. Going from kg to g (a smaller unit) you multiply by 1,000: 2.7 × 1,000 = 2,700 g."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 gallon ≈ 4.5 litres. Convert 6 gallons into litres.",
"options": [
"270 litres",
"10.5 litres",
"1.33 litres",
"27 litres"
],
"answer": 3,
"explain": "Multiply by 4.5: 6 × 4.5 = 27 litres."
},
{
"topic": "Density",
"tier": "F",
"q": "A block has a density of 3 g/cm³ and a mass of 39 g. Find its volume.",
"options": [
"130 cm³",
"117 cm³",
"0.0769 cm³",
"13 cm³"
],
"answer": 3,
"explain": "Volume = mass ÷ density = 39 ÷ 3 = 13 cm³."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 30 km at an average speed of 20 km/h. How long does the journey take?",
"options": [
"1 h 30 min",
"1 h 45 min",
"1 h 50 min",
"2 h 30 min"
],
"answer": 0,
"explain": "Time = distance ÷ speed = 30 ÷ 20 = 1.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 1 h 30 min."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 14 m² into cm².",
"options": [
"14,000 cm²",
"0.0014 cm²",
"1,400 cm²",
"140,000 cm²"
],
"answer": 3,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 14 × 10,000 = 140,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 13:35 and arrives at 14:25. How long is this?",
"options": [
"1 h 10 min",
"1 h 20 min",
"50 min",
"1 h 50 min"
],
"answer": 2,
"explain": "Count on from 13:35: up to the next whole hour, then whole hours, then the minutes to 14:25. The total is 50 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Density",
"tier": "F",
"q": "A block has a mass of 214.8 g and a volume of 179 cm³. Find its density.",
"options": [
"0.833 g/cm³",
"38,449.2 g/cm³",
"12 g/cm³",
"1.2 g/cm³"
],
"answer": 3,
"explain": "Density = mass ÷ volume = 214.8 ÷ 179 = 1.2 g/cm³."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 12 m. Find its circumference, to 1 decimal place.",
"options": [
"452.4 m",
"150.8 m",
"37.7 m",
"75.4 m"
],
"answer": 3,
"explain": "Circumference = 2πr (or πd) = 2 × π × 12 = 75.4 m (1 d.p.)."
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 120 miles into kilometres.",
"options": [
"960 km",
"19.2 km",
"75 km",
"192 km"
],
"answer": 3,
"explain": "120 ÷ 5 = 24 lots of 5 miles. 24 × 8 = 192 km."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 7 cm by 4 cm by 5 cm. Find its total surface area.",
"options": [
"140 cm²",
"83 cm²",
"168 cm²",
"166 cm²"
],
"answer": 3,
"explain": "A cuboid has 3 pairs of faces: 2 × (7×4) + 2 × (7×5) + 2 × (4×5) = 2 × (28 + 35 + 20) = 166 cm²."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 0.1 m³ into cm³.",
"options": [
"100,000 cm³",
"100 cm³",
"10 cm³",
"1,000 cm³"
],
"answer": 0,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 0.1 × 1,000,000 = 100,000 cm³."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 3.3 cl into ml.",
"options": [
"0.33 ml",
"330 ml",
"3.3 ml",
"33 ml"
],
"answer": 3,
"explain": "1 cl = 10 ml. Going from cl to ml (a smaller unit) you multiply by 10: 3.3 × 10 = 33 ml."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 10 N acts on an area of 0.25 m². Find the pressure.",
"options": [
"0.025 N/m²",
"40 N/m²",
"20 N/m²",
"2.5 N/m²"
],
"answer": 1,
"explain": "Pressure = force ÷ area = 10 ÷ 0.25 = 40 N/m²."
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 40 miles into kilometres.",
"options": [
"64 km",
"320 km",
"6.4 km",
"25 km"
],
"answer": 0,
"explain": "40 ÷ 5 = 8 lots of 5 miles. 8 × 8 = 64 km."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 10 m and 16 m, and a perpendicular height of 12 m. Find its area.",
"options": [
"36 m²",
"960 m²",
"312 m²",
"156 m²"
],
"answer": 3,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (10 + 16) × 12 = ½ × 26 × 12 = 156 m²."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 15 km at an average speed of 30 km/h. How long does the journey take?",
"options": [
"45 min",
"1 h 30 min",
"0 h 50 min",
"30 min"
],
"answer": 3,
"explain": "Time = distance ÷ speed = 15 ÷ 30 = 0.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 30 min."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 1 hours 51 minutes as a decimal number of hours.",
"options": [
"1.15 hours",
"1.85 hours",
"1.51 hours",
"1.11 hours"
],
"answer": 1,
"explain": "51 minutes = 51 ÷ 60 = 0.85 of an hour, so 1 h 51 min = 1.85 hours."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 2 times those of the smaller one. The smaller solid has a volume of 19 cm³. Find the volume of the larger solid.",
"options": [
"114 cm³",
"76 cm³",
"152 cm³",
"38 cm³"
],
"answer": 2,
"explain": "Length scale factor 2 → volume scale factor 2³ = 8. 19 × 8 = 152 cm³."
}
],
[
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 6 litres per minute. How long does it take to fill 120 litres?",
"options": [
"114 minutes",
"720 minutes",
"20 minutes",
"0.05 minutes"
],
"answer": 2,
"explain": "Time = amount ÷ rate = 120 ÷ 6 = 20 minutes."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 8 cm and a height of 11 cm. Find its volume, to 1 decimal place.",
"options": [
"552.9 cm³",
"8,846.7 cm³",
"276.5 cm³",
"2,211.7 cm³"
],
"answer": 3,
"explain": "Volume of a cylinder = πr²h = π × 8² × 11 = π × 64 × 11 = 2,211.7 cm³ (1 d.p.)."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 13 cm by 2 cm by 9 cm. Find its total surface area.",
"options": [
"234 cm²",
"156 cm²",
"322 cm²",
"161 cm²"
],
"answer": 2,
"explain": "A cuboid has 3 pairs of faces: 2 × (13×2) + 2 × (13×9) + 2 × (2×9) = 2 × (26 + 117 + 18) = 322 cm²."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 2,300 cm² into m².",
"options": [
"2.3 m²",
"23 m²",
"23,000,000 m²",
"0.23 m²"
],
"answer": 3,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 2,300 ÷ 10,000 = 0.23 m²."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 500 m, correct to the nearest 10. What is the lower bound?",
"options": [
"495 m",
"499 m",
"505 m",
"490 m"
],
"answer": 0,
"explain": "Half of 10 is 5. Lower bound = 500 − 5 = 495 m."
}
],
[
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 5 litres?",
"options": [
"5,000 cm³",
"5,000,000 cm³",
"500 cm³",
"0.005 cm³"
],
"answer": 0,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 5 × 1000 = 5,000 cm³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 9.1 cm into mm.",
"options": [
"91 mm",
"0.91 mm",
"910 mm",
"9.1 mm"
],
"answer": 0,
"explain": "1 cm = 10 mm. Going from cm to mm (a smaller unit) you multiply by 10: 9.1 × 10 = 91 mm."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 14 mm. Find its area, to 1 decimal place.",
"options": [
"615.8 mm²",
"1,934.4 mm²",
"2,463 mm²",
"88 mm²"
],
"answer": 0,
"explain": "Area = πr² = π × 14² = π × 196 = 615.8 mm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 1,880 N/m² acts on an area of 1.5 m². Find the force.",
"options": [
"1,253.33 N",
"1,881.5 N",
"2,820 N",
"28,200 N"
],
"answer": 2,
"explain": "Force = pressure × area = 1,880 × 1.5 = 2,820 N."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 15.5 m/s into km/h.",
"options": [
"930 km/h",
"55.8 km/h",
"15,500 km/h",
"4.31 km/h"
],
"answer": 1,
"explain": "In 1 hour there are 3600 seconds, so 15.5 m/s = 15.5 × 3600 = 55,800 m per hour = 55.8 km/h. (Shortcut: × 3.6.)"
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 200,000. Two places are 24 km apart in real life. How far apart are they on the map?",
"options": [
"120 cm",
"1.2 cm",
"12 cm",
"1,200 cm"
],
"answer": 2,
"explain": "24 km = 2,400,000 cm. Map distance = 2,400,000 ÷ 200,000 = 12 cm."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 6 cm by 11 cm by 8 cm. Find its total surface area.",
"options": [
"528 cm²",
"202 cm²",
"396 cm²",
"404 cm²"
],
"answer": 3,
"explain": "A cuboid has 3 pairs of faces: 2 × (6×11) + 2 × (6×8) + 2 × (11×8) = 2 × (66 + 48 + 88) = 404 cm²."
},
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a density of 1.2 g/cm³ and a volume of 191 cm³. Find its mass.",
"options": [
"159.17 g",
"192.2 g",
"2,292 g",
"229.2 g"
],
"answer": 3,
"explain": "Mass = density × volume = 1.2 × 191 = 229.2 g."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 9.6 hours in hours and minutes.",
"options": [
"9 h 36 min",
"9 h 60 min",
"9 h 6 min",
"9 h 24 min"
],
"answer": 0,
"explain": "0.6 of an hour = 0.6 × 60 = 36 minutes, so 9.6 hours = 9 h 36 min. It is not 9 h 60 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 2,460 N acts on an area of 1.5 m². Find the pressure.",
"options": [
"0.0006 N/m²",
"820 N/m²",
"3,690 N/m²",
"1,640 N/m²"
],
"answer": 3,
"explain": "Pressure = force ÷ area = 2,460 ÷ 1.5 = 1,640 N/m²."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 320 km at an average speed of 80 km/h. How long does the journey take?",
"options": [
"4 h",
"4 h 15 min",
"5 h",
"4 h 30 min"
],
"answer": 0,
"explain": "Time = distance ÷ speed = 320 ÷ 80 = 4 hours."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of X from P is 313°. What is the bearing of P from X?",
"options": [
"313°",
"133°",
"047°",
"227°"
],
"answer": 1,
"explain": "A back bearing is 180° different. 313° is more than 180°, so subtract 180°: 133°."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 104.4 ml into litres.",
"options": [
"1.044 litres",
"104,400 litres",
"0.01044 litres",
"0.1044 litres"
],
"answer": 3,
"explain": "1 litre = 1,000 ml. Going from ml to litres (a bigger unit) you divide by 1,000: 104.4 ÷ 1,000 = 0.1044 litres."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 5 cm and 19 cm, and a perpendicular height of 9 cm. Find its area.",
"options": [
"216 cm²",
"63 cm²",
"108 cm²",
"427.5 cm²"
],
"answer": 2,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (5 + 19) × 9 = ½ × 24 × 9 = 108 cm²."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 32 litre tank in 8 minutes. What is the rate of flow?",
"options": [
"4 litres/min",
"0.25 litres/min",
"40 litres/min",
"256 litres/min"
],
"answer": 0,
"explain": "Rate = amount ÷ time = 32 ÷ 8 = 4 litres per minute."
}
],
[
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 696.7 g into kg.",
"options": [
"0.6967 kg",
"0.06967 kg",
"6.967 kg",
"696,700 kg"
],
"answer": 0,
"explain": "1 kg = 1,000 g. Going from g to kg (a bigger unit) you divide by 1,000: 696.7 ÷ 1,000 = 0.6967 kg."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 250,000. Two towns are 6.5 cm apart on the map. How far apart are they in real life?",
"options": [
"16.25 km",
"162.5 km",
"1,625 km",
"1.625 km"
],
"answer": 0,
"explain": "Real distance = 6.5 × 250,000 = 1,625,000 cm. Divide by 100 for metres (16,250 m) and by 1000 for km: 16.25 km."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 14 mm. Find its circumference, to 1 decimal place.",
"options": [
"44 mm",
"88 mm",
"615.8 mm",
"175.9 mm"
],
"answer": 1,
"explain": "Circumference = 2πr (or πd) = 2 × π × 14 = 88 mm (1 d.p.)."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 75 mph for 3 hours. How far does it travel?",
"options": [
"13,500 miles",
"300 miles",
"225 miles",
"25 miles"
],
"answer": 2,
"explain": "Distance = speed × time. 75 × 3 = 225 miles."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 67 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"269.6 cm",
"266 cm",
"270 cm",
"268 cm"
],
"answer": 2,
"explain": "Upper bound of the side = 67 + 0.5 = 67.5 cm. Upper bound perimeter = 4 × 67.5 = 270 cm."
}
],
[
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of P from B is 040°. What is the bearing of B from P?",
"options": [
"220°",
"040°",
"320°",
"140°"
],
"answer": 0,
"explain": "A back bearing is 180° different. 040° is less than 180°, so add 180°: 220°."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 16 cm long and 19 cm wide. What is its perimeter?",
"options": [
"70 cm",
"304 cm",
"35 cm",
"51 cm"
],
"answer": 0,
"explain": "Perimeter is the distance all the way round: 16 + 19 + 16 + 19 = 70 cm."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 8 cm by 6 cm by 3 cm. Find its volume.",
"options": [
"90 cm³",
"180 cm³",
"144 cm³",
"48 cm³"
],
"answer": 2,
"explain": "Volume of a cuboid = length × width × height = 8 × 6 × 3 = 144 cm³."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 30 cm. Find its area, to 1 decimal place.",
"options": [
"188.5 cm²",
"2,827.4 cm²",
"706.9 cm²",
"94.2 cm²"
],
"answer": 2,
"explain": "First halve the diameter: r = 30 ÷ 2 = 15. Area = πr² = π × 15² = 706.9 cm² (1 d.p.)."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 1,056 N acts on an area of 0.8 m². Find the pressure.",
"options": [
"844.8 N/m²",
"1,320 N/m²",
"0.0008 N/m²",
"660 N/m²"
],
"answer": 1,
"explain": "Pressure = force ÷ area = 1,056 ÷ 0.8 = 1,320 N/m²."
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 19 m into cm.",
"options": [
"19,000 cm",
"190 cm",
"0.19 cm",
"1,900 cm"
],
"answer": 3,
"explain": "1 m = 100 cm. Going from m to cm (a smaller unit) you multiply by 100: 19 × 100 = 1,900 cm."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of X from A is 046°. What is the bearing of A from X?",
"options": [
"314°",
"046°",
"134°",
"226°"
],
"answer": 3,
"explain": "A back bearing is 180° different. 046° is less than 180°, so add 180°: 226°."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 80 miles at an average speed of 40 mph. How long does the journey take?",
"options": [
"3 h",
"2 h 30 min",
"2 h",
"2 h 15 min"
],
"answer": 2,
"explain": "Time = distance ÷ speed = 80 ÷ 40 = 2 hours."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 120 litre tank in 40 minutes. What is the rate of flow?",
"options": [
"4,800 litres/min",
"3 litres/min",
"0.333 litres/min",
"30 litres/min"
],
"answer": 1,
"explain": "Rate = amount ÷ time = 120 ÷ 40 = 3 litres per minute."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 48 m/s into km/h.",
"options": [
"48,000 km/h",
"2,880 km/h",
"172.8 km/h",
"13.33 km/h"
],
"answer": 2,
"explain": "In 1 hour there are 3600 seconds, so 48 m/s = 48 × 3600 = 172,800 m per hour = 172.8 km/h. (Shortcut: × 3.6.)"
}
],
[
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 7.23 kg into g.",
"options": [
"723 g",
"0.00723 g",
"7,230 g",
"72,300 g"
],
"answer": 2,
"explain": "1 kg = 1,000 g. Going from kg to g (a smaller unit) you multiply by 1,000: 7.23 × 1,000 = 7,230 g."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 2.3 hours in hours and minutes.",
"options": [
"2 h 3 min",
"2 h 30 min",
"2 h 42 min",
"2 h 18 min"
],
"answer": 3,
"explain": "0.3 of an hour = 0.3 × 60 = 18 minutes, so 2.3 hours = 2 h 18 min. It is not 2 h 30 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 7 m by 7 m by 6 m. Find its volume.",
"options": [
"266 m³",
"294 m³",
"49 m³",
"133 m³"
],
"answer": 1,
"explain": "Volume of a cuboid = length × width × height = 7 × 7 × 6 = 294 m³."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 240 m, correct to the nearest 10. What is the upper bound?",
"options": [
"245 m",
"244 m",
"250 m",
"235 m"
],
"answer": 0,
"explain": "Half of 10 is 5. Upper bound = 240 + 5 = 245 m."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 3 times those of the smaller one. The smaller shape has an area of 24 cm². Find the area of the larger shape.",
"options": [
"216 cm²",
"72 cm²",
"648 cm²",
"144 cm²"
],
"answer": 0,
"explain": "Length scale factor 3 → area scale factor 3² = 9. 24 × 9 = 216 cm²."
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 20 mm. Find its area, to 1 decimal place.",
"options": [
"62.8 mm²",
"314.2 mm²",
"1,256.6 mm²",
"125.7 mm²"
],
"answer": 1,
"explain": "First halve the diameter: r = 20 ÷ 2 = 10. Area = πr² = π × 10² = 314.2 mm² (1 d.p.)."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 9.5 m² into cm².",
"options": [
"95,000 cm²",
"950 cm²",
"9,500 cm²",
"0.00095 cm²"
],
"answer": 0,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 9.5 × 10,000 = 95,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 411.9 m into km.",
"options": [
"0.4119 km",
"4.119 km",
"411,900 km",
"0.04119 km"
],
"answer": 0,
"explain": "1 km = 1,000 m. Going from m to km (a bigger unit) you divide by 1,000: 411.9 ÷ 1,000 = 0.4119 km."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 10 litres per minute. How long does it take to fill 80 litres?",
"options": [
"0.125 minutes",
"800 minutes",
"8 minutes",
"70 minutes"
],
"answer": 2,
"explain": "Time = amount ÷ rate = 80 ÷ 10 = 8 minutes."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 17 cm and a perpendicular height of 18 cm. Find its area.",
"options": [
"306 cm²",
"76.5 cm²",
"153 cm²",
"35 cm²"
],
"answer": 2,
"explain": "Area of a triangle = ½ × base × height = ½ × 17 × 18 = 153 cm²."
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 12.8 kg, correct to 1 decimal place. What is the lower bound?",
"options": [
"12.75 kg",
"12.85 kg",
"12.7 kg",
"12.79 kg"
],
"answer": 0,
"explain": "Half of 0.1 is 0.05. Lower bound = 12.8 − 0.05 = 12.75 kg."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 817.9 m into km.",
"options": [
"8.179 km",
"0.8179 km",
"0.08179 km",
"817,900 km"
],
"answer": 1,
"explain": "1 km = 1,000 m. Going from m to km (a bigger unit) you divide by 1,000: 817.9 ÷ 1,000 = 0.8179 km."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 60 miles at an average speed of 20 mph. How long does the journey take?",
"options": [
"4 h",
"3 h",
"3 h 15 min",
"3 h 30 min"
],
"answer": 1,
"explain": "Time = distance ÷ speed = 60 ÷ 20 = 3 hours."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 7 cm. Find its area, to 1 decimal place.",
"options": [
"44 cm²",
"483.6 cm²",
"615.8 cm²",
"153.9 cm²"
],
"answer": 3,
"explain": "Area = πr² = π × 7² = π × 49 = 153.9 cm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 3 times those of the smaller one. The smaller shape has an area of 7 cm². Find the area of the larger shape.",
"options": [
"63 cm²",
"42 cm²",
"21 cm²",
"189 cm²"
],
"answer": 0,
"explain": "Length scale factor 3 → area scale factor 3² = 9. 7 × 9 = 63 cm²."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 250,000. Two towns are 11.5 cm apart on the map. How far apart are they in real life?",
"options": [
"2,875 km",
"287.5 km",
"28.75 km",
"2.875 km"
],
"answer": 2,
"explain": "Real distance = 11.5 × 250,000 = 2,875,000 cm. Divide by 100 for metres (28,750 m) and by 1000 for km: 28.75 km."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 5,343 cl into litres.",
"options": [
"534,300 litres",
"534.3 litres",
"53.43 litres",
"5.343 litres"
],
"answer": 2,
"explain": "1 litre = 100 cl. Going from cl to litres (a bigger unit) you divide by 100: 5,343 ÷ 100 = 53.43 litres."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 08:45 and finishes at 10:55. How long is this?",
"options": [
"3 h 10 min",
"2 h",
"1 h 10 min",
"2 h 10 min"
],
"answer": 3,
"explain": "Count on from 08:45: up to the next whole hour, then whole hours, then the minutes to 10:55. The total is 2 h 10 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of X from A is 258°. What is the bearing of A from X?",
"options": [
"258°",
"282°",
"102°",
"078°"
],
"answer": 3,
"explain": "A back bearing is 180° different. 258° is more than 180°, so subtract 180°: 078°."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 600 N/m² acts on an area of 0.8 m². Find the force.",
"options": [
"480 N",
"4,800 N",
"600.8 N",
"750 N"
],
"answer": 0,
"explain": "Force = pressure × area = 600 × 0.8 = 480 N."
}
],
[
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 6 cm by 11 cm by 10 cm. Find its volume.",
"options": [
"472 cm³",
"66 cm³",
"660 cm³",
"236 cm³"
],
"answer": 2,
"explain": "Volume of a cuboid = length × width × height = 6 × 11 × 10 = 660 cm³."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 4.1 hours in hours and minutes.",
"options": [
"4 h 54 min",
"4 h 10 min",
"4 h 6 min",
"4 h 1 min"
],
"answer": 2,
"explain": "0.1 of an hour = 0.1 × 60 = 6 minutes, so 4.1 hours = 4 h 6 min. It is not 4 h 10 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 11:45 and arrives at 14:10. How long is this?",
"options": [
"3 h 25 min",
"2 h 15 min",
"2 h 25 min",
"1 h 25 min"
],
"answer": 2,
"explain": "Count on from 11:45: up to the next whole hour, then whole hours, then the minutes to 14:10. The total is 2 h 25 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 7.6 m² into cm².",
"options": [
"7,600 cm²",
"760 cm²",
"76,000 cm²",
"0.00076 cm²"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 7.6 × 10,000 = 76,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 1,328 N acts on an area of 0.8 m². Find the pressure.",
"options": [
"830 N/m²",
"1,062.4 N/m²",
"0.0006 N/m²",
"1,660 N/m²"
],
"answer": 3,
"explain": "Pressure = force ÷ area = 1,328 ÷ 0.8 = 1,660 N/m²."
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 8.17 m into cm.",
"options": [
"8,170 cm",
"817 cm",
"81.7 cm",
"0.0817 cm"
],
"answer": 1,
"explain": "1 m = 100 cm. Going from m to cm (a smaller unit) you multiply by 100: 8.17 × 100 = 817 cm."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 08:45 and arrives at 11:05. How long is this?",
"options": [
"3 h 20 min",
"2 h 20 min",
"2 h 10 min",
"1 h 20 min"
],
"answer": 1,
"explain": "Count on from 08:45: up to the next whole hour, then whole hours, then the minutes to 11:05. The total is 2 h 20 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 15 m and a perpendicular height of 7 m. Find its area.",
"options": [
"26.25 m²",
"105 m²",
"22 m²",
"52.5 m²"
],
"answer": 3,
"explain": "Area of a triangle = ½ × base × height = ½ × 15 × 7 = 52.5 m²."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 880 cm² into m².",
"options": [
"8,800,000 m²",
"0.088 m²",
"0.88 m²",
"8.8 m²"
],
"answer": 1,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 880 ÷ 10,000 = 0.088 m²."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 46 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"2,070.25 cm²",
"2,115.5 cm²",
"2,116 cm²",
"2,162.25 cm²"
],
"answer": 0,
"explain": "Lower bound of the side = 46 − 0.5 = 45.5 cm. Lower bound area = 45.5² = 2,070.25 cm²."
}
],
[
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 15 litres?",
"options": [
"0.015 cm³",
"15,000,000 cm³",
"1,500 cm³",
"15,000 cm³"
],
"answer": 3,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 15 × 1000 = 15,000 cm³."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 3.7 hours in hours and minutes.",
"options": [
"3 h 18 min",
"3 h 7 min",
"3 h 42 min",
"3 h 70 min"
],
"answer": 2,
"explain": "0.7 of an hour = 0.7 × 60 = 42 minutes, so 3.7 hours = 3 h 42 min. It is not 3 h 70 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 141.8 g into kg.",
"options": [
"141,800 kg",
"0.01418 kg",
"0.1418 kg",
"1.418 kg"
],
"answer": 2,
"explain": "1 kg = 1,000 g. Going from g to kg (a bigger unit) you divide by 1,000: 141.8 ÷ 1,000 = 0.1418 kg."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 100,000. Two towns are 7 cm apart on the map. How far apart are they in real life?",
"options": [
"700 km",
"7 km",
"0.7 km",
"70 km"
],
"answer": 1,
"explain": "Real distance = 7 × 100,000 = 700,000 cm. Divide by 100 for metres (7,000 m) and by 1000 for km: 7 km."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 45 km in 45 minutes. What is the average speed?",
"options": [
"60 km/h",
"1 km/h",
"33.8 km/h",
"100 km/h"
],
"answer": 0,
"explain": "Speed = distance ÷ time. Write the time in hours: 45 minutes = 0.75 hours. 45 ÷ 0.75 = 60 km/h."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 10 cm, a perpendicular height of 3 cm and a sloping side of 6 cm. Find its area.",
"options": [
"30 cm²",
"60 cm²",
"15 cm²",
"32 cm²"
],
"answer": 0,
"explain": "Area of a parallelogram = base × perpendicular height = 10 × 3 = 30 cm². The sloping side is not needed."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 4,600 cm² into m².",
"options": [
"46,000,000 m²",
"46 m²",
"4.6 m²",
"0.46 m²"
],
"answer": 3,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 4,600 ÷ 10,000 = 0.46 m²."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 80 km/h for 1 hour 15 minutes. How far does it travel?",
"options": [
"6,000 km",
"100 km",
"92 km",
"64 km"
],
"answer": 1,
"explain": "Distance = speed × time. 1 hour 15 minutes = 1.25 hours, so 80 × 1.25 = 100 km."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 473 cm³?",
"options": [
"473,000 litres",
"4.73 litres",
"0.473 litres",
"47.3 litres"
],
"answer": 2,
"explain": "1 litre = 1000 cm³, so divide by 1000: 473 ÷ 1000 = 0.473 litres."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 18 km/h into m/s.",
"options": [
"5 m/s",
"0.3 m/s",
"64.8 m/s",
"300 m/s"
],
"answer": 0,
"explain": "18 km/h = 18,000 m in 3600 seconds. 18,000 ÷ 3600 = 5 m/s. (Shortcut: ÷ 3.6.)"
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 34 cm. Find its area, to 1 decimal place.",
"options": [
"213.6 cm²",
"3,631.7 cm²",
"907.9 cm²",
"106.8 cm²"
],
"answer": 2,
"explain": "First halve the diameter: r = 34 ÷ 2 = 17. Area = πr² = π × 17² = 907.9 cm² (1 d.p.)."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of Q from P is 319°. What is the bearing of P from Q?",
"options": [
"319°",
"041°",
"221°",
"139°"
],
"answer": 3,
"explain": "A back bearing is 180° different. 319° is more than 180°, so subtract 180°: 139°."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 2.9 hours in hours and minutes.",
"options": [
"2 h 9 min",
"2 h 54 min",
"2 h 6 min",
"2 h 90 min"
],
"answer": 1,
"explain": "0.9 of an hour = 0.9 × 60 = 54 minutes, so 2.9 hours = 2 h 54 min. It is not 2 h 90 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 7,251 ml into litres.",
"options": [
"0.7251 litres",
"7,251,000 litres",
"72.51 litres",
"7.251 litres"
],
"answer": 3,
"explain": "1 litre = 1,000 ml. Going from ml to litres (a bigger unit) you divide by 1,000: 7,251 ÷ 1,000 = 7.251 litres."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 4 m by 3 m by 5 m. Find its volume.",
"options": [
"12 m³",
"47 m³",
"60 m³",
"94 m³"
],
"answer": 2,
"explain": "Volume of a cuboid = length × width × height = 4 × 3 × 5 = 60 m³."
}
],
[
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 22 kg into g.",
"options": [
"2,200 g",
"220,000 g",
"22,000 g",
"0.022 g"
],
"answer": 2,
"explain": "1 kg = 1,000 g. Going from kg to g (a smaller unit) you multiply by 1,000: 22 × 1,000 = 22,000 g."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 10 m long and 9 m wide. What is its perimeter?",
"options": [
"38 m",
"90 m",
"19 m",
"29 m"
],
"answer": 0,
"explain": "Perimeter is the distance all the way round: 10 + 9 + 10 + 9 = 38 m."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 15:55 and arrives at 22:00. How long is this?",
"options": [
"6 h 5 min",
"5 h 5 min",
"7 h 5 min",
"6 h 45 min"
],
"answer": 0,
"explain": "Count on from 15:55: up to the next whole hour, then whole hours, then the minutes to 22:00. The total is 6 h 5 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Density",
"tier": "F",
"q": "A block has a density of 2.5 g/cm³ and a volume of 129 cm³. Find its mass.",
"options": [
"131.5 g",
"51.6 g",
"3,225 g",
"322.5 g"
],
"answer": 3,
"explain": "Mass = density × volume = 2.5 × 129 = 322.5 g."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 2 hours 21 minutes as a decimal number of hours.",
"options": [
"2.65 hours",
"1.41 hours",
"2.21 hours",
"2.35 hours"
],
"answer": 3,
"explain": "21 minutes = 21 ÷ 60 = 0.35 of an hour, so 2 h 21 min = 2.35 hours."
}
],
[
{
"topic": "Area units",
"tier": "F",
"q": "Convert 3.5 m² into cm².",
"options": [
"350 cm²",
"35,000 cm²",
"3,500 cm²",
"0.00035 cm²"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 3.5 × 10,000 = 35,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 5 m and height 5 m. The prism is 16 m long. Find its volume.",
"options": [
"200 m³",
"400 m³",
"12.5 m³",
"80 m³"
],
"answer": 0,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 5 × 5 = 12.5. 12.5 × 16 = 200 m³."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 240 km into miles.",
"options": [
"384 miles",
"30 miles",
"150 miles",
"1,200 miles"
],
"answer": 2,
"explain": "240 ÷ 8 = 30 lots of 8 km. 30 × 5 = 150 miles."
},
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a density of 11.3 g/cm³ and a volume of 173 cm³. Find its mass.",
"options": [
"19,549 g",
"15.31 g",
"184.3 g",
"1,954.9 g"
],
"answer": 3,
"explain": "Mass = density × volume = 11.3 × 173 = 1,954.9 g."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 30 mph for 1 hour 15 minutes. How far does it travel?",
"options": [
"37.5 miles",
"2,250 miles",
"34.5 miles",
"24 miles"
],
"answer": 0,
"explain": "Distance = speed × time. 1 hour 15 minutes = 1.25 hours, so 30 × 1.25 = 37.5 miles."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 10:40 and arrives at 17:15. How long is this?",
"options": [
"7 h 35 min",
"6 h 25 min",
"5 h 35 min",
"6 h 35 min"
],
"answer": 3,
"explain": "Count on from 10:40: up to the next whole hour, then whole hours, then the minutes to 17:15. The total is 6 h 35 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 6 cm, a perpendicular height of 13 cm and a sloping side of 18 cm. Find its area.",
"options": [
"39 cm²",
"108 cm²",
"78 cm²",
"48 cm²"
],
"answer": 2,
"explain": "Area of a parallelogram = base × perpendicular height = 6 × 13 = 78 cm². The sloping side is not needed."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of P from Q is 147°. What is the bearing of Q from P?",
"options": [
"033°",
"147°",
"327°",
"213°"
],
"answer": 2,
"explain": "A back bearing is 180° different. 147° is less than 180°, so add 180°: 327°."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 58 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"3,422.25 cm²",
"3,306.25 cm²",
"3,364 cm²",
"3,363.5 cm²"
],
"answer": 1,
"explain": "Lower bound of the side = 58 − 0.5 = 57.5 cm. Lower bound area = 57.5² = 3,306.25 cm²."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 4 times those of the smaller one. The smaller solid has a volume of 25 cm³. Find the volume of the larger solid.",
"options": [
"100 cm³",
"400 cm³",
"300 cm³",
"1,600 cm³"
],
"answer": 3,
"explain": "Length scale factor 4 → volume scale factor 4³ = 64. 25 × 64 = 1,600 cm³."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "Write 5 hours 12 minutes as a decimal number of hours.",
"options": [
"5.8 hours",
"5.12 hours",
"5.2 hours",
"3.12 hours"
],
"answer": 2,
"explain": "12 minutes = 12 ÷ 60 = 0.2 of an hour, so 5 h 12 min = 5.2 hours."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of B from Y is 336°. What is the bearing of Y from B?",
"options": [
"024°",
"336°",
"204°",
"156°"
],
"answer": 3,
"explain": "A back bearing is 180° different. 336° is more than 180°, so subtract 180°: 156°."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 9 m into mm.",
"options": [
"0.009 mm",
"9,000 mm",
"900 mm",
"90,000 mm"
],
"answer": 1,
"explain": "1 m = 1,000 mm. Going from m to mm (a smaller unit) you multiply by 1,000: 9 × 1,000 = 9,000 mm."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 inch ≈ 2.5 cm. Convert 35 inches into centimetres.",
"options": [
"87.5 cm",
"875 cm",
"14 cm",
"420 cm"
],
"answer": 0,
"explain": "Multiply by 2.5: 35 × 2.5 = 87.5 cm."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 8 litres?",
"options": [
"8,000 cm³",
"8,000,000 cm³",
"0.008 cm³",
"800 cm³"
],
"answer": 0,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 8 × 1000 = 8,000 cm³."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 5 m, a perpendicular height of 11 m and a sloping side of 16 m. Find its area.",
"options": [
"80 m²",
"27.5 m²",
"55 m²",
"42 m²"
],
"answer": 2,
"explain": "Area of a parallelogram = base × perpendicular height = 5 × 11 = 55 m². The sloping side is not needed."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 9 m and a height of 18 m. Find its volume, to 1 decimal place.",
"options": [
"18,321.8 m³",
"1,017.9 m³",
"508.9 m³",
"4,580.4 m³"
],
"answer": 3,
"explain": "Volume of a cylinder = πr²h = π × 9² × 18 = π × 81 × 18 = 4,580.4 m³ (1 d.p.)."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 14 m. Find its circumference, to 1 decimal place.",
"options": [
"175.9 m",
"615.8 m",
"88 m",
"44 m"
],
"answer": 2,
"explain": "Circumference = 2πr (or πd) = 2 × π × 14 = 88 m (1 d.p.)."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 3,400 cm² into m².",
"options": [
"34 m²",
"34,000,000 m²",
"0.34 m²",
"3.4 m²"
],
"answer": 2,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 3,400 ÷ 10,000 = 0.34 m²."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a mass of 174 g and a volume of 145 cm³. Find its density.",
"options": [
"1.2 g/cm³",
"0.833 g/cm³",
"12 g/cm³",
"25,230 g/cm³"
],
"answer": 0,
"explain": "Density = mass ÷ volume = 174 ÷ 145 = 1.2 g/cm³."
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 7,200 g, correct to the nearest 100. What is the upper bound?",
"options": [
"7,240 g",
"7,250 g",
"7,300 g",
"7,150 g"
],
"answer": 1,
"explain": "Half of 100 is 50. Upper bound = 7,200 + 50 = 7,250 g."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 11:10 and finishes at 15:20. How long is this?",
"options": [
"4 h",
"4 h 10 min",
"3 h 10 min",
"5 h 10 min"
],
"answer": 1,
"explain": "Count on from 11:10: up to the next whole hour, then whole hours, then the minutes to 15:20. The total is 4 h 10 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 50,000. Two towns are 13.5 cm apart on the map. How far apart are they in real life?",
"options": [
"6.75 km",
"0.675 km",
"67.5 km",
"675 km"
],
"answer": 0,
"explain": "Real distance = 13.5 × 50,000 = 675,000 cm. Divide by 100 for metres (6,750 m) and by 1000 for km: 6.75 km."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 5.2 m² into cm².",
"options": [
"520 cm²",
"0.00052 cm²",
"5,200 cm²",
"52,000 cm²"
],
"answer": 3,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 5.2 × 10,000 = 52,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 5 times those of the smaller one. The smaller shape has an area of 34 cm². Find the area of the larger shape.",
"options": [
"170 cm²",
"4,250 cm²",
"850 cm²",
"340 cm²"
],
"answer": 2,
"explain": "Length scale factor 5 → area scale factor 5² = 25. 34 × 25 = 850 cm²."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A bar has a mass of 93 g and a volume of 186 cm³. Find its density.",
"options": [
"0.5 g/cm³",
"5 g/cm³",
"2 g/cm³",
"17,298 g/cm³"
],
"answer": 0,
"explain": "Density = mass ÷ volume = 93 ÷ 186 = 0.5 g/cm³."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of P from B is 117°. What is the bearing of B from P?",
"options": [
"297°",
"117°",
"063°",
"243°"
],
"answer": 0,
"explain": "A back bearing is 180° different. 117° is less than 180°, so add 180°: 297°."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 7 m. Find its circumference, to 1 decimal place.",
"options": [
"22 m",
"153.9 m",
"44 m",
"88 m"
],
"answer": 2,
"explain": "Circumference = 2πr (or πd) = 2 × π × 7 = 44 m (1 d.p.)."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 15 miles at an average speed of 20 mph. How long does the journey take?",
"options": [
"1 h 45 min",
"30 min",
"45 min",
"0 h 75 min"
],
"answer": 2,
"explain": "Time = distance ÷ speed = 15 ÷ 20 = 0.75 hours. 0.75 hours × 60 = 45 minutes, so the time is 45 min."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 13 m and a perpendicular height of 8 m. Find its area.",
"options": [
"104 m²",
"52 m²",
"26 m²",
"21 m²"
],
"answer": 1,
"explain": "Area of a triangle = ½ × base × height = ½ × 13 × 8 = 52 m²."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 25 m long and 14 m wide. What is its perimeter?",
"options": [
"78 m",
"64 m",
"39 m",
"350 m"
],
"answer": 0,
"explain": "Perimeter is the distance all the way round: 25 + 14 + 25 + 14 = 78 m."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "A tank holds 2.3 m³ of water. How many litres is this?",
"options": [
"2,300,000 litres",
"2,300 litres",
"230 litres",
"0.0023 litres"
],
"answer": 1,
"explain": "1 m³ = 1,000,000 cm³ and 1 litre = 1000 cm³, so 1 m³ = 1000 litres. 2.3 × 1000 = 2,300 litres."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 4 litres, correct to the nearest whole number. What is the upper bound?",
"options": [
"4.4 litres",
"4.5 litres",
"3.5 litres",
"5 litres"
],
"answer": 1,
"explain": "Half of 1 is 0.5. Upper bound = 4 + 0.5 = 4.5 litres."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 5 times those of the smaller one. The smaller solid has a volume of 4 cm³. Find the volume of the larger solid.",
"options": [
"500 cm³",
"60 cm³",
"20 cm³",
"100 cm³"
],
"answer": 0,
"explain": "Length scale factor 5 → volume scale factor 5³ = 125. 4 × 125 = 500 cm³."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 360 N acts on an area of 0.2 m². Find the pressure.",
"options": [
"72 N/m²",
"0.0006 N/m²",
"900 N/m²",
"1,800 N/m²"
],
"answer": 3,
"explain": "Pressure = force ÷ area = 360 ÷ 0.2 = 1,800 N/m²."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a density of 19.3 g/cm³ and a volume of 98 cm³. Find its mass.",
"options": [
"18,914 g",
"1,891.4 g",
"117.3 g",
"5.08 g"
],
"answer": 1,
"explain": "Mass = density × volume = 19.3 × 98 = 1,891.4 g."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 8.8 pounds into kg.",
"options": [
"19.36 kg",
"0.4 kg",
"6.6 kg",
"4 kg"
],
"answer": 3,
"explain": "Divide by 2.2: 8.8 ÷ 2.2 = 4 kg."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 24 cm. Find its area, to 1 decimal place.",
"options": [
"452.4 cm²",
"1,809.6 cm²",
"150.8 cm²",
"75.4 cm²"
],
"answer": 0,
"explain": "First halve the diameter: r = 24 ÷ 2 = 12. Area = πr² = π × 12² = 452.4 cm² (1 d.p.)."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 9 cm and height 4 cm. The prism is 15 cm long. Find its volume.",
"options": [
"18 cm³",
"270 cm³",
"97.5 cm³",
"540 cm³"
],
"answer": 1,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 9 × 4 = 18. 18 × 15 = 270 cm³."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 920 N/m² acts on an area of 0.5 m². Find the force.",
"options": [
"920.5 N",
"4,600 N",
"1,840 N",
"460 N"
],
"answer": 3,
"explain": "Force = pressure × area = 920 × 0.5 = 460 N."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 14:20 and finishes at 18:30. How long is this?",
"options": [
"4 h",
"5 h 10 min",
"3 h 10 min",
"4 h 10 min"
],
"answer": 3,
"explain": "Count on from 14:20: up to the next whole hour, then whole hours, then the minutes to 18:30. The total is 4 h 10 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 12 cm and a perpendicular height of 4 cm. Find its area.",
"options": [
"48 cm²",
"16 cm²",
"24 cm²",
"12 cm²"
],
"answer": 2,
"explain": "Area of a triangle = ½ × base × height = ½ × 12 × 4 = 24 cm²."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 55.2 ml into litres.",
"options": [
"0.00552 litres",
"0.0552 litres",
"0.552 litres",
"55,200 litres"
],
"answer": 1,
"explain": "1 litre = 1,000 ml. Going from ml to litres (a bigger unit) you divide by 1,000: 55.2 ÷ 1,000 = 0.0552 litres."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 153 km/h into m/s.",
"options": [
"2.55 m/s",
"550.8 m/s",
"2,550 m/s",
"42.5 m/s"
],
"answer": 3,
"explain": "153 km/h = 153,000 m in 3600 seconds. 153,000 ÷ 3600 = 42.5 m/s. (Shortcut: ÷ 3.6.)"
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 30 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"118 cm",
"122 cm",
"121.6 cm",
"120 cm"
],
"answer": 1,
"explain": "Upper bound of the side = 30 + 0.5 = 30.5 cm. Upper bound perimeter = 4 × 30.5 = 122 cm."
}
],
[
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "A tank holds 7 m³ of water. How many litres is this?",
"options": [
"700 litres",
"7,000,000 litres",
"7,000 litres",
"0.007 litres"
],
"answer": 2,
"explain": "1 m³ = 1,000,000 cm³ and 1 litre = 1000 cm³, so 1 m³ = 1000 litres. 7 × 1000 = 7,000 litres."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 6 cm, a perpendicular height of 6 cm and a sloping side of 8 cm. Find its area.",
"options": [
"48 cm²",
"36 cm²",
"28 cm²",
"18 cm²"
],
"answer": 1,
"explain": "Area of a parallelogram = base × perpendicular height = 6 × 6 = 36 cm². The sloping side is not needed."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 41 litres, correct to the nearest whole number. What is the upper bound?",
"options": [
"42 litres",
"41.5 litres",
"40.5 litres",
"41.4 litres"
],
"answer": 1,
"explain": "Half of 1 is 0.5. Upper bound = 41 + 0.5 = 41.5 litres."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 08:20 and arrives at 10:00. How long is this?",
"options": [
"40 min",
"1 h 40 min",
"2 h 40 min",
"1 h 30 min"
],
"answer": 1,
"explain": "Count on from 08:20: up to the next whole hour, then whole hours, then the minutes to 10:00. The total is 1 h 40 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Density",
"tier": "F",
"q": "A bar has a density of 1.5 g/cm³ and a volume of 50 cm³. Find its mass.",
"options": [
"750 g",
"33.33 g",
"75 g",
"51.5 g"
],
"answer": 2,
"explain": "Mass = density × volume = 1.5 × 50 = 75 g."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "Write 10.6 hours in hours and minutes.",
"options": [
"10 h 24 min",
"10 h 60 min",
"10 h 36 min",
"10 h 6 min"
],
"answer": 2,
"explain": "0.6 of an hour = 0.6 × 60 = 36 minutes, so 10.6 hours = 10 h 36 min. It is not 10 h 60 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 40 mph for 30 minutes. How far does it travel?",
"options": [
"1,200 miles",
"12 miles",
"80 miles",
"20 miles"
],
"answer": 3,
"explain": "Distance = speed × time. 30 minutes = 0.5 hours, so 40 × 0.5 = 20 miles."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 8 cm by 7 cm by 2 cm. Find its total surface area.",
"options": [
"336 cm²",
"86 cm²",
"112 cm²",
"172 cm²"
],
"answer": 3,
"explain": "A cuboid has 3 pairs of faces: 2 × (8×7) + 2 × (8×2) + 2 × (7×2) = 2 × (56 + 16 + 14) = 172 cm²."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 15 cm, a perpendicular height of 5 cm and a sloping side of 9 cm. Find its area.",
"options": [
"48 cm²",
"135 cm²",
"75 cm²",
"37.5 cm²"
],
"answer": 2,
"explain": "Area of a parallelogram = base × perpendicular height = 15 × 5 = 75 cm². The sloping side is not needed."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 18 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"70 cm",
"73.6 cm",
"72 cm",
"74 cm"
],
"answer": 3,
"explain": "Upper bound of the side = 18 + 0.5 = 18.5 cm. Upper bound perimeter = 4 × 18.5 = 74 cm."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 27 cm long and 16 cm wide. What is its perimeter?",
"options": [
"86 cm",
"70 cm",
"43 cm",
"432 cm"
],
"answer": 0,
"explain": "Perimeter is the distance all the way round: 27 + 16 + 27 + 16 = 86 cm."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 14:10 and arrives at 20:35. How long is this?",
"options": [
"6 h 15 min",
"7 h 25 min",
"6 h 25 min",
"5 h 25 min"
],
"answer": 2,
"explain": "Count on from 14:10: up to the next whole hour, then whole hours, then the minutes to 20:35. The total is 6 h 25 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of A from Q is 152°. What is the bearing of Q from A?",
"options": [
"332°",
"208°",
"152°",
"028°"
],
"answer": 0,
"explain": "A back bearing is 180° different. 152° is less than 180°, so add 180°: 332°."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 100 km at an average speed of 40 km/h. How long does the journey take?",
"options": [
"2 h 45 min",
"3 h 30 min",
"2 h 50 min",
"2 h 30 min"
],
"answer": 3,
"explain": "Time = distance ÷ speed = 100 ÷ 40 = 2.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 2 h 30 min."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 11 m and a perpendicular height of 14 m. Find its area.",
"options": [
"38.5 m²",
"154 m²",
"77 m²",
"25 m²"
],
"answer": 2,
"explain": "Area of a triangle = ½ × base × height = ½ × 11 × 14 = 77 m²."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A stone has a density of 1.2 g/cm³ and a mass of 150 g. Find its volume.",
"options": [
"180 cm³",
"125 cm³",
"1,250 cm³",
"0.008 cm³"
],
"answer": 1,
"explain": "Volume = mass ÷ density = 150 ÷ 1.2 = 125 cm³."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 5.3 m² into cm².",
"options": [
"53,000 cm²",
"0.00053 cm²",
"5,300 cm²",
"530 cm²"
],
"answer": 0,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 5.3 × 10,000 = 53,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 4 hours 39 minutes as a decimal number of hours.",
"options": [
"2.79 hours",
"4.39 hours",
"4.65 hours",
"4.35 hours"
],
"answer": 2,
"explain": "39 minutes = 39 ÷ 60 = 0.65 of an hour, so 4 h 39 min = 4.65 hours."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 08:55 and arrives at 13:20. How long is this?",
"options": [
"5 h 25 min",
"4 h 15 min",
"3 h 25 min",
"4 h 25 min"
],
"answer": 3,
"explain": "Count on from 08:55: up to the next whole hour, then whole hours, then the minutes to 13:20. The total is 4 h 25 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 4 times those of the smaller one. The smaller shape has an area of 7 cm². Find the area of the larger shape.",
"options": [
"112 cm²",
"28 cm²",
"448 cm²",
"56 cm²"
],
"answer": 0,
"explain": "Length scale factor 4 → area scale factor 4² = 16. 7 × 16 = 112 cm²."
}
],
[
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 5.81 litres into cl.",
"options": [
"581 cl",
"5,810 cl",
"58.1 cl",
"0.0581 cl"
],
"answer": 0,
"explain": "1 litre = 100 cl. Going from litres to cl (a smaller unit) you multiply by 100: 5.81 × 100 = 581 cl."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 30 km/h for 2 hours 15 minutes. How far does it travel?",
"options": [
"67.5 km",
"64.5 km",
"13.3 km",
"4,050 km"
],
"answer": 0,
"explain": "Distance = speed × time. 2 hours 15 minutes = 2.25 hours, so 30 × 2.25 = 67.5 km."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 9 hours 51 minutes as a decimal number of hours.",
"options": [
"9.51 hours",
"9.15 hours",
"5.91 hours",
"9.85 hours"
],
"answer": 3,
"explain": "51 minutes = 51 ÷ 60 = 0.85 of an hour, so 9 h 51 min = 9.85 hours."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 10 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"99.5 cm²",
"90.25 cm²",
"110.25 cm²",
"100 cm²"
],
"answer": 1,
"explain": "Lower bound of the side = 10 − 0.5 = 9.5 cm. Lower bound area = 9.5² = 90.25 cm²."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 4 times those of the smaller one. The smaller shape has an area of 33 cm². Find the area of the larger shape.",
"options": [
"528 cm²",
"132 cm²",
"2,112 cm²",
"264 cm²"
],
"answer": 0,
"explain": "Length scale factor 4 → area scale factor 4² = 16. 33 × 16 = 528 cm²."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 12:25 and arrives at 13:20. How long is this?",
"options": [
"1 h 25 min",
"1 h 55 min",
"1 h 15 min",
"55 min"
],
"answer": 3,
"explain": "Count on from 12:25: up to the next whole hour, then whole hours, then the minutes to 13:20. The total is 55 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "A tank holds 3.8 m³ of water. How many litres is this?",
"options": [
"380 litres",
"0.0038 litres",
"3,800,000 litres",
"3,800 litres"
],
"answer": 3,
"explain": "1 m³ = 1,000,000 cm³ and 1 litre = 1000 cm³, so 1 m³ = 1000 litres. 3.8 × 1000 = 3,800 litres."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 5 cm. Find its circumference, to 1 decimal place.",
"options": [
"78.5 cm",
"62.8 cm",
"31.4 cm",
"15.7 cm"
],
"answer": 2,
"explain": "Circumference = 2πr (or πd) = 2 × π × 5 = 31.4 cm (1 d.p.)."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 63 cm, correct to the nearest whole number. What is the upper bound?",
"options": [
"63.5 cm",
"64 cm",
"63.4 cm",
"62.5 cm"
],
"answer": 0,
"explain": "Half of 1 is 0.5. Upper bound = 63 + 0.5 = 63.5 cm."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 7,067 m into km.",
"options": [
"7.067 km",
"0.7067 km",
"7,067,000 km",
"70.67 km"
],
"answer": 0,
"explain": "1 km = 1,000 m. Going from m to km (a bigger unit) you divide by 1,000: 7,067 ÷ 1,000 = 7.067 km."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 245 km in 3 hours 30 minutes. What is the average speed?",
"options": [
"74.2 km/h",
"857.5 km/h",
"1.2 km/h",
"70 km/h"
],
"answer": 3,
"explain": "Speed = distance ÷ time. Write the time in hours: 3 hours 30 minutes = 3.5 hours. 245 ÷ 3.5 = 70 km/h."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 10,000. Two towns are 8.5 cm apart on the map. How far apart are they in real life?",
"options": [
"85 km",
"0.85 km",
"0.085 km",
"8.5 km"
],
"answer": 1,
"explain": "Real distance = 8.5 × 10,000 = 85,000 cm. Divide by 100 for metres (850 m) and by 1000 for km: 0.85 km."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 43 litres, correct to the nearest whole number. What is the upper bound?",
"options": [
"42.5 litres",
"43.4 litres",
"43.5 litres",
"44 litres"
],
"answer": 2,
"explain": "Half of 1 is 0.5. Upper bound = 43 + 0.5 = 43.5 litres."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 6 m² into cm².",
"options": [
"6,000 cm²",
"60,000 cm²",
"0.0006 cm²",
"600 cm²"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 6 × 10,000 = 60,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 34 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"134 cm",
"136 cm",
"138 cm",
"137.6 cm"
],
"answer": 2,
"explain": "Upper bound of the side = 34 + 0.5 = 34.5 cm. Upper bound perimeter = 4 × 34.5 = 138 cm."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 11:35 and arrives at 16:30. How long is this?",
"options": [
"4 h 55 min",
"5 h 55 min",
"4 h 45 min",
"3 h 55 min"
],
"answer": 0,
"explain": "Count on from 11:35: up to the next whole hour, then whole hours, then the minutes to 16:30. The total is 4 h 55 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 11.8 hours in hours and minutes.",
"options": [
"11 h 8 min",
"11 h 48 min",
"11 h 80 min",
"11 h 12 min"
],
"answer": 1,
"explain": "0.8 of an hour = 0.8 × 60 = 48 minutes, so 11.8 hours = 11 h 48 min. It is not 11 h 80 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 200 miles at an average speed of 50 mph. How long does the journey take?",
"options": [
"4 h",
"4 h 15 min",
"5 h",
"4 h 30 min"
],
"answer": 0,
"explain": "Time = distance ÷ speed = 200 ÷ 50 = 4 hours."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 15 cm long and 5 cm wide. What is its perimeter?",
"options": [
"35 cm",
"75 cm",
"40 cm",
"20 cm"
],
"answer": 2,
"explain": "Perimeter is the distance all the way round: 15 + 5 + 15 + 5 = 40 cm."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 53 m/s into km/h.",
"options": [
"14.72 km/h",
"3,180 km/h",
"53,000 km/h",
"190.8 km/h"
],
"answer": 3,
"explain": "In 1 hour there are 3600 seconds, so 53 m/s = 53 × 3600 = 190,800 m per hour = 190.8 km/h. (Shortcut: × 3.6.)"
}
],
[
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 13 cm by 8 cm by 9 cm. Find its total surface area.",
"options": [
"624 cm²",
"586 cm²",
"936 cm²",
"293 cm²"
],
"answer": 1,
"explain": "A cuboid has 3 pairs of faces: 2 × (13×8) + 2 × (13×9) + 2 × (8×9) = 2 × (104 + 117 + 72) = 586 cm²."
},
{
"topic": "Density",
"tier": "F",
"q": "A stone has a density of 1.5 g/cm³ and a volume of 146 cm³. Find its mass.",
"options": [
"2,190 g",
"219 g",
"147.5 g",
"97.33 g"
],
"answer": 1,
"explain": "Mass = density × volume = 1.5 × 146 = 219 g."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 0.7 litres into cl.",
"options": [
"700 cl",
"7 cl",
"70 cl",
"0.007 cl"
],
"answer": 2,
"explain": "1 litre = 100 cl. Going from litres to cl (a smaller unit) you multiply by 100: 0.7 × 100 = 70 cl."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 9 m by 8 m by 9 m. Find its volume.",
"options": [
"648 m³",
"225 m³",
"72 m³",
"450 m³"
],
"answer": 0,
"explain": "Volume of a cuboid = length × width × height = 9 × 8 × 9 = 648 m³."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 5 times those of the smaller one. The smaller shape has an area of 27 cm². Find the area of the larger shape.",
"options": [
"3,375 cm²",
"675 cm²",
"270 cm²",
"135 cm²"
],
"answer": 1,
"explain": "Length scale factor 5 → area scale factor 5² = 25. 27 × 25 = 675 cm²."
}
],
[
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 17 litres?",
"options": [
"0.017 cm³",
"17,000,000 cm³",
"17,000 cm³",
"1,700 cm³"
],
"answer": 2,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 17 × 1000 = 17,000 cm³."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 1,637 ml into litres.",
"options": [
"1,637,000 litres",
"16.37 litres",
"1.637 litres",
"0.1637 litres"
],
"answer": 2,
"explain": "1 litre = 1,000 ml. Going from ml to litres (a bigger unit) you divide by 1,000: 1,637 ÷ 1,000 = 1.637 litres."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 6 cm by 5 cm by 7 cm. Find its total surface area.",
"options": [
"180 cm²",
"214 cm²",
"210 cm²",
"107 cm²"
],
"answer": 1,
"explain": "A cuboid has 3 pairs of faces: 2 × (6×5) + 2 × (6×7) + 2 × (5×7) = 2 × (30 + 42 + 35) = 214 cm²."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 20 cm and a perpendicular height of 2 cm. Find its area.",
"options": [
"40 cm²",
"10 cm²",
"22 cm²",
"20 cm²"
],
"answer": 3,
"explain": "Area of a triangle = ½ × base × height = ½ × 20 × 2 = 20 cm²."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 inch ≈ 2.5 cm. Convert 11 inches into centimetres.",
"options": [
"4.4 cm",
"132 cm",
"27.5 cm",
"275 cm"
],
"answer": 2,
"explain": "Multiply by 2.5: 11 × 2.5 = 27.5 cm."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A block has a density of 7.8 g/cm³ and a mass of 530.4 g. Find its volume.",
"options": [
"680 cm³",
"68 cm³",
"0.0147 cm³",
"4,137.12 cm³"
],
"answer": 1,
"explain": "Volume = mass ÷ density = 530.4 ÷ 7.8 = 68 cm³."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 13 m long and 6 m wide. What is its perimeter?",
"options": [
"32 m",
"78 m",
"38 m",
"19 m"
],
"answer": 2,
"explain": "Perimeter is the distance all the way round: 13 + 6 + 13 + 6 = 38 m."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 8 litres per minute. How long does it take to fill 104 litres?",
"options": [
"96 minutes",
"0.077 minutes",
"13 minutes",
"832 minutes"
],
"answer": 2,
"explain": "Time = amount ÷ rate = 104 ÷ 8 = 13 minutes."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 70 miles in 3 hours 30 minutes. What is the average speed?",
"options": [
"245 mph",
"20 mph",
"21.2 mph",
"0.3 mph"
],
"answer": 1,
"explain": "Speed = distance ÷ time. Write the time in hours: 3 hours 30 minutes = 3.5 hours. 70 ÷ 3.5 = 20 mph."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 13 m into cm.",
"options": [
"130 cm",
"1,300 cm",
"0.13 cm",
"13,000 cm"
],
"answer": 1,
"explain": "1 m = 100 cm. Going from m to cm (a smaller unit) you multiply by 100: 13 × 100 = 1,300 cm."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A stone has a density of 11.3 g/cm³ and a volume of 173 cm³. Find its mass.",
"options": [
"184.3 g",
"15.31 g",
"19,549 g",
"1,954.9 g"
],
"answer": 3,
"explain": "Mass = density × volume = 11.3 × 173 = 1,954.9 g."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 30 km/h for 2 hours 45 minutes. How far does it travel?",
"options": [
"82.5 km",
"4,950 km",
"10.9 km",
"73.5 km"
],
"answer": 0,
"explain": "Distance = speed × time. 2 hours 45 minutes = 2.75 hours, so 30 × 2.75 = 82.5 km."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 60 cm. One side is 11 cm. How long is the other side?",
"options": [
"49 cm",
"76 cm",
"19 cm",
"30 cm"
],
"answer": 2,
"explain": "Two sides of 11 make 22. 60 − 22 = 38, which is shared between the other two sides: 38 ÷ 2 = 19 cm."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 17 cm. Find its area, to 1 decimal place.",
"options": [
"907.9 cm²",
"106.8 cm²",
"3,631.7 cm²",
"2,852.3 cm²"
],
"answer": 0,
"explain": "Area = πr² = π × 17² = π × 289 = 907.9 cm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 600 N/m² acts on an area of 2 m². Find the force.",
"options": [
"602 N",
"300 N",
"12,000 N",
"1,200 N"
],
"answer": 3,
"explain": "Force = pressure × area = 600 × 2 = 1,200 N."
}
],
[
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of P from X is 288°. What is the bearing of X from P?",
"options": [
"072°",
"288°",
"108°",
"252°"
],
"answer": 2,
"explain": "A back bearing is 180° different. 288° is more than 180°, so subtract 180°: 108°."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 1,800 cm² into m².",
"options": [
"1.8 m²",
"18 m²",
"18,000,000 m²",
"0.18 m²"
],
"answer": 3,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 1,800 ÷ 10,000 = 0.18 m²."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 5 cm by 8 cm by 2 cm. Find its total surface area.",
"options": [
"80 cm²",
"132 cm²",
"66 cm²",
"240 cm²"
],
"answer": 1,
"explain": "A cuboid has 3 pairs of faces: 2 × (5×8) + 2 × (5×2) + 2 × (8×2) = 2 × (40 + 10 + 16) = 132 cm²."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 200,000. Two places are 12 km apart in real life. How far apart are they on the map?",
"options": [
"60 cm",
"0.6 cm",
"600 cm",
"6 cm"
],
"answer": 3,
"explain": "12 km = 1,200,000 cm. Map distance = 1,200,000 ÷ 200,000 = 6 cm."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 2,160 N acts on an area of 4 m². Find the pressure.",
"options": [
"270 N/m²",
"0.0019 N/m²",
"540 N/m²",
"8,640 N/m²"
],
"answer": 2,
"explain": "Pressure = force ÷ area = 2,160 ÷ 4 = 540 N/m²."
}
],
[
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 469.8 ml into litres.",
"options": [
"4.698 litres",
"469,800 litres",
"0.4698 litres",
"0.04698 litres"
],
"answer": 2,
"explain": "1 litre = 1,000 ml. Going from ml to litres (a bigger unit) you divide by 1,000: 469.8 ÷ 1,000 = 0.4698 litres."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 5 m and 10 m, and a perpendicular height of 4 m. Find its area.",
"options": [
"60 m²",
"10 m²",
"30 m²",
"100 m²"
],
"answer": 2,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (5 + 10) × 4 = ½ × 15 × 4 = 30 m²."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 6 cm by 11 cm by 4 cm. Find its total surface area.",
"options": [
"268 cm²",
"396 cm²",
"134 cm²",
"264 cm²"
],
"answer": 0,
"explain": "A cuboid has 3 pairs of faces: 2 × (6×11) + 2 × (6×4) + 2 × (11×4) = 2 × (66 + 24 + 44) = 268 cm²."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 320 litre tank in 32 minutes. What is the rate of flow?",
"options": [
"100 litres/min",
"0.1 litres/min",
"10 litres/min",
"10,240 litres/min"
],
"answer": 2,
"explain": "Rate = amount ÷ time = 320 ÷ 32 = 10 litres per minute."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 5.5 m² into cm².",
"options": [
"550 cm²",
"55,000 cm²",
"5,500 cm²",
"0.00055 cm²"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 5.5 × 10,000 = 55,000 cm². A common mistake is multiplying by 100 only."
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 7,107 mm into cm.",
"options": [
"71,070 cm",
"7,107 cm",
"710.7 cm",
"71.07 cm"
],
"answer": 2,
"explain": "1 cm = 10 mm. Going from mm to cm (a bigger unit) you divide by 10: 7,107 ÷ 10 = 710.7 cm."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 960 m, correct to the nearest 10. What is the lower bound?",
"options": [
"959 m",
"950 m",
"955 m",
"965 m"
],
"answer": 2,
"explain": "Half of 10 is 5. Lower bound = 960 − 5 = 955 m."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 27.5 km in 30 minutes. What is the average speed?",
"options": [
"0.9 km/h",
"13.8 km/h",
"55 km/h",
"91.7 km/h"
],
"answer": 2,
"explain": "Speed = distance ÷ time. Write the time in hours: 30 minutes = 0.5 hours. 27.5 ÷ 0.5 = 55 km/h."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 13:05 and ends at 14:50. How long is this?",
"options": [
"1 h 45 min",
"1 h 35 min",
"2 h 45 min",
"45 min"
],
"answer": 0,
"explain": "Count on from 13:05: up to the next whole hour, then whole hours, then the minutes to 14:50. The total is 1 h 45 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 4 m, a perpendicular height of 6 m and a sloping side of 11 m. Find its area.",
"options": [
"44 m²",
"24 m²",
"30 m²",
"12 m²"
],
"answer": 1,
"explain": "Area of a parallelogram = base × perpendicular height = 4 × 6 = 24 m². The sloping side is not needed."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 90 km at an average speed of 40 km/h. How long does the journey take?",
"options": [
"2 h 25 min",
"2 h 30 min",
"3 h 15 min",
"2 h 15 min"
],
"answer": 3,
"explain": "Time = distance ÷ speed = 90 ÷ 40 = 2.25 hours. 0.25 hours × 60 = 15 minutes, so the time is 2 h 15 min."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 7.5 cl into ml.",
"options": [
"7.5 ml",
"75 ml",
"750 ml",
"0.75 ml"
],
"answer": 1,
"explain": "1 cl = 10 ml. Going from cl to ml (a smaller unit) you multiply by 10: 7.5 × 10 = 75 ml."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 62 m. One side is 23 m. How long is the other side?",
"options": [
"39 m",
"32 m",
"8 m",
"31 m"
],
"answer": 2,
"explain": "Two sides of 23 make 46. 62 − 46 = 16, which is shared between the other two sides: 16 ÷ 2 = 8 m."
},
{
"topic": "Density",
"tier": "F",
"q": "A block has a density of 0.9 g/cm³ and a mass of 97.2 g. Find its volume.",
"options": [
"1,080 cm³",
"87.48 cm³",
"0.0093 cm³",
"108 cm³"
],
"answer": 3,
"explain": "Volume = mass ÷ density = 97.2 ÷ 0.9 = 108 cm³."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 4 times those of the smaller one. The smaller shape has an area of 25 cm². Find the area of the larger shape.",
"options": [
"400 cm²",
"1,600 cm²",
"100 cm²",
"200 cm²"
],
"answer": 0,
"explain": "Length scale factor 4 → area scale factor 4² = 16. 25 × 16 = 400 cm²."
}
],
[
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 3 m and height 3 m. The prism is 14 m long. Find its volume.",
"options": [
"63 m³",
"126 m³",
"42 m³",
"4.5 m³"
],
"answer": 0,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 3 × 3 = 4.5. 4.5 × 14 = 63 m³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 5,927 mm into cm.",
"options": [
"5,927 cm",
"59,270 cm",
"592.7 cm",
"59.27 cm"
],
"answer": 2,
"explain": "1 cm = 10 mm. Going from mm to cm (a bigger unit) you divide by 10: 5,927 ÷ 10 = 592.7 cm."
},
{
"topic": "Density",
"tier": "F",
"q": "A bar has a density of 3 g/cm³ and a volume of 174 cm³. Find its mass.",
"options": [
"5,220 g",
"522 g",
"58 g",
"177 g"
],
"answer": 1,
"explain": "Mass = density × volume = 3 × 174 = 522 g."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 20 mph for 2 hours 30 minutes. How far does it travel?",
"options": [
"3,000 miles",
"8 miles",
"50 miles",
"46 miles"
],
"answer": 2,
"explain": "Distance = speed × time. 2 hours 30 minutes = 2.5 hours, so 20 × 2.5 = 50 miles."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 4 hours 18 minutes as a decimal number of hours.",
"options": [
"4.7 hours",
"2.58 hours",
"4.3 hours",
"4.18 hours"
],
"answer": 2,
"explain": "18 minutes = 18 ÷ 60 = 0.3 of an hour, so 4 h 18 min = 4.3 hours."
}
],
[
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 8 cm by 11 cm by 9 cm. Find its total surface area.",
"options": [
"518 cm²",
"528 cm²",
"792 cm²",
"259 cm²"
],
"answer": 0,
"explain": "A cuboid has 3 pairs of faces: 2 × (8×11) + 2 × (8×9) + 2 × (11×9) = 2 × (88 + 72 + 99) = 518 cm²."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 4 m and 8 m, and a perpendicular height of 4 m. Find its area.",
"options": [
"24 m²",
"8 m²",
"64 m²",
"48 m²"
],
"answer": 0,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (4 + 8) × 4 = ½ × 12 × 4 = 24 m²."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 8,500 cm² into m².",
"options": [
"85 m²",
"0.85 m²",
"8.5 m²",
"85,000,000 m²"
],
"answer": 1,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 8,500 ÷ 10,000 = 0.85 m²."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 55 km/h for 2 hours 30 minutes. How far does it travel?",
"options": [
"126.5 km",
"137.5 km",
"22 km",
"8,250 km"
],
"answer": 1,
"explain": "Distance = speed × time. 2 hours 30 minutes = 2.5 hours, so 55 × 2.5 = 137.5 km."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 232 km into miles.",
"options": [
"145 miles",
"371.2 miles",
"29 miles",
"1,160 miles"
],
"answer": 0,
"explain": "232 ÷ 8 = 29 lots of 8 km. 29 × 5 = 145 miles."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 13:05 and arrives at 19:10. How long is this?",
"options": [
"7 h 5 min",
"5 h 55 min",
"5 h 5 min",
"6 h 5 min"
],
"answer": 3,
"explain": "Count on from 13:05: up to the next whole hour, then whole hours, then the minutes to 19:10. The total is 6 h 5 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 1,839 mm into m.",
"options": [
"18.39 m",
"1.839 m",
"1,839,000 m",
"0.1839 m"
],
"answer": 1,
"explain": "1 m = 1,000 mm. Going from mm to m (a bigger unit) you divide by 1,000: 1,839 ÷ 1,000 = 1.839 m."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 75 mph for 2 hours. How far does it travel?",
"options": [
"225 miles",
"150 miles",
"37.5 miles",
"9,000 miles"
],
"answer": 1,
"explain": "Distance = speed × time. 75 × 2 = 150 miles."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 11 cm long and 6 cm wide. What is its perimeter?",
"options": [
"34 cm",
"28 cm",
"66 cm",
"17 cm"
],
"answer": 0,
"explain": "Perimeter is the distance all the way round: 11 + 6 + 11 + 6 = 34 cm."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 1,300 N/m² acts on an area of 2.5 m². Find the force.",
"options": [
"32,500 N",
"520 N",
"1,302.5 N",
"3,250 N"
],
"answer": 3,
"explain": "Force = pressure × area = 1,300 × 2.5 = 3,250 N."
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 6,830 m into km.",
"options": [
"6,830,000 km",
"0.683 km",
"68.3 km",
"6.83 km"
],
"answer": 3,
"explain": "1 km = 1,000 m. Going from m to km (a bigger unit) you divide by 1,000: 6,830 ÷ 1,000 = 6.83 km."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 390 m, correct to the nearest 10. What is the lower bound?",
"options": [
"380 m",
"385 m",
"395 m",
"389 m"
],
"answer": 1,
"explain": "Half of 10 is 5. Lower bound = 390 − 5 = 385 m."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 4.1 m³ into cm³.",
"options": [
"41,000 cm³",
"4,100,000 cm³",
"4,100 cm³",
"410 cm³"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 4.1 × 1,000,000 = 4,100,000 cm³."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 3 cm by 4 cm by 7 cm. Find its total surface area.",
"options": [
"122 cm²",
"61 cm²",
"72 cm²",
"84 cm²"
],
"answer": 0,
"explain": "A cuboid has 3 pairs of faces: 2 × (3×4) + 2 × (3×7) + 2 × (4×7) = 2 × (12 + 21 + 28) = 122 cm²."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 180 km/h into m/s.",
"options": [
"50 m/s",
"3,000 m/s",
"3 m/s",
"648 m/s"
],
"answer": 0,
"explain": "180 km/h = 180,000 m in 3600 seconds. 180,000 ÷ 3600 = 50 m/s. (Shortcut: ÷ 3.6.)"
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 5,586 m into km.",
"options": [
"5.586 km",
"55.86 km",
"5,586,000 km",
"0.5586 km"
],
"answer": 0,
"explain": "1 km = 1,000 m. Going from m to km (a bigger unit) you divide by 1,000: 5,586 ÷ 1,000 = 5.586 km."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 10,000. Two places are 0.6 km apart in real life. How far apart are they on the map?",
"options": [
"0.6 cm",
"60 cm",
"600 cm",
"6 cm"
],
"answer": 3,
"explain": "0.6 km = 60,000 cm. Map distance = 60,000 ÷ 10,000 = 6 cm."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 12 mm. Find its area, to 1 decimal place.",
"options": [
"452.4 mm²",
"1,421.2 mm²",
"75.4 mm²",
"1,809.6 mm²"
],
"answer": 0,
"explain": "Area = πr² = π × 12² = π × 144 = 452.4 mm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 5 m, a perpendicular height of 5 m and a sloping side of 8 m. Find its area.",
"options": [
"25 m²",
"26 m²",
"40 m²",
"12.5 m²"
],
"answer": 0,
"explain": "Area of a parallelogram = base × perpendicular height = 5 × 5 = 25 m². The sloping side is not needed."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 8 m long and 11 m wide. What is its perimeter?",
"options": [
"27 m",
"19 m",
"38 m",
"88 m"
],
"answer": 2,
"explain": "Perimeter is the distance all the way round: 8 + 11 + 8 + 11 = 38 m."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "Write 6.7 hours in hours and minutes.",
"options": [
"6 h 18 min",
"6 h 7 min",
"6 h 42 min",
"6 h 70 min"
],
"answer": 2,
"explain": "0.7 of an hour = 0.7 × 60 = 42 minutes, so 6.7 hours = 6 h 42 min. It is not 6 h 70 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 15 cl into ml.",
"options": [
"1,500 ml",
"1.5 ml",
"15 ml",
"150 ml"
],
"answer": 3,
"explain": "1 cl = 10 ml. Going from cl to ml (a smaller unit) you multiply by 10: 15 × 10 = 150 ml."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 5 m. Find its circumference, to 1 decimal place.",
"options": [
"15.7 m",
"62.8 m",
"31.4 m",
"78.5 m"
],
"answer": 2,
"explain": "Circumference = 2πr (or πd) = 2 × π × 5 = 31.4 m (1 d.p.)."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 4 m long and 13 m wide. What is its perimeter?",
"options": [
"21 m",
"17 m",
"52 m",
"34 m"
],
"answer": 3,
"explain": "Perimeter is the distance all the way round: 4 + 13 + 4 + 13 = 34 m."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 1,660 N/m² acts on an area of 2 m². Find the force.",
"options": [
"1,662 N",
"830 N",
"33,200 N",
"3,320 N"
],
"answer": 3,
"explain": "Force = pressure × area = 1,660 × 2 = 3,320 N."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 12 cm, a perpendicular height of 3 cm and a sloping side of 8 cm. Find its area.",
"options": [
"96 cm²",
"40 cm²",
"36 cm²",
"18 cm²"
],
"answer": 2,
"explain": "Area of a parallelogram = base × perpendicular height = 12 × 3 = 36 cm². The sloping side is not needed."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 08:25 and arrives at 13:15. How long is this?",
"options": [
"3 h 50 min",
"5 h 50 min",
"4 h 50 min",
"4 h 40 min"
],
"answer": 2,
"explain": "Count on from 08:25: up to the next whole hour, then whole hours, then the minutes to 13:15. The total is 4 h 50 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 225 miles in 3 hours. What is the average speed?",
"options": [
"75 mph",
"675 mph",
"1.2 mph",
"56.2 mph"
],
"answer": 0,
"explain": "Speed = distance ÷ time. 225 ÷ 3 = 75 mph."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 8 mm. Find its area, to 1 decimal place.",
"options": [
"50.3 mm²",
"631.7 mm²",
"804.2 mm²",
"201.1 mm²"
],
"answer": 3,
"explain": "Area = πr² = π × 8² = π × 64 = 201.1 mm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 8.6 hours in hours and minutes.",
"options": [
"8 h 24 min",
"8 h 36 min",
"8 h 6 min",
"8 h 60 min"
],
"answer": 1,
"explain": "0.6 of an hour = 0.6 × 60 = 36 minutes, so 8.6 hours = 8 h 36 min. It is not 8 h 60 min, because an hour has 60 minutes, not 100."
}
],
[
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 8 cm and a height of 18 cm. Find its volume, to 1 decimal place.",
"options": [
"14,476.5 cm³",
"904.8 cm³",
"452.4 cm³",
"3,619.1 cm³"
],
"answer": 3,
"explain": "Volume of a cylinder = πr²h = π × 8² × 18 = π × 64 × 18 = 3,619.1 cm³ (1 d.p.)."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 18 cm. Find its area, to 1 decimal place.",
"options": [
"4,071.5 cm²",
"113.1 cm²",
"1,017.9 cm²",
"3,197.8 cm²"
],
"answer": 2,
"explain": "Area = πr² = π × 18² = π × 324 = 1,017.9 cm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 13:30 and ends at 14:35. How long is this?",
"options": [
"5 min",
"1 h 5 min",
"1 h 25 min",
"2 h 5 min"
],
"answer": 1,
"explain": "Count on from 13:30: up to the next whole hour, then whole hours, then the minutes to 14:35. The total is 1 h 5 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 inch ≈ 2.5 cm. Convert 42 inches into centimetres.",
"options": [
"504 cm",
"1,050 cm",
"16.8 cm",
"105 cm"
],
"answer": 3,
"explain": "Multiply by 2.5: 42 × 2.5 = 105 cm."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 3.5 cl into ml.",
"options": [
"3.5 ml",
"35 ml",
"0.35 ml",
"350 ml"
],
"answer": 1,
"explain": "1 cl = 10 ml. Going from cl to ml (a smaller unit) you multiply by 10: 3.5 × 10 = 35 ml."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 13:55 and finishes at 17:15. How long is this?",
"options": [
"2 h 20 min",
"3 h 20 min",
"3 h 10 min",
"4 h 20 min"
],
"answer": 1,
"explain": "Count on from 13:55: up to the next whole hour, then whole hours, then the minutes to 17:15. The total is 3 h 20 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of Y from X is 266°. What is the bearing of X from Y?",
"options": [
"086°",
"094°",
"266°",
"274°"
],
"answer": 0,
"explain": "A back bearing is 180° different. 266° is more than 180°, so subtract 180°: 086°."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 20,000. Two towns are 3 cm apart on the map. How far apart are they in real life?",
"options": [
"60 km",
"0.06 km",
"6 km",
"0.6 km"
],
"answer": 3,
"explain": "Real distance = 3 × 20,000 = 60,000 cm. Divide by 100 for metres (600 m) and by 1000 for km: 0.6 km."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 9 cm and a height of 10 cm. Find its volume, to 1 decimal place.",
"options": [
"2,544.7 cm³",
"10,178.8 cm³",
"565.5 cm³",
"282.7 cm³"
],
"answer": 0,
"explain": "Volume of a cylinder = πr²h = π × 9² × 10 = π × 81 × 10 = 2,544.7 cm³ (1 d.p.)."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 1,360 N acts on an area of 0.8 m². Find the pressure.",
"options": [
"1,700 N/m²",
"0.0006 N/m²",
"850 N/m²",
"1,088 N/m²"
],
"answer": 0,
"explain": "Pressure = force ÷ area = 1,360 ÷ 0.8 = 1,700 N/m²."
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 32 km into m.",
"options": [
"3,200 m",
"0.032 m",
"320,000 m",
"32,000 m"
],
"answer": 3,
"explain": "1 km = 1,000 m. Going from km to m (a smaller unit) you multiply by 1,000: 32 × 1,000 = 32,000 m."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 30 m long and 2 m wide. What is its perimeter?",
"options": [
"60 m",
"32 m",
"62 m",
"64 m"
],
"answer": 3,
"explain": "Perimeter is the distance all the way round: 30 + 2 + 30 + 2 = 64 m."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 50,000. Two towns are 8 cm apart on the map. How far apart are they in real life?",
"options": [
"0.4 km",
"40 km",
"400 km",
"4 km"
],
"answer": 3,
"explain": "Real distance = 8 × 50,000 = 400,000 cm. Divide by 100 for metres (4,000 m) and by 1000 for km: 4 km."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 70 km/h for 1 hour 30 minutes. How far does it travel?",
"options": [
"6,300 km",
"105 km",
"91 km",
"46.7 km"
],
"answer": 1,
"explain": "Distance = speed × time. 1 hour 30 minutes = 1.5 hours, so 70 × 1.5 = 105 km."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 310 N acts on an area of 0.25 m². Find the pressure.",
"options": [
"77.5 N/m²",
"1,240 N/m²",
"0.0008 N/m²",
"620 N/m²"
],
"answer": 1,
"explain": "Pressure = force ÷ area = 310 ÷ 0.25 = 1,240 N/m²."
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 inch ≈ 2.5 cm. Convert 30 inches into centimetres.",
"options": [
"12 cm",
"360 cm",
"750 cm",
"75 cm"
],
"answer": 3,
"explain": "Multiply by 2.5: 30 × 2.5 = 75 cm."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 13:20 and arrives at 17:40. How long is this?",
"options": [
"4 h 10 min",
"3 h 20 min",
"5 h 20 min",
"4 h 20 min"
],
"answer": 3,
"explain": "Count on from 13:20: up to the next whole hour, then whole hours, then the minutes to 17:40. The total is 4 h 20 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 532.9 cm into m.",
"options": [
"53,290 m",
"0.5329 m",
"5.329 m",
"53.29 m"
],
"answer": 2,
"explain": "1 m = 100 cm. Going from cm to m (a bigger unit) you divide by 100: 532.9 ÷ 100 = 5.329 m."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 11 cm by 12 cm by 5 cm. Find its total surface area.",
"options": [
"494 cm²",
"247 cm²",
"660 cm²",
"792 cm²"
],
"answer": 0,
"explain": "A cuboid has 3 pairs of faces: 2 × (11×12) + 2 × (11×5) + 2 × (12×5) = 2 × (132 + 55 + 60) = 494 cm²."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 520 N/m² acts on an area of 0.8 m². Find the force.",
"options": [
"650 N",
"4,160 N",
"520.8 N",
"416 N"
],
"answer": 3,
"explain": "Force = pressure × area = 520 × 0.8 = 416 N."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A stone has a density of 2.7 g/cm³ and a volume of 53 cm³. Find its mass.",
"options": [
"55.7 g",
"1,431 g",
"19.63 g",
"143.1 g"
],
"answer": 3,
"explain": "Mass = density × volume = 2.7 × 53 = 143.1 g."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 07:50 and arrives at 10:35. How long is this?",
"options": [
"2 h 35 min",
"3 h 45 min",
"2 h 45 min",
"1 h 45 min"
],
"answer": 2,
"explain": "Count on from 07:50: up to the next whole hour, then whole hours, then the minutes to 10:35. The total is 2 h 45 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 200 cm² into m².",
"options": [
"2 m²",
"0.02 m²",
"2,000,000 m²",
"0.2 m²"
],
"answer": 1,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 200 ÷ 10,000 = 0.02 m²."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 40 kg into pounds.",
"options": [
"18.2 pounds",
"42.2 pounds",
"880 pounds",
"88 pounds"
],
"answer": 3,
"explain": "Multiply by 2.2: 40 × 2.2 = 88 pounds."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 200 km in 2 hours 30 minutes. What is the average speed?",
"options": [
"500 km/h",
"80 km/h",
"87 km/h",
"1.3 km/h"
],
"answer": 1,
"explain": "Speed = distance ÷ time. Write the time in hours: 2 hours 30 minutes = 2.5 hours. 200 ÷ 2.5 = 80 km/h."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A bar has a mass of 1,419.6 g and a volume of 182 cm³. Find its density.",
"options": [
"258,367.2 g/cm³",
"78 g/cm³",
"0.128 g/cm³",
"7.8 g/cm³"
],
"answer": 3,
"explain": "Density = mass ÷ volume = 1,419.6 ÷ 182 = 7.8 g/cm³."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 9,592 kg into tonnes.",
"options": [
"95.92 tonnes",
"9.592 tonnes",
"9,592,000 tonnes",
"0.9592 tonnes"
],
"answer": 1,
"explain": "1 tonne = 1,000 kg. Going from kg to tonnes (a bigger unit) you divide by 1,000: 9,592 ÷ 1,000 = 9.592 tonnes."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 20,000. Two places are 0.4 km apart in real life. How far apart are they on the map?",
"options": [
"2 cm",
"20 cm",
"200 cm",
"0.2 cm"
],
"answer": 0,
"explain": "0.4 km = 40,000 cm. Map distance = 40,000 ÷ 20,000 = 2 cm."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 10 cm. Find its circumference, to 1 decimal place.",
"options": [
"62.8 cm",
"125.7 cm",
"314.2 cm",
"31.4 cm"
],
"answer": 0,
"explain": "Circumference = 2πr (or πd) = 2 × π × 10 = 62.8 cm (1 d.p.)."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 480 N/m² acts on an area of 0.5 m². Find the force.",
"options": [
"240 N",
"480.5 N",
"2,400 N",
"960 N"
],
"answer": 0,
"explain": "Force = pressure × area = 480 × 0.5 = 240 N."
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 16 km into miles.",
"options": [
"80 miles",
"10 miles",
"2 miles",
"25.6 miles"
],
"answer": 1,
"explain": "16 ÷ 8 = 2 lots of 8 km. 2 × 5 = 10 miles."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 100,000. Two places are 2 km apart in real life. How far apart are they on the map?",
"options": [
"0.2 cm",
"20 cm",
"2 cm",
"200 cm"
],
"answer": 2,
"explain": "2 km = 200,000 cm. Map distance = 200,000 ÷ 100,000 = 2 cm."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of P from B is 206°. What is the bearing of B from P?",
"options": [
"154°",
"334°",
"026°",
"206°"
],
"answer": 2,
"explain": "A back bearing is 180° different. 206° is more than 180°, so subtract 180°: 026°."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 6,675 ml into cl.",
"options": [
"6,675 cl",
"66.75 cl",
"66,750 cl",
"667.5 cl"
],
"answer": 3,
"explain": "1 cl = 10 ml. Going from ml to cl (a bigger unit) you divide by 10: 6,675 ÷ 10 = 667.5 cl."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a mass of 282 g and a volume of 188 cm³. Find its density.",
"options": [
"0.667 g/cm³",
"15 g/cm³",
"1.5 g/cm³",
"53,016 g/cm³"
],
"answer": 2,
"explain": "Density = mass ÷ volume = 282 ÷ 188 = 1.5 g/cm³."
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 52 kg, correct to the nearest whole number. What is the lower bound?",
"options": [
"52.5 kg",
"51.5 kg",
"51 kg",
"51.9 kg"
],
"answer": 1,
"explain": "Half of 1 is 0.5. Lower bound = 52 − 0.5 = 51.5 kg."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 957.4 kg into tonnes.",
"options": [
"957,400 tonnes",
"9.574 tonnes",
"0.9574 tonnes",
"0.09574 tonnes"
],
"answer": 2,
"explain": "1 tonne = 1,000 kg. Going from kg to tonnes (a bigger unit) you divide by 1,000: 957.4 ÷ 1,000 = 0.9574 tonnes."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 22 m and a perpendicular height of 4 m. Find its area.",
"options": [
"44 m²",
"22 m²",
"88 m²",
"26 m²"
],
"answer": 0,
"explain": "Area of a triangle = ½ × base × height = ½ × 22 × 4 = 44 m²."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 2 m and height 4 m. The prism is 4 m long. Find its volume.",
"options": [
"12 m³",
"32 m³",
"4 m³",
"16 m³"
],
"answer": 3,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 2 × 4 = 4. 4 × 4 = 16 m³."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 3 hours 24 minutes as a decimal number of hours.",
"options": [
"2.04 hours",
"3.24 hours",
"3.4 hours",
"3.6 hours"
],
"answer": 2,
"explain": "24 minutes = 24 ÷ 60 = 0.4 of an hour, so 3 h 24 min = 3.4 hours."
}
],
[
{
"topic": "Area units",
"tier": "F",
"q": "Convert 16 m² into cm².",
"options": [
"1,600 cm²",
"160,000 cm²",
"0.0016 cm²",
"16,000 cm²"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 16 × 10,000 = 160,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 19 m long and 4 m wide. What is its perimeter?",
"options": [
"76 m",
"23 m",
"46 m",
"42 m"
],
"answer": 2,
"explain": "Perimeter is the distance all the way round: 19 + 4 + 19 + 4 = 46 m."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 5.9 tonnes into kg.",
"options": [
"590 kg",
"0.0059 kg",
"59,000 kg",
"5,900 kg"
],
"answer": 3,
"explain": "1 tonne = 1,000 kg. Going from tonnes to kg (a smaller unit) you multiply by 1,000: 5.9 × 1,000 = 5,900 kg."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 9 litres, correct to the nearest whole number. What is the upper bound?",
"options": [
"9.4 litres",
"9.5 litres",
"8.5 litres",
"10 litres"
],
"answer": 1,
"explain": "Half of 1 is 0.5. Upper bound = 9 + 0.5 = 9.5 litres."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of X from Y is 115°. What is the bearing of Y from X?",
"options": [
"295°",
"065°",
"115°",
"245°"
],
"answer": 0,
"explain": "A back bearing is 180° different. 115° is less than 180°, so add 180°: 295°."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a density of 2.5 g/cm³ and a volume of 175 cm³. Find its mass.",
"options": [
"177.5 g",
"70 g",
"437.5 g",
"4,375 g"
],
"answer": 2,
"explain": "Mass = density × volume = 2.5 × 175 = 437.5 g."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 66 m. One side is 17 m. How long is the other side?",
"options": [
"64 m",
"33 m",
"49 m",
"16 m"
],
"answer": 3,
"explain": "Two sides of 17 make 34. 66 − 34 = 32, which is shared between the other two sides: 32 ÷ 2 = 16 m."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 07:10 and arrives at 11:50. How long is this?",
"options": [
"5 h 40 min",
"3 h 40 min",
"4 h 30 min",
"4 h 40 min"
],
"answer": 3,
"explain": "Count on from 07:10: up to the next whole hour, then whole hours, then the minutes to 11:50. The total is 4 h 40 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 40 km/h for 1 hour 45 minutes. How far does it travel?",
"options": [
"4,200 km",
"22.9 km",
"70 km",
"58 km"
],
"answer": 2,
"explain": "Distance = speed × time. 1 hour 45 minutes = 1.75 hours, so 40 × 1.75 = 70 km."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 198 km/h into m/s.",
"options": [
"3,300 m/s",
"712.8 m/s",
"55 m/s",
"3.3 m/s"
],
"answer": 2,
"explain": "198 km/h = 198,000 m in 3600 seconds. 198,000 ÷ 3600 = 55 m/s. (Shortcut: ÷ 3.6.)"
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 13.2 pounds into kg.",
"options": [
"29.04 kg",
"6 kg",
"0.6 kg",
"11 kg"
],
"answer": 1,
"explain": "Divide by 2.2: 13.2 ÷ 2.2 = 6 kg."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 15 miles in 45 minutes. What is the average speed?",
"options": [
"0.3 mph",
"11.2 mph",
"20 mph",
"33.3 mph"
],
"answer": 2,
"explain": "Speed = distance ÷ time. Write the time in hours: 45 minutes = 0.75 hours. 15 ÷ 0.75 = 20 mph."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 4.98 tonnes into kg.",
"options": [
"49,800 kg",
"4,980 kg",
"0.00498 kg",
"498 kg"
],
"answer": 1,
"explain": "1 tonne = 1,000 kg. Going from tonnes to kg (a smaller unit) you multiply by 1,000: 4.98 × 1,000 = 4,980 kg."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 12:10 and finishes at 16:35. How long is this?",
"options": [
"5 h 25 min",
"3 h 25 min",
"4 h 15 min",
"4 h 25 min"
],
"answer": 3,
"explain": "Count on from 12:10: up to the next whole hour, then whole hours, then the minutes to 16:35. The total is 4 h 25 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 4 times those of the smaller one. The smaller solid has a volume of 7 cm³. Find the volume of the larger solid.",
"options": [
"112 cm³",
"84 cm³",
"28 cm³",
"448 cm³"
],
"answer": 3,
"explain": "Length scale factor 4 → volume scale factor 4³ = 64. 7 × 64 = 448 cm³."
}
],
[
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 15 cm by 5 cm by 9 cm. Find its total surface area.",
"options": [
"255 cm²",
"675 cm²",
"450 cm²",
"510 cm²"
],
"answer": 3,
"explain": "A cuboid has 3 pairs of faces: 2 × (15×5) + 2 × (15×9) + 2 × (5×9) = 2 × (75 + 135 + 45) = 510 cm²."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 33 cm, correct to the nearest whole number. What is the upper bound?",
"options": [
"34 cm",
"33.4 cm",
"32.5 cm",
"33.5 cm"
],
"answer": 3,
"explain": "Half of 1 is 0.5. Upper bound = 33 + 0.5 = 33.5 cm."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 0.4 m² into cm².",
"options": [
"40 cm²",
"0.00004 cm²",
"4,000 cm²",
"400 cm²"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 0.4 × 10,000 = 4,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 44 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"1,935.5 cm²",
"1,892.25 cm²",
"1,980.25 cm²",
"1,936 cm²"
],
"answer": 1,
"explain": "Lower bound of the side = 44 − 0.5 = 43.5 cm. Lower bound area = 43.5² = 1,892.25 cm²."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 11.5 m/s into km/h.",
"options": [
"3.19 km/h",
"690 km/h",
"11,500 km/h",
"41.4 km/h"
],
"answer": 3,
"explain": "In 1 hour there are 3600 seconds, so 11.5 m/s = 11.5 × 3600 = 41,400 m per hour = 41.4 km/h. (Shortcut: × 3.6.)"
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 4 cm, a perpendicular height of 10 cm and a sloping side of 13 cm. Find its area.",
"options": [
"52 cm²",
"40 cm²",
"20 cm²",
"34 cm²"
],
"answer": 1,
"explain": "Area of a parallelogram = base × perpendicular height = 4 × 10 = 40 cm². The sloping side is not needed."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 873.9 ml into litres.",
"options": [
"873,900 litres",
"8.739 litres",
"0.8739 litres",
"0.08739 litres"
],
"answer": 2,
"explain": "1 litre = 1,000 ml. Going from ml to litres (a bigger unit) you divide by 1,000: 873.9 ÷ 1,000 = 0.8739 litres."
},
{
"topic": "Density",
"tier": "F",
"q": "A bar has a density of 3 g/cm³ and a mass of 540 g. Find its volume.",
"options": [
"0.0056 cm³",
"180 cm³",
"1,800 cm³",
"1,620 cm³"
],
"answer": 1,
"explain": "Volume = mass ÷ density = 540 ÷ 3 = 180 cm³."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 8 hours 24 minutes as a decimal number of hours.",
"options": [
"5.04 hours",
"8.24 hours",
"8.6 hours",
"8.4 hours"
],
"answer": 3,
"explain": "24 minutes = 24 ÷ 60 = 0.4 of an hour, so 8 h 24 min = 8.4 hours."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 7 m and a height of 17 m. Find its volume, to 1 decimal place.",
"options": [
"747.7 m³",
"2,616.9 m³",
"373.8 m³",
"10,467.8 m³"
],
"answer": 1,
"explain": "Volume of a cylinder = πr²h = π × 7² × 17 = π × 49 × 17 = 2,616.9 m³ (1 d.p.)."
}
],
[
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of Q from A is 261°. What is the bearing of A from Q?",
"options": [
"261°",
"081°",
"279°",
"099°"
],
"answer": 1,
"explain": "A back bearing is 180° different. 261° is more than 180°, so subtract 180°: 081°."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 8.6 litres?",
"options": [
"8,600,000 cm³",
"860 cm³",
"0.0086 cm³",
"8,600 cm³"
],
"answer": 3,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 8.6 × 1000 = 8,600 cm³."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 135 miles in 3 hours. What is the average speed?",
"options": [
"45 mph",
"33.8 mph",
"405 mph",
"0.8 mph"
],
"answer": 0,
"explain": "Speed = distance ÷ time. 135 ÷ 3 = 45 mph."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 14:10 and arrives at 15:20. How long is this?",
"options": [
"1 h 10 min",
"1 h 30 min",
"10 min",
"2 h 10 min"
],
"answer": 0,
"explain": "Count on from 14:10: up to the next whole hour, then whole hours, then the minutes to 15:20. The total is 1 h 10 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 1 hours 9 minutes as a decimal number of hours.",
"options": [
"1.85 hours",
"1.15 hours",
"0.69 hours",
"1.09 hours"
],
"answer": 1,
"explain": "9 minutes = 9 ÷ 60 = 0.15 of an hour, so 1 h 9 min = 1.15 hours."
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 370.3 mm into cm.",
"options": [
"37.03 cm",
"3.703 cm",
"370.3 cm",
"3,703 cm"
],
"answer": 0,
"explain": "1 cm = 10 mm. Going from mm to cm (a bigger unit) you divide by 10: 370.3 ÷ 10 = 37.03 cm."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 64 km into miles.",
"options": [
"320 miles",
"40 miles",
"102.4 miles",
"8 miles"
],
"answer": 1,
"explain": "64 ÷ 8 = 8 lots of 8 km. 8 × 5 = 40 miles."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 10 litres per minute. How long does it take to fill 100 litres?",
"options": [
"90 minutes",
"0.1 minutes",
"10 minutes",
"1,000 minutes"
],
"answer": 2,
"explain": "Time = amount ÷ rate = 100 ÷ 10 = 10 minutes."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 14 cm by 8 cm by 4 cm. Find its total surface area.",
"options": [
"400 cm²",
"200 cm²",
"672 cm²",
"448 cm²"
],
"answer": 0,
"explain": "A cuboid has 3 pairs of faces: 2 × (14×8) + 2 × (14×4) + 2 × (8×4) = 2 × (112 + 56 + 32) = 400 cm²."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 224 N acts on an area of 0.8 m². Find the pressure.",
"options": [
"140 N/m²",
"280 N/m²",
"0.0036 N/m²",
"179.2 N/m²"
],
"answer": 1,
"explain": "Pressure = force ÷ area = 224 ÷ 0.8 = 280 N/m²."
}
],
[
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 12 litres per minute. How long does it take to fill 336 litres?",
"options": [
"324 minutes",
"4,032 minutes",
"28 minutes",
"0.036 minutes"
],
"answer": 2,
"explain": "Time = amount ÷ rate = 336 ÷ 12 = 28 minutes."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 17 m² into cm².",
"options": [
"1,700 cm²",
"0.0017 cm²",
"17,000 cm²",
"170,000 cm²"
],
"answer": 3,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 17 × 10,000 = 170,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 122.5 km at an average speed of 70 km/h. How long does the journey take?",
"options": [
"1 h 75 min",
"1 h 45 min",
"2 h 45 min",
"1 h 30 min"
],
"answer": 1,
"explain": "Time = distance ÷ speed = 122.5 ÷ 70 = 1.75 hours. 0.75 hours × 60 = 45 minutes, so the time is 1 h 45 min."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 250,000. Two towns are 15 cm apart on the map. How far apart are they in real life?",
"options": [
"37.5 km",
"3.75 km",
"375 km",
"3,750 km"
],
"answer": 0,
"explain": "Real distance = 15 × 250,000 = 3,750,000 cm. Divide by 100 for metres (37,500 m) and by 1000 for km: 37.5 km."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 55 miles into kilometres.",
"options": [
"88 km",
"8.8 km",
"34.375 km",
"440 km"
],
"answer": 0,
"explain": "55 ÷ 5 = 11 lots of 5 miles. 11 × 8 = 88 km."
}
],
[
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 5,833 ml into litres.",
"options": [
"5.833 litres",
"5,833,000 litres",
"0.5833 litres",
"58.33 litres"
],
"answer": 0,
"explain": "1 litre = 1,000 ml. Going from ml to litres (a bigger unit) you divide by 1,000: 5,833 ÷ 1,000 = 5.833 litres."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 5.7 hours in hours and minutes.",
"options": [
"5 h 70 min",
"5 h 18 min",
"5 h 42 min",
"5 h 7 min"
],
"answer": 2,
"explain": "0.7 of an hour = 0.7 × 60 = 42 minutes, so 5.7 hours = 5 h 42 min. It is not 5 h 70 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 11:10 and ends at 13:45. How long is this?",
"options": [
"1 h 35 min",
"2 h 35 min",
"2 h 25 min",
"3 h 35 min"
],
"answer": 1,
"explain": "Count on from 11:10: up to the next whole hour, then whole hours, then the minutes to 13:45. The total is 2 h 35 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 910 m, correct to the nearest 10. What is the lower bound?",
"options": [
"905 m",
"915 m",
"900 m",
"909 m"
],
"answer": 0,
"explain": "Half of 10 is 5. Lower bound = 910 − 5 = 905 m."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 30 km/h for 15 minutes. How far does it travel?",
"options": [
"450 km",
"4.5 km",
"7.5 km",
"120 km"
],
"answer": 2,
"explain": "Distance = speed × time. 15 minutes = 0.25 hours, so 30 × 0.25 = 7.5 km."
}
],
[
{
"topic": "Area units",
"tier": "F",
"q": "Convert 3.1 m² into cm².",
"options": [
"3,100 cm²",
"31,000 cm²",
"310 cm²",
"0.00031 cm²"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 3.1 × 10,000 = 31,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 4.72 litres into cl.",
"options": [
"4,720 cl",
"472 cl",
"47.2 cl",
"0.0472 cl"
],
"answer": 1,
"explain": "1 litre = 100 cl. Going from litres to cl (a smaller unit) you multiply by 100: 4.72 × 100 = 472 cl."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 52.5 miles at an average speed of 35 mph. How long does the journey take?",
"options": [
"1 h 50 min",
"2 h 30 min",
"1 h 45 min",
"1 h 30 min"
],
"answer": 3,
"explain": "Time = distance ÷ speed = 52.5 ÷ 35 = 1.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 1 h 30 min."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 1,651 cm³?",
"options": [
"165.1 litres",
"16.51 litres",
"1.651 litres",
"1,651,000 litres"
],
"answer": 2,
"explain": "1 litre = 1000 cm³, so divide by 1000: 1,651 ÷ 1000 = 1.651 litres."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 3 cm by 9 cm by 7 cm. Find its total surface area.",
"options": [
"111 cm²",
"189 cm²",
"222 cm²",
"162 cm²"
],
"answer": 2,
"explain": "A cuboid has 3 pairs of faces: 2 × (3×9) + 2 × (3×7) + 2 × (9×7) = 2 × (27 + 21 + 63) = 222 cm²."
}
],
[
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 9.9 tonnes into kg.",
"options": [
"99,000 kg",
"9,900 kg",
"0.0099 kg",
"990 kg"
],
"answer": 1,
"explain": "1 tonne = 1,000 kg. Going from tonnes to kg (a smaller unit) you multiply by 1,000: 9.9 × 1,000 = 9,900 kg."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 15 litres per minute. How long does it take to fill 45 litres?",
"options": [
"30 minutes",
"675 minutes",
"3 minutes",
"0.333 minutes"
],
"answer": 2,
"explain": "Time = amount ÷ rate = 45 ÷ 15 = 3 minutes."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 09:55 and arrives at 12:10. How long is this?",
"options": [
"2 h 55 min",
"3 h 15 min",
"1 h 15 min",
"2 h 15 min"
],
"answer": 3,
"explain": "Count on from 09:55: up to the next whole hour, then whole hours, then the minutes to 12:10. The total is 2 h 15 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 50 m. One side is 19 m. How long is the other side?",
"options": [
"25 m",
"24 m",
"6 m",
"31 m"
],
"answer": 2,
"explain": "Two sides of 19 make 38. 50 − 38 = 12, which is shared between the other two sides: 12 ÷ 2 = 6 m."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 8 m, a perpendicular height of 7 m and a sloping side of 8 m. Find its area.",
"options": [
"56 m²",
"64 m²",
"32 m²",
"28 m²"
],
"answer": 0,
"explain": "Area of a parallelogram = base × perpendicular height = 8 × 7 = 56 m². The sloping side is not needed."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 70 miles in 1 hour 45 minutes. What is the average speed?",
"options": [
"0.7 mph",
"40 mph",
"122.5 mph",
"48.3 mph"
],
"answer": 1,
"explain": "Speed = distance ÷ time. Write the time in hours: 1 hour 45 minutes = 1.75 hours. 70 ÷ 1.75 = 40 mph."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 3 litres per minute. How long does it take to fill 120 litres?",
"options": [
"40 minutes",
"360 minutes",
"0.025 minutes",
"117 minutes"
],
"answer": 0,
"explain": "Time = amount ÷ rate = 120 ÷ 3 = 40 minutes."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 19 m² into cm².",
"options": [
"190,000 cm²",
"0.0019 cm²",
"19,000 cm²",
"1,900 cm²"
],
"answer": 0,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 19 × 10,000 = 190,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 25.2 kg, correct to 1 decimal place. What is the upper bound?",
"options": [
"25.15 kg",
"25.24 kg",
"25.3 kg",
"25.25 kg"
],
"answer": 3,
"explain": "Half of 0.1 is 0.05. Upper bound = 25.2 + 0.05 = 25.25 kg."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 25 cm long and 3 cm wide. What is its perimeter?",
"options": [
"53 cm",
"28 cm",
"75 cm",
"56 cm"
],
"answer": 3,
"explain": "Perimeter is the distance all the way round: 25 + 3 + 25 + 3 = 56 cm."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "Write 6 hours 24 minutes as a decimal number of hours.",
"options": [
"6.4 hours",
"6.24 hours",
"3.84 hours",
"6.6 hours"
],
"answer": 0,
"explain": "24 minutes = 24 ÷ 60 = 0.4 of an hour, so 6 h 24 min = 6.4 hours."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 42 kg, correct to the nearest whole number. What is the upper bound?",
"options": [
"41.5 kg",
"43 kg",
"42.5 kg",
"42.4 kg"
],
"answer": 2,
"explain": "Half of 1 is 0.5. Upper bound = 42 + 0.5 = 42.5 kg."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 20 km at an average speed of 80 km/h. How long does the journey take?",
"options": [
"15 min",
"0 h 25 min",
"1 h 15 min",
"30 min"
],
"answer": 0,
"explain": "Time = distance ÷ speed = 20 ÷ 80 = 0.25 hours. 0.25 hours × 60 = 15 minutes, so the time is 15 min."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 5 m and a height of 10 m. Find its volume, to 1 decimal place.",
"options": [
"3,141.6 m³",
"785.4 m³",
"314.2 m³",
"157.1 m³"
],
"answer": 1,
"explain": "Volume of a cylinder = πr²h = π × 5² × 10 = π × 25 × 10 = 785.4 m³ (1 d.p.)."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 2 times those of the smaller one. The smaller solid has a volume of 15 cm³. Find the volume of the larger solid.",
"options": [
"90 cm³",
"120 cm³",
"60 cm³",
"30 cm³"
],
"answer": 1,
"explain": "Length scale factor 2 → volume scale factor 2³ = 8. 15 × 8 = 120 cm³."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 40 mph for 4 hours. How far does it travel?",
"options": [
"200 miles",
"160 miles",
"10 miles",
"9,600 miles"
],
"answer": 1,
"explain": "Distance = speed × time. 40 × 4 = 160 miles."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 14 cm, a perpendicular height of 13 cm and a sloping side of 16 cm. Find its area.",
"options": [
"182 cm²",
"224 cm²",
"60 cm²",
"91 cm²"
],
"answer": 0,
"explain": "Area of a parallelogram = base × perpendicular height = 14 × 13 = 182 cm². The sloping side is not needed."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 6.4 hours in hours and minutes.",
"options": [
"6 h 36 min",
"6 h 24 min",
"6 h 4 min",
"6 h 40 min"
],
"answer": 1,
"explain": "0.4 of an hour = 0.4 × 60 = 24 minutes, so 6.4 hours = 6 h 24 min. It is not 6 h 40 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 3,800 cm² into m².",
"options": [
"0.38 m²",
"3.8 m²",
"38,000,000 m²",
"38 m²"
],
"answer": 0,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 3,800 ÷ 10,000 = 0.38 m²."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 37 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"148 cm",
"149.6 cm",
"146 cm",
"150 cm"
],
"answer": 3,
"explain": "Upper bound of the side = 37 + 0.5 = 37.5 cm. Upper bound perimeter = 4 × 37.5 = 150 cm."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A bar has a mass of 337.5 g and a volume of 135 cm³. Find its density.",
"options": [
"45,562.5 g/cm³",
"25 g/cm³",
"2.5 g/cm³",
"0.4 g/cm³"
],
"answer": 2,
"explain": "Density = mass ÷ volume = 337.5 ÷ 135 = 2.5 g/cm³."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 136 litre tank in 17 minutes. What is the rate of flow?",
"options": [
"8 litres/min",
"0.125 litres/min",
"2,312 litres/min",
"80 litres/min"
],
"answer": 0,
"explain": "Rate = amount ÷ time = 136 ÷ 17 = 8 litres per minute."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 16 cl into ml.",
"options": [
"1.6 ml",
"1,600 ml",
"160 ml",
"16 ml"
],
"answer": 2,
"explain": "1 cl = 10 ml. Going from cl to ml (a smaller unit) you multiply by 10: 16 × 10 = 160 ml."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 10.1 hours in hours and minutes.",
"options": [
"10 h 54 min",
"10 h 6 min",
"10 h 1 min",
"10 h 10 min"
],
"answer": 1,
"explain": "0.1 of an hour = 0.1 × 60 = 6 minutes, so 10.1 hours = 10 h 6 min. It is not 10 h 10 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 20,000. Two towns are 4 cm apart on the map. How far apart are they in real life?",
"options": [
"0.08 km",
"0.8 km",
"80 km",
"8 km"
],
"answer": 1,
"explain": "Real distance = 4 × 20,000 = 80,000 cm. Divide by 100 for metres (800 m) and by 1000 for km: 0.8 km."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 28 m. One side is 8 m. How long is the other side?",
"options": [
"20 m",
"24 m",
"14 m",
"6 m"
],
"answer": 3,
"explain": "Two sides of 8 make 16. 28 − 16 = 12, which is shared between the other two sides: 12 ÷ 2 = 6 m."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 5.8 litres?",
"options": [
"0.0058 cm³",
"580 cm³",
"5,800 cm³",
"5,800,000 cm³"
],
"answer": 2,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 5.8 × 1000 = 5,800 cm³."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 17 cm and a perpendicular height of 2 cm. Find its area.",
"options": [
"17 cm²",
"19 cm²",
"34 cm²",
"8.5 cm²"
],
"answer": 0,
"explain": "Area of a triangle = ½ × base × height = ½ × 17 × 2 = 17 cm²."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 10,000. Two towns are 7.5 cm apart on the map. How far apart are they in real life?",
"options": [
"0.75 km",
"7.5 km",
"0.075 km",
"75 km"
],
"answer": 0,
"explain": "Real distance = 7.5 × 10,000 = 75,000 cm. Divide by 100 for metres (750 m) and by 1000 for km: 0.75 km."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 22 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"88 cm",
"89.6 cm",
"90 cm",
"86 cm"
],
"answer": 2,
"explain": "Upper bound of the side = 22 + 0.5 = 22.5 cm. Upper bound perimeter = 4 × 22.5 = 90 cm."
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 8 cm, correct to the nearest whole number. What is the upper bound?",
"options": [
"8.5 cm",
"7.5 cm",
"9 cm",
"8.4 cm"
],
"answer": 0,
"explain": "Half of 1 is 0.5. Upper bound = 8 + 0.5 = 8.5 cm."
},
{
"topic": "Density",
"tier": "F",
"q": "A block has a density of 2.7 g/cm³ and a mass of 37.8 g. Find its volume.",
"options": [
"140 cm³",
"102.06 cm³",
"14 cm³",
"0.0714 cm³"
],
"answer": 2,
"explain": "Volume = mass ÷ density = 37.8 ÷ 2.7 = 14 cm³."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 20 cm. Find its area, to 1 decimal place.",
"options": [
"1,256.6 cm²",
"125.7 cm²",
"314.2 cm²",
"62.8 cm²"
],
"answer": 2,
"explain": "First halve the diameter: r = 20 ÷ 2 = 10. Area = πr² = π × 10² = 314.2 cm² (1 d.p.)."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 6 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"35.5 cm²",
"30.25 cm²",
"42.25 cm²",
"36 cm²"
],
"answer": 1,
"explain": "Lower bound of the side = 6 − 0.5 = 5.5 cm. Lower bound area = 5.5² = 30.25 cm²."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 2 times those of the smaller one. The smaller solid has a volume of 18 cm³. Find the volume of the larger solid.",
"options": [
"36 cm³",
"144 cm³",
"72 cm³",
"108 cm³"
],
"answer": 1,
"explain": "Length scale factor 2 → volume scale factor 2³ = 8. 18 × 8 = 144 cm³."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a density of 7.8 g/cm³ and a mass of 1,131 g. Find its volume.",
"options": [
"145 cm³",
"1,450 cm³",
"8,821.8 cm³",
"0.0069 cm³"
],
"answer": 0,
"explain": "Volume = mass ÷ density = 1,131 ÷ 7.8 = 145 cm³."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 157.5 miles at an average speed of 45 mph. How long does the journey take?",
"options": [
"4 h 30 min",
"3 h 30 min",
"3 h 45 min",
"3 h 50 min"
],
"answer": 1,
"explain": "Time = distance ÷ speed = 157.5 ÷ 45 = 3.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 3 h 30 min."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 44 litres, correct to the nearest whole number. What is the upper bound?",
"options": [
"45 litres",
"44.5 litres",
"43.5 litres",
"44.4 litres"
],
"answer": 1,
"explain": "Half of 1 is 0.5. Upper bound = 44 + 0.5 = 44.5 litres."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 11.7 hours in hours and minutes.",
"options": [
"11 h 70 min",
"11 h 18 min",
"11 h 7 min",
"11 h 42 min"
],
"answer": 3,
"explain": "0.7 of an hour = 0.7 × 60 = 42 minutes, so 11.7 hours = 11 h 42 min. It is not 11 h 70 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of X from Q is 259°. What is the bearing of Q from X?",
"options": [
"101°",
"281°",
"079°",
"259°"
],
"answer": 2,
"explain": "A back bearing is 180° different. 259° is more than 180°, so subtract 180°: 079°."
}
],
[
{
"topic": "Area units",
"tier": "F",
"q": "Convert 560 cm² into m².",
"options": [
"5.6 m²",
"0.56 m²",
"0.056 m²",
"5,600,000 m²"
],
"answer": 2,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 560 ÷ 10,000 = 0.056 m²."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 09:45 and finishes at 14:05. How long is this?",
"options": [
"5 h 20 min",
"3 h 20 min",
"4 h 10 min",
"4 h 20 min"
],
"answer": 3,
"explain": "Count on from 09:45: up to the next whole hour, then whole hours, then the minutes to 14:05. The total is 4 h 20 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 30 m. One side is 7 m. How long is the other side?",
"options": [
"23 m",
"8 m",
"32 m",
"15 m"
],
"answer": 1,
"explain": "Two sides of 7 make 14. 30 − 14 = 16, which is shared between the other two sides: 16 ÷ 2 = 8 m."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 6.1 litres?",
"options": [
"0.0061 cm³",
"6,100,000 cm³",
"610 cm³",
"6,100 cm³"
],
"answer": 3,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 6.1 × 1000 = 6,100 cm³."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 4,700 N acts on an area of 2.5 m². Find the pressure.",
"options": [
"11,750 N/m²",
"940 N/m²",
"1,880 N/m²",
"0.0005 N/m²"
],
"answer": 2,
"explain": "Pressure = force ÷ area = 4,700 ÷ 2.5 = 1,880 N/m²."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 13 cm, a perpendicular height of 11 cm and a sloping side of 12 cm. Find its area.",
"options": [
"156 cm²",
"71.5 cm²",
"50 cm²",
"143 cm²"
],
"answer": 3,
"explain": "Area of a parallelogram = base × perpendicular height = 13 × 11 = 143 cm². The sloping side is not needed."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 55 mph for 3 hours 30 minutes. How far does it travel?",
"options": [
"11,550 miles",
"192.5 miles",
"15.7 miles",
"181.5 miles"
],
"answer": 1,
"explain": "Distance = speed × time. 3 hours 30 minutes = 3.5 hours, so 55 × 3.5 = 192.5 miles."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 18 mm. Find its area, to 1 decimal place.",
"options": [
"3,197.8 mm²",
"1,017.9 mm²",
"4,071.5 mm²",
"113.1 mm²"
],
"answer": 1,
"explain": "Area = πr² = π × 18² = π × 324 = 1,017.9 mm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "A tank holds 4.6 m³ of water. How many litres is this?",
"options": [
"0.0046 litres",
"4,600 litres",
"460 litres",
"4,600,000 litres"
],
"answer": 1,
"explain": "1 m³ = 1,000,000 cm³ and 1 litre = 1000 cm³, so 1 m³ = 1000 litres. 4.6 × 1000 = 4,600 litres."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 21 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"84 cm",
"82 cm",
"85.6 cm",
"86 cm"
],
"answer": 3,
"explain": "Upper bound of the side = 21 + 0.5 = 21.5 cm. Upper bound perimeter = 4 × 21.5 = 86 cm."
}
],
[
{
"topic": "Area units",
"tier": "F",
"q": "Convert 7.8 m² into cm².",
"options": [
"0.00078 cm²",
"78,000 cm²",
"780 cm²",
"7,800 cm²"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 7.8 × 10,000 = 78,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 8,707 ml into litres.",
"options": [
"0.8707 litres",
"87.07 litres",
"8,707,000 litres",
"8.707 litres"
],
"answer": 3,
"explain": "1 litre = 1,000 ml. Going from ml to litres (a bigger unit) you divide by 1,000: 8,707 ÷ 1,000 = 8.707 litres."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 14:40 and arrives at 20:25. How long is this?",
"options": [
"6 h 45 min",
"5 h 45 min",
"4 h 45 min",
"5 h 35 min"
],
"answer": 1,
"explain": "Count on from 14:40: up to the next whole hour, then whole hours, then the minutes to 20:25. The total is 5 h 45 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 5 times those of the smaller one. The smaller shape has an area of 25 cm². Find the area of the larger shape.",
"options": [
"625 cm²",
"3,125 cm²",
"250 cm²",
"125 cm²"
],
"answer": 0,
"explain": "Length scale factor 5 → area scale factor 5² = 25. 25 × 25 = 625 cm²."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 280 N/m² acts on an area of 0.25 m². Find the force.",
"options": [
"1,120 N",
"280.25 N",
"70 N",
"700 N"
],
"answer": 2,
"explain": "Force = pressure × area = 280 × 0.25 = 70 N."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 220 km at an average speed of 55 km/h. How long does the journey take?",
"options": [
"5 h",
"4 h",
"4 h 15 min",
"4 h 30 min"
],
"answer": 1,
"explain": "Time = distance ÷ speed = 220 ÷ 55 = 4 hours."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 13 m by 2 m by 3 m. Find its volume.",
"options": [
"78 m³",
"26 m³",
"71 m³",
"142 m³"
],
"answer": 0,
"explain": "Volume of a cuboid = length × width × height = 13 × 2 × 3 = 78 m³."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 7 cm by 2 cm by 5 cm. Find its total surface area.",
"options": [
"84 cm²",
"118 cm²",
"70 cm²",
"59 cm²"
],
"answer": 1,
"explain": "A cuboid has 3 pairs of faces: 2 × (7×2) + 2 × (7×5) + 2 × (2×5) = 2 × (14 + 35 + 10) = 118 cm²."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 9 litres?",
"options": [
"900 cm³",
"9,000 cm³",
"9,000,000 cm³",
"0.009 cm³"
],
"answer": 1,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 9 × 1000 = 9,000 cm³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 75.8 mm into cm.",
"options": [
"7.58 cm",
"758 cm",
"75.8 cm",
"0.758 cm"
],
"answer": 0,
"explain": "1 cm = 10 mm. Going from mm to cm (a bigger unit) you divide by 10: 75.8 ÷ 10 = 7.58 cm."
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 4,566 m into km.",
"options": [
"4.566 km",
"0.4566 km",
"4,566,000 km",
"45.66 km"
],
"answer": 0,
"explain": "1 km = 1,000 m. Going from m to km (a bigger unit) you divide by 1,000: 4,566 ÷ 1,000 = 4.566 km."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 8 m and 9 m, and a perpendicular height of 2 m. Find its area.",
"options": [
"1 m²",
"34 m²",
"72 m²",
"17 m²"
],
"answer": 3,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (8 + 9) × 2 = ½ × 17 × 2 = 17 m²."
},
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a mass of 28 g and a volume of 35 cm³. Find its density.",
"options": [
"1.25 g/cm³",
"0.8 g/cm³",
"980 g/cm³",
"8 g/cm³"
],
"answer": 1,
"explain": "Density = mass ÷ volume = 28 ÷ 35 = 0.8 g/cm³."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 15:40 and ends at 18:15. How long is this?",
"options": [
"2 h 35 min",
"3 h 35 min",
"1 h 35 min",
"2 h 25 min"
],
"answer": 0,
"explain": "Count on from 15:40: up to the next whole hour, then whole hours, then the minutes to 18:15. The total is 2 h 35 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 5 m long and 13 m wide. What is its perimeter?",
"options": [
"23 m",
"36 m",
"18 m",
"65 m"
],
"answer": 1,
"explain": "Perimeter is the distance all the way round: 5 + 13 + 5 + 13 = 36 m."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 100,000. Two towns are 1.5 cm apart on the map. How far apart are they in real life?",
"options": [
"1.5 km",
"150 km",
"15 km",
"0.15 km"
],
"answer": 0,
"explain": "Real distance = 1.5 × 100,000 = 150,000 cm. Divide by 100 for metres (1,500 m) and by 1000 for km: 1.5 km."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 3 litres per minute. How long does it take to fill 30 litres?",
"options": [
"10 minutes",
"27 minutes",
"90 minutes",
"0.1 minutes"
],
"answer": 0,
"explain": "Time = amount ÷ rate = 30 ÷ 3 = 10 minutes."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of Y from B is 234°. What is the bearing of B from Y?",
"options": [
"234°",
"306°",
"126°",
"054°"
],
"answer": 3,
"explain": "A back bearing is 180° different. 234° is more than 180°, so subtract 180°: 054°."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 7 cm and height 2 cm. The prism is 16 cm long. Find its volume.",
"options": [
"112 cm³",
"72 cm³",
"7 cm³",
"224 cm³"
],
"answer": 0,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 7 × 2 = 7. 7 × 16 = 112 cm³."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "A tank holds 3.5 m³ of water. How many litres is this?",
"options": [
"3,500 litres",
"0.0035 litres",
"3,500,000 litres",
"350 litres"
],
"answer": 0,
"explain": "1 m³ = 1,000,000 cm³ and 1 litre = 1000 cm³, so 1 m³ = 1000 litres. 3.5 × 1000 = 3,500 litres."
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 72 km into miles.",
"options": [
"45 miles",
"9 miles",
"360 miles",
"115.2 miles"
],
"answer": 0,
"explain": "72 ÷ 8 = 9 lots of 8 km. 9 × 5 = 45 miles."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 60 km/h for 15 minutes. How far does it travel?",
"options": [
"900 km",
"240 km",
"15 km",
"9 km"
],
"answer": 2,
"explain": "Distance = speed × time. 15 minutes = 0.25 hours, so 60 × 0.25 = 15 km."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 0.7 m² into cm².",
"options": [
"7,000 cm²",
"70 cm²",
"0.00007 cm²",
"700 cm²"
],
"answer": 0,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 0.7 × 10,000 = 7,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 8,092 g into kg.",
"options": [
"8.092 kg",
"0.8092 kg",
"80.92 kg",
"8,092,000 kg"
],
"answer": 0,
"explain": "1 kg = 1,000 g. Going from g to kg (a bigger unit) you divide by 1,000: 8,092 ÷ 1,000 = 8.092 kg."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 250,000. Two towns are 2.5 cm apart on the map. How far apart are they in real life?",
"options": [
"0.625 km",
"62.5 km",
"625 km",
"6.25 km"
],
"answer": 3,
"explain": "Real distance = 2.5 × 250,000 = 625,000 cm. Divide by 100 for metres (6,250 m) and by 1000 for km: 6.25 km."
}
],
[
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 19 cl into ml.",
"options": [
"19 ml",
"1.9 ml",
"190 ml",
"1,900 ml"
],
"answer": 2,
"explain": "1 cl = 10 ml. Going from cl to ml (a smaller unit) you multiply by 10: 19 × 10 = 190 ml."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 12 cm by 8 cm by 6 cm. Find its volume.",
"options": [
"96 cm³",
"216 cm³",
"576 cm³",
"432 cm³"
],
"answer": 2,
"explain": "Volume of a cuboid = length × width × height = 12 × 8 × 6 = 576 cm³."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 12 m and 19 m, and a perpendicular height of 8 m. Find its area.",
"options": [
"912 m²",
"248 m²",
"28 m²",
"124 m²"
],
"answer": 3,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (12 + 19) × 8 = ½ × 31 × 8 = 124 m²."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 11 cm by 9 cm by 9 cm. Find its total surface area.",
"options": [
"594 cm²",
"279 cm²",
"891 cm²",
"558 cm²"
],
"answer": 3,
"explain": "A cuboid has 3 pairs of faces: 2 × (11×9) + 2 × (11×9) + 2 × (9×9) = 2 × (99 + 99 + 81) = 558 cm²."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of P from Y is 153°. What is the bearing of Y from P?",
"options": [
"153°",
"027°",
"333°",
"207°"
],
"answer": 2,
"explain": "A back bearing is 180° different. 153° is less than 180°, so add 180°: 333°."
}
],
[
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "A tank holds 4.9 m³ of water. How many litres is this?",
"options": [
"0.0049 litres",
"490 litres",
"4,900,000 litres",
"4,900 litres"
],
"answer": 3,
"explain": "1 m³ = 1,000,000 cm³ and 1 litre = 1000 cm³, so 1 m³ = 1000 litres. 4.9 × 1000 = 4,900 litres."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of X from Y is 076°. What is the bearing of Y from X?",
"options": [
"104°",
"284°",
"076°",
"256°"
],
"answer": 3,
"explain": "A back bearing is 180° different. 076° is less than 180°, so add 180°: 256°."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 100,000. Two towns are 8 cm apart on the map. How far apart are they in real life?",
"options": [
"800 km",
"80 km",
"8 km",
"0.8 km"
],
"answer": 2,
"explain": "Real distance = 8 × 100,000 = 800,000 cm. Divide by 100 for metres (8,000 m) and by 1000 for km: 8 km."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 955.1 ml into litres.",
"options": [
"0.09551 litres",
"0.9551 litres",
"955,100 litres",
"9.551 litres"
],
"answer": 1,
"explain": "1 litre = 1,000 ml. Going from ml to litres (a bigger unit) you divide by 1,000: 955.1 ÷ 1,000 = 0.9551 litres."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 7 hours 15 minutes as a decimal number of hours.",
"options": [
"4.35 hours",
"7.15 hours",
"7.75 hours",
"7.25 hours"
],
"answer": 3,
"explain": "15 minutes = 15 ÷ 60 = 0.25 of an hour, so 7 h 15 min = 7.25 hours."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 11:15 and ends at 15:30. How long is this?",
"options": [
"4 h 15 min",
"4 h 5 min",
"3 h 15 min",
"5 h 15 min"
],
"answer": 0,
"explain": "Count on from 11:15: up to the next whole hour, then whole hours, then the minutes to 15:30. The total is 4 h 15 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 8 mm. Find its circumference, to 1 decimal place.",
"options": [
"201.1 mm",
"25.1 mm",
"50.3 mm",
"100.5 mm"
],
"answer": 2,
"explain": "Circumference = 2πr (or πd) = 2 × π × 8 = 50.3 mm (1 d.p.)."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 25 kg into pounds.",
"options": [
"55 pounds",
"27.2 pounds",
"550 pounds",
"11.4 pounds"
],
"answer": 0,
"explain": "Multiply by 2.2: 25 × 2.2 = 55 pounds."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of Y from P is 308°. What is the bearing of P from Y?",
"options": [
"232°",
"128°",
"052°",
"308°"
],
"answer": 1,
"explain": "A back bearing is 180° different. 308° is more than 180°, so subtract 180°: 128°."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 25,000. Two towns are 6.5 cm apart on the map. How far apart are they in real life?",
"options": [
"16.25 km",
"162.5 km",
"1.625 km",
"0.1625 km"
],
"answer": 2,
"explain": "Real distance = 6.5 × 25,000 = 162,500 cm. Divide by 100 for metres (1,625 m) and by 1000 for km: 1.625 km."
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 16 mm. Find its circumference, to 1 decimal place.",
"options": [
"201.1 mm",
"50.3 mm",
"804.2 mm",
"100.5 mm"
],
"answer": 3,
"explain": "Circumference = 2πr (or πd) = 2 × π × 16 = 100.5 mm (1 d.p.)."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 11 m by 12 m by 4 m. Find its volume.",
"options": [
"132 m³",
"448 m³",
"528 m³",
"224 m³"
],
"answer": 2,
"explain": "Volume of a cuboid = length × width × height = 11 × 12 × 4 = 528 m³."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 106 cm³?",
"options": [
"1.06 litres",
"10.6 litres",
"0.106 litres",
"106,000 litres"
],
"answer": 2,
"explain": "1 litre = 1000 cm³, so divide by 1000: 106 ÷ 1000 = 0.106 litres."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 3 times those of the smaller one. The smaller shape has an area of 29 cm². Find the area of the larger shape.",
"options": [
"87 cm²",
"783 cm²",
"174 cm²",
"261 cm²"
],
"answer": 3,
"explain": "Length scale factor 3 → area scale factor 3² = 9. 29 × 9 = 261 cm²."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 52 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"2,756.25 cm²",
"2,652.25 cm²",
"2,704 cm²",
"2,703.5 cm²"
],
"answer": 1,
"explain": "Lower bound of the side = 52 − 0.5 = 51.5 cm. Lower bound area = 51.5² = 2,652.25 cm²."
}
],
[
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 13 cm by 3 cm by 8 cm. Find its total surface area.",
"options": [
"312 cm²",
"334 cm²",
"167 cm²",
"234 cm²"
],
"answer": 1,
"explain": "A cuboid has 3 pairs of faces: 2 × (13×3) + 2 × (13×8) + 2 × (3×8) = 2 × (39 + 104 + 24) = 334 cm²."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 800 m, correct to the nearest 10. What is the lower bound?",
"options": [
"805 m",
"790 m",
"799 m",
"795 m"
],
"answer": 3,
"explain": "Half of 10 is 5. Lower bound = 800 − 5 = 795 m."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 0.1 litres into cl.",
"options": [
"100 cl",
"1 cl",
"10 cl",
"0.001 cl"
],
"answer": 2,
"explain": "1 litre = 100 cl. Going from litres to cl (a smaller unit) you multiply by 100: 0.1 × 100 = 10 cl."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 10,000. Two places are 0.2 km apart in real life. How far apart are they on the map?",
"options": [
"200 cm",
"2 cm",
"0.2 cm",
"20 cm"
],
"answer": 1,
"explain": "0.2 km = 20,000 cm. Map distance = 20,000 ÷ 10,000 = 2 cm."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 5 mm. Find its circumference, to 1 decimal place.",
"options": [
"62.8 mm",
"31.4 mm",
"78.5 mm",
"15.7 mm"
],
"answer": 1,
"explain": "Circumference = 2πr (or πd) = 2 × π × 5 = 31.4 mm (1 d.p.)."
}
],
[
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 420 litre tank in 21 minutes. What is the rate of flow?",
"options": [
"200 litres/min",
"0.05 litres/min",
"20 litres/min",
"8,820 litres/min"
],
"answer": 2,
"explain": "Rate = amount ÷ time = 420 ÷ 21 = 20 litres per minute."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 250,000. Two places are 25 km apart in real life. How far apart are they on the map?",
"options": [
"1 cm",
"1,000 cm",
"10 cm",
"100 cm"
],
"answer": 2,
"explain": "25 km = 2,500,000 cm. Map distance = 2,500,000 ÷ 250,000 = 10 cm."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 7.5 miles at an average speed of 30 mph. How long does the journey take?",
"options": [
"15 min",
"0 h 25 min",
"30 min",
"1 h 15 min"
],
"answer": 0,
"explain": "Time = distance ÷ speed = 7.5 ÷ 30 = 0.25 hours. 0.25 hours × 60 = 15 minutes, so the time is 15 min."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 9.8 tonnes into kg.",
"options": [
"9,800 kg",
"980 kg",
"0.0098 kg",
"98,000 kg"
],
"answer": 0,
"explain": "1 tonne = 1,000 kg. Going from tonnes to kg (a smaller unit) you multiply by 1,000: 9.8 × 1,000 = 9,800 kg."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 24 kg into pounds.",
"options": [
"10.9 pounds",
"52.8 pounds",
"26.2 pounds",
"528 pounds"
],
"answer": 1,
"explain": "Multiply by 2.2: 24 × 2.2 = 52.8 pounds."
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 8 m. Find its area, to 1 decimal place.",
"options": [
"201.1 m²",
"631.7 m²",
"50.3 m²",
"804.2 m²"
],
"answer": 0,
"explain": "Area = πr² = π × 8² = π × 64 = 201.1 m² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 20 m² into cm².",
"options": [
"200,000 cm²",
"20,000 cm²",
"0.002 cm²",
"2,000 cm²"
],
"answer": 0,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 20 × 10,000 = 200,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 500,000. Two places are 90 km apart in real life. How far apart are they on the map?",
"options": [
"180 cm",
"1,800 cm",
"18 cm",
"1.8 cm"
],
"answer": 2,
"explain": "90 km = 9,000,000 cm. Map distance = 9,000,000 ÷ 500,000 = 18 cm."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 192 N acts on an area of 0.8 m². Find the pressure.",
"options": [
"153.6 N/m²",
"240 N/m²",
"0.0042 N/m²",
"120 N/m²"
],
"answer": 1,
"explain": "Pressure = force ÷ area = 192 ÷ 0.8 = 240 N/m²."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 19.5 m/s into km/h.",
"options": [
"19,500 km/h",
"70.2 km/h",
"1,170 km/h",
"5.42 km/h"
],
"answer": 1,
"explain": "In 1 hour there are 3600 seconds, so 19.5 m/s = 19.5 × 3600 = 70,200 m per hour = 70.2 km/h. (Shortcut: × 3.6.)"
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 9 cm long and 10 cm wide. What is its perimeter?",
"options": [
"19 cm",
"28 cm",
"38 cm",
"90 cm"
],
"answer": 2,
"explain": "Perimeter is the distance all the way round: 9 + 10 + 9 + 10 = 38 cm."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 4.4 m² into cm².",
"options": [
"44,000 cm²",
"440 cm²",
"4,400 cm²",
"0.00044 cm²"
],
"answer": 0,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 4.4 × 10,000 = 44,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 2 m and height 5 m. The prism is 21 m long. Find its volume.",
"options": [
"105 m³",
"5 m³",
"73.5 m³",
"210 m³"
],
"answer": 0,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 2 × 5 = 5. 5 × 21 = 105 m³."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 200,000. Two towns are 12.5 cm apart on the map. How far apart are they in real life?",
"options": [
"250 km",
"25 km",
"2.5 km",
"2,500 km"
],
"answer": 1,
"explain": "Real distance = 12.5 × 200,000 = 2,500,000 cm. Divide by 100 for metres (25,000 m) and by 1000 for km: 25 km."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 12 cm. Find its area, to 1 decimal place.",
"options": [
"37.7 cm²",
"452.4 cm²",
"113.1 cm²",
"75.4 cm²"
],
"answer": 2,
"explain": "First halve the diameter: r = 12 ÷ 2 = 6. Area = πr² = π × 6² = 113.1 cm² (1 d.p.)."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A block has a density of 7.8 g/cm³ and a mass of 1,209 g. Find its volume.",
"options": [
"1,550 cm³",
"9,430.2 cm³",
"155 cm³",
"0.0065 cm³"
],
"answer": 2,
"explain": "Volume = mass ÷ density = 1,209 ÷ 7.8 = 155 cm³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 9 cm into mm.",
"options": [
"90 mm",
"0.9 mm",
"900 mm",
"9 mm"
],
"answer": 0,
"explain": "1 cm = 10 mm. Going from cm to mm (a smaller unit) you multiply by 10: 9 × 10 = 90 mm."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 260 miles at an average speed of 65 mph. How long does the journey take?",
"options": [
"4 h 30 min",
"5 h",
"4 h 15 min",
"4 h"
],
"answer": 3,
"explain": "Time = distance ÷ speed = 260 ÷ 65 = 4 hours."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 48 cm. One side is 10 cm. How long is the other side?",
"options": [
"38 cm",
"14 cm",
"24 cm",
"56 cm"
],
"answer": 1,
"explain": "Two sides of 10 make 20. 48 − 20 = 28, which is shared between the other two sides: 28 ÷ 2 = 14 cm."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 10.4 hours in hours and minutes.",
"options": [
"10 h 24 min",
"10 h 40 min",
"10 h 4 min",
"10 h 36 min"
],
"answer": 0,
"explain": "0.4 of an hour = 0.4 × 60 = 24 minutes, so 10.4 hours = 10 h 24 min. It is not 10 h 40 min, because an hour has 60 minutes, not 100."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 09:10 and finishes at 14:50. How long is this?",
"options": [
"4 h 40 min",
"6 h 40 min",
"5 h 30 min",
"5 h 40 min"
],
"answer": 3,
"explain": "Count on from 09:10: up to the next whole hour, then whole hours, then the minutes to 14:50. The total is 5 h 40 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 2,991 cm³?",
"options": [
"299.1 litres",
"2,991,000 litres",
"2.991 litres",
"29.91 litres"
],
"answer": 2,
"explain": "1 litre = 1000 cm³, so divide by 1000: 2,991 ÷ 1000 = 2.991 litres."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 371.9 mm into m.",
"options": [
"371,900 m",
"3.719 m",
"0.3719 m",
"0.03719 m"
],
"answer": 2,
"explain": "1 m = 1,000 mm. Going from mm to m (a bigger unit) you divide by 1,000: 371.9 ÷ 1,000 = 0.3719 m."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 306 km/h into m/s.",
"options": [
"1,101.6 m/s",
"5.1 m/s",
"85 m/s",
"5,100 m/s"
],
"answer": 2,
"explain": "306 km/h = 306,000 m in 3600 seconds. 306,000 ÷ 3600 = 85 m/s. (Shortcut: ÷ 3.6.)"
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 4 times those of the smaller one. The smaller shape has an area of 13 cm². Find the area of the larger shape.",
"options": [
"208 cm²",
"52 cm²",
"104 cm²",
"832 cm²"
],
"answer": 0,
"explain": "Length scale factor 4 → area scale factor 4² = 16. 13 × 16 = 208 cm²."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 25,000. Two places are 4.5 km apart in real life. How far apart are they on the map?",
"options": [
"1.8 cm",
"180 cm",
"18 cm",
"1,800 cm"
],
"answer": 2,
"explain": "4.5 km = 450,000 cm. Map distance = 450,000 ÷ 25,000 = 18 cm."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 30 mph for 2 hours 15 minutes. How far does it travel?",
"options": [
"64.5 miles",
"13.3 miles",
"4,050 miles",
"67.5 miles"
],
"answer": 3,
"explain": "Distance = speed × time. 2 hours 15 minutes = 2.25 hours, so 30 × 2.25 = 67.5 miles."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 10 litre tank in 5 minutes. What is the rate of flow?",
"options": [
"50 litres/min",
"20 litres/min",
"0.5 litres/min",
"2 litres/min"
],
"answer": 3,
"explain": "Rate = amount ÷ time = 10 ÷ 5 = 2 litres per minute."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 26 m. Find its area, to 1 decimal place.",
"options": [
"81.7 m²",
"2,123.7 m²",
"163.4 m²",
"530.9 m²"
],
"answer": 3,
"explain": "First halve the diameter: r = 26 ÷ 2 = 13. Area = πr² = π × 13² = 530.9 m² (1 d.p.)."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 2 times those of the smaller one. The smaller solid has a volume of 11 cm³. Find the volume of the larger solid.",
"options": [
"44 cm³",
"22 cm³",
"88 cm³",
"66 cm³"
],
"answer": 2,
"explain": "Length scale factor 2 → volume scale factor 2³ = 8. 11 × 8 = 88 cm³."
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 7.2 kg, correct to 1 decimal place. What is the lower bound?",
"options": [
"7.1 kg",
"7.25 kg",
"7.19 kg",
"7.15 kg"
],
"answer": 3,
"explain": "Half of 0.1 is 0.05. Lower bound = 7.2 − 0.05 = 7.15 kg."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 40 mph for 1 hour 45 minutes. How far does it travel?",
"options": [
"70 miles",
"58 miles",
"22.9 miles",
"4,200 miles"
],
"answer": 0,
"explain": "Distance = speed × time. 1 hour 45 minutes = 1.75 hours, so 40 × 1.75 = 70 miles."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 3.2 m³ into cm³.",
"options": [
"320 cm³",
"3,200 cm³",
"32,000 cm³",
"3,200,000 cm³"
],
"answer": 3,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 3.2 × 1,000,000 = 3,200,000 cm³."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 7 cm and a height of 14 cm. Find its volume, to 1 decimal place.",
"options": [
"615.8 cm³",
"8,620.5 cm³",
"2,155.1 cm³",
"307.9 cm³"
],
"answer": 2,
"explain": "Volume of a cylinder = πr²h = π × 7² × 14 = π × 49 × 14 = 2,155.1 cm³ (1 d.p.)."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 15 m, a perpendicular height of 9 m and a sloping side of 12 m. Find its area.",
"options": [
"67.5 m²",
"135 m²",
"180 m²",
"54 m²"
],
"answer": 1,
"explain": "Area of a parallelogram = base × perpendicular height = 15 × 9 = 135 m². The sloping side is not needed."
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 7 kg into pounds.",
"options": [
"3.2 pounds",
"154 pounds",
"9.2 pounds",
"15.4 pounds"
],
"answer": 3,
"explain": "Multiply by 2.2: 7 × 2.2 = 15.4 pounds."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 6 cm. Find its circumference, to 1 decimal place.",
"options": [
"37.7 cm",
"18.8 cm",
"113.1 cm",
"75.4 cm"
],
"answer": 0,
"explain": "Circumference = 2πr (or πd) = 2 × π × 6 = 37.7 cm (1 d.p.)."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 36 ml into litres.",
"options": [
"0.036 litres",
"0.0036 litres",
"0.36 litres",
"36,000 litres"
],
"answer": 0,
"explain": "1 litre = 1,000 ml. Going from ml to litres (a bigger unit) you divide by 1,000: 36 ÷ 1,000 = 0.036 litres."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 150 km in 3 hours. What is the average speed?",
"options": [
"450 km/h",
"50 km/h",
"37.5 km/h",
"0.8 km/h"
],
"answer": 1,
"explain": "Speed = distance ÷ time. 150 ÷ 3 = 50 km/h."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 08:35 and arrives at 12:05. How long is this?",
"options": [
"3 h 20 min",
"3 h 30 min",
"4 h 30 min",
"2 h 30 min"
],
"answer": 1,
"explain": "Count on from 08:35: up to the next whole hour, then whole hours, then the minutes to 12:05. The total is 3 h 30 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 17 m long and 14 m wide. What is its perimeter?",
"options": [
"62 m",
"48 m",
"238 m",
"31 m"
],
"answer": 0,
"explain": "Perimeter is the distance all the way round: 17 + 14 + 17 + 14 = 62 m."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 8 m² into cm².",
"options": [
"8,000 cm²",
"0.0008 cm²",
"800 cm²",
"80,000 cm²"
],
"answer": 3,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 8 × 10,000 = 80,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 4.7 litres?",
"options": [
"0.0047 cm³",
"470 cm³",
"4,700 cm³",
"4,700,000 cm³"
],
"answer": 2,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 4.7 × 1000 = 4,700 cm³."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 12 cm by 2 cm by 8 cm. Find its total surface area.",
"options": [
"272 cm²",
"144 cm²",
"192 cm²",
"136 cm²"
],
"answer": 0,
"explain": "A cuboid has 3 pairs of faces: 2 × (12×2) + 2 × (12×8) + 2 × (2×8) = 2 × (24 + 96 + 16) = 272 cm²."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 6 m and a height of 12 m. Find its volume, to 1 decimal place.",
"options": [
"452.4 m³",
"1,357.2 m³",
"226.2 m³",
"5,428.7 m³"
],
"answer": 1,
"explain": "Volume of a cylinder = πr²h = π × 6² × 12 = π × 36 × 12 = 1,357.2 m³ (1 d.p.)."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 18 m, a perpendicular height of 14 m and a sloping side of 15 m. Find its area.",
"options": [
"126 m²",
"270 m²",
"66 m²",
"252 m²"
],
"answer": 3,
"explain": "Area of a parallelogram = base × perpendicular height = 18 × 14 = 252 m². The sloping side is not needed."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 30 mph for 1 hour 30 minutes. How far does it travel?",
"options": [
"39 miles",
"2,700 miles",
"20 miles",
"45 miles"
],
"answer": 3,
"explain": "Distance = speed × time. 1 hour 30 minutes = 1.5 hours, so 30 × 1.5 = 45 miles."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 09:20 and ends at 13:10. How long is this?",
"options": [
"4 h 50 min",
"3 h 40 min",
"2 h 50 min",
"3 h 50 min"
],
"answer": 3,
"explain": "Count on from 09:20: up to the next whole hour, then whole hours, then the minutes to 13:10. The total is 3 h 50 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 4.3 cm into mm.",
"options": [
"43 mm",
"0.43 mm",
"4.3 mm",
"430 mm"
],
"answer": 0,
"explain": "1 cm = 10 mm. Going from cm to mm (a smaller unit) you multiply by 10: 4.3 × 10 = 43 mm."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 980 N/m² acts on an area of 0.8 m². Find the force.",
"options": [
"7,840 N",
"784 N",
"980.8 N",
"1,225 N"
],
"answer": 1,
"explain": "Force = pressure × area = 980 × 0.8 = 784 N."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 30 m long and 5 m wide. What is its perimeter?",
"options": [
"70 m",
"65 m",
"35 m",
"150 m"
],
"answer": 0,
"explain": "Perimeter is the distance all the way round: 30 + 5 + 30 + 5 = 70 m."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 9 hours 54 minutes as a decimal number of hours.",
"options": [
"9.1 hours",
"9.54 hours",
"5.94 hours",
"9.9 hours"
],
"answer": 3,
"explain": "54 minutes = 54 ÷ 60 = 0.9 of an hour, so 9 h 54 min = 9.9 hours."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 67 kg, correct to the nearest whole number. What is the lower bound?",
"options": [
"66.5 kg",
"66 kg",
"67.5 kg",
"66.9 kg"
],
"answer": 0,
"explain": "Half of 1 is 0.5. Lower bound = 67 − 0.5 = 66.5 kg."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "A tank holds 6 m³ of water. How many litres is this?",
"options": [
"6,000 litres",
"6,000,000 litres",
"600 litres",
"0.006 litres"
],
"answer": 0,
"explain": "1 m³ = 1,000,000 cm³ and 1 litre = 1000 cm³, so 1 m³ = 1000 litres. 6 × 1000 = 6,000 litres."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 9 cm and a height of 5 cm. Find its volume, to 1 decimal place.",
"options": [
"141.4 cm³",
"1,272.3 cm³",
"5,089.4 cm³",
"282.7 cm³"
],
"answer": 1,
"explain": "Volume of a cylinder = πr²h = π × 9² × 5 = π × 81 × 5 = 1,272.3 cm³ (1 d.p.)."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 15:05 and arrives at 17:25. How long is this?",
"options": [
"2 h 10 min",
"2 h 20 min",
"3 h 20 min",
"1 h 20 min"
],
"answer": 1,
"explain": "Count on from 15:05: up to the next whole hour, then whole hours, then the minutes to 17:25. The total is 2 h 20 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 950 litre tank in 38 minutes. What is the rate of flow?",
"options": [
"0.04 litres/min",
"25 litres/min",
"36,100 litres/min",
"250 litres/min"
],
"answer": 1,
"explain": "Rate = amount ÷ time = 950 ÷ 38 = 25 litres per minute."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "A tank holds 5.1 m³ of water. How many litres is this?",
"options": [
"5,100,000 litres",
"0.0051 litres",
"510 litres",
"5,100 litres"
],
"answer": 3,
"explain": "1 m³ = 1,000,000 cm³ and 1 litre = 1000 cm³, so 1 m³ = 1000 litres. 5.1 × 1000 = 5,100 litres."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of X from Y is 147°. What is the bearing of Y from X?",
"options": [
"213°",
"033°",
"147°",
"327°"
],
"answer": 3,
"explain": "A back bearing is 180° different. 147° is less than 180°, so add 180°: 327°."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 195 km at an average speed of 65 km/h. How long does the journey take?",
"options": [
"3 h 30 min",
"3 h",
"4 h",
"3 h 15 min"
],
"answer": 1,
"explain": "Time = distance ÷ speed = 195 ÷ 65 = 3 hours."
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 inch ≈ 2.5 cm. Convert 27 inches into centimetres.",
"options": [
"324 cm",
"675 cm",
"10.8 cm",
"67.5 cm"
],
"answer": 3,
"explain": "Multiply by 2.5: 27 × 2.5 = 67.5 cm."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 58 cm. One side is 27 cm. How long is the other side?",
"options": [
"8 cm",
"29 cm",
"2 cm",
"31 cm"
],
"answer": 2,
"explain": "Two sides of 27 make 54. 58 − 54 = 4, which is shared between the other two sides: 4 ÷ 2 = 2 cm."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 33 km into m.",
"options": [
"0.033 m",
"33,000 m",
"330,000 m",
"3,300 m"
],
"answer": 1,
"explain": "1 km = 1,000 m. Going from km to m (a smaller unit) you multiply by 1,000: 33 × 1,000 = 33,000 m."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 280 miles at an average speed of 70 mph. How long does the journey take?",
"options": [
"5 h",
"4 h",
"4 h 30 min",
"4 h 15 min"
],
"answer": 1,
"explain": "Time = distance ÷ speed = 280 ÷ 70 = 4 hours."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 59 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"237.6 cm",
"236 cm",
"234 cm",
"238 cm"
],
"answer": 3,
"explain": "Upper bound of the side = 59 + 0.5 = 59.5 cm. Upper bound perimeter = 4 × 59.5 = 238 cm."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 25 km/h for 2 hours 30 minutes. How far does it travel?",
"options": [
"57.5 km",
"3,750 km",
"10 km",
"62.5 km"
],
"answer": 3,
"explain": "Distance = speed × time. 2 hours 30 minutes = 2.5 hours, so 25 × 2.5 = 62.5 km."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 8,133 cm³?",
"options": [
"81.33 litres",
"813.3 litres",
"8.133 litres",
"8,133,000 litres"
],
"answer": 2,
"explain": "1 litre = 1000 cm³, so divide by 1000: 8,133 ÷ 1000 = 8.133 litres."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 9 cm. Find its circumference, to 1 decimal place.",
"options": [
"56.5 cm",
"254.5 cm",
"28.3 cm",
"113.1 cm"
],
"answer": 0,
"explain": "Circumference = 2πr (or πd) = 2 × π × 9 = 56.5 cm (1 d.p.)."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 50,000. Two places are 2 km apart in real life. How far apart are they on the map?",
"options": [
"40 cm",
"4 cm",
"400 cm",
"0.4 cm"
],
"answer": 1,
"explain": "2 km = 200,000 cm. Map distance = 200,000 ÷ 50,000 = 4 cm."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 1,520 N/m² acts on an area of 2 m². Find the force.",
"options": [
"3,040 N",
"760 N",
"1,522 N",
"30,400 N"
],
"answer": 0,
"explain": "Force = pressure × area = 1,520 × 2 = 3,040 N."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 200,000. Two places are 28 km apart in real life. How far apart are they on the map?",
"options": [
"140 cm",
"1.4 cm",
"1,400 cm",
"14 cm"
],
"answer": 3,
"explain": "28 km = 2,800,000 cm. Map distance = 2,800,000 ÷ 200,000 = 14 cm."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 87.5 km in 1 hour 45 minutes. What is the average speed?",
"options": [
"0.8 km/h",
"50 km/h",
"60.3 km/h",
"153.1 km/h"
],
"answer": 1,
"explain": "Speed = distance ÷ time. Write the time in hours: 1 hour 45 minutes = 1.75 hours. 87.5 ÷ 1.75 = 50 km/h."
},
{
"topic": "Density",
"tier": "F",
"q": "A bar has a density of 1.2 g/cm³ and a volume of 8 cm³. Find its mass.",
"options": [
"6.67 g",
"9.2 g",
"9.6 g",
"96 g"
],
"answer": 2,
"explain": "Mass = density × volume = 1.2 × 8 = 9.6 g."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 07:25 and ends at 09:35. How long is this?",
"options": [
"1 h 10 min",
"3 h 10 min",
"2 h",
"2 h 10 min"
],
"answer": 3,
"explain": "Count on from 07:25: up to the next whole hour, then whole hours, then the minutes to 09:35. The total is 2 h 10 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 15 m/s into km/h.",
"options": [
"15,000 km/h",
"4.17 km/h",
"54 km/h",
"900 km/h"
],
"answer": 2,
"explain": "In 1 hour there are 3600 seconds, so 15 m/s = 15 × 3600 = 54,000 m per hour = 54 km/h. (Shortcut: × 3.6.)"
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 3 cm and a perpendicular height of 13 cm. Find its area.",
"options": [
"9.75 cm²",
"39 cm²",
"19.5 cm²",
"16 cm²"
],
"answer": 2,
"explain": "Area of a triangle = ½ × base × height = ½ × 3 × 13 = 19.5 cm²."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 0.3 m² into cm².",
"options": [
"30 cm²",
"300 cm²",
"3,000 cm²",
"0.00003 cm²"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 0.3 × 10,000 = 3,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 660 m, correct to the nearest 10. What is the upper bound?",
"options": [
"670 m",
"664 m",
"655 m",
"665 m"
],
"answer": 3,
"explain": "Half of 10 is 5. Upper bound = 660 + 5 = 665 m."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 60 km/h for 30 minutes. How far does it travel?",
"options": [
"120 km",
"18 km",
"30 km",
"1,800 km"
],
"answer": 2,
"explain": "Distance = speed × time. 30 minutes = 0.5 hours, so 60 × 0.5 = 30 km."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 07:20 and finishes at 08:45. How long is this?",
"options": [
"1 h 25 min",
"25 min",
"2 h 25 min",
"1 h 15 min"
],
"answer": 0,
"explain": "Count on from 07:20: up to the next whole hour, then whole hours, then the minutes to 08:45. The total is 1 h 25 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 34 kg into pounds.",
"options": [
"74.8 pounds",
"748 pounds",
"36.2 pounds",
"15.5 pounds"
],
"answer": 0,
"explain": "Multiply by 2.2: 34 × 2.2 = 74.8 pounds."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 1.2 m³ into cm³.",
"options": [
"12,000 cm³",
"1,200,000 cm³",
"120 cm³",
"1,200 cm³"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 1.2 × 1,000,000 = 1,200,000 cm³."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 222 litre tank in 37 minutes. What is the rate of flow?",
"options": [
"8,214 litres/min",
"60 litres/min",
"0.167 litres/min",
"6 litres/min"
],
"answer": 3,
"explain": "Rate = amount ÷ time = 222 ÷ 37 = 6 litres per minute."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 15 miles in 15 minutes. What is the average speed?",
"options": [
"100 mph",
"3.8 mph",
"1 mph",
"60 mph"
],
"answer": 3,
"explain": "Speed = distance ÷ time. Write the time in hours: 15 minutes = 0.25 hours. 15 ÷ 0.25 = 60 mph."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 4,700 cm² into m².",
"options": [
"4.7 m²",
"47 m²",
"47,000,000 m²",
"0.47 m²"
],
"answer": 3,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 4,700 ÷ 10,000 = 0.47 m²."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A bar has a mass of 347.5 g and a volume of 139 cm³. Find its density.",
"options": [
"48,302.5 g/cm³",
"0.4 g/cm³",
"2.5 g/cm³",
"25 g/cm³"
],
"answer": 2,
"explain": "Density = mass ÷ volume = 347.5 ÷ 139 = 2.5 g/cm³."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 10 mm. Find its area, to 1 decimal place.",
"options": [
"987 mm²",
"314.2 mm²",
"62.8 mm²",
"1,256.6 mm²"
],
"answer": 1,
"explain": "Area = πr² = π × 10² = π × 100 = 314.2 mm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 12 litres per minute. How long does it take to fill 228 litres?",
"options": [
"216 minutes",
"2,736 minutes",
"19 minutes",
"0.053 minutes"
],
"answer": 2,
"explain": "Time = amount ÷ rate = 228 ÷ 12 = 19 minutes."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 7 cm and a height of 13 cm. Find its volume, to 1 decimal place.",
"options": [
"571.8 cm³",
"2,001.2 cm³",
"8,004.8 cm³",
"285.9 cm³"
],
"answer": 1,
"explain": "Volume of a cylinder = πr²h = π × 7² × 13 = π × 49 × 13 = 2,001.2 cm³ (1 d.p.)."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of A from Y is 294°. What is the bearing of Y from A?",
"options": [
"246°",
"066°",
"114°",
"294°"
],
"answer": 2,
"explain": "A back bearing is 180° different. 294° is more than 180°, so subtract 180°: 114°."
}
],
[
{
"topic": "Area units",
"tier": "F",
"q": "Convert 21 m² into cm².",
"options": [
"2,100 cm²",
"0.0021 cm²",
"210,000 cm²",
"21,000 cm²"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 21 × 10,000 = 210,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Density",
"tier": "F",
"q": "A bar has a density of 1.5 g/cm³ and a mass of 225 g. Find its volume.",
"options": [
"150 cm³",
"0.0067 cm³",
"337.5 cm³",
"1,500 cm³"
],
"answer": 0,
"explain": "Volume = mass ÷ density = 225 ÷ 1.5 = 150 cm³."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 6 m and 16 m, and a perpendicular height of 11 m. Find its area.",
"options": [
"121 m²",
"528 m²",
"55 m²",
"242 m²"
],
"answer": 0,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (6 + 16) × 11 = ½ × 22 × 11 = 121 m²."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 438.8 ml into litres.",
"options": [
"0.4388 litres",
"4.388 litres",
"438,800 litres",
"0.04388 litres"
],
"answer": 0,
"explain": "1 litre = 1,000 ml. Going from ml to litres (a bigger unit) you divide by 1,000: 438.8 ÷ 1,000 = 0.4388 litres."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 72 km/h into m/s.",
"options": [
"1.2 m/s",
"259.2 m/s",
"1,200 m/s",
"20 m/s"
],
"answer": 3,
"explain": "72 km/h = 72,000 m in 3600 seconds. 72,000 ÷ 3600 = 20 m/s. (Shortcut: ÷ 3.6.)"
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 1,824 cm into m.",
"options": [
"182,400 m",
"182.4 m",
"18.24 m",
"1.824 m"
],
"answer": 2,
"explain": "1 m = 100 cm. Going from cm to m (a bigger unit) you divide by 100: 1,824 ÷ 100 = 18.24 m."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 250,000. Two towns are 7.5 cm apart on the map. How far apart are they in real life?",
"options": [
"1,875 km",
"18.75 km",
"1.875 km",
"187.5 km"
],
"answer": 1,
"explain": "Real distance = 7.5 × 250,000 = 1,875,000 cm. Divide by 100 for metres (18,750 m) and by 1000 for km: 18.75 km."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 8.4 hours in hours and minutes.",
"options": [
"8 h 24 min",
"8 h 40 min",
"8 h 36 min",
"8 h 4 min"
],
"answer": 0,
"explain": "0.4 of an hour = 0.4 × 60 = 24 minutes, so 8.4 hours = 8 h 24 min. It is not 8 h 40 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 60 miles into kilometres.",
"options": [
"480 km",
"9.6 km",
"37.5 km",
"96 km"
],
"answer": 3,
"explain": "60 ÷ 5 = 12 lots of 5 miles. 12 × 8 = 96 km."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 5 times those of the smaller one. The smaller shape has an area of 35 cm². Find the area of the larger shape.",
"options": [
"4,375 cm²",
"350 cm²",
"175 cm²",
"875 cm²"
],
"answer": 3,
"explain": "Length scale factor 5 → area scale factor 5² = 25. 35 × 25 = 875 cm²."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 06:10 and ends at 12:40. How long is this?",
"options": [
"7 h 30 min",
"6 h 30 min",
"5 h 30 min",
"6 h 20 min"
],
"answer": 1,
"explain": "Count on from 06:10: up to the next whole hour, then whole hours, then the minutes to 12:40. The total is 6 h 30 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 250,000. Two towns are 3.5 cm apart on the map. How far apart are they in real life?",
"options": [
"87.5 km",
"875 km",
"0.875 km",
"8.75 km"
],
"answer": 3,
"explain": "Real distance = 3.5 × 250,000 = 875,000 cm. Divide by 100 for metres (8,750 m) and by 1000 for km: 8.75 km."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 1.8 hours in hours and minutes.",
"options": [
"1 h 80 min",
"1 h 12 min",
"1 h 8 min",
"1 h 48 min"
],
"answer": 3,
"explain": "0.8 of an hour = 0.8 × 60 = 48 minutes, so 1.8 hours = 1 h 48 min. It is not 1 h 80 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 inch ≈ 2.5 cm. Convert 39 inches into centimetres.",
"options": [
"97.5 cm",
"15.6 cm",
"975 cm",
"468 cm"
],
"answer": 0,
"explain": "Multiply by 2.5: 39 × 2.5 = 97.5 cm."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 5 times those of the smaller one. The smaller solid has a volume of 15 cm³. Find the volume of the larger solid.",
"options": [
"375 cm³",
"75 cm³",
"225 cm³",
"1,875 cm³"
],
"answer": 3,
"explain": "Length scale factor 5 → volume scale factor 5³ = 125. 15 × 125 = 1,875 cm³."
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 21.7 cm, correct to 1 decimal place. What is the lower bound?",
"options": [
"21.65 cm",
"21.6 cm",
"21.75 cm",
"21.69 cm"
],
"answer": 0,
"explain": "Half of 0.1 is 0.05. Lower bound = 21.7 − 0.05 = 21.65 cm."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 4.89 m into mm.",
"options": [
"48,900 mm",
"0.00489 mm",
"489 mm",
"4,890 mm"
],
"answer": 3,
"explain": "1 m = 1,000 mm. Going from m to mm (a smaller unit) you multiply by 1,000: 4.89 × 1,000 = 4,890 mm."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 15 m long and 8 m wide. What is its perimeter?",
"options": [
"23 m",
"38 m",
"46 m",
"120 m"
],
"answer": 2,
"explain": "Perimeter is the distance all the way round: 15 + 8 + 15 + 8 = 46 m."
},
{
"topic": "Density",
"tier": "F",
"q": "A bar has a density of 0.8 g/cm³ and a volume of 41 cm³. Find its mass.",
"options": [
"328 g",
"51.25 g",
"32.8 g",
"41.8 g"
],
"answer": 2,
"explain": "Mass = density × volume = 0.8 × 41 = 32.8 g."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 50,000. Two towns are 7.5 cm apart on the map. How far apart are they in real life?",
"options": [
"3.75 km",
"375 km",
"37.5 km",
"0.375 km"
],
"answer": 0,
"explain": "Real distance = 7.5 × 50,000 = 375,000 cm. Divide by 100 for metres (3,750 m) and by 1000 for km: 3.75 km."
}
],
[
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 2.2 m³ into cm³.",
"options": [
"2,200 cm³",
"220 cm³",
"22,000 cm³",
"2,200,000 cm³"
],
"answer": 3,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 2.2 × 1,000,000 = 2,200,000 cm³."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 gallon ≈ 4.5 litres. Convert 27 gallons into litres.",
"options": [
"1,215 litres",
"121.5 litres",
"6 litres",
"31.5 litres"
],
"answer": 1,
"explain": "Multiply by 4.5: 27 × 4.5 = 121.5 litres."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of X from Q is 228°. What is the bearing of Q from X?",
"options": [
"048°",
"312°",
"132°",
"228°"
],
"answer": 0,
"explain": "A back bearing is 180° different. 228° is more than 180°, so subtract 180°: 048°."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 12:50 and arrives at 19:30. How long is this?",
"options": [
"6 h 40 min",
"6 h 30 min",
"5 h 40 min",
"7 h 40 min"
],
"answer": 0,
"explain": "Count on from 12:50: up to the next whole hour, then whole hours, then the minutes to 19:30. The total is 6 h 40 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 1.9 cl into ml.",
"options": [
"1.9 ml",
"19 ml",
"0.19 ml",
"190 ml"
],
"answer": 1,
"explain": "1 cl = 10 ml. Going from cl to ml (a smaller unit) you multiply by 10: 1.9 × 10 = 19 ml."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 50 miles in 2 hours 30 minutes. What is the average speed?",
"options": [
"0.3 mph",
"20 mph",
"21.7 mph",
"125 mph"
],
"answer": 1,
"explain": "Speed = distance ÷ time. Write the time in hours: 2 hours 30 minutes = 2.5 hours. 50 ÷ 2.5 = 20 mph."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 4 cm long and 12 cm wide. What is its perimeter?",
"options": [
"16 cm",
"32 cm",
"48 cm",
"20 cm"
],
"answer": 1,
"explain": "Perimeter is the distance all the way round: 4 + 12 + 4 + 12 = 32 cm."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 12:35 and ends at 14:45. How long is this?",
"options": [
"2 h",
"3 h 10 min",
"2 h 10 min",
"1 h 10 min"
],
"answer": 2,
"explain": "Count on from 12:35: up to the next whole hour, then whole hours, then the minutes to 14:45. The total is 2 h 10 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 198 litre tank in 33 minutes. What is the rate of flow?",
"options": [
"6,534 litres/min",
"6 litres/min",
"0.167 litres/min",
"60 litres/min"
],
"answer": 1,
"explain": "Rate = amount ÷ time = 198 ÷ 33 = 6 litres per minute."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 11 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"110.25 cm²",
"132.25 cm²",
"121 cm²",
"120.5 cm²"
],
"answer": 0,
"explain": "Lower bound of the side = 11 − 0.5 = 10.5 cm. Lower bound area = 10.5² = 110.25 cm²."
}
],
[
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 144 litre tank in 36 minutes. What is the rate of flow?",
"options": [
"0.25 litres/min",
"5,184 litres/min",
"4 litres/min",
"40 litres/min"
],
"answer": 2,
"explain": "Rate = amount ÷ time = 144 ÷ 36 = 4 litres per minute."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 2,325 cm³?",
"options": [
"2.325 litres",
"23.25 litres",
"2,325,000 litres",
"232.5 litres"
],
"answer": 0,
"explain": "1 litre = 1000 cm³, so divide by 1000: 2,325 ÷ 1000 = 2.325 litres."
},
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a density of 8.9 g/cm³ and a volume of 120 cm³. Find its mass.",
"options": [
"10,680 g",
"1,068 g",
"128.9 g",
"13.48 g"
],
"answer": 1,
"explain": "Mass = density × volume = 8.9 × 120 = 1,068 g."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 4 hours 9 minutes as a decimal number of hours.",
"options": [
"4.15 hours",
"2.49 hours",
"4.09 hours",
"4.85 hours"
],
"answer": 0,
"explain": "9 minutes = 9 ÷ 60 = 0.15 of an hour, so 4 h 9 min = 4.15 hours."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 5 cm into mm.",
"options": [
"0.5 mm",
"500 mm",
"50 mm",
"5 mm"
],
"answer": 2,
"explain": "1 cm = 10 mm. Going from cm to mm (a smaller unit) you multiply by 10: 5 × 10 = 50 mm."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 20,000. Two places are 1.2 km apart in real life. How far apart are they on the map?",
"options": [
"6 cm",
"0.6 cm",
"60 cm",
"600 cm"
],
"answer": 0,
"explain": "1.2 km = 120,000 cm. Map distance = 120,000 ÷ 20,000 = 6 cm."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 14 litres?",
"options": [
"0.014 cm³",
"14,000,000 cm³",
"14,000 cm³",
"1,400 cm³"
],
"answer": 2,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 14 × 1000 = 14,000 cm³."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 0.6 kg into g.",
"options": [
"6,000 g",
"0.0006 g",
"600 g",
"60 g"
],
"answer": 2,
"explain": "1 kg = 1,000 g. Going from kg to g (a smaller unit) you multiply by 1,000: 0.6 × 1,000 = 600 g."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 7 cm by 3 cm by 2 cm. Find its total surface area.",
"options": [
"82 cm²",
"41 cm²",
"42 cm²",
"126 cm²"
],
"answer": 0,
"explain": "A cuboid has 3 pairs of faces: 2 × (7×3) + 2 × (7×2) + 2 × (3×2) = 2 × (21 + 14 + 6) = 82 cm²."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 14 cm. Find its area, to 1 decimal place.",
"options": [
"88 cm²",
"44 cm²",
"153.9 cm²",
"615.8 cm²"
],
"answer": 2,
"explain": "First halve the diameter: r = 14 ÷ 2 = 7. Area = πr² = π × 7² = 153.9 cm² (1 d.p.)."
}
],
[
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 12 cm and height 8 cm. The prism is 19 cm long. Find its volume.",
"options": [
"1,824 cm³",
"190 cm³",
"48 cm³",
"912 cm³"
],
"answer": 3,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 12 × 8 = 48. 48 × 19 = 912 cm³."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 62 m. One side is 20 m. How long is the other side?",
"options": [
"42 m",
"44 m",
"11 m",
"31 m"
],
"answer": 2,
"explain": "Two sides of 20 make 40. 62 − 40 = 22, which is shared between the other two sides: 22 ÷ 2 = 11 m."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 979 cm³?",
"options": [
"9.79 litres",
"979,000 litres",
"0.979 litres",
"97.9 litres"
],
"answer": 2,
"explain": "1 litre = 1000 cm³, so divide by 1000: 979 ÷ 1000 = 0.979 litres."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 22 litre tank in 11 minutes. What is the rate of flow?",
"options": [
"0.5 litres/min",
"2 litres/min",
"20 litres/min",
"242 litres/min"
],
"answer": 1,
"explain": "Rate = amount ÷ time = 22 ÷ 11 = 2 litres per minute."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 59 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"3,480.5 cm²",
"3,540.25 cm²",
"3,481 cm²",
"3,422.25 cm²"
],
"answer": 3,
"explain": "Lower bound of the side = 59 − 0.5 = 58.5 cm. Lower bound area = 58.5² = 3,422.25 cm²."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 37.5 miles at an average speed of 25 mph. How long does the journey take?",
"options": [
"2 h 30 min",
"1 h 50 min",
"1 h 45 min",
"1 h 30 min"
],
"answer": 3,
"explain": "Time = distance ÷ speed = 37.5 ÷ 25 = 1.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 1 h 30 min."
},
{
"topic": "Density",
"tier": "F",
"q": "A bar has a density of 2.7 g/cm³ and a volume of 143 cm³. Find its mass.",
"options": [
"386.1 g",
"145.7 g",
"3,861 g",
"52.96 g"
],
"answer": 0,
"explain": "Mass = density × volume = 2.7 × 143 = 386.1 g."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 3,888 cm³?",
"options": [
"3,888,000 litres",
"388.8 litres",
"38.88 litres",
"3.888 litres"
],
"answer": 3,
"explain": "1 litre = 1000 cm³, so divide by 1000: 3,888 ÷ 1000 = 3.888 litres."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of Y from X is 142°. What is the bearing of X from Y?",
"options": [
"218°",
"038°",
"142°",
"322°"
],
"answer": 3,
"explain": "A back bearing is 180° different. 142° is less than 180°, so add 180°: 322°."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 2.8 cm, correct to 1 decimal place. What is the lower bound?",
"options": [
"2.85 cm",
"2.7 cm",
"2.79 cm",
"2.75 cm"
],
"answer": 3,
"explain": "Half of 0.1 is 0.05. Lower bound = 2.8 − 0.05 = 2.75 cm."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 11 m and a perpendicular height of 13 m. Find its area.",
"options": [
"143 m²",
"35.75 m²",
"24 m²",
"71.5 m²"
],
"answer": 3,
"explain": "Area of a triangle = ½ × base × height = ½ × 11 × 13 = 71.5 m²."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 11 m. Find its area, to 1 decimal place.",
"options": [
"380.1 m²",
"1,194.2 m²",
"69.1 m²",
"1,520.5 m²"
],
"answer": 0,
"explain": "Area = πr² = π × 11² = π × 121 = 380.1 m² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 73 kg, correct to the nearest whole number. What is the lower bound?",
"options": [
"73.5 kg",
"72.9 kg",
"72.5 kg",
"72 kg"
],
"answer": 2,
"explain": "Half of 1 is 0.5. Lower bound = 73 − 0.5 = 72.5 kg."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 9 hours 39 minutes as a decimal number of hours.",
"options": [
"9.65 hours",
"5.79 hours",
"9.35 hours",
"9.39 hours"
],
"answer": 0,
"explain": "39 minutes = 39 ÷ 60 = 0.65 of an hour, so 9 h 39 min = 9.65 hours."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 135 km/h into m/s.",
"options": [
"37.5 m/s",
"486 m/s",
"2,250 m/s",
"2.25 m/s"
],
"answer": 0,
"explain": "135 km/h = 135,000 m in 3600 seconds. 135,000 ÷ 3600 = 37.5 m/s. (Shortcut: ÷ 3.6.)"
}
],
[
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 12 litres per minute. How long does it take to fill 204 litres?",
"options": [
"192 minutes",
"0.059 minutes",
"2,448 minutes",
"17 minutes"
],
"answer": 3,
"explain": "Time = amount ÷ rate = 204 ÷ 12 = 17 minutes."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 40 km/h for 2 hours 15 minutes. How far does it travel?",
"options": [
"90 km",
"86 km",
"5,400 km",
"17.8 km"
],
"answer": 0,
"explain": "Distance = speed × time. 2 hours 15 minutes = 2.25 hours, so 40 × 2.25 = 90 km."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 11.2 hours in hours and minutes.",
"options": [
"11 h 20 min",
"11 h 2 min",
"11 h 12 min",
"11 h 48 min"
],
"answer": 2,
"explain": "0.2 of an hour = 0.2 × 60 = 12 minutes, so 11.2 hours = 11 h 12 min. It is not 11 h 20 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 10 cm and 11 cm, and a perpendicular height of 3 cm. Find its area.",
"options": [
"165 cm²",
"31.5 cm²",
"63 cm²",
"1.5 cm²"
],
"answer": 1,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (10 + 11) × 3 = ½ × 21 × 3 = 31.5 cm²."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 171 km/h into m/s.",
"options": [
"615.6 m/s",
"47.5 m/s",
"2,850 m/s",
"2.85 m/s"
],
"answer": 1,
"explain": "171 km/h = 171,000 m in 3600 seconds. 171,000 ÷ 3600 = 47.5 m/s. (Shortcut: ÷ 3.6.)"
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 15 km at an average speed of 20 km/h. How long does the journey take?",
"options": [
"1 h 45 min",
"45 min",
"30 min",
"0 h 75 min"
],
"answer": 1,
"explain": "Time = distance ÷ speed = 15 ÷ 20 = 0.75 hours. 0.75 hours × 60 = 45 minutes, so the time is 45 min."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 32 cm. Find its area, to 1 decimal place.",
"options": [
"3,217 cm²",
"100.5 cm²",
"201.1 cm²",
"804.2 cm²"
],
"answer": 3,
"explain": "First halve the diameter: r = 32 ÷ 2 = 16. Area = πr² = π × 16² = 804.2 cm² (1 d.p.)."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 6.8 hours in hours and minutes.",
"options": [
"6 h 12 min",
"6 h 48 min",
"6 h 8 min",
"6 h 80 min"
],
"answer": 1,
"explain": "0.8 of an hour = 0.8 × 60 = 48 minutes, so 6.8 hours = 6 h 48 min. It is not 6 h 80 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 310.3 cl into litres.",
"options": [
"3.103 litres",
"31,030 litres",
"31.03 litres",
"0.3103 litres"
],
"answer": 0,
"explain": "1 litre = 100 cl. Going from cl to litres (a bigger unit) you divide by 100: 310.3 ÷ 100 = 3.103 litres."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of B from X is 147°. What is the bearing of X from B?",
"options": [
"327°",
"033°",
"147°",
"213°"
],
"answer": 0,
"explain": "A back bearing is 180° different. 147° is less than 180°, so add 180°: 327°."
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 13 mm. Find its circumference, to 1 decimal place.",
"options": [
"530.9 mm",
"40.8 mm",
"81.7 mm",
"163.4 mm"
],
"answer": 2,
"explain": "Circumference = 2πr (or πd) = 2 × π × 13 = 81.7 mm (1 d.p.)."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 10:40 and ends at 12:55. How long is this?",
"options": [
"2 h 5 min",
"1 h 15 min",
"3 h 15 min",
"2 h 15 min"
],
"answer": 3,
"explain": "Count on from 10:40: up to the next whole hour, then whole hours, then the minutes to 12:55. The total is 2 h 15 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 20 m, a perpendicular height of 3 m and a sloping side of 8 m. Find its area.",
"options": [
"56 m²",
"60 m²",
"30 m²",
"160 m²"
],
"answer": 1,
"explain": "Area of a parallelogram = base × perpendicular height = 20 × 3 = 60 m². The sloping side is not needed."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 890 cm² into m².",
"options": [
"8.9 m²",
"8,900,000 m²",
"0.089 m²",
"0.89 m²"
],
"answer": 2,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 890 ÷ 10,000 = 0.089 m²."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 39.5 mm into cm.",
"options": [
"3.95 cm",
"0.395 cm",
"395 cm",
"39.5 cm"
],
"answer": 0,
"explain": "1 cm = 10 mm. Going from mm to cm (a bigger unit) you divide by 10: 39.5 ÷ 10 = 3.95 cm."
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 10 cm. Find its area, to 1 decimal place.",
"options": [
"62.8 cm²",
"314.2 cm²",
"1,256.6 cm²",
"987 cm²"
],
"answer": 1,
"explain": "Area = πr² = π × 10² = π × 100 = 314.2 cm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 20,000. Two towns are 13 cm apart on the map. How far apart are they in real life?",
"options": [
"0.26 km",
"2.6 km",
"260 km",
"26 km"
],
"answer": 1,
"explain": "Real distance = 13 × 20,000 = 260,000 cm. Divide by 100 for metres (2,600 m) and by 1000 for km: 2.6 km."
},
{
"topic": "Density",
"tier": "F",
"q": "A stone has a mass of 99.9 g and a volume of 111 cm³. Find its density.",
"options": [
"0.9 g/cm³",
"1.111 g/cm³",
"11,088.9 g/cm³",
"9 g/cm³"
],
"answer": 0,
"explain": "Density = mass ÷ volume = 99.9 ÷ 111 = 0.9 g/cm³."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 405 litre tank in 27 minutes. What is the rate of flow?",
"options": [
"10,935 litres/min",
"15 litres/min",
"150 litres/min",
"0.067 litres/min"
],
"answer": 1,
"explain": "Rate = amount ÷ time = 405 ÷ 27 = 15 litres per minute."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 11:20 and ends at 16:50. How long is this?",
"options": [
"6 h 30 min",
"5 h 20 min",
"4 h 30 min",
"5 h 30 min"
],
"answer": 3,
"explain": "Count on from 11:20: up to the next whole hour, then whole hours, then the minutes to 16:50. The total is 5 h 30 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 6.6 pounds into kg.",
"options": [
"14.52 kg",
"0.3 kg",
"3 kg",
"4.4 kg"
],
"answer": 2,
"explain": "Divide by 2.2: 6.6 ÷ 2.2 = 3 kg."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 11:50 and arrives at 14:45. How long is this?",
"options": [
"1 h 55 min",
"3 h 55 min",
"2 h 55 min",
"2 h 45 min"
],
"answer": 2,
"explain": "Count on from 11:50: up to the next whole hour, then whole hours, then the minutes to 14:45. The total is 2 h 55 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a density of 8.9 g/cm³ and a mass of 1,459.6 g. Find its volume.",
"options": [
"12,990.44 cm³",
"164 cm³",
"0.0061 cm³",
"1,640 cm³"
],
"answer": 1,
"explain": "Volume = mass ÷ density = 1,459.6 ÷ 8.9 = 164 cm³."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 5.7 kg into g.",
"options": [
"57,000 g",
"570 g",
"0.0057 g",
"5,700 g"
],
"answer": 3,
"explain": "1 kg = 1,000 g. Going from kg to g (a smaller unit) you multiply by 1,000: 5.7 × 1,000 = 5,700 g."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 18 cm, a perpendicular height of 4 cm and a sloping side of 9 cm. Find its area.",
"options": [
"54 cm²",
"162 cm²",
"72 cm²",
"36 cm²"
],
"answer": 2,
"explain": "Area of a parallelogram = base × perpendicular height = 18 × 4 = 72 cm². The sloping side is not needed."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a density of 11.3 g/cm³ and a volume of 69 cm³. Find its mass.",
"options": [
"7,797 g",
"80.3 g",
"779.7 g",
"6.11 g"
],
"answer": 2,
"explain": "Mass = density × volume = 11.3 × 69 = 779.7 g."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 8.8 hours in hours and minutes.",
"options": [
"8 h 8 min",
"8 h 48 min",
"8 h 12 min",
"8 h 80 min"
],
"answer": 1,
"explain": "0.8 of an hour = 0.8 × 60 = 48 minutes, so 8.8 hours = 8 h 48 min. It is not 8 h 80 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 11 m by 9 m by 9 m. Find its volume.",
"options": [
"99 m³",
"279 m³",
"891 m³",
"558 m³"
],
"answer": 2,
"explain": "Volume of a cuboid = length × width × height = 11 × 9 × 9 = 891 m³."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 13:10 and arrives at 19:35. How long is this?",
"options": [
"6 h 15 min",
"7 h 25 min",
"5 h 25 min",
"6 h 25 min"
],
"answer": 3,
"explain": "Count on from 13:10: up to the next whole hour, then whole hours, then the minutes to 19:35. The total is 6 h 25 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 60 m. One side is 13 m. How long is the other side?",
"options": [
"47 m",
"30 m",
"17 m",
"68 m"
],
"answer": 2,
"explain": "Two sides of 13 make 26. 60 − 26 = 34, which is shared between the other two sides: 34 ÷ 2 = 17 m."
}
],
[
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 2,332 ml into litres.",
"options": [
"23.32 litres",
"0.2332 litres",
"2.332 litres",
"2,332,000 litres"
],
"answer": 2,
"explain": "1 litre = 1,000 ml. Going from ml to litres (a bigger unit) you divide by 1,000: 2,332 ÷ 1,000 = 2.332 litres."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of X from Y is 208°. What is the bearing of Y from X?",
"options": [
"152°",
"332°",
"028°",
"208°"
],
"answer": 2,
"explain": "A back bearing is 180° different. 208° is more than 180°, so subtract 180°: 028°."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 5 m and height 3 m. The prism is 11 m long. Find its volume.",
"options": [
"44 m³",
"165 m³",
"82.5 m³",
"7.5 m³"
],
"answer": 2,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 5 × 3 = 7.5. 7.5 × 11 = 82.5 m³."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 26.5 m/s into km/h.",
"options": [
"95.4 km/h",
"26,500 km/h",
"7.36 km/h",
"1,590 km/h"
],
"answer": 0,
"explain": "In 1 hour there are 3600 seconds, so 26.5 m/s = 26.5 × 3600 = 95,400 m per hour = 95.4 km/h. (Shortcut: × 3.6.)"
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 800 N acts on an area of 5 m². Find the pressure.",
"options": [
"160 N/m²",
"80 N/m²",
"4,000 N/m²",
"0.0063 N/m²"
],
"answer": 0,
"explain": "Pressure = force ÷ area = 800 ÷ 5 = 160 N/m²."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 40 miles in 2 hours. What is the average speed?",
"options": [
"20 mph",
"0.3 mph",
"80 mph",
"13.3 mph"
],
"answer": 0,
"explain": "Speed = distance ÷ time. 40 ÷ 2 = 20 mph."
},
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a density of 19.3 g/cm³ and a mass of 1,621.2 g. Find its volume.",
"options": [
"31,289.16 cm³",
"840 cm³",
"84 cm³",
"0.0119 cm³"
],
"answer": 2,
"explain": "Volume = mass ÷ density = 1,621.2 ÷ 19.3 = 84 cm³."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 20 cm and a perpendicular height of 15 cm. Find its area.",
"options": [
"35 cm²",
"75 cm²",
"150 cm²",
"300 cm²"
],
"answer": 2,
"explain": "Area of a triangle = ½ × base × height = ½ × 20 × 15 = 150 cm²."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 10 cm and height 4 cm. The prism is 7 cm long. Find its volume.",
"options": [
"280 cm³",
"49 cm³",
"20 cm³",
"140 cm³"
],
"answer": 3,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 10 × 4 = 20. 20 × 7 = 140 cm³."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 25 m/s into km/h.",
"options": [
"6.94 km/h",
"90 km/h",
"25,000 km/h",
"1,500 km/h"
],
"answer": 1,
"explain": "In 1 hour there are 3600 seconds, so 25 m/s = 25 × 3600 = 90,000 m per hour = 90 km/h. (Shortcut: × 3.6.)"
}
],
[
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 216 litre tank in 18 minutes. What is the rate of flow?",
"options": [
"0.083 litres/min",
"3,888 litres/min",
"12 litres/min",
"120 litres/min"
],
"answer": 2,
"explain": "Rate = amount ÷ time = 216 ÷ 18 = 12 litres per minute."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 7.7 litres into ml.",
"options": [
"0.0077 ml",
"77,000 ml",
"770 ml",
"7,700 ml"
],
"answer": 3,
"explain": "1 litre = 1,000 ml. Going from litres to ml (a smaller unit) you multiply by 1,000: 7.7 × 1,000 = 7,700 ml."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 14:50 and arrives at 16:35. How long is this?",
"options": [
"1 h 45 min",
"2 h 45 min",
"1 h 35 min",
"45 min"
],
"answer": 0,
"explain": "Count on from 14:50: up to the next whole hour, then whole hours, then the minutes to 16:35. The total is 1 h 45 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 50 mph for 3 hours 30 minutes. How far does it travel?",
"options": [
"14.3 miles",
"175 miles",
"10,500 miles",
"165 miles"
],
"answer": 1,
"explain": "Distance = speed × time. 3 hours 30 minutes = 3.5 hours, so 50 × 3.5 = 175 miles."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 240 cm² into m².",
"options": [
"0.24 m²",
"2,400,000 m²",
"0.024 m²",
"2.4 m²"
],
"answer": 2,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 240 ÷ 10,000 = 0.024 m²."
}
],
[
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of Q from A is 084°. What is the bearing of A from Q?",
"options": [
"096°",
"264°",
"084°",
"276°"
],
"answer": 1,
"explain": "A back bearing is 180° different. 084° is less than 180°, so add 180°: 264°."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 5 cm by 2 cm by 3 cm. Find its total surface area.",
"options": [
"62 cm²",
"31 cm²",
"60 cm²",
"30 cm²"
],
"answer": 0,
"explain": "A cuboid has 3 pairs of faces: 2 × (5×2) + 2 × (5×3) + 2 × (2×3) = 2 × (10 + 15 + 6) = 62 cm²."
},
{
"topic": "Density",
"tier": "F",
"q": "A block has a density of 2.5 g/cm³ and a mass of 50 g. Find its volume.",
"options": [
"20 cm³",
"200 cm³",
"0.05 cm³",
"125 cm³"
],
"answer": 0,
"explain": "Volume = mass ÷ density = 50 ÷ 2.5 = 20 cm³."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 70 mph for 2 hours 45 minutes. How far does it travel?",
"options": [
"11,550 miles",
"171.5 miles",
"25.5 miles",
"192.5 miles"
],
"answer": 3,
"explain": "Distance = speed × time. 2 hours 45 minutes = 2.75 hours, so 70 × 2.75 = 192.5 miles."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 9 cm by 2 cm by 3 cm. Find its volume.",
"options": [
"102 cm³",
"51 cm³",
"54 cm³",
"18 cm³"
],
"answer": 2,
"explain": "Volume of a cuboid = length × width × height = 9 × 2 × 3 = 54 cm³."
}
],
[
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 7 litres into cl.",
"options": [
"70 cl",
"700 cl",
"0.07 cl",
"7,000 cl"
],
"answer": 1,
"explain": "1 litre = 100 cl. Going from litres to cl (a smaller unit) you multiply by 100: 7 × 100 = 700 cl."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 500,000. Two places are 85 km apart in real life. How far apart are they on the map?",
"options": [
"1,700 cm",
"170 cm",
"17 cm",
"1.7 cm"
],
"answer": 2,
"explain": "85 km = 8,500,000 cm. Map distance = 8,500,000 ÷ 500,000 = 17 cm."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 10 mm. Find its circumference, to 1 decimal place.",
"options": [
"125.7 mm",
"62.8 mm",
"31.4 mm",
"314.2 mm"
],
"answer": 1,
"explain": "Circumference = 2πr (or πd) = 2 × π × 10 = 62.8 mm (1 d.p.)."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 2,300 g, correct to the nearest 100. What is the upper bound?",
"options": [
"2,340 g",
"2,400 g",
"2,350 g",
"2,250 g"
],
"answer": 2,
"explain": "Half of 100 is 50. Upper bound = 2,300 + 50 = 2,350 g."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 3,160 N acts on an area of 2 m². Find the pressure.",
"options": [
"790 N/m²",
"1,580 N/m²",
"6,320 N/m²",
"0.0006 N/m²"
],
"answer": 1,
"explain": "Pressure = force ÷ area = 3,160 ÷ 2 = 1,580 N/m²."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 200,000. Two places are 40 km apart in real life. How far apart are they on the map?",
"options": [
"2,000 cm",
"2 cm",
"200 cm",
"20 cm"
],
"answer": 3,
"explain": "40 km = 4,000,000 cm. Map distance = 4,000,000 ÷ 200,000 = 20 cm."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 301.5 ml into litres.",
"options": [
"0.3015 litres",
"301,500 litres",
"3.015 litres",
"0.03015 litres"
],
"answer": 0,
"explain": "1 litre = 1,000 ml. Going from ml to litres (a bigger unit) you divide by 1,000: 301.5 ÷ 1,000 = 0.3015 litres."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 8 hours 45 minutes as a decimal number of hours.",
"options": [
"8.75 hours",
"8.45 hours",
"8.25 hours",
"5.25 hours"
],
"answer": 0,
"explain": "45 minutes = 45 ÷ 60 = 0.75 of an hour, so 8 h 45 min = 8.75 hours."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a density of 8.9 g/cm³ and a volume of 141 cm³. Find its mass.",
"options": [
"149.9 g",
"15.84 g",
"12,549 g",
"1,254.9 g"
],
"answer": 3,
"explain": "Mass = density × volume = 8.9 × 141 = 1,254.9 g."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 3 cm. Find its circumference, to 1 decimal place.",
"options": [
"28.3 cm",
"18.8 cm",
"37.7 cm",
"9.4 cm"
],
"answer": 1,
"explain": "Circumference = 2πr (or πd) = 2 × π × 3 = 18.8 cm (1 d.p.)."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 200,000. Two places are 20 km apart in real life. How far apart are they on the map?",
"options": [
"10 cm",
"1,000 cm",
"100 cm",
"1 cm"
],
"answer": 0,
"explain": "20 km = 2,000,000 cm. Map distance = 2,000,000 ÷ 200,000 = 10 cm."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 2 hours 3 minutes as a decimal number of hours.",
"options": [
"2.95 hours",
"2.05 hours",
"2.03 hours",
"1.23 hours"
],
"answer": 1,
"explain": "3 minutes = 3 ÷ 60 = 0.05 of an hour, so 2 h 3 min = 2.05 hours."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 8,962 mm into cm.",
"options": [
"8,962 cm",
"896.2 cm",
"89,620 cm",
"89.62 cm"
],
"answer": 1,
"explain": "1 cm = 10 mm. Going from mm to cm (a bigger unit) you divide by 10: 8,962 ÷ 10 = 896.2 cm."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 9 mm. Find its circumference, to 1 decimal place.",
"options": [
"254.5 mm",
"113.1 mm",
"56.5 mm",
"28.3 mm"
],
"answer": 2,
"explain": "Circumference = 2πr (or πd) = 2 × π × 9 = 56.5 mm (1 d.p.)."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 5 times those of the smaller one. The smaller solid has a volume of 19 cm³. Find the volume of the larger solid.",
"options": [
"475 cm³",
"285 cm³",
"95 cm³",
"2,375 cm³"
],
"answer": 3,
"explain": "Length scale factor 5 → volume scale factor 5³ = 125. 19 × 125 = 2,375 cm³."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a mass of 135 g and a volume of 54 cm³. Find its density.",
"options": [
"0.4 g/cm³",
"25 g/cm³",
"2.5 g/cm³",
"7,290 g/cm³"
],
"answer": 2,
"explain": "Density = mass ÷ volume = 135 ÷ 54 = 2.5 g/cm³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 549.2 m into km.",
"options": [
"549,200 km",
"0.05492 km",
"5.492 km",
"0.5492 km"
],
"answer": 3,
"explain": "1 km = 1,000 m. Going from m to km (a bigger unit) you divide by 1,000: 549.2 ÷ 1,000 = 0.5492 km."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 40 km in 2 hours. What is the average speed?",
"options": [
"0.3 km/h",
"80 km/h",
"13.3 km/h",
"20 km/h"
],
"answer": 3,
"explain": "Speed = distance ÷ time. 40 ÷ 2 = 20 km/h."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 15:45 and ends at 18:35. How long is this?",
"options": [
"3 h 50 min",
"1 h 50 min",
"2 h 50 min",
"2 h 40 min"
],
"answer": 2,
"explain": "Count on from 15:45: up to the next whole hour, then whole hours, then the minutes to 18:35. The total is 2 h 50 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 11 cm. Find its area, to 1 decimal place.",
"options": [
"1,194.2 cm²",
"1,520.5 cm²",
"380.1 cm²",
"69.1 cm²"
],
"answer": 2,
"explain": "Area = πr² = π × 11² = π × 121 = 380.1 cm² (1 d.p.). Square the radius before multiplying by π."
}
],
[
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of P from A is 304°. What is the bearing of A from P?",
"options": [
"124°",
"236°",
"304°",
"056°"
],
"answer": 0,
"explain": "A back bearing is 180° different. 304° is more than 180°, so subtract 180°: 124°."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 960 m, correct to the nearest 10. What is the upper bound?",
"options": [
"955 m",
"964 m",
"965 m",
"970 m"
],
"answer": 2,
"explain": "Half of 10 is 5. Upper bound = 960 + 5 = 965 m."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 07:20 and arrives at 08:00. How long is this?",
"options": [
"1 h 10 min",
"1 h",
"1 h 40 min",
"40 min"
],
"answer": 3,
"explain": "Count on from 07:20: up to the next whole hour, then whole hours, then the minutes to 08:00. The total is 40 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 gallon ≈ 4.5 litres. Convert 19 gallons into litres.",
"options": [
"23.5 litres",
"855 litres",
"4.22 litres",
"85.5 litres"
],
"answer": 3,
"explain": "Multiply by 4.5: 19 × 4.5 = 85.5 litres."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 8 m and 9 m, and a perpendicular height of 7 m. Find its area.",
"options": [
"59.5 m²",
"3.5 m²",
"252 m²",
"119 m²"
],
"answer": 0,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (8 + 9) × 7 = ½ × 17 × 7 = 59.5 m²."
}
],
[
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 564.1 kg into tonnes.",
"options": [
"0.05641 tonnes",
"5.641 tonnes",
"0.5641 tonnes",
"564,100 tonnes"
],
"answer": 2,
"explain": "1 tonne = 1,000 kg. Going from kg to tonnes (a bigger unit) you divide by 1,000: 564.1 ÷ 1,000 = 0.5641 tonnes."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 150 km at an average speed of 50 km/h. How long does the journey take?",
"options": [
"4 h",
"3 h",
"3 h 15 min",
"3 h 30 min"
],
"answer": 1,
"explain": "Time = distance ÷ speed = 150 ÷ 50 = 3 hours."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 730 cm² into m².",
"options": [
"0.73 m²",
"0.073 m²",
"7,300,000 m²",
"7.3 m²"
],
"answer": 1,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 730 ÷ 10,000 = 0.073 m²."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 22 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"462.25 cm²",
"483.5 cm²",
"506.25 cm²",
"484 cm²"
],
"answer": 0,
"explain": "Lower bound of the side = 22 − 0.5 = 21.5 cm. Lower bound area = 21.5² = 462.25 cm²."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 3 times those of the smaller one. The smaller shape has an area of 33 cm². Find the area of the larger shape.",
"options": [
"891 cm²",
"99 cm²",
"198 cm²",
"297 cm²"
],
"answer": 3,
"explain": "Length scale factor 3 → area scale factor 3² = 9. 33 × 9 = 297 cm²."
}
],
[
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 4,529 g into kg.",
"options": [
"45.29 kg",
"4.529 kg",
"4,529,000 kg",
"0.4529 kg"
],
"answer": 1,
"explain": "1 kg = 1,000 g. Going from g to kg (a bigger unit) you divide by 1,000: 4,529 ÷ 1,000 = 4.529 kg."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 14:50 and arrives at 17:25. How long is this?",
"options": [
"2 h 25 min",
"3 h 35 min",
"2 h 35 min",
"1 h 35 min"
],
"answer": 2,
"explain": "Count on from 14:50: up to the next whole hour, then whole hours, then the minutes to 17:25. The total is 2 h 35 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 3 m and a height of 15 m. Find its volume, to 1 decimal place.",
"options": [
"1,696.5 m³",
"424.1 m³",
"282.7 m³",
"141.4 m³"
],
"answer": 1,
"explain": "Volume of a cylinder = πr²h = π × 3² × 15 = π × 9 × 15 = 424.1 m³ (1 d.p.)."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of A from Y is 254°. What is the bearing of Y from A?",
"options": [
"106°",
"074°",
"254°",
"286°"
],
"answer": 1,
"explain": "A back bearing is 180° different. 254° is more than 180°, so subtract 180°: 074°."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 992 N acts on an area of 0.8 m². Find the pressure.",
"options": [
"793.6 N/m²",
"0.0008 N/m²",
"1,240 N/m²",
"620 N/m²"
],
"answer": 2,
"explain": "Pressure = force ÷ area = 992 ÷ 0.8 = 1,240 N/m²."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 10 cm and a perpendicular height of 6 cm. Find its area.",
"options": [
"30 cm²",
"15 cm²",
"16 cm²",
"60 cm²"
],
"answer": 0,
"explain": "Area of a triangle = ½ × base × height = ½ × 10 × 6 = 30 cm²."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 07:30 and finishes at 10:45. How long is this?",
"options": [
"4 h 15 min",
"3 h 5 min",
"3 h 15 min",
"2 h 15 min"
],
"answer": 2,
"explain": "Count on from 07:30: up to the next whole hour, then whole hours, then the minutes to 10:45. The total is 3 h 15 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 470 m, correct to the nearest 10. What is the upper bound?",
"options": [
"465 m",
"474 m",
"480 m",
"475 m"
],
"answer": 3,
"explain": "Half of 10 is 5. Upper bound = 470 + 5 = 475 m."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 250,000. Two towns are 4 cm apart on the map. How far apart are they in real life?",
"options": [
"100 km",
"1 km",
"10 km",
"1,000 km"
],
"answer": 2,
"explain": "Real distance = 4 × 250,000 = 1,000,000 cm. Divide by 100 for metres (10,000 m) and by 1000 for km: 10 km."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 81 km/h into m/s.",
"options": [
"291.6 m/s",
"1.35 m/s",
"22.5 m/s",
"1,350 m/s"
],
"answer": 2,
"explain": "81 km/h = 81,000 m in 3600 seconds. 81,000 ÷ 3600 = 22.5 m/s. (Shortcut: ÷ 3.6.)"
}
],
[
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 3 m and a height of 20 m. Find its volume, to 1 decimal place.",
"options": [
"565.5 m³",
"2,261.9 m³",
"188.5 m³",
"377 m³"
],
"answer": 0,
"explain": "Volume of a cylinder = πr²h = π × 3² × 20 = π × 9 × 20 = 565.5 m³ (1 d.p.)."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 760 cm² into m².",
"options": [
"0.76 m²",
"7.6 m²",
"0.076 m²",
"7,600,000 m²"
],
"answer": 2,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 760 ÷ 10,000 = 0.076 m²."
},
{
"topic": "Density",
"tier": "F",
"q": "A bar has a density of 0.8 g/cm³ and a mass of 137.6 g. Find its volume.",
"options": [
"0.0058 cm³",
"110.08 cm³",
"172 cm³",
"1,720 cm³"
],
"answer": 2,
"explain": "Volume = mass ÷ density = 137.6 ÷ 0.8 = 172 cm³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 26 m into mm.",
"options": [
"2,600 mm",
"26,000 mm",
"0.026 mm",
"260,000 mm"
],
"answer": 1,
"explain": "1 m = 1,000 mm. Going from m to mm (a smaller unit) you multiply by 1,000: 26 × 1,000 = 26,000 mm."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 25,000. Two places are 4 km apart in real life. How far apart are they on the map?",
"options": [
"1.6 cm",
"160 cm",
"16 cm",
"1,600 cm"
],
"answer": 2,
"explain": "4 km = 400,000 cm. Map distance = 400,000 ÷ 25,000 = 16 cm."
}
],
[
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 13 cm by 3 cm by 7 cm. Find its total surface area.",
"options": [
"302 cm²",
"234 cm²",
"273 cm²",
"151 cm²"
],
"answer": 0,
"explain": "A cuboid has 3 pairs of faces: 2 × (13×3) + 2 × (13×7) + 2 × (3×7) = 2 × (39 + 91 + 21) = 302 cm²."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 8.2 tonnes into kg.",
"options": [
"820 kg",
"8,200 kg",
"0.0082 kg",
"82,000 kg"
],
"answer": 1,
"explain": "1 tonne = 1,000 kg. Going from tonnes to kg (a smaller unit) you multiply by 1,000: 8.2 × 1,000 = 8,200 kg."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 1.1 hours in hours and minutes.",
"options": [
"1 h 1 min",
"1 h 54 min",
"1 h 6 min",
"1 h 10 min"
],
"answer": 2,
"explain": "0.1 of an hour = 0.1 × 60 = 6 minutes, so 1.1 hours = 1 h 6 min. It is not 1 h 10 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 9.5 m/s into km/h.",
"options": [
"2.64 km/h",
"34.2 km/h",
"9,500 km/h",
"570 km/h"
],
"answer": 1,
"explain": "In 1 hour there are 3600 seconds, so 9.5 m/s = 9.5 × 3600 = 34,200 m per hour = 34.2 km/h. (Shortcut: × 3.6.)"
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 3 times those of the smaller one. The smaller shape has an area of 12 cm². Find the area of the larger shape.",
"options": [
"36 cm²",
"108 cm²",
"324 cm²",
"72 cm²"
],
"answer": 1,
"explain": "Length scale factor 3 → area scale factor 3² = 9. 12 × 9 = 108 cm²."
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 242.7 mm into m.",
"options": [
"0.02427 m",
"242,700 m",
"2.427 m",
"0.2427 m"
],
"answer": 3,
"explain": "1 m = 1,000 mm. Going from mm to m (a bigger unit) you divide by 1,000: 242.7 ÷ 1,000 = 0.2427 m."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 52.5 km in 1 hour 45 minutes. What is the average speed?",
"options": [
"91.9 km/h",
"30 km/h",
"0.5 km/h",
"36.2 km/h"
],
"answer": 1,
"explain": "Speed = distance ÷ time. Write the time in hours: 1 hour 45 minutes = 1.75 hours. 52.5 ÷ 1.75 = 30 km/h."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 28.5 cm, correct to 1 decimal place. What is the lower bound?",
"options": [
"28.49 cm",
"28.45 cm",
"28.55 cm",
"28.4 cm"
],
"answer": 1,
"explain": "Half of 0.1 is 0.05. Lower bound = 28.5 − 0.05 = 28.45 cm."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 14 cm. Find its area, to 1 decimal place.",
"options": [
"1,934.4 cm²",
"88 cm²",
"2,463 cm²",
"615.8 cm²"
],
"answer": 3,
"explain": "Area = πr² = π × 14² = π × 196 = 615.8 cm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 208 N acts on an area of 0.4 m². Find the pressure.",
"options": [
"0.0019 N/m²",
"520 N/m²",
"83.2 N/m²",
"260 N/m²"
],
"answer": 1,
"explain": "Pressure = force ÷ area = 208 ÷ 0.4 = 520 N/m²."
}
],
[
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 3.8 tonnes into kg.",
"options": [
"3,800 kg",
"0.0038 kg",
"38,000 kg",
"380 kg"
],
"answer": 0,
"explain": "1 tonne = 1,000 kg. Going from tonnes to kg (a smaller unit) you multiply by 1,000: 3.8 × 1,000 = 3,800 kg."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 30 m. Find its area, to 1 decimal place.",
"options": [
"706.9 m²",
"188.5 m²",
"94.2 m²",
"2,827.4 m²"
],
"answer": 0,
"explain": "First halve the diameter: r = 30 ÷ 2 = 15. Area = πr² = π × 15² = 706.9 m² (1 d.p.)."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 11 cm and 12 cm, and a perpendicular height of 3 cm. Find its area.",
"options": [
"69 cm²",
"1.5 cm²",
"34.5 cm²",
"198 cm²"
],
"answer": 2,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (11 + 12) × 3 = ½ × 23 × 3 = 34.5 cm²."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 06:15 and ends at 12:10. How long is this?",
"options": [
"4 h 55 min",
"6 h 55 min",
"5 h 55 min",
"5 h 45 min"
],
"answer": 2,
"explain": "Count on from 06:15: up to the next whole hour, then whole hours, then the minutes to 12:10. The total is 5 h 55 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 34 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"1,190.25 cm²",
"1,122.25 cm²",
"1,155.5 cm²",
"1,156 cm²"
],
"answer": 1,
"explain": "Lower bound of the side = 34 − 0.5 = 33.5 cm. Lower bound area = 33.5² = 1,122.25 cm²."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A block has a density of 1.2 g/cm³ and a volume of 197 cm³. Find its mass.",
"options": [
"164.17 g",
"2,364 g",
"236.4 g",
"198.2 g"
],
"answer": 2,
"explain": "Mass = density × volume = 1.2 × 197 = 236.4 g."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 47 kg into pounds.",
"options": [
"49.2 pounds",
"1,034 pounds",
"103.4 pounds",
"21.4 pounds"
],
"answer": 2,
"explain": "Multiply by 2.2: 47 × 2.2 = 103.4 pounds."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 8 cm by 3 cm by 4 cm. Find its total surface area.",
"options": [
"144 cm²",
"96 cm²",
"68 cm²",
"136 cm²"
],
"answer": 3,
"explain": "A cuboid has 3 pairs of faces: 2 × (8×3) + 2 × (8×4) + 2 × (3×4) = 2 × (24 + 32 + 12) = 136 cm²."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 50,000. Two places are 6.5 km apart in real life. How far apart are they on the map?",
"options": [
"130 cm",
"1,300 cm",
"1.3 cm",
"13 cm"
],
"answer": 3,
"explain": "6.5 km = 650,000 cm. Map distance = 650,000 ÷ 50,000 = 13 cm."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 11:00 and finishes at 13:55. How long is this?",
"options": [
"3 h 55 min",
"1 h 55 min",
"2 h 45 min",
"2 h 55 min"
],
"answer": 3,
"explain": "Count on from 11:00: up to the next whole hour, then whole hours, then the minutes to 13:55. The total is 2 h 55 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
}
],
[
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 13 m by 6 m by 4 m. Find its volume.",
"options": [
"78 m³",
"308 m³",
"154 m³",
"312 m³"
],
"answer": 3,
"explain": "Volume of a cuboid = length × width × height = 13 × 6 × 4 = 312 m³."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 40 km/h for 2 hours 30 minutes. How far does it travel?",
"options": [
"100 km",
"6,000 km",
"16 km",
"92 km"
],
"answer": 0,
"explain": "Distance = speed × time. 2 hours 30 minutes = 2.5 hours, so 40 × 2.5 = 100 km."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 603 mm into m.",
"options": [
"603,000 m",
"6.03 m",
"0.603 m",
"0.0603 m"
],
"answer": 2,
"explain": "1 m = 1,000 mm. Going from mm to m (a bigger unit) you divide by 1,000: 603 ÷ 1,000 = 0.603 m."
},
{
"topic": "Density",
"tier": "F",
"q": "A block has a mass of 96 g and a volume of 32 cm³. Find its density.",
"options": [
"30 g/cm³",
"3,072 g/cm³",
"0.333 g/cm³",
"3 g/cm³"
],
"answer": 3,
"explain": "Density = mass ÷ volume = 96 ÷ 32 = 3 g/cm³."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 12 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"46 cm",
"50 cm",
"49.6 cm",
"48 cm"
],
"answer": 1,
"explain": "Upper bound of the side = 12 + 0.5 = 12.5 cm. Upper bound perimeter = 4 × 12.5 = 50 cm."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "Write 7 hours 36 minutes as a decimal number of hours.",
"options": [
"4.56 hours",
"7.36 hours",
"7.6 hours",
"7.4 hours"
],
"answer": 2,
"explain": "36 minutes = 36 ÷ 60 = 0.6 of an hour, so 7 h 36 min = 7.6 hours."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 176.8 ml into litres.",
"options": [
"0.01768 litres",
"1.768 litres",
"176,800 litres",
"0.1768 litres"
],
"answer": 3,
"explain": "1 litre = 1,000 ml. Going from ml to litres (a bigger unit) you divide by 1,000: 176.8 ÷ 1,000 = 0.1768 litres."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 1.9 m² into cm².",
"options": [
"0.00019 cm²",
"190 cm²",
"19,000 cm²",
"1,900 cm²"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 1.9 × 10,000 = 19,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 12 m and height 5 m. The prism is 13 m long. Find its volume.",
"options": [
"110.5 m³",
"30 m³",
"390 m³",
"780 m³"
],
"answer": 2,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 12 × 5 = 30. 30 × 13 = 390 m³."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 23 m long and 9 m wide. What is its perimeter?",
"options": [
"64 m",
"207 m",
"55 m",
"32 m"
],
"answer": 0,
"explain": "Perimeter is the distance all the way round: 23 + 9 + 23 + 9 = 64 m."
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 521.9 mm into m.",
"options": [
"521,900 m",
"0.5219 m",
"0.05219 m",
"5.219 m"
],
"answer": 1,
"explain": "1 m = 1,000 mm. Going from mm to m (a bigger unit) you divide by 1,000: 521.9 ÷ 1,000 = 0.5219 m."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 120 km in 4 hours. What is the average speed?",
"options": [
"0.5 km/h",
"24 km/h",
"480 km/h",
"30 km/h"
],
"answer": 3,
"explain": "Speed = distance ÷ time. 120 ÷ 4 = 30 km/h."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 29 m² into cm².",
"options": [
"290,000 cm²",
"29,000 cm²",
"2,900 cm²",
"0.0029 cm²"
],
"answer": 0,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 29 × 10,000 = 290,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 11 m and a perpendicular height of 17 m. Find its area.",
"options": [
"28 m²",
"187 m²",
"46.75 m²",
"93.5 m²"
],
"answer": 3,
"explain": "Area of a triangle = ½ × base × height = ½ × 11 × 17 = 93.5 m²."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 57 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"3,248.5 cm²",
"3,306.25 cm²",
"3,192.25 cm²",
"3,249 cm²"
],
"answer": 2,
"explain": "Lower bound of the side = 57 − 0.5 = 56.5 cm. Lower bound area = 56.5² = 3,192.25 cm²."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 97.5 km at an average speed of 65 km/h. How long does the journey take?",
"options": [
"1 h 30 min",
"2 h 30 min",
"1 h 50 min",
"1 h 45 min"
],
"answer": 0,
"explain": "Time = distance ÷ speed = 97.5 ÷ 65 = 1.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 1 h 30 min."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 200,000. Two towns are 7 cm apart on the map. How far apart are they in real life?",
"options": [
"1.4 km",
"140 km",
"1,400 km",
"14 km"
],
"answer": 3,
"explain": "Real distance = 7 × 200,000 = 1,400,000 cm. Divide by 100 for metres (14,000 m) and by 1000 for km: 14 km."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 2.8 litres into cl.",
"options": [
"0.028 cl",
"280 cl",
"28 cl",
"2,800 cl"
],
"answer": 1,
"explain": "1 litre = 100 cl. Going from litres to cl (a smaller unit) you multiply by 100: 2.8 × 100 = 280 cl."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 2,535 cm³?",
"options": [
"25.35 litres",
"2.535 litres",
"253.5 litres",
"2,535,000 litres"
],
"answer": 1,
"explain": "1 litre = 1000 cm³, so divide by 1000: 2,535 ÷ 1000 = 2.535 litres."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 11.2 cm, correct to 1 decimal place. What is the upper bound?",
"options": [
"11.3 cm",
"11.15 cm",
"11.24 cm",
"11.25 cm"
],
"answer": 3,
"explain": "Half of 0.1 is 0.05. Upper bound = 11.2 + 0.05 = 11.25 cm."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "Write 11.9 hours in hours and minutes.",
"options": [
"11 h 54 min",
"11 h 90 min",
"11 h 6 min",
"11 h 9 min"
],
"answer": 0,
"explain": "0.9 of an hour = 0.9 × 60 = 54 minutes, so 11.9 hours = 11 h 54 min. It is not 11 h 90 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 12.5 km at an average speed of 50 km/h. How long does the journey take?",
"options": [
"1 h 15 min",
"0 h 25 min",
"15 min",
"30 min"
],
"answer": 2,
"explain": "Time = distance ÷ speed = 12.5 ÷ 50 = 0.25 hours. 0.25 hours × 60 = 15 minutes, so the time is 15 min."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 2,906 mm into m.",
"options": [
"2,906,000 m",
"0.2906 m",
"29.06 m",
"2.906 m"
],
"answer": 3,
"explain": "1 m = 1,000 mm. Going from mm to m (a bigger unit) you divide by 1,000: 2,906 ÷ 1,000 = 2.906 m."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 24 cm long and 7 cm wide. What is its perimeter?",
"options": [
"31 cm",
"55 cm",
"62 cm",
"168 cm"
],
"answer": 2,
"explain": "Perimeter is the distance all the way round: 24 + 7 + 24 + 7 = 62 cm."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 6 m³ into cm³.",
"options": [
"60,000 cm³",
"6,000,000 cm³",
"6,000 cm³",
"600 cm³"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 6 × 1,000,000 = 6,000,000 cm³."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 9 cm and a perpendicular height of 4 cm. Find its area.",
"options": [
"18 cm²",
"36 cm²",
"13 cm²",
"9 cm²"
],
"answer": 0,
"explain": "Area of a triangle = ½ × base × height = ½ × 9 × 4 = 18 cm²."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 6 m. Find its circumference, to 1 decimal place.",
"options": [
"113.1 m",
"18.8 m",
"75.4 m",
"37.7 m"
],
"answer": 3,
"explain": "Circumference = 2πr (or πd) = 2 × π × 6 = 37.7 m (1 d.p.)."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 61.8 m into km.",
"options": [
"0.0618 km",
"0.618 km",
"0.00618 km",
"61,800 km"
],
"answer": 0,
"explain": "1 km = 1,000 m. Going from m to km (a bigger unit) you divide by 1,000: 61.8 ÷ 1,000 = 0.0618 km."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 4 times those of the smaller one. The smaller solid has a volume of 16 cm³. Find the volume of the larger solid.",
"options": [
"256 cm³",
"64 cm³",
"192 cm³",
"1,024 cm³"
],
"answer": 3,
"explain": "Length scale factor 4 → volume scale factor 4³ = 64. 16 × 64 = 1,024 cm³."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 840 N acts on an area of 2 m². Find the pressure.",
"options": [
"1,680 N/m²",
"0.0024 N/m²",
"210 N/m²",
"420 N/m²"
],
"answer": 3,
"explain": "Pressure = force ÷ area = 840 ÷ 2 = 420 N/m²."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 200,000. Two towns are 5 cm apart on the map. How far apart are they in real life?",
"options": [
"1,000 km",
"1 km",
"10 km",
"100 km"
],
"answer": 2,
"explain": "Real distance = 5 × 200,000 = 1,000,000 cm. Divide by 100 for metres (10,000 m) and by 1000 for km: 10 km."
},
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a density of 1.5 g/cm³ and a mass of 216 g. Find its volume.",
"options": [
"0.0069 cm³",
"1,440 cm³",
"324 cm³",
"144 cm³"
],
"answer": 3,
"explain": "Volume = mass ÷ density = 216 ÷ 1.5 = 144 cm³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 16 m into mm.",
"options": [
"16,000 mm",
"160,000 mm",
"1,600 mm",
"0.016 mm"
],
"answer": 0,
"explain": "1 m = 1,000 mm. Going from m to mm (a smaller unit) you multiply by 1,000: 16 × 1,000 = 16,000 mm."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 33 pounds into kg.",
"options": [
"30.8 kg",
"72.6 kg",
"15 kg",
"1.5 kg"
],
"answer": 2,
"explain": "Divide by 2.2: 33 ÷ 2.2 = 15 kg."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 49 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"2,450.25 cm²",
"2,401 cm²",
"2,352.25 cm²",
"2,400.5 cm²"
],
"answer": 2,
"explain": "Lower bound of the side = 49 − 0.5 = 48.5 cm. Lower bound area = 48.5² = 2,352.25 cm²."
}
],
[
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 725 litre tank in 29 minutes. What is the rate of flow?",
"options": [
"0.04 litres/min",
"21,025 litres/min",
"250 litres/min",
"25 litres/min"
],
"answer": 3,
"explain": "Rate = amount ÷ time = 725 ÷ 29 = 25 litres per minute."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 8.7 m² into cm².",
"options": [
"87,000 cm²",
"0.00087 cm²",
"8,700 cm²",
"870 cm²"
],
"answer": 0,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 8.7 × 10,000 = 87,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 60 km/h for 2 hours 30 minutes. How far does it travel?",
"options": [
"150 km",
"138 km",
"9,000 km",
"24 km"
],
"answer": 0,
"explain": "Distance = speed × time. 2 hours 30 minutes = 2.5 hours, so 60 × 2.5 = 150 km."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 12 cm and height 2 cm. The prism is 9 cm long. Find its volume.",
"options": [
"108 cm³",
"63 cm³",
"12 cm³",
"216 cm³"
],
"answer": 0,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 12 × 2 = 12. 12 × 9 = 108 cm³."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 80 kg, correct to the nearest whole number. What is the lower bound?",
"options": [
"79 kg",
"79.5 kg",
"79.9 kg",
"80.5 kg"
],
"answer": 1,
"explain": "Half of 1 is 0.5. Lower bound = 80 − 0.5 = 79.5 kg."
}
],
[
{
"topic": "Area units",
"tier": "F",
"q": "Convert 3.6 m² into cm².",
"options": [
"3,600 cm²",
"36,000 cm²",
"0.00036 cm²",
"360 cm²"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 3.6 × 10,000 = 36,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 5 hours 57 minutes as a decimal number of hours.",
"options": [
"5.57 hours",
"5.95 hours",
"3.57 hours",
"5.05 hours"
],
"answer": 1,
"explain": "57 minutes = 57 ÷ 60 = 0.95 of an hour, so 5 h 57 min = 5.95 hours."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 6 mm. Find its circumference, to 1 decimal place.",
"options": [
"113.1 mm",
"18.8 mm",
"37.7 mm",
"75.4 mm"
],
"answer": 2,
"explain": "Circumference = 2πr (or πd) = 2 × π × 6 = 37.7 mm (1 d.p.)."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 2 times those of the smaller one. The smaller solid has a volume of 7 cm³. Find the volume of the larger solid.",
"options": [
"42 cm³",
"14 cm³",
"28 cm³",
"56 cm³"
],
"answer": 3,
"explain": "Length scale factor 2 → volume scale factor 2³ = 8. 7 × 8 = 56 cm³."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 30.5 m/s into km/h.",
"options": [
"109.8 km/h",
"30,500 km/h",
"1,830 km/h",
"8.47 km/h"
],
"answer": 0,
"explain": "In 1 hour there are 3600 seconds, so 30.5 m/s = 30.5 × 3600 = 109,800 m per hour = 109.8 km/h. (Shortcut: × 3.6.)"
}
],
[
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 2 litres?",
"options": [
"2,000,000 cm³",
"2,000 cm³",
"200 cm³",
"0.002 cm³"
],
"answer": 1,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 2 × 1000 = 2,000 cm³."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 07:50 and arrives at 13:55. How long is this?",
"options": [
"5 h 55 min",
"5 h 5 min",
"6 h 5 min",
"7 h 5 min"
],
"answer": 2,
"explain": "Count on from 07:50: up to the next whole hour, then whole hours, then the minutes to 13:55. The total is 6 h 5 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 2.6 km into m.",
"options": [
"260 m",
"2,600 m",
"0.0026 m",
"26,000 m"
],
"answer": 1,
"explain": "1 km = 1,000 m. Going from km to m (a smaller unit) you multiply by 1,000: 2.6 × 1,000 = 2,600 m."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 18 m² into cm².",
"options": [
"0.0018 cm²",
"1,800 cm²",
"18,000 cm²",
"180,000 cm²"
],
"answer": 3,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 18 × 10,000 = 180,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 5 times those of the smaller one. The smaller shape has an area of 28 cm². Find the area of the larger shape.",
"options": [
"280 cm²",
"700 cm²",
"3,500 cm²",
"140 cm²"
],
"answer": 1,
"explain": "Length scale factor 5 → area scale factor 5² = 25. 28 × 25 = 700 cm²."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 3 m and 12 m, and a perpendicular height of 11 m. Find its area.",
"options": [
"198 m²",
"165 m²",
"82.5 m²",
"49.5 m²"
],
"answer": 2,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (3 + 12) × 11 = ½ × 15 × 11 = 82.5 m²."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 4.9 m³ into cm³.",
"options": [
"490 cm³",
"4,900 cm³",
"4,900,000 cm³",
"49,000 cm³"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 4.9 × 1,000,000 = 4,900,000 cm³."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of P from A is 072°. What is the bearing of A from P?",
"options": [
"108°",
"252°",
"288°",
"072°"
],
"answer": 1,
"explain": "A back bearing is 180° different. 072° is less than 180°, so add 180°: 252°."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 552 cm into m.",
"options": [
"0.552 m",
"55.2 m",
"5.52 m",
"55,200 m"
],
"answer": 2,
"explain": "1 m = 100 cm. Going from cm to m (a bigger unit) you divide by 100: 552 ÷ 100 = 5.52 m."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a density of 2.7 g/cm³ and a volume of 155 cm³. Find its mass.",
"options": [
"157.7 g",
"418.5 g",
"4,185 g",
"57.41 g"
],
"answer": 1,
"explain": "Mass = density × volume = 2.7 × 155 = 418.5 g."
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 13.2 kg, correct to 1 decimal place. What is the upper bound?",
"options": [
"13.3 kg",
"13.15 kg",
"13.24 kg",
"13.25 kg"
],
"answer": 3,
"explain": "Half of 0.1 is 0.05. Upper bound = 13.2 + 0.05 = 13.25 kg."
},
{
"topic": "Density",
"tier": "F",
"q": "A block has a density of 19.3 g/cm³ and a mass of 2,547.6 g. Find its volume.",
"options": [
"49,168.68 cm³",
"1,320 cm³",
"132 cm³",
"0.0076 cm³"
],
"answer": 2,
"explain": "Volume = mass ÷ density = 2,547.6 ÷ 19.3 = 132 cm³."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 20,000. Two towns are 10 cm apart on the map. How far apart are they in real life?",
"options": [
"2 km",
"200 km",
"0.2 km",
"20 km"
],
"answer": 0,
"explain": "Real distance = 10 × 20,000 = 200,000 cm. Divide by 100 for metres (2,000 m) and by 1000 for km: 2 km."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 20 km/h for 4 hours. How far does it travel?",
"options": [
"80 km",
"4,800 km",
"100 km",
"5 km"
],
"answer": 0,
"explain": "Distance = speed × time. 20 × 4 = 80 km."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of P from A is 048°. What is the bearing of A from P?",
"options": [
"312°",
"048°",
"228°",
"132°"
],
"answer": 2,
"explain": "A back bearing is 180° different. 048° is less than 180°, so add 180°: 228°."
}
],
[
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 3.4 m³ into cm³.",
"options": [
"34,000 cm³",
"3,400 cm³",
"3,400,000 cm³",
"340 cm³"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 3.4 × 1,000,000 = 3,400,000 cm³."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 18 cm and a perpendicular height of 7 cm. Find its area.",
"options": [
"31.5 cm²",
"63 cm²",
"25 cm²",
"126 cm²"
],
"answer": 1,
"explain": "Area of a triangle = ½ × base × height = ½ × 18 × 7 = 63 cm²."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 65 mph for 1 hour 30 minutes. How far does it travel?",
"options": [
"84.5 miles",
"97.5 miles",
"43.3 miles",
"5,850 miles"
],
"answer": 1,
"explain": "Distance = speed × time. 1 hour 30 minutes = 1.5 hours, so 65 × 1.5 = 97.5 miles."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 50 miles into kilometres.",
"options": [
"80 km",
"8 km",
"400 km",
"31.25 km"
],
"answer": 0,
"explain": "50 ÷ 5 = 10 lots of 5 miles. 10 × 8 = 80 km."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 342 km/h into m/s.",
"options": [
"95 m/s",
"5.7 m/s",
"5,700 m/s",
"1,231.2 m/s"
],
"answer": 0,
"explain": "342 km/h = 342,000 m in 3600 seconds. 342,000 ÷ 3600 = 95 m/s. (Shortcut: ÷ 3.6.)"
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a density of 8.9 g/cm³ and a mass of 1,192.6 g. Find its volume.",
"options": [
"10,614.14 cm³",
"1,340 cm³",
"134 cm³",
"0.0075 cm³"
],
"answer": 2,
"explain": "Volume = mass ÷ density = 1,192.6 ÷ 8.9 = 134 cm³."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 1,867 cm³?",
"options": [
"186.7 litres",
"18.67 litres",
"1.867 litres",
"1,867,000 litres"
],
"answer": 2,
"explain": "1 litre = 1000 cm³, so divide by 1000: 1,867 ÷ 1000 = 1.867 litres."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 31 litres, correct to the nearest whole number. What is the lower bound?",
"options": [
"30.5 litres",
"31.5 litres",
"30 litres",
"30.9 litres"
],
"answer": 0,
"explain": "Half of 1 is 0.5. Lower bound = 31 − 0.5 = 30.5 litres."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 7 cm and 11 cm, and a perpendicular height of 4 cm. Find its area.",
"options": [
"8 cm²",
"72 cm²",
"36 cm²",
"154 cm²"
],
"answer": 2,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (7 + 11) × 4 = ½ × 18 × 4 = 36 cm²."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 5 times those of the smaller one. The smaller solid has a volume of 10 cm³. Find the volume of the larger solid.",
"options": [
"150 cm³",
"50 cm³",
"250 cm³",
"1,250 cm³"
],
"answer": 3,
"explain": "Length scale factor 5 → volume scale factor 5³ = 125. 10 × 125 = 1,250 cm³."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 35 km/h for 2 hours 30 minutes. How far does it travel?",
"options": [
"87.5 km",
"80.5 km",
"5,250 km",
"14 km"
],
"answer": 0,
"explain": "Distance = speed × time. 2 hours 30 minutes = 2.5 hours, so 35 × 2.5 = 87.5 km."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 10 m and a height of 5 m. Find its volume, to 1 decimal place.",
"options": [
"6,283.2 m³",
"314.2 m³",
"157.1 m³",
"1,570.8 m³"
],
"answer": 3,
"explain": "Volume of a cylinder = πr²h = π × 10² × 5 = π × 100 × 5 = 1,570.8 m³ (1 d.p.)."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 10 m² into cm².",
"options": [
"10,000 cm²",
"0.001 cm²",
"1,000 cm²",
"100,000 cm²"
],
"answer": 3,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 10 × 10,000 = 100,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 100,000. Two towns are 9 cm apart on the map. How far apart are they in real life?",
"options": [
"90 km",
"900 km",
"9 km",
"0.9 km"
],
"answer": 2,
"explain": "Real distance = 9 × 100,000 = 900,000 cm. Divide by 100 for metres (9,000 m) and by 1000 for km: 9 km."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 240 litre tank in 12 minutes. What is the rate of flow?",
"options": [
"200 litres/min",
"2,880 litres/min",
"20 litres/min",
"0.05 litres/min"
],
"answer": 2,
"explain": "Rate = amount ÷ time = 240 ÷ 12 = 20 litres per minute."
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 7.8 cm, correct to 1 decimal place. What is the lower bound?",
"options": [
"7.85 cm",
"7.75 cm",
"7.7 cm",
"7.79 cm"
],
"answer": 1,
"explain": "Half of 0.1 is 0.05. Lower bound = 7.8 − 0.05 = 7.75 cm."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 6 cl into ml.",
"options": [
"600 ml",
"60 ml",
"0.6 ml",
"6 ml"
],
"answer": 1,
"explain": "1 cl = 10 ml. Going from cl to ml (a smaller unit) you multiply by 10: 6 × 10 = 60 ml."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 16 cm. Find its circumference, to 1 decimal place.",
"options": [
"201.1 cm",
"50.3 cm",
"100.5 cm",
"804.2 cm"
],
"answer": 2,
"explain": "Circumference = 2πr (or πd) = 2 × π × 16 = 100.5 cm (1 d.p.)."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 240 km in 4 hours. What is the average speed?",
"options": [
"960 km/h",
"48 km/h",
"1 km/h",
"60 km/h"
],
"answer": 3,
"explain": "Speed = distance ÷ time. 240 ÷ 4 = 60 km/h."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 13.5 m/s into km/h.",
"options": [
"13,500 km/h",
"810 km/h",
"48.6 km/h",
"3.75 km/h"
],
"answer": 2,
"explain": "In 1 hour there are 3600 seconds, so 13.5 m/s = 13.5 × 3600 = 48,600 m per hour = 48.6 km/h. (Shortcut: × 3.6.)"
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 60 kg into pounds.",
"options": [
"1,320 pounds",
"132 pounds",
"27.3 pounds",
"62.2 pounds"
],
"answer": 1,
"explain": "Multiply by 2.2: 60 × 2.2 = 132 pounds."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 50 mph for 4 hours. How far does it travel?",
"options": [
"12.5 miles",
"12,000 miles",
"200 miles",
"250 miles"
],
"answer": 2,
"explain": "Distance = speed × time. 50 × 4 = 200 miles."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 989.4 m into km.",
"options": [
"0.09894 km",
"0.9894 km",
"9.894 km",
"989,400 km"
],
"answer": 1,
"explain": "1 km = 1,000 m. Going from m to km (a bigger unit) you divide by 1,000: 989.4 ÷ 1,000 = 0.9894 km."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 7 m² into cm².",
"options": [
"0.0007 cm²",
"70,000 cm²",
"7,000 cm²",
"700 cm²"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 7 × 10,000 = 70,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 10 cm and 11 cm, and a perpendicular height of 11 cm. Find its area.",
"options": [
"605 cm²",
"5.5 cm²",
"115.5 cm²",
"231 cm²"
],
"answer": 2,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (10 + 11) × 11 = ½ × 21 × 11 = 115.5 cm²."
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 8,800 g, correct to the nearest 100. What is the upper bound?",
"options": [
"8,850 g",
"8,840 g",
"8,900 g",
"8,750 g"
],
"answer": 0,
"explain": "Half of 100 is 50. Upper bound = 8,800 + 50 = 8,850 g."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 32.5 miles in 30 minutes. What is the average speed?",
"options": [
"1.1 mph",
"108.3 mph",
"65 mph",
"16.2 mph"
],
"answer": 2,
"explain": "Speed = distance ÷ time. Write the time in hours: 30 minutes = 0.5 hours. 32.5 ÷ 0.5 = 65 mph."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 9.8 litres?",
"options": [
"980 cm³",
"9,800,000 cm³",
"9,800 cm³",
"0.0098 cm³"
],
"answer": 2,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 9.8 × 1000 = 9,800 cm³."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 19 m, a perpendicular height of 12 m and a sloping side of 15 m. Find its area.",
"options": [
"114 m²",
"285 m²",
"68 m²",
"228 m²"
],
"answer": 3,
"explain": "Area of a parallelogram = base × perpendicular height = 19 × 12 = 228 m². The sloping side is not needed."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 1,180 N/m² acts on an area of 0.2 m². Find the force.",
"options": [
"1,180.2 N",
"2,360 N",
"5,900 N",
"236 N"
],
"answer": 3,
"explain": "Force = pressure × area = 1,180 × 0.2 = 236 N."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 500,000. Two towns are 9 cm apart on the map. How far apart are they in real life?",
"options": [
"45 km",
"4,500 km",
"4.5 km",
"450 km"
],
"answer": 0,
"explain": "Real distance = 9 × 500,000 = 4,500,000 cm. Divide by 100 for metres (45,000 m) and by 1000 for km: 45 km."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 7 cm. Find its circumference, to 1 decimal place.",
"options": [
"153.9 cm",
"22 cm",
"44 cm",
"88 cm"
],
"answer": 2,
"explain": "Circumference = 2πr (or πd) = 2 × π × 7 = 44 cm (1 d.p.)."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 52 litre tank in 13 minutes. What is the rate of flow?",
"options": [
"40 litres/min",
"4 litres/min",
"676 litres/min",
"0.25 litres/min"
],
"answer": 1,
"explain": "Rate = amount ÷ time = 52 ÷ 13 = 4 litres per minute."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 11:15 and ends at 11:55. How long is this?",
"options": [
"1 h 40 min",
"1 h 10 min",
"1 h",
"40 min"
],
"answer": 3,
"explain": "Count on from 11:15: up to the next whole hour, then whole hours, then the minutes to 11:55. The total is 40 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 25.5 m/s into km/h.",
"options": [
"7.08 km/h",
"25,500 km/h",
"1,530 km/h",
"91.8 km/h"
],
"answer": 3,
"explain": "In 1 hour there are 3600 seconds, so 25.5 m/s = 25.5 × 3600 = 91,800 m per hour = 91.8 km/h. (Shortcut: × 3.6.)"
}
],
[
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 5.8 litres into ml.",
"options": [
"58,000 ml",
"0.0058 ml",
"5,800 ml",
"580 ml"
],
"answer": 2,
"explain": "1 litre = 1,000 ml. Going from litres to ml (a smaller unit) you multiply by 1,000: 5.8 × 1,000 = 5,800 ml."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 17.6 pounds into kg.",
"options": [
"15.4 kg",
"0.8 kg",
"8 kg",
"38.72 kg"
],
"answer": 2,
"explain": "Divide by 2.2: 17.6 ÷ 2.2 = 8 kg."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 4 cm and height 2 cm. The prism is 4 cm long. Find its volume.",
"options": [
"4 cm³",
"32 cm³",
"12 cm³",
"16 cm³"
],
"answer": 3,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 4 × 2 = 4. 4 × 4 = 16 cm³."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 20,000. Two towns are 8 cm apart on the map. How far apart are they in real life?",
"options": [
"0.16 km",
"16 km",
"1.6 km",
"160 km"
],
"answer": 2,
"explain": "Real distance = 8 × 20,000 = 160,000 cm. Divide by 100 for metres (1,600 m) and by 1000 for km: 1.6 km."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 63 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"250 cm",
"252 cm",
"254 cm",
"253.6 cm"
],
"answer": 2,
"explain": "Upper bound of the side = 63 + 0.5 = 63.5 cm. Upper bound perimeter = 4 × 63.5 = 254 cm."
}
],
[
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 0.5 m³ into cm³.",
"options": [
"50 cm³",
"500,000 cm³",
"500 cm³",
"5,000 cm³"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 0.5 × 1,000,000 = 500,000 cm³."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 13 m, a perpendicular height of 4 m and a sloping side of 6 m. Find its area.",
"options": [
"78 m²",
"38 m²",
"52 m²",
"26 m²"
],
"answer": 2,
"explain": "Area of a parallelogram = base × perpendicular height = 13 × 4 = 52 m². The sloping side is not needed."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 12.4 hours in hours and minutes.",
"options": [
"12 h 4 min",
"12 h 40 min",
"12 h 24 min",
"12 h 36 min"
],
"answer": 2,
"explain": "0.4 of an hour = 0.4 × 60 = 24 minutes, so 12.4 hours = 12 h 24 min. It is not 12 h 40 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 09:25 and ends at 11:35. How long is this?",
"options": [
"3 h 10 min",
"2 h",
"1 h 10 min",
"2 h 10 min"
],
"answer": 3,
"explain": "Count on from 09:25: up to the next whole hour, then whole hours, then the minutes to 11:35. The total is 2 h 10 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 16.2 cm, correct to 1 decimal place. What is the upper bound?",
"options": [
"16.3 cm",
"16.24 cm",
"16.25 cm",
"16.15 cm"
],
"answer": 2,
"explain": "Half of 0.1 is 0.05. Upper bound = 16.2 + 0.05 = 16.25 cm."
}
],
[
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 15 m by 6 m by 2 m. Find its volume.",
"options": [
"264 m³",
"90 m³",
"132 m³",
"180 m³"
],
"answer": 3,
"explain": "Volume of a cuboid = length × width × height = 15 × 6 × 2 = 180 m³."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 5 litres per minute. How long does it take to fill 160 litres?",
"options": [
"0.031 minutes",
"32 minutes",
"155 minutes",
"800 minutes"
],
"answer": 1,
"explain": "Time = amount ÷ rate = 160 ÷ 5 = 32 minutes."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 06:10 and finishes at 09:05. How long is this?",
"options": [
"2 h 45 min",
"1 h 55 min",
"2 h 55 min",
"3 h 55 min"
],
"answer": 2,
"explain": "Count on from 06:10: up to the next whole hour, then whole hours, then the minutes to 09:05. The total is 2 h 55 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 9 cm by 5 cm by 4 cm. Find its total surface area.",
"options": [
"270 cm²",
"202 cm²",
"101 cm²",
"180 cm²"
],
"answer": 1,
"explain": "A cuboid has 3 pairs of faces: 2 × (9×5) + 2 × (9×4) + 2 × (5×4) = 2 × (45 + 36 + 20) = 202 cm²."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 297 km/h into m/s.",
"options": [
"82.5 m/s",
"4,950 m/s",
"1,069.2 m/s",
"4.95 m/s"
],
"answer": 0,
"explain": "297 km/h = 297,000 m in 3600 seconds. 297,000 ÷ 3600 = 82.5 m/s. (Shortcut: ÷ 3.6.)"
}
],
[
{
"topic": "Area units",
"tier": "F",
"q": "Convert 6,600 cm² into m².",
"options": [
"0.66 m²",
"6.6 m²",
"66,000,000 m²",
"66 m²"
],
"answer": 0,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 6,600 ÷ 10,000 = 0.66 m²."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 56 m. One side is 13 m. How long is the other side?",
"options": [
"28 m",
"43 m",
"15 m",
"60 m"
],
"answer": 2,
"explain": "Two sides of 13 make 26. 56 − 26 = 30, which is shared between the other two sides: 30 ÷ 2 = 15 m."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a mass of 324 g and a volume of 120 cm³. Find its density.",
"options": [
"0.37 g/cm³",
"38,880 g/cm³",
"27 g/cm³",
"2.7 g/cm³"
],
"answer": 3,
"explain": "Density = mass ÷ volume = 324 ÷ 120 = 2.7 g/cm³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 4,251 m into km.",
"options": [
"4.251 km",
"4,251,000 km",
"0.4251 km",
"42.51 km"
],
"answer": 0,
"explain": "1 km = 1,000 m. Going from m to km (a bigger unit) you divide by 1,000: 4,251 ÷ 1,000 = 4.251 km."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 227.5 miles at an average speed of 65 mph. How long does the journey take?",
"options": [
"3 h 45 min",
"3 h 30 min",
"3 h 50 min",
"4 h 30 min"
],
"answer": 1,
"explain": "Time = distance ÷ speed = 227.5 ÷ 65 = 3.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 3 h 30 min."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 250,000. Two places are 45 km apart in real life. How far apart are they on the map?",
"options": [
"180 cm",
"1,800 cm",
"1.8 cm",
"18 cm"
],
"answer": 3,
"explain": "45 km = 4,500,000 cm. Map distance = 4,500,000 ÷ 250,000 = 18 cm."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 28 cm, correct to 1 decimal place. What is the upper bound?",
"options": [
"28.1 cm",
"28.04 cm",
"28.05 cm",
"27.95 cm"
],
"answer": 2,
"explain": "Half of 0.1 is 0.05. Upper bound = 28 + 0.05 = 28.05 cm."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 31 tonnes into kg.",
"options": [
"0.031 kg",
"3,100 kg",
"310,000 kg",
"31,000 kg"
],
"answer": 3,
"explain": "1 tonne = 1,000 kg. Going from tonnes to kg (a smaller unit) you multiply by 1,000: 31 × 1,000 = 31,000 kg."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 140 miles into kilometres.",
"options": [
"224 km",
"22.4 km",
"87.5 km",
"1,120 km"
],
"answer": 0,
"explain": "140 ÷ 5 = 28 lots of 5 miles. 28 × 8 = 224 km."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 8 m and height 10 m. The prism is 11 m long. Find its volume.",
"options": [
"99 m³",
"440 m³",
"40 m³",
"880 m³"
],
"answer": 1,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 8 × 10 = 40. 40 × 11 = 440 m³."
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 18 cm. Find its circumference, to 1 decimal place.",
"options": [
"226.2 cm",
"56.5 cm",
"113.1 cm",
"1,017.9 cm"
],
"answer": 2,
"explain": "Circumference = 2πr (or πd) = 2 × π × 18 = 113.1 cm (1 d.p.)."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of B from Y is 113°. What is the bearing of Y from B?",
"options": [
"113°",
"293°",
"067°",
"247°"
],
"answer": 1,
"explain": "A back bearing is 180° different. 113° is less than 180°, so add 180°: 293°."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 23 litres, correct to the nearest whole number. What is the lower bound?",
"options": [
"22.5 litres",
"22.9 litres",
"23.5 litres",
"22 litres"
],
"answer": 0,
"explain": "Half of 1 is 0.5. Lower bound = 23 − 0.5 = 22.5 litres."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "A tank holds 8 m³ of water. How many litres is this?",
"options": [
"8,000 litres",
"800 litres",
"0.008 litres",
"8,000,000 litres"
],
"answer": 0,
"explain": "1 m³ = 1,000,000 cm³ and 1 litre = 1000 cm³, so 1 m³ = 1000 litres. 8 × 1000 = 8,000 litres."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 5 times those of the smaller one. The smaller shape has an area of 36 cm². Find the area of the larger shape.",
"options": [
"4,500 cm²",
"360 cm²",
"900 cm²",
"180 cm²"
],
"answer": 2,
"explain": "Length scale factor 5 → area scale factor 5² = 25. 36 × 25 = 900 cm²."
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 37 kg into pounds.",
"options": [
"16.8 pounds",
"39.2 pounds",
"81.4 pounds",
"814 pounds"
],
"answer": 2,
"explain": "Multiply by 2.2: 37 × 2.2 = 81.4 pounds."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 853.1 mm into cm.",
"options": [
"85.31 cm",
"8.531 cm",
"8,531 cm",
"853.1 cm"
],
"answer": 0,
"explain": "1 cm = 10 mm. Going from mm to cm (a bigger unit) you divide by 10: 853.1 ÷ 10 = 85.31 cm."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 830 cm² into m².",
"options": [
"0.083 m²",
"8.3 m²",
"8,300,000 m²",
"0.83 m²"
],
"answer": 0,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 830 ÷ 10,000 = 0.083 m²."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 09:15 and ends at 15:40. How long is this?",
"options": [
"7 h 25 min",
"5 h 25 min",
"6 h 25 min",
"6 h 15 min"
],
"answer": 2,
"explain": "Count on from 09:15: up to the next whole hour, then whole hours, then the minutes to 15:40. The total is 6 h 25 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 13 cm by 3 cm by 2 cm. Find its volume.",
"options": [
"39 cm³",
"71 cm³",
"142 cm³",
"78 cm³"
],
"answer": 3,
"explain": "Volume of a cuboid = length × width × height = 13 × 3 × 2 = 78 cm³."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 5 cm and a perpendicular height of 7 cm. Find its area.",
"options": [
"12 cm²",
"8.75 cm²",
"17.5 cm²",
"35 cm²"
],
"answer": 2,
"explain": "Area of a triangle = ½ × base × height = ½ × 5 × 7 = 17.5 cm²."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 20 litres per minute. How long does it take to fill 540 litres?",
"options": [
"10,800 minutes",
"27 minutes",
"0.037 minutes",
"520 minutes"
],
"answer": 1,
"explain": "Time = amount ÷ rate = 540 ÷ 20 = 27 minutes."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 8 hours 3 minutes as a decimal number of hours.",
"options": [
"8.95 hours",
"8.05 hours",
"4.83 hours",
"8.03 hours"
],
"answer": 1,
"explain": "3 minutes = 3 ÷ 60 = 0.05 of an hour, so 8 h 3 min = 8.05 hours."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 6 m and a height of 10 m. Find its volume, to 1 decimal place.",
"options": [
"4,523.9 m³",
"377 m³",
"188.5 m³",
"1,131 m³"
],
"answer": 3,
"explain": "Volume of a cylinder = πr²h = π × 6² × 10 = π × 36 × 10 = 1,131 m³ (1 d.p.)."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 2,855 mm into cm.",
"options": [
"285.5 cm",
"28,550 cm",
"28.55 cm",
"2,855 cm"
],
"answer": 0,
"explain": "1 cm = 10 mm. Going from mm to cm (a bigger unit) you divide by 10: 2,855 ÷ 10 = 285.5 cm."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 52 cm. One side is 10 cm. How long is the other side?",
"options": [
"26 cm",
"42 cm",
"16 cm",
"64 cm"
],
"answer": 2,
"explain": "Two sides of 10 make 20. 52 − 20 = 32, which is shared between the other two sides: 32 ÷ 2 = 16 cm."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 11:50 and arrives at 18:05. How long is this?",
"options": [
"7 h 15 min",
"5 h 15 min",
"6 h 55 min",
"6 h 15 min"
],
"answer": 3,
"explain": "Count on from 11:50: up to the next whole hour, then whole hours, then the minutes to 18:05. The total is 6 h 15 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 10 cm. Find its area, to 1 decimal place.",
"options": [
"78.5 cm²",
"62.8 cm²",
"31.4 cm²",
"314.2 cm²"
],
"answer": 0,
"explain": "First halve the diameter: r = 10 ÷ 2 = 5. Area = πr² = π × 5² = 78.5 cm² (1 d.p.)."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of B from Q is 118°. What is the bearing of Q from B?",
"options": [
"062°",
"118°",
"298°",
"242°"
],
"answer": 2,
"explain": "A back bearing is 180° different. 118° is less than 180°, so add 180°: 298°."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 29 cl into ml.",
"options": [
"2.9 ml",
"29 ml",
"290 ml",
"2,900 ml"
],
"answer": 2,
"explain": "1 cl = 10 ml. Going from cl to ml (a smaller unit) you multiply by 10: 29 × 10 = 290 ml."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 16 m long and 8 m wide. What is its perimeter?",
"options": [
"48 m",
"128 m",
"24 m",
"40 m"
],
"answer": 0,
"explain": "Perimeter is the distance all the way round: 16 + 8 + 16 + 8 = 48 m."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 13 m, a perpendicular height of 14 m and a sloping side of 19 m. Find its area.",
"options": [
"182 m²",
"64 m²",
"91 m²",
"247 m²"
],
"answer": 0,
"explain": "Area of a parallelogram = base × perpendicular height = 13 × 14 = 182 m². The sloping side is not needed."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 200 miles at an average speed of 80 mph. How long does the journey take?",
"options": [
"2 h 50 min",
"2 h 30 min",
"3 h 30 min",
"2 h 45 min"
],
"answer": 1,
"explain": "Time = distance ÷ speed = 200 ÷ 80 = 2.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 2 h 30 min."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of Y from P is 036°. What is the bearing of P from Y?",
"options": [
"036°",
"144°",
"216°",
"324°"
],
"answer": 2,
"explain": "A back bearing is 180° different. 036° is less than 180°, so add 180°: 216°."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a density of 0.8 g/cm³ and a mass of 151.2 g. Find its volume.",
"options": [
"1,890 cm³",
"120.96 cm³",
"189 cm³",
"0.0053 cm³"
],
"answer": 2,
"explain": "Volume = mass ÷ density = 151.2 ÷ 0.8 = 189 cm³."
}
],
[
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of X from A is 251°. What is the bearing of A from X?",
"options": [
"251°",
"289°",
"109°",
"071°"
],
"answer": 3,
"explain": "A back bearing is 180° different. 251° is more than 180°, so subtract 180°: 071°."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 868.7 m into km.",
"options": [
"8.687 km",
"868,700 km",
"0.8687 km",
"0.08687 km"
],
"answer": 2,
"explain": "1 km = 1,000 m. Going from m to km (a bigger unit) you divide by 1,000: 868.7 ÷ 1,000 = 0.8687 km."
},
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a mass of 250.9 g and a volume of 13 cm³. Find its density.",
"options": [
"193 g/cm³",
"3,261.7 g/cm³",
"19.3 g/cm³",
"0.052 g/cm³"
],
"answer": 2,
"explain": "Density = mass ÷ volume = 250.9 ÷ 13 = 19.3 g/cm³."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 9 hours 12 minutes as a decimal number of hours.",
"options": [
"5.52 hours",
"9.8 hours",
"9.2 hours",
"9.12 hours"
],
"answer": 2,
"explain": "12 minutes = 12 ÷ 60 = 0.2 of an hour, so 9 h 12 min = 9.2 hours."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 1,860 N/m² acts on an area of 1.5 m². Find the force.",
"options": [
"2,790 N",
"1,861.5 N",
"1,240 N",
"27,900 N"
],
"answer": 0,
"explain": "Force = pressure × area = 1,860 × 1.5 = 2,790 N."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a mass of 275.4 g and a volume of 102 cm³. Find its density.",
"options": [
"2.7 g/cm³",
"0.37 g/cm³",
"27 g/cm³",
"28,090.8 g/cm³"
],
"answer": 0,
"explain": "Density = mass ÷ volume = 275.4 ÷ 102 = 2.7 g/cm³."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 22.2 cm, correct to 1 decimal place. What is the lower bound?",
"options": [
"22.15 cm",
"22.1 cm",
"22.25 cm",
"22.19 cm"
],
"answer": 0,
"explain": "Half of 0.1 is 0.05. Lower bound = 22.2 − 0.05 = 22.15 cm."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 gallon ≈ 4.5 litres. Convert 18 gallons into litres.",
"options": [
"81 litres",
"22.5 litres",
"810 litres",
"4 litres"
],
"answer": 0,
"explain": "Multiply by 4.5: 18 × 4.5 = 81 litres."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 130 miles in 2 hours. What is the average speed?",
"options": [
"65 mph",
"1.1 mph",
"260 mph",
"43.3 mph"
],
"answer": 0,
"explain": "Speed = distance ÷ time. 130 ÷ 2 = 65 mph."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 300 cm² into m².",
"options": [
"0.3 m²",
"0.03 m²",
"3 m²",
"3,000,000 m²"
],
"answer": 1,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 300 ÷ 10,000 = 0.03 m²."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A bar has a density of 1.2 g/cm³ and a volume of 158 cm³. Find its mass.",
"options": [
"189.6 g",
"1,896 g",
"159.2 g",
"131.67 g"
],
"answer": 0,
"explain": "Mass = density × volume = 1.2 × 158 = 189.6 g."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 2.4 m² into cm².",
"options": [
"2,400 cm²",
"240 cm²",
"0.00024 cm²",
"24,000 cm²"
],
"answer": 3,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 2.4 × 10,000 = 24,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 10 litres per minute. How long does it take to fill 320 litres?",
"options": [
"32 minutes",
"310 minutes",
"3,200 minutes",
"0.031 minutes"
],
"answer": 0,
"explain": "Time = amount ÷ rate = 320 ÷ 10 = 32 minutes."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 inch ≈ 2.5 cm. Convert 21 inches into centimetres.",
"options": [
"525 cm",
"252 cm",
"8.4 cm",
"52.5 cm"
],
"answer": 3,
"explain": "Multiply by 2.5: 21 × 2.5 = 52.5 cm."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 200,000. Two places are 16 km apart in real life. How far apart are they on the map?",
"options": [
"800 cm",
"80 cm",
"0.8 cm",
"8 cm"
],
"answer": 3,
"explain": "16 km = 1,600,000 cm. Map distance = 1,600,000 ÷ 200,000 = 8 cm."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "Write 2 hours 18 minutes as a decimal number of hours.",
"options": [
"2.18 hours",
"2.3 hours",
"2.7 hours",
"1.38 hours"
],
"answer": 1,
"explain": "18 minutes = 18 ÷ 60 = 0.3 of an hour, so 2 h 18 min = 2.3 hours."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 24 m² into cm².",
"options": [
"24,000 cm²",
"240,000 cm²",
"2,400 cm²",
"0.0024 cm²"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 24 × 10,000 = 240,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 6.1 litres into ml.",
"options": [
"6,100 ml",
"0.0061 ml",
"61,000 ml",
"610 ml"
],
"answer": 0,
"explain": "1 litre = 1,000 ml. Going from litres to ml (a smaller unit) you multiply by 1,000: 6.1 × 1,000 = 6,100 ml."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 7 cm and a height of 11 cm. Find its volume, to 1 decimal place.",
"options": [
"1,693.3 cm³",
"6,773.3 cm³",
"241.9 cm³",
"483.8 cm³"
],
"answer": 0,
"explain": "Volume of a cylinder = πr²h = π × 7² × 11 = π × 49 × 11 = 1,693.3 cm³ (1 d.p.)."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 4 times those of the smaller one. The smaller solid has a volume of 15 cm³. Find the volume of the larger solid.",
"options": [
"60 cm³",
"960 cm³",
"240 cm³",
"180 cm³"
],
"answer": 1,
"explain": "Length scale factor 4 → volume scale factor 4³ = 64. 15 × 64 = 960 cm³."
}
],
[
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 11 m by 9 m by 4 m. Find its volume.",
"options": [
"358 m³",
"99 m³",
"179 m³",
"396 m³"
],
"answer": 3,
"explain": "Volume of a cuboid = length × width × height = 11 × 9 × 4 = 396 m³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 6,459 mm into m.",
"options": [
"6.459 m",
"64.59 m",
"0.6459 m",
"6,459,000 m"
],
"answer": 0,
"explain": "1 m = 1,000 mm. Going from mm to m (a bigger unit) you divide by 1,000: 6,459 ÷ 1,000 = 6.459 m."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 7.1 hours in hours and minutes.",
"options": [
"7 h 10 min",
"7 h 54 min",
"7 h 1 min",
"7 h 6 min"
],
"answer": 3,
"explain": "0.1 of an hour = 0.1 × 60 = 6 minutes, so 7.1 hours = 7 h 6 min. It is not 7 h 10 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of X from A is 284°. What is the bearing of A from X?",
"options": [
"104°",
"256°",
"284°",
"076°"
],
"answer": 0,
"explain": "A back bearing is 180° different. 284° is more than 180°, so subtract 180°: 104°."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 700 N/m² acts on an area of 0.2 m². Find the force.",
"options": [
"3,500 N",
"700.2 N",
"1,400 N",
"140 N"
],
"answer": 3,
"explain": "Force = pressure × area = 700 × 0.2 = 140 N."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 22.5 miles in 30 minutes. What is the average speed?",
"options": [
"75 mph",
"0.8 mph",
"11.2 mph",
"45 mph"
],
"answer": 3,
"explain": "Speed = distance ÷ time. Write the time in hours: 30 minutes = 0.5 hours. 22.5 ÷ 0.5 = 45 mph."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 8,415 cm³?",
"options": [
"84.15 litres",
"8.415 litres",
"8,415,000 litres",
"841.5 litres"
],
"answer": 1,
"explain": "1 litre = 1000 cm³, so divide by 1000: 8,415 ÷ 1000 = 8.415 litres."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 6 cm long and 11 cm wide. What is its perimeter?",
"options": [
"66 cm",
"23 cm",
"17 cm",
"34 cm"
],
"answer": 3,
"explain": "Perimeter is the distance all the way round: 6 + 11 + 6 + 11 = 34 cm."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 160 litre tank in 8 minutes. What is the rate of flow?",
"options": [
"1,280 litres/min",
"0.05 litres/min",
"200 litres/min",
"20 litres/min"
],
"answer": 3,
"explain": "Rate = amount ÷ time = 160 ÷ 8 = 20 litres per minute."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 13 m by 6 m by 3 m. Find its volume.",
"options": [
"234 m³",
"135 m³",
"78 m³",
"270 m³"
],
"answer": 0,
"explain": "Volume of a cuboid = length × width × height = 13 × 6 × 3 = 234 m³."
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 11 m. Find its circumference, to 1 decimal place.",
"options": [
"138.2 m",
"34.6 m",
"69.1 m",
"380.1 m"
],
"answer": 2,
"explain": "Circumference = 2πr (or πd) = 2 × π × 11 = 69.1 m (1 d.p.)."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 0.6 m² into cm².",
"options": [
"6,000 cm²",
"0.00006 cm²",
"60 cm²",
"600 cm²"
],
"answer": 0,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 0.6 × 10,000 = 6,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 200,000. Two towns are 11.5 cm apart on the map. How far apart are they in real life?",
"options": [
"23 km",
"2.3 km",
"2,300 km",
"230 km"
],
"answer": 0,
"explain": "Real distance = 11.5 × 200,000 = 2,300,000 cm. Divide by 100 for metres (23,000 m) and by 1000 for km: 23 km."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 1,631 cm³?",
"options": [
"1.631 litres",
"1,631,000 litres",
"16.31 litres",
"163.1 litres"
],
"answer": 0,
"explain": "1 litre = 1000 cm³, so divide by 1000: 1,631 ÷ 1000 = 1.631 litres."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 3,280 g into kg.",
"options": [
"32.8 kg",
"3,280,000 kg",
"0.328 kg",
"3.28 kg"
],
"answer": 3,
"explain": "1 kg = 1,000 g. Going from g to kg (a bigger unit) you divide by 1,000: 3,280 ÷ 1,000 = 3.28 kg."
}
],
[
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 440 litre tank in 22 minutes. What is the rate of flow?",
"options": [
"9,680 litres/min",
"20 litres/min",
"0.05 litres/min",
"200 litres/min"
],
"answer": 1,
"explain": "Rate = amount ÷ time = 440 ÷ 22 = 20 litres per minute."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 500,000. Two towns are 14 cm apart on the map. How far apart are they in real life?",
"options": [
"7,000 km",
"70 km",
"700 km",
"7 km"
],
"answer": 1,
"explain": "Real distance = 14 × 500,000 = 7,000,000 cm. Divide by 100 for metres (70,000 m) and by 1000 for km: 70 km."
},
{
"topic": "Density",
"tier": "F",
"q": "A stone has a density of 3 g/cm³ and a mass of 240 g. Find its volume.",
"options": [
"0.0125 cm³",
"800 cm³",
"720 cm³",
"80 cm³"
],
"answer": 3,
"explain": "Volume = mass ÷ density = 240 ÷ 3 = 80 cm³."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 07:35 and arrives at 09:15. How long is this?",
"options": [
"1 h 30 min",
"1 h 40 min",
"40 min",
"2 h 40 min"
],
"answer": 1,
"explain": "Count on from 07:35: up to the next whole hour, then whole hours, then the minutes to 09:15. The total is 1 h 40 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 10 cm by 7 cm by 3 cm. Find its total surface area.",
"options": [
"210 cm²",
"121 cm²",
"242 cm²",
"420 cm²"
],
"answer": 2,
"explain": "A cuboid has 3 pairs of faces: 2 × (10×7) + 2 × (10×3) + 2 × (7×3) = 2 × (70 + 30 + 21) = 242 cm²."
}
],
[
{
"topic": "Area units",
"tier": "F",
"q": "Convert 2,000 cm² into m².",
"options": [
"2 m²",
"20 m²",
"0.2 m²",
"20,000,000 m²"
],
"answer": 2,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 2,000 ÷ 10,000 = 0.2 m²."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 50 miles at an average speed of 25 mph. How long does the journey take?",
"options": [
"2 h 30 min",
"3 h",
"2 h 15 min",
"2 h"
],
"answer": 3,
"explain": "Time = distance ÷ speed = 50 ÷ 25 = 2 hours."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 3.5 m into cm.",
"options": [
"35 cm",
"0.035 cm",
"350 cm",
"3,500 cm"
],
"answer": 2,
"explain": "1 m = 100 cm. Going from m to cm (a smaller unit) you multiply by 100: 3.5 × 100 = 350 cm."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 3.1 hours in hours and minutes.",
"options": [
"3 h 10 min",
"3 h 54 min",
"3 h 6 min",
"3 h 1 min"
],
"answer": 2,
"explain": "0.1 of an hour = 0.1 × 60 = 6 minutes, so 3.1 hours = 3 h 6 min. It is not 3 h 10 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Density",
"tier": "F",
"q": "A block has a density of 2.7 g/cm³ and a volume of 178 cm³. Find its mass.",
"options": [
"65.93 g",
"4,806 g",
"480.6 g",
"180.7 g"
],
"answer": 2,
"explain": "Mass = density × volume = 2.7 × 178 = 480.6 g."
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 20.6 cm, correct to 1 decimal place. What is the upper bound?",
"options": [
"20.55 cm",
"20.7 cm",
"20.65 cm",
"20.64 cm"
],
"answer": 2,
"explain": "Half of 0.1 is 0.05. Upper bound = 20.6 + 0.05 = 20.65 cm."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 36 m. Find its area, to 1 decimal place.",
"options": [
"226.2 m²",
"1,017.9 m²",
"4,071.5 m²",
"113.1 m²"
],
"answer": 1,
"explain": "First halve the diameter: r = 36 ÷ 2 = 18. Area = πr² = π × 18² = 1,017.9 m² (1 d.p.)."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 15 km in 45 minutes. What is the average speed?",
"options": [
"0.3 km/h",
"33.3 km/h",
"11.2 km/h",
"20 km/h"
],
"answer": 3,
"explain": "Speed = distance ÷ time. Write the time in hours: 45 minutes = 0.75 hours. 15 ÷ 0.75 = 20 km/h."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 506.9 mm into m.",
"options": [
"5.069 m",
"0.05069 m",
"506,900 m",
"0.5069 m"
],
"answer": 3,
"explain": "1 m = 1,000 mm. Going from mm to m (a bigger unit) you divide by 1,000: 506.9 ÷ 1,000 = 0.5069 m."
},
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a density of 0.9 g/cm³ and a mass of 43.2 g. Find its volume.",
"options": [
"48 cm³",
"38.88 cm³",
"480 cm³",
"0.0208 cm³"
],
"answer": 0,
"explain": "Volume = mass ÷ density = 43.2 ÷ 0.9 = 48 cm³."
}
],
[
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 105.9 ml into cl.",
"options": [
"105.9 cl",
"1.059 cl",
"10.59 cl",
"1,059 cl"
],
"answer": 2,
"explain": "1 cl = 10 ml. Going from ml to cl (a bigger unit) you divide by 10: 105.9 ÷ 10 = 10.59 cl."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 4 m by 9 m by 7 m. Find its volume.",
"options": [
"127 m³",
"252 m³",
"36 m³",
"254 m³"
],
"answer": 1,
"explain": "Volume of a cuboid = length × width × height = 4 × 9 × 7 = 252 m³."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 110 miles in 2 hours 45 minutes. What is the average speed?",
"options": [
"302.5 mph",
"44.9 mph",
"0.7 mph",
"40 mph"
],
"answer": 3,
"explain": "Speed = distance ÷ time. Write the time in hours: 2 hours 45 minutes = 2.75 hours. 110 ÷ 2.75 = 40 mph."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 11.4 hours in hours and minutes.",
"options": [
"11 h 24 min",
"11 h 36 min",
"11 h 4 min",
"11 h 40 min"
],
"answer": 0,
"explain": "0.4 of an hour = 0.4 × 60 = 24 minutes, so 11.4 hours = 11 h 24 min. It is not 11 h 40 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of P from Q is 264°. What is the bearing of Q from P?",
"options": [
"264°",
"096°",
"084°",
"276°"
],
"answer": 2,
"explain": "A back bearing is 180° different. 264° is more than 180°, so subtract 180°: 084°."
}
],
[
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 5 litres per minute. How long does it take to fill 165 litres?",
"options": [
"33 minutes",
"160 minutes",
"0.03 minutes",
"825 minutes"
],
"answer": 0,
"explain": "Time = amount ÷ rate = 165 ÷ 5 = 33 minutes."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 250.2 kg into tonnes.",
"options": [
"0.2502 tonnes",
"250,200 tonnes",
"0.02502 tonnes",
"2.502 tonnes"
],
"answer": 0,
"explain": "1 tonne = 1,000 kg. Going from kg to tonnes (a bigger unit) you divide by 1,000: 250.2 ÷ 1,000 = 0.2502 tonnes."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 19 cm, a perpendicular height of 3 cm and a sloping side of 8 cm. Find its area.",
"options": [
"57 cm²",
"54 cm²",
"152 cm²",
"28.5 cm²"
],
"answer": 0,
"explain": "Area of a parallelogram = base × perpendicular height = 19 × 3 = 57 cm². The sloping side is not needed."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "A tank holds 11 m³ of water. How many litres is this?",
"options": [
"11,000 litres",
"0.011 litres",
"1,100 litres",
"11,000,000 litres"
],
"answer": 0,
"explain": "1 m³ = 1,000,000 cm³ and 1 litre = 1000 cm³, so 1 m³ = 1000 litres. 11 × 1000 = 11,000 litres."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 17 mm. Find its circumference, to 1 decimal place.",
"options": [
"106.8 mm",
"907.9 mm",
"213.6 mm",
"53.4 mm"
],
"answer": 0,
"explain": "Circumference = 2πr (or πd) = 2 × π × 17 = 106.8 mm (1 d.p.)."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 22.5 miles at an average speed of 30 mph. How long does the journey take?",
"options": [
"45 min",
"30 min",
"0 h 75 min",
"1 h 45 min"
],
"answer": 0,
"explain": "Time = distance ÷ speed = 22.5 ÷ 30 = 0.75 hours. 0.75 hours × 60 = 45 minutes, so the time is 45 min."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 09:25 and arrives at 12:40. How long is this?",
"options": [
"3 h 15 min",
"3 h 5 min",
"2 h 15 min",
"4 h 15 min"
],
"answer": 0,
"explain": "Count on from 09:25: up to the next whole hour, then whole hours, then the minutes to 12:40. The total is 3 h 15 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Density",
"tier": "F",
"q": "A stone has a density of 7.8 g/cm³ and a volume of 123 cm³. Find its mass.",
"options": [
"9,594 g",
"959.4 g",
"15.77 g",
"130.8 g"
],
"answer": 1,
"explain": "Mass = density × volume = 7.8 × 123 = 959.4 g."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 1,740 N/m² acts on an area of 1.5 m². Find the force.",
"options": [
"26,100 N",
"2,610 N",
"1,160 N",
"1,741.5 N"
],
"answer": 1,
"explain": "Force = pressure × area = 1,740 × 1.5 = 2,610 N."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 69 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"4,830.25 cm²",
"4,761 cm²",
"4,692.25 cm²",
"4,760.5 cm²"
],
"answer": 2,
"explain": "Lower bound of the side = 69 − 0.5 = 68.5 cm. Lower bound area = 68.5² = 4,692.25 cm²."
}
],
[
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 3,248 cm³?",
"options": [
"3.248 litres",
"32.48 litres",
"324.8 litres",
"3,248,000 litres"
],
"answer": 0,
"explain": "1 litre = 1000 cm³, so divide by 1000: 3,248 ÷ 1000 = 3.248 litres."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 5.6 cm into mm.",
"options": [
"0.56 mm",
"56 mm",
"5.6 mm",
"560 mm"
],
"answer": 1,
"explain": "1 cm = 10 mm. Going from cm to mm (a smaller unit) you multiply by 10: 5.6 × 10 = 56 mm."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a density of 8.9 g/cm³ and a mass of 774.3 g. Find its volume.",
"options": [
"87 cm³",
"6,891.27 cm³",
"870 cm³",
"0.0115 cm³"
],
"answer": 0,
"explain": "Volume = mass ÷ density = 774.3 ÷ 8.9 = 87 cm³."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 15 m, a perpendicular height of 10 m and a sloping side of 15 m. Find its area.",
"options": [
"225 m²",
"75 m²",
"150 m²",
"60 m²"
],
"answer": 2,
"explain": "Area of a parallelogram = base × perpendicular height = 15 × 10 = 150 m². The sloping side is not needed."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 13 cm by 10 cm by 8 cm. Find its volume.",
"options": [
"314 cm³",
"628 cm³",
"130 cm³",
"1,040 cm³"
],
"answer": 3,
"explain": "Volume of a cuboid = length × width × height = 13 × 10 × 8 = 1,040 cm³."
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 gallon ≈ 4.5 litres. Convert 16 gallons into litres.",
"options": [
"20.5 litres",
"3.56 litres",
"72 litres",
"720 litres"
],
"answer": 2,
"explain": "Multiply by 4.5: 16 × 4.5 = 72 litres."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 07:10 and arrives at 12:25. How long is this?",
"options": [
"5 h 15 min",
"4 h 15 min",
"6 h 15 min",
"5 h 5 min"
],
"answer": 0,
"explain": "Count on from 07:10: up to the next whole hour, then whole hours, then the minutes to 12:25. The total is 5 h 15 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 3 cm by 5 cm by 8 cm. Find its volume.",
"options": [
"158 cm³",
"15 cm³",
"79 cm³",
"120 cm³"
],
"answer": 3,
"explain": "Volume of a cuboid = length × width × height = 3 × 5 × 8 = 120 cm³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 7,063 cm into m.",
"options": [
"7.063 m",
"706.3 m",
"70.63 m",
"706,300 m"
],
"answer": 2,
"explain": "1 m = 100 cm. Going from cm to m (a bigger unit) you divide by 100: 7,063 ÷ 100 = 70.63 m."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 65 mph for 2 hours. How far does it travel?",
"options": [
"130 miles",
"32.5 miles",
"195 miles",
"7,800 miles"
],
"answer": 0,
"explain": "Distance = speed × time. 65 × 2 = 130 miles."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 250,000. Two places are 20 km apart in real life. How far apart are they on the map?",
"options": [
"800 cm",
"8 cm",
"0.8 cm",
"80 cm"
],
"answer": 1,
"explain": "20 km = 2,000,000 cm. Map distance = 2,000,000 ÷ 250,000 = 8 cm."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 14:30 and finishes at 18:15. How long is this?",
"options": [
"3 h 35 min",
"4 h 45 min",
"2 h 45 min",
"3 h 45 min"
],
"answer": 3,
"explain": "Count on from 14:30: up to the next whole hour, then whole hours, then the minutes to 18:15. The total is 3 h 45 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 6 cm and 14 cm, and a perpendicular height of 12 cm. Find its area.",
"options": [
"240 cm²",
"504 cm²",
"48 cm²",
"120 cm²"
],
"answer": 3,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (6 + 14) × 12 = ½ × 20 × 12 = 120 cm²."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 8.6 km into m.",
"options": [
"0.0086 m",
"86,000 m",
"860 m",
"8,600 m"
],
"answer": 3,
"explain": "1 km = 1,000 m. Going from km to m (a smaller unit) you multiply by 1,000: 8.6 × 1,000 = 8,600 m."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 2,880 N acts on an area of 1.5 m². Find the pressure.",
"options": [
"1,920 N/m²",
"960 N/m²",
"0.0005 N/m²",
"4,320 N/m²"
],
"answer": 0,
"explain": "Pressure = force ÷ area = 2,880 ÷ 1.5 = 1,920 N/m²."
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 4.1 cm into mm.",
"options": [
"41 mm",
"0.41 mm",
"410 mm",
"4.1 mm"
],
"answer": 0,
"explain": "1 cm = 10 mm. Going from cm to mm (a smaller unit) you multiply by 10: 4.1 × 10 = 41 mm."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 5,600 cm² into m².",
"options": [
"0.56 m²",
"56,000,000 m²",
"56 m²",
"5.6 m²"
],
"answer": 0,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 5,600 ÷ 10,000 = 0.56 m²."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 1.4 m³ into cm³.",
"options": [
"140 cm³",
"14,000 cm³",
"1,400,000 cm³",
"1,400 cm³"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 1.4 × 1,000,000 = 1,400,000 cm³."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of Y from P is 175°. What is the bearing of P from Y?",
"options": [
"355°",
"175°",
"005°",
"185°"
],
"answer": 0,
"explain": "A back bearing is 180° different. 175° is less than 180°, so add 180°: 355°."
},
{
"topic": "Density",
"tier": "F",
"q": "A bar has a density of 0.5 g/cm³ and a mass of 58.5 g. Find its volume.",
"options": [
"1,170 cm³",
"117 cm³",
"29.25 cm³",
"0.0085 cm³"
],
"answer": 1,
"explain": "Volume = mass ÷ density = 58.5 ÷ 0.5 = 117 cm³."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 15:50 and arrives at 20:40. How long is this?",
"options": [
"4 h 50 min",
"4 h 40 min",
"5 h 50 min",
"3 h 50 min"
],
"answer": 0,
"explain": "Count on from 15:50: up to the next whole hour, then whole hours, then the minutes to 20:40. The total is 4 h 50 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 6.8 litres into ml.",
"options": [
"680 ml",
"0.0068 ml",
"6,800 ml",
"68,000 ml"
],
"answer": 2,
"explain": "1 litre = 1,000 ml. Going from litres to ml (a smaller unit) you multiply by 1,000: 6.8 × 1,000 = 6,800 ml."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 1,900 g, correct to the nearest 100. What is the upper bound?",
"options": [
"1,850 g",
"1,940 g",
"2,000 g",
"1,950 g"
],
"answer": 3,
"explain": "Half of 100 is 50. Upper bound = 1,900 + 50 = 1,950 g."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 60 km in 2 hours. What is the average speed?",
"options": [
"120 km/h",
"30 km/h",
"20 km/h",
"0.5 km/h"
],
"answer": 1,
"explain": "Speed = distance ÷ time. 60 ÷ 2 = 30 km/h."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 4.9 hours in hours and minutes.",
"options": [
"4 h 9 min",
"4 h 90 min",
"4 h 6 min",
"4 h 54 min"
],
"answer": 3,
"explain": "0.9 of an hour = 0.9 × 60 = 54 minutes, so 4.9 hours = 4 h 54 min. It is not 4 h 90 min, because an hour has 60 minutes, not 100."
}
],
[
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 416.4 cl into litres.",
"options": [
"41,640 litres",
"41.64 litres",
"4.164 litres",
"0.4164 litres"
],
"answer": 2,
"explain": "1 litre = 100 cl. Going from cl to litres (a bigger unit) you divide by 100: 416.4 ÷ 100 = 4.164 litres."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 220 miles in 4 hours. What is the average speed?",
"options": [
"55 mph",
"0.9 mph",
"880 mph",
"44 mph"
],
"answer": 0,
"explain": "Speed = distance ÷ time. 220 ÷ 4 = 55 mph."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 4 cm by 5 cm by 5 cm. Find its total surface area.",
"options": [
"120 cm²",
"100 cm²",
"65 cm²",
"130 cm²"
],
"answer": 3,
"explain": "A cuboid has 3 pairs of faces: 2 × (4×5) + 2 × (4×5) + 2 × (5×5) = 2 × (20 + 20 + 25) = 130 cm²."
},
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a density of 1.5 g/cm³ and a mass of 117 g. Find its volume.",
"options": [
"780 cm³",
"0.0128 cm³",
"175.5 cm³",
"78 cm³"
],
"answer": 3,
"explain": "Volume = mass ÷ density = 117 ÷ 1.5 = 78 cm³."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 72 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"286 cm",
"289.6 cm",
"288 cm",
"290 cm"
],
"answer": 3,
"explain": "Upper bound of the side = 72 + 0.5 = 72.5 cm. Upper bound perimeter = 4 × 72.5 = 290 cm."
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 15 cm. Find its circumference, to 1 decimal place.",
"options": [
"94.2 cm",
"47.1 cm",
"188.5 cm",
"706.9 cm"
],
"answer": 0,
"explain": "Circumference = 2πr (or πd) = 2 × π × 15 = 94.2 cm (1 d.p.)."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 25,000. Two towns are 9 cm apart on the map. How far apart are they in real life?",
"options": [
"225 km",
"2.25 km",
"0.225 km",
"22.5 km"
],
"answer": 1,
"explain": "Real distance = 9 × 25,000 = 225,000 cm. Divide by 100 for metres (2,250 m) and by 1000 for km: 2.25 km."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 180 km at an average speed of 80 km/h. How long does the journey take?",
"options": [
"2 h 25 min",
"2 h 30 min",
"2 h 15 min",
"3 h 15 min"
],
"answer": 2,
"explain": "Time = distance ÷ speed = 180 ÷ 80 = 2.25 hours. 0.25 hours × 60 = 15 minutes, so the time is 2 h 15 min."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 5,241 cm³?",
"options": [
"524.1 litres",
"5.241 litres",
"52.41 litres",
"5,241,000 litres"
],
"answer": 1,
"explain": "1 litre = 1000 cm³, so divide by 1000: 5,241 ÷ 1000 = 5.241 litres."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 1,710 kg into tonnes.",
"options": [
"1.71 tonnes",
"17.1 tonnes",
"1,710,000 tonnes",
"0.171 tonnes"
],
"answer": 0,
"explain": "1 tonne = 1,000 kg. Going from kg to tonnes (a bigger unit) you divide by 1,000: 1,710 ÷ 1,000 = 1.71 tonnes."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a density of 3 g/cm³ and a mass of 549 g. Find its volume.",
"options": [
"0.0055 cm³",
"1,647 cm³",
"1,830 cm³",
"183 cm³"
],
"answer": 3,
"explain": "Volume = mass ÷ density = 549 ÷ 3 = 183 cm³."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 15 litres per minute. How long does it take to fill 600 litres?",
"options": [
"9,000 minutes",
"585 minutes",
"40 minutes",
"0.025 minutes"
],
"answer": 2,
"explain": "Time = amount ÷ rate = 600 ÷ 15 = 40 minutes."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 75 m into km.",
"options": [
"0.075 km",
"0.75 km",
"0.0075 km",
"75,000 km"
],
"answer": 0,
"explain": "1 km = 1,000 m. Going from m to km (a bigger unit) you divide by 1,000: 75 ÷ 1,000 = 0.075 km."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 3.5 m³ into cm³.",
"options": [
"3,500 cm³",
"350 cm³",
"35,000 cm³",
"3,500,000 cm³"
],
"answer": 3,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 3.5 × 1,000,000 = 3,500,000 cm³."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 55 km/h for 1 hour 30 minutes. How far does it travel?",
"options": [
"71.5 km",
"4,950 km",
"82.5 km",
"36.7 km"
],
"answer": 2,
"explain": "Distance = speed × time. 1 hour 30 minutes = 1.5 hours, so 55 × 1.5 = 82.5 km."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A bar has a mass of 37 g and a volume of 74 cm³. Find its density.",
"options": [
"2 g/cm³",
"2,738 g/cm³",
"0.5 g/cm³",
"5 g/cm³"
],
"answer": 2,
"explain": "Density = mass ÷ volume = 37 ÷ 74 = 0.5 g/cm³."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 09:50 and arrives at 15:00. How long is this?",
"options": [
"5 h 10 min",
"5 h 50 min",
"4 h 10 min",
"6 h 10 min"
],
"answer": 0,
"explain": "Count on from 09:50: up to the next whole hour, then whole hours, then the minutes to 15:00. The total is 5 h 10 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 7 m, a perpendicular height of 13 m and a sloping side of 14 m. Find its area.",
"options": [
"91 m²",
"98 m²",
"45.5 m²",
"42 m²"
],
"answer": 0,
"explain": "Area of a parallelogram = base × perpendicular height = 7 × 13 = 91 m². The sloping side is not needed."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of Y from Q is 182°. What is the bearing of Q from Y?",
"options": [
"002°",
"178°",
"358°",
"182°"
],
"answer": 0,
"explain": "A back bearing is 180° different. 182° is more than 180°, so subtract 180°: 002°."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 4 times those of the smaller one. The smaller solid has a volume of 19 cm³. Find the volume of the larger solid.",
"options": [
"1,216 cm³",
"76 cm³",
"228 cm³",
"304 cm³"
],
"answer": 0,
"explain": "Length scale factor 4 → volume scale factor 4³ = 64. 19 × 64 = 1,216 cm³."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 64 cm. One side is 26 cm. How long is the other side?",
"options": [
"32 cm",
"6 cm",
"24 cm",
"38 cm"
],
"answer": 1,
"explain": "Two sides of 26 make 52. 64 − 52 = 12, which is shared between the other two sides: 12 ÷ 2 = 6 cm."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a density of 0.5 g/cm³ and a mass of 13 g. Find its volume.",
"options": [
"260 cm³",
"0.0385 cm³",
"26 cm³",
"6.5 cm³"
],
"answer": 2,
"explain": "Volume = mass ÷ density = 13 ÷ 0.5 = 26 cm³."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 5 cm and 20 cm, and a perpendicular height of 2 cm. Find its area.",
"options": [
"25 cm²",
"15 cm²",
"50 cm²",
"100 cm²"
],
"answer": 0,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (5 + 20) × 2 = ½ × 25 × 2 = 25 cm²."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 30 tonnes into kg.",
"options": [
"300,000 kg",
"3,000 kg",
"30,000 kg",
"0.03 kg"
],
"answer": 2,
"explain": "1 tonne = 1,000 kg. Going from tonnes to kg (a smaller unit) you multiply by 1,000: 30 × 1,000 = 30,000 kg."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 3 times those of the smaller one. The smaller shape has an area of 21 cm². Find the area of the larger shape.",
"options": [
"126 cm²",
"63 cm²",
"189 cm²",
"567 cm²"
],
"answer": 2,
"explain": "Length scale factor 3 → area scale factor 3² = 9. 21 × 9 = 189 cm²."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 9 m, a perpendicular height of 14 m and a sloping side of 16 m. Find its area.",
"options": [
"50 m²",
"63 m²",
"144 m²",
"126 m²"
],
"answer": 3,
"explain": "Area of a parallelogram = base × perpendicular height = 9 × 14 = 126 m². The sloping side is not needed."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 7 hours 18 minutes as a decimal number of hours.",
"options": [
"7.18 hours",
"4.38 hours",
"7.3 hours",
"7.7 hours"
],
"answer": 2,
"explain": "18 minutes = 18 ÷ 60 = 0.3 of an hour, so 7 h 18 min = 7.3 hours."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 10 cm and a height of 15 cm. Find its volume, to 1 decimal place.",
"options": [
"18,849.6 cm³",
"471.2 cm³",
"942.5 cm³",
"4,712.4 cm³"
],
"answer": 3,
"explain": "Volume of a cylinder = πr²h = π × 10² × 15 = π × 100 × 15 = 4,712.4 cm³ (1 d.p.)."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "A tank holds 4 m³ of water. How many litres is this?",
"options": [
"0.004 litres",
"4,000 litres",
"4,000,000 litres",
"400 litres"
],
"answer": 1,
"explain": "1 m³ = 1,000,000 cm³ and 1 litre = 1000 cm³, so 1 m³ = 1000 litres. 4 × 1000 = 4,000 litres."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 1,120 N/m² acts on an area of 2.5 m². Find the force.",
"options": [
"1,122.5 N",
"2,800 N",
"28,000 N",
"448 N"
],
"answer": 1,
"explain": "Force = pressure × area = 1,120 × 2.5 = 2,800 N."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 75 mph for 4 hours. How far does it travel?",
"options": [
"300 miles",
"18,000 miles",
"18.8 miles",
"375 miles"
],
"answer": 0,
"explain": "Distance = speed × time. 75 × 4 = 300 miles."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 7 m and 9 m, and a perpendicular height of 11 m. Find its area.",
"options": [
"11 m²",
"346.5 m²",
"176 m²",
"88 m²"
],
"answer": 3,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (7 + 9) × 11 = ½ × 16 × 11 = 88 m²."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 11 tonnes into kg.",
"options": [
"0.011 kg",
"1,100 kg",
"11,000 kg",
"110,000 kg"
],
"answer": 2,
"explain": "1 tonne = 1,000 kg. Going from tonnes to kg (a smaller unit) you multiply by 1,000: 11 × 1,000 = 11,000 kg."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of B from X is 114°. What is the bearing of X from B?",
"options": [
"246°",
"066°",
"294°",
"114°"
],
"answer": 2,
"explain": "A back bearing is 180° different. 114° is less than 180°, so add 180°: 294°."
},
{
"topic": "Density",
"tier": "F",
"q": "A stone has a mass of 38.5 g and a volume of 77 cm³. Find its density.",
"options": [
"2 g/cm³",
"0.5 g/cm³",
"2,964.5 g/cm³",
"5 g/cm³"
],
"answer": 1,
"explain": "Density = mass ÷ volume = 38.5 ÷ 77 = 0.5 g/cm³."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 3 m and 11 m, and a perpendicular height of 14 m. Find its area.",
"options": [
"98 m²",
"196 m²",
"56 m²",
"231 m²"
],
"answer": 0,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (3 + 11) × 14 = ½ × 14 × 14 = 98 m²."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 2.71 litres into cl.",
"options": [
"271 cl",
"2,710 cl",
"27.1 cl",
"0.0271 cl"
],
"answer": 0,
"explain": "1 litre = 100 cl. Going from litres to cl (a smaller unit) you multiply by 100: 2.71 × 100 = 271 cl."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 6 hours 39 minutes as a decimal number of hours.",
"options": [
"6.35 hours",
"3.99 hours",
"6.65 hours",
"6.39 hours"
],
"answer": 2,
"explain": "39 minutes = 39 ÷ 60 = 0.65 of an hour, so 6 h 39 min = 6.65 hours."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 7 cm by 10 cm by 3 cm. Find its volume.",
"options": [
"242 cm³",
"210 cm³",
"121 cm³",
"70 cm³"
],
"answer": 1,
"explain": "Volume of a cuboid = length × width × height = 7 × 10 × 3 = 210 cm³."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 13 cm long and 9 cm wide. What is its perimeter?",
"options": [
"35 cm",
"117 cm",
"22 cm",
"44 cm"
],
"answer": 3,
"explain": "Perimeter is the distance all the way round: 13 + 9 + 13 + 9 = 44 cm."
}
],
[
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 7 m by 4 m by 3 m. Find its volume.",
"options": [
"122 m³",
"61 m³",
"28 m³",
"84 m³"
],
"answer": 3,
"explain": "Volume of a cuboid = length × width × height = 7 × 4 × 3 = 84 m³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 15 m into mm.",
"options": [
"15,000 mm",
"0.015 mm",
"1,500 mm",
"150,000 mm"
],
"answer": 0,
"explain": "1 m = 1,000 mm. Going from m to mm (a smaller unit) you multiply by 1,000: 15 × 1,000 = 15,000 mm."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 20 cm, a perpendicular height of 10 cm and a sloping side of 11 cm. Find its area.",
"options": [
"200 cm²",
"220 cm²",
"62 cm²",
"100 cm²"
],
"answer": 0,
"explain": "Area of a parallelogram = base × perpendicular height = 20 × 10 = 200 cm². The sloping side is not needed."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 4 m² into cm².",
"options": [
"400 cm²",
"4,000 cm²",
"40,000 cm²",
"0.0004 cm²"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 4 × 10,000 = 40,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 35 mph for 2 hours 30 minutes. How far does it travel?",
"options": [
"87.5 miles",
"5,250 miles",
"14 miles",
"80.5 miles"
],
"answer": 0,
"explain": "Distance = speed × time. 2 hours 30 minutes = 2.5 hours, so 35 × 2.5 = 87.5 miles."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 130 km at an average speed of 65 km/h. How long does the journey take?",
"options": [
"2 h",
"2 h 15 min",
"3 h",
"2 h 30 min"
],
"answer": 0,
"explain": "Time = distance ÷ speed = 130 ÷ 65 = 2 hours."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 12:25 and arrives at 14:30. How long is this?",
"options": [
"1 h 55 min",
"1 h 5 min",
"2 h 5 min",
"3 h 5 min"
],
"answer": 2,
"explain": "Count on from 12:25: up to the next whole hour, then whole hours, then the minutes to 14:30. The total is 2 h 5 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 2 m into cm.",
"options": [
"200 cm",
"2,000 cm",
"20 cm",
"0.02 cm"
],
"answer": 0,
"explain": "1 m = 100 cm. Going from m to cm (a smaller unit) you multiply by 100: 2 × 100 = 200 cm."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 66 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"264 cm",
"265.6 cm",
"266 cm",
"262 cm"
],
"answer": 2,
"explain": "Upper bound of the side = 66 + 0.5 = 66.5 cm. Upper bound perimeter = 4 × 66.5 = 266 cm."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 2 times those of the smaller one. The smaller solid has a volume of 22 cm³. Find the volume of the larger solid.",
"options": [
"88 cm³",
"132 cm³",
"176 cm³",
"44 cm³"
],
"answer": 2,
"explain": "Length scale factor 2 → volume scale factor 2³ = 8. 22 × 8 = 176 cm³."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 8 cm and 9 cm, and a perpendicular height of 6 cm. Find its area.",
"options": [
"102 cm²",
"3 cm²",
"51 cm²",
"216 cm²"
],
"answer": 2,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (8 + 9) × 6 = ½ × 17 × 6 = 51 cm²."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 09:00 and arrives at 14:20. How long is this?",
"options": [
"4 h 20 min",
"6 h 20 min",
"5 h 20 min",
"5 h 10 min"
],
"answer": 2,
"explain": "Count on from 09:00: up to the next whole hour, then whole hours, then the minutes to 14:20. The total is 5 h 20 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 10 m into mm.",
"options": [
"10,000 mm",
"100,000 mm",
"0.01 mm",
"1,000 mm"
],
"answer": 0,
"explain": "1 m = 1,000 mm. Going from m to mm (a smaller unit) you multiply by 1,000: 10 × 1,000 = 10,000 mm."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 3,000 cm² into m².",
"options": [
"0.3 m²",
"30 m²",
"30,000,000 m²",
"3 m²"
],
"answer": 0,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 3,000 ÷ 10,000 = 0.3 m²."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 50 km/h for 2 hours 15 minutes. How far does it travel?",
"options": [
"112.5 km",
"107.5 km",
"22.2 km",
"6,750 km"
],
"answer": 0,
"explain": "Distance = speed × time. 2 hours 15 minutes = 2.25 hours, so 50 × 2.25 = 112.5 km."
}
],
[
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 9 cm and a height of 11 cm. Find its volume, to 1 decimal place.",
"options": [
"622 cm³",
"2,799.2 cm³",
"11,196.6 cm³",
"311 cm³"
],
"answer": 1,
"explain": "Volume of a cylinder = πr²h = π × 9² × 11 = π × 81 × 11 = 2,799.2 cm³ (1 d.p.)."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 10:10 and arrives at 13:15. How long is this?",
"options": [
"2 h 55 min",
"2 h 5 min",
"4 h 5 min",
"3 h 5 min"
],
"answer": 3,
"explain": "Count on from 10:10: up to the next whole hour, then whole hours, then the minutes to 13:15. The total is 3 h 5 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 3.9 m³ into cm³.",
"options": [
"390 cm³",
"3,900 cm³",
"3,900,000 cm³",
"39,000 cm³"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 3.9 × 1,000,000 = 3,900,000 cm³."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 30 km at an average speed of 60 km/h. How long does the journey take?",
"options": [
"1 h 30 min",
"45 min",
"30 min",
"0 h 50 min"
],
"answer": 2,
"explain": "Time = distance ÷ speed = 30 ÷ 60 = 0.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 30 min."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 8 hours 36 minutes as a decimal number of hours.",
"options": [
"8.6 hours",
"8.36 hours",
"5.16 hours",
"8.4 hours"
],
"answer": 0,
"explain": "36 minutes = 36 ÷ 60 = 0.6 of an hour, so 8 h 36 min = 8.6 hours."
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 4,500 g, correct to the nearest 100. What is the lower bound?",
"options": [
"4,450 g",
"4,400 g",
"4,490 g",
"4,550 g"
],
"answer": 0,
"explain": "Half of 100 is 50. Lower bound = 4,500 − 50 = 4,450 g."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 09:00 and finishes at 15:25. How long is this?",
"options": [
"6 h 15 min",
"6 h 25 min",
"7 h 25 min",
"5 h 25 min"
],
"answer": 1,
"explain": "Count on from 09:00: up to the next whole hour, then whole hours, then the minutes to 15:25. The total is 6 h 25 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 8,030 ml into cl.",
"options": [
"803 cl",
"80.3 cl",
"8,030 cl",
"80,300 cl"
],
"answer": 0,
"explain": "1 cl = 10 ml. Going from ml to cl (a bigger unit) you divide by 10: 8,030 ÷ 10 = 803 cl."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 gallon ≈ 4.5 litres. Convert 32 gallons into litres.",
"options": [
"7.11 litres",
"144 litres",
"36.5 litres",
"1,440 litres"
],
"answer": 1,
"explain": "Multiply by 4.5: 32 × 4.5 = 144 litres."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of Q from A is 344°. What is the bearing of A from Q?",
"options": [
"164°",
"016°",
"344°",
"196°"
],
"answer": 0,
"explain": "A back bearing is 180° different. 344° is more than 180°, so subtract 180°: 164°."
}
],
[
{
"topic": "Area units",
"tier": "F",
"q": "Convert 4.3 m² into cm².",
"options": [
"430 cm²",
"43,000 cm²",
"0.00043 cm²",
"4,300 cm²"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 4.3 × 10,000 = 43,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 13 m and a perpendicular height of 16 m. Find its area.",
"options": [
"104 m²",
"208 m²",
"29 m²",
"52 m²"
],
"answer": 0,
"explain": "Area of a triangle = ½ × base × height = ½ × 13 × 16 = 104 m²."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 27 cm long and 13 cm wide. What is its perimeter?",
"options": [
"67 cm",
"351 cm",
"80 cm",
"40 cm"
],
"answer": 2,
"explain": "Perimeter is the distance all the way round: 27 + 13 + 27 + 13 = 80 cm."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 6 m and height 5 m. The prism is 22 m long. Find its volume.",
"options": [
"121 m³",
"15 m³",
"660 m³",
"330 m³"
],
"answer": 3,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 6 × 5 = 15. 15 × 22 = 330 m³."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 54 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"214 cm",
"216 cm",
"217.6 cm",
"218 cm"
],
"answer": 3,
"explain": "Upper bound of the side = 54 + 0.5 = 54.5 cm. Upper bound perimeter = 4 × 54.5 = 218 cm."
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 8 m. Find its circumference, to 1 decimal place.",
"options": [
"25.1 m",
"100.5 m",
"50.3 m",
"201.1 m"
],
"answer": 2,
"explain": "Circumference = 2πr (or πd) = 2 × π × 8 = 50.3 m (1 d.p.)."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 82.5 km in 2 hours 45 minutes. What is the average speed?",
"options": [
"226.9 km/h",
"30 km/h",
"33.7 km/h",
"0.5 km/h"
],
"answer": 1,
"explain": "Speed = distance ÷ time. Write the time in hours: 2 hours 45 minutes = 2.75 hours. 82.5 ÷ 2.75 = 30 km/h."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "A tank holds 5.5 m³ of water. How many litres is this?",
"options": [
"5,500 litres",
"0.0055 litres",
"5,500,000 litres",
"550 litres"
],
"answer": 0,
"explain": "1 m³ = 1,000,000 cm³ and 1 litre = 1000 cm³, so 1 m³ = 1000 litres. 5.5 × 1000 = 5,500 litres."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 76 m. One side is 18 m. How long is the other side?",
"options": [
"38 m",
"20 m",
"80 m",
"58 m"
],
"answer": 1,
"explain": "Two sides of 18 make 36. 76 − 36 = 40, which is shared between the other two sides: 40 ÷ 2 = 20 m."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 45 miles into kilometres.",
"options": [
"72 km",
"7.2 km",
"360 km",
"28.125 km"
],
"answer": 0,
"explain": "45 ÷ 5 = 9 lots of 5 miles. 9 × 8 = 72 km."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 15 cm and a perpendicular height of 3 cm. Find its area.",
"options": [
"45 cm²",
"11.25 cm²",
"22.5 cm²",
"18 cm²"
],
"answer": 2,
"explain": "Area of a triangle = ½ × base × height = ½ × 15 × 3 = 22.5 cm²."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 700 g, correct to the nearest 100. What is the upper bound?",
"options": [
"650 g",
"750 g",
"800 g",
"740 g"
],
"answer": 1,
"explain": "Half of 100 is 50. Upper bound = 700 + 50 = 750 g."
},
{
"topic": "Density",
"tier": "F",
"q": "A bar has a density of 0.8 g/cm³ and a mass of 93.6 g. Find its volume.",
"options": [
"74.88 cm³",
"0.0085 cm³",
"117 cm³",
"1,170 cm³"
],
"answer": 2,
"explain": "Volume = mass ÷ density = 93.6 ÷ 0.8 = 117 cm³."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 10 cm and height 5 cm. The prism is 15 cm long. Find its volume.",
"options": [
"375 cm³",
"750 cm³",
"112.5 cm³",
"25 cm³"
],
"answer": 0,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 10 × 5 = 25. 25 × 15 = 375 cm³."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 2 m/s into km/h.",
"options": [
"7.2 km/h",
"120 km/h",
"0.56 km/h",
"2,000 km/h"
],
"answer": 0,
"explain": "In 1 hour there are 3600 seconds, so 2 m/s = 2 × 3600 = 7,200 m per hour = 7.2 km/h. (Shortcut: × 3.6.)"
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 8.56 m into mm.",
"options": [
"0.00856 mm",
"8,560 mm",
"856 mm",
"85,600 mm"
],
"answer": 1,
"explain": "1 m = 1,000 mm. Going from m to mm (a smaller unit) you multiply by 1,000: 8.56 × 1,000 = 8,560 mm."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 42 m. One side is 12 m. How long is the other side?",
"options": [
"21 m",
"36 m",
"9 m",
"30 m"
],
"answer": 2,
"explain": "Two sides of 12 make 24. 42 − 24 = 18, which is shared between the other two sides: 18 ÷ 2 = 9 m."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 15:35 and ends at 17:15. How long is this?",
"options": [
"40 min",
"1 h 40 min",
"2 h 40 min",
"1 h 30 min"
],
"answer": 1,
"explain": "Count on from 15:35: up to the next whole hour, then whole hours, then the minutes to 17:15. The total is 1 h 40 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 90 miles in 2 hours. What is the average speed?",
"options": [
"180 mph",
"0.8 mph",
"45 mph",
"30 mph"
],
"answer": 2,
"explain": "Speed = distance ÷ time. 90 ÷ 2 = 45 mph."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 inch ≈ 2.5 cm. Convert 29 inches into centimetres.",
"options": [
"725 cm",
"11.6 cm",
"72.5 cm",
"348 cm"
],
"answer": 2,
"explain": "Multiply by 2.5: 29 × 2.5 = 72.5 cm."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 18 m long and 8 m wide. What is its perimeter?",
"options": [
"52 m",
"44 m",
"26 m",
"144 m"
],
"answer": 0,
"explain": "Perimeter is the distance all the way round: 18 + 8 + 18 + 8 = 52 m."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of P from X is 020°. What is the bearing of X from P?",
"options": [
"020°",
"200°",
"160°",
"340°"
],
"answer": 1,
"explain": "A back bearing is 180° different. 020° is less than 180°, so add 180°: 200°."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 3.4 kg, correct to 1 decimal place. What is the lower bound?",
"options": [
"3.3 kg",
"3.35 kg",
"3.45 kg",
"3.39 kg"
],
"answer": 1,
"explain": "Half of 0.1 is 0.05. Lower bound = 3.4 − 0.05 = 3.35 kg."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 3 m² into cm².",
"options": [
"300 cm²",
"3,000 cm²",
"30,000 cm²",
"0.0003 cm²"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 3 × 10,000 = 30,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 4 times those of the smaller one. The smaller solid has a volume of 24 cm³. Find the volume of the larger solid.",
"options": [
"288 cm³",
"1,536 cm³",
"384 cm³",
"96 cm³"
],
"answer": 1,
"explain": "Length scale factor 4 → volume scale factor 4³ = 64. 24 × 64 = 1,536 cm³."
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 202.8 mm into cm.",
"options": [
"2,028 cm",
"202.8 cm",
"20.28 cm",
"2.028 cm"
],
"answer": 2,
"explain": "1 cm = 10 mm. Going from mm to cm (a bigger unit) you divide by 10: 202.8 ÷ 10 = 20.28 cm."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 1 hours 54 minutes as a decimal number of hours.",
"options": [
"1.54 hours",
"1.9 hours",
"1.1 hours",
"1.14 hours"
],
"answer": 1,
"explain": "54 minutes = 54 ÷ 60 = 0.9 of an hour, so 1 h 54 min = 1.9 hours."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 26 cm. Find its area, to 1 decimal place.",
"options": [
"163.4 cm²",
"81.7 cm²",
"2,123.7 cm²",
"530.9 cm²"
],
"answer": 3,
"explain": "First halve the diameter: r = 26 ÷ 2 = 13. Area = πr² = π × 13² = 530.9 cm² (1 d.p.)."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 20 mph for 30 minutes. How far does it travel?",
"options": [
"10 miles",
"40 miles",
"6 miles",
"600 miles"
],
"answer": 0,
"explain": "Distance = speed × time. 30 minutes = 0.5 hours, so 20 × 0.5 = 10 miles."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 5 times those of the smaller one. The smaller shape has an area of 38 cm². Find the area of the larger shape.",
"options": [
"380 cm²",
"190 cm²",
"950 cm²",
"4,750 cm²"
],
"answer": 2,
"explain": "Length scale factor 5 → area scale factor 5² = 25. 38 × 25 = 950 cm²."
}
],
[
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 17 litres into cl.",
"options": [
"17,000 cl",
"170 cl",
"1,700 cl",
"0.17 cl"
],
"answer": 2,
"explain": "1 litre = 100 cl. Going from litres to cl (a smaller unit) you multiply by 100: 17 × 100 = 1,700 cl."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 180 litre tank in 9 minutes. What is the rate of flow?",
"options": [
"200 litres/min",
"1,620 litres/min",
"20 litres/min",
"0.05 litres/min"
],
"answer": 2,
"explain": "Rate = amount ÷ time = 180 ÷ 9 = 20 litres per minute."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 2,600 cm² into m².",
"options": [
"26,000,000 m²",
"2.6 m²",
"26 m²",
"0.26 m²"
],
"answer": 3,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 2,600 ÷ 10,000 = 0.26 m²."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 50 km/h for 2 hours 30 minutes. How far does it travel?",
"options": [
"7,500 km",
"125 km",
"115 km",
"20 km"
],
"answer": 1,
"explain": "Distance = speed × time. 2 hours 30 minutes = 2.5 hours, so 50 × 2.5 = 125 km."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 1,640 N/m² acts on an area of 2.5 m². Find the force.",
"options": [
"656 N",
"1,642.5 N",
"4,100 N",
"41,000 N"
],
"answer": 2,
"explain": "Force = pressure × area = 1,640 × 2.5 = 4,100 N."
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 5.4 m into cm.",
"options": [
"54 cm",
"540 cm",
"5,400 cm",
"0.054 cm"
],
"answer": 1,
"explain": "1 m = 100 cm. Going from m to cm (a smaller unit) you multiply by 100: 5.4 × 100 = 540 cm."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 3.9 cm, correct to 1 decimal place. What is the upper bound?",
"options": [
"3.85 cm",
"4 cm",
"3.94 cm",
"3.95 cm"
],
"answer": 3,
"explain": "Half of 0.1 is 0.05. Upper bound = 3.9 + 0.05 = 3.95 cm."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 gallon ≈ 4.5 litres. Convert 36 gallons into litres.",
"options": [
"162 litres",
"40.5 litres",
"1,620 litres",
"8 litres"
],
"answer": 0,
"explain": "Multiply by 4.5: 36 × 4.5 = 162 litres."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 8 cm. Find its circumference, to 1 decimal place.",
"options": [
"100.5 cm",
"25.1 cm",
"50.3 cm",
"201.1 cm"
],
"answer": 2,
"explain": "Circumference = 2πr (or πd) = 2 × π × 8 = 50.3 cm (1 d.p.)."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 1,680 N/m² acts on an area of 2 m². Find the force.",
"options": [
"1,682 N",
"33,600 N",
"3,360 N",
"840 N"
],
"answer": 2,
"explain": "Force = pressure × area = 1,680 × 2 = 3,360 N."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 13:40 and arrives at 14:45. How long is this?",
"options": [
"2 h 5 min",
"1 h 25 min",
"1 h 5 min",
"5 min"
],
"answer": 2,
"explain": "Count on from 13:40: up to the next whole hour, then whole hours, then the minutes to 14:45. The total is 1 h 5 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 12.9 hours in hours and minutes.",
"options": [
"12 h 54 min",
"12 h 9 min",
"12 h 6 min",
"12 h 90 min"
],
"answer": 0,
"explain": "0.9 of an hour = 0.9 × 60 = 54 minutes, so 12.9 hours = 12 h 54 min. It is not 12 h 90 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 gallon ≈ 4.5 litres. Convert 11 gallons into litres.",
"options": [
"15.5 litres",
"49.5 litres",
"2.44 litres",
"495 litres"
],
"answer": 1,
"explain": "Multiply by 4.5: 11 × 4.5 = 49.5 litres."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 5 mm. Find its area, to 1 decimal place.",
"options": [
"246.7 mm²",
"314.2 mm²",
"31.4 mm²",
"78.5 mm²"
],
"answer": 3,
"explain": "Area = πr² = π × 5² = π × 25 = 78.5 mm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 5 m³ into cm³.",
"options": [
"5,000,000 cm³",
"5,000 cm³",
"50,000 cm³",
"500 cm³"
],
"answer": 0,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 5 × 1,000,000 = 5,000,000 cm³."
}
],
[
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of A from X is 015°. What is the bearing of X from A?",
"options": [
"345°",
"015°",
"165°",
"195°"
],
"answer": 3,
"explain": "A back bearing is 180° different. 015° is less than 180°, so add 180°: 195°."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 6.3 litres?",
"options": [
"630 cm³",
"6,300 cm³",
"0.0063 cm³",
"6,300,000 cm³"
],
"answer": 1,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 6.3 × 1000 = 6,300 cm³."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 10.2 hours in hours and minutes.",
"options": [
"10 h 20 min",
"10 h 12 min",
"10 h 2 min",
"10 h 48 min"
],
"answer": 1,
"explain": "0.2 of an hour = 0.2 × 60 = 12 minutes, so 10.2 hours = 10 h 12 min. It is not 10 h 20 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 20,000. Two towns are 3.5 cm apart on the map. How far apart are they in real life?",
"options": [
"0.7 km",
"0.07 km",
"7 km",
"70 km"
],
"answer": 0,
"explain": "Real distance = 3.5 × 20,000 = 70,000 cm. Divide by 100 for metres (700 m) and by 1000 for km: 0.7 km."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 0.6 m into mm.",
"options": [
"600 mm",
"60 mm",
"6,000 mm",
"0.0006 mm"
],
"answer": 0,
"explain": "1 m = 1,000 mm. Going from m to mm (a smaller unit) you multiply by 1,000: 0.6 × 1,000 = 600 mm."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 12 cm and 18 cm, and a perpendicular height of 7 cm. Find its area.",
"options": [
"21 cm²",
"210 cm²",
"105 cm²",
"756 cm²"
],
"answer": 2,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (12 + 18) × 7 = ½ × 30 × 7 = 105 cm²."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 228 litre tank in 19 minutes. What is the rate of flow?",
"options": [
"120 litres/min",
"0.083 litres/min",
"4,332 litres/min",
"12 litres/min"
],
"answer": 3,
"explain": "Rate = amount ÷ time = 228 ÷ 19 = 12 litres per minute."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 85 miles into kilometres.",
"options": [
"680 km",
"13.6 km",
"53.125 km",
"136 km"
],
"answer": 3,
"explain": "85 ÷ 5 = 17 lots of 5 miles. 17 × 8 = 136 km."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 243 km/h into m/s.",
"options": [
"4.05 m/s",
"67.5 m/s",
"4,050 m/s",
"874.8 m/s"
],
"answer": 1,
"explain": "243 km/h = 243,000 m in 3600 seconds. 243,000 ÷ 3600 = 67.5 m/s. (Shortcut: ÷ 3.6.)"
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 1,590 N acts on an area of 1.5 m². Find the pressure.",
"options": [
"2,385 N/m²",
"530 N/m²",
"0.0009 N/m²",
"1,060 N/m²"
],
"answer": 3,
"explain": "Pressure = force ÷ area = 1,590 ÷ 1.5 = 1,060 N/m²."
}
],
[
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 5.83 tonnes into kg.",
"options": [
"58,300 kg",
"5,830 kg",
"583 kg",
"0.00583 kg"
],
"answer": 1,
"explain": "1 tonne = 1,000 kg. Going from tonnes to kg (a smaller unit) you multiply by 1,000: 5.83 × 1,000 = 5,830 kg."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 11 m, a perpendicular height of 9 m and a sloping side of 11 m. Find its area.",
"options": [
"99 m²",
"121 m²",
"44 m²",
"49.5 m²"
],
"answer": 0,
"explain": "Area of a parallelogram = base × perpendicular height = 11 × 9 = 99 m². The sloping side is not needed."
},
{
"topic": "Density",
"tier": "F",
"q": "A solid object has a density of 8.9 g/cm³ and a mass of 436.1 g. Find its volume.",
"options": [
"0.0204 cm³",
"49 cm³",
"490 cm³",
"3,881.29 cm³"
],
"answer": 1,
"explain": "Volume = mass ÷ density = 436.1 ÷ 8.9 = 49 cm³."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 8.7 litres?",
"options": [
"8,700,000 cm³",
"870 cm³",
"0.0087 cm³",
"8,700 cm³"
],
"answer": 3,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 8.7 × 1000 = 8,700 cm³."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 28 mm. Find its area, to 1 decimal place.",
"options": [
"615.8 mm²",
"175.9 mm²",
"2,463 mm²",
"88 mm²"
],
"answer": 0,
"explain": "First halve the diameter: r = 28 ÷ 2 = 14. Area = πr² = π × 14² = 615.8 mm² (1 d.p.)."
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 4 mm. Find its area, to 1 decimal place.",
"options": [
"201.1 mm²",
"25.1 mm²",
"50.3 mm²",
"157.9 mm²"
],
"answer": 2,
"explain": "Area = πr² = π × 4² = π × 16 = 50.3 mm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Density",
"tier": "F",
"q": "A bar has a density of 2.7 g/cm³ and a volume of 109 cm³. Find its mass.",
"options": [
"111.7 g",
"294.3 g",
"2,943 g",
"40.37 g"
],
"answer": 1,
"explain": "Mass = density × volume = 2.7 × 109 = 294.3 g."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 44 cm. One side is 12 cm. How long is the other side?",
"options": [
"32 cm",
"10 cm",
"22 cm",
"40 cm"
],
"answer": 1,
"explain": "Two sides of 12 make 24. 44 − 24 = 20, which is shared between the other two sides: 20 ÷ 2 = 10 cm."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 12 m and 16 m, and a perpendicular height of 8 m. Find its area.",
"options": [
"112 m²",
"224 m²",
"768 m²",
"16 m²"
],
"answer": 0,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (12 + 16) × 8 = ½ × 28 × 8 = 112 m²."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 82.5 km in 1 hour 30 minutes. What is the average speed?",
"options": [
"63.5 km/h",
"123.8 km/h",
"0.9 km/h",
"55 km/h"
],
"answer": 3,
"explain": "Speed = distance ÷ time. Write the time in hours: 1 hour 30 minutes = 1.5 hours. 82.5 ÷ 1.5 = 55 km/h."
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 176 km into miles.",
"options": [
"110 miles",
"22 miles",
"281.6 miles",
"880 miles"
],
"answer": 0,
"explain": "176 ÷ 8 = 22 lots of 8 km. 22 × 5 = 110 miles."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 25 litres per minute. How long does it take to fill 825 litres?",
"options": [
"0.03 minutes",
"33 minutes",
"800 minutes",
"20,625 minutes"
],
"answer": 1,
"explain": "Time = amount ÷ rate = 825 ÷ 25 = 33 minutes."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 9.9 hours in hours and minutes.",
"options": [
"9 h 9 min",
"9 h 54 min",
"9 h 90 min",
"9 h 6 min"
],
"answer": 1,
"explain": "0.9 of an hour = 0.9 × 60 = 54 minutes, so 9.9 hours = 9 h 54 min. It is not 9 h 90 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 12 cm and height 7 cm. The prism is 15 cm long. Find its volume.",
"options": [
"142.5 cm³",
"42 cm³",
"1,260 cm³",
"630 cm³"
],
"answer": 3,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 12 × 7 = 42. 42 × 15 = 630 cm³."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 11:40 and finishes at 12:55. How long is this?",
"options": [
"2 h 15 min",
"1 h 5 min",
"15 min",
"1 h 15 min"
],
"answer": 3,
"explain": "Count on from 11:40: up to the next whole hour, then whole hours, then the minutes to 12:55. The total is 1 h 15 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 10 m and a perpendicular height of 4 m. Find its area.",
"options": [
"10 m²",
"40 m²",
"20 m²",
"14 m²"
],
"answer": 2,
"explain": "Area of a triangle = ½ × base × height = ½ × 10 × 4 = 20 m²."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 06:50 and finishes at 10:35. How long is this?",
"options": [
"2 h 45 min",
"3 h 45 min",
"3 h 35 min",
"4 h 45 min"
],
"answer": 1,
"explain": "Count on from 06:50: up to the next whole hour, then whole hours, then the minutes to 10:35. The total is 3 h 45 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 46 cm. One side is 18 cm. How long is the other side?",
"options": [
"28 cm",
"20 cm",
"5 cm",
"23 cm"
],
"answer": 2,
"explain": "Two sides of 18 make 36. 46 − 36 = 10, which is shared between the other two sides: 10 ÷ 2 = 5 cm."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 18 cm. Find its area, to 1 decimal place.",
"options": [
"1,017.9 cm²",
"254.5 cm²",
"56.5 cm²",
"113.1 cm²"
],
"answer": 1,
"explain": "First halve the diameter: r = 18 ÷ 2 = 9. Area = πr² = π × 9² = 254.5 cm² (1 d.p.)."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "A tank holds 5 m³ of water. How many litres is this?",
"options": [
"500 litres",
"5,000 litres",
"0.005 litres",
"5,000,000 litres"
],
"answer": 1,
"explain": "1 m³ = 1,000,000 cm³ and 1 litre = 1000 cm³, so 1 m³ = 1000 litres. 5 × 1000 = 5,000 litres."
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 gallon ≈ 4.5 litres. Convert 2 gallons into litres.",
"options": [
"6.5 litres",
"0.44 litres",
"9 litres",
"90 litres"
],
"answer": 2,
"explain": "Multiply by 4.5: 2 × 4.5 = 9 litres."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 2.8 tonnes into kg.",
"options": [
"280 kg",
"2,800 kg",
"28,000 kg",
"0.0028 kg"
],
"answer": 1,
"explain": "1 tonne = 1,000 kg. Going from tonnes to kg (a smaller unit) you multiply by 1,000: 2.8 × 1,000 = 2,800 kg."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 5 hours 3 minutes as a decimal number of hours.",
"options": [
"5.05 hours",
"5.95 hours",
"3.03 hours",
"5.03 hours"
],
"answer": 0,
"explain": "3 minutes = 3 ÷ 60 = 0.05 of an hour, so 5 h 3 min = 5.05 hours."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 8 m and 16 m, and a perpendicular height of 3 m. Find its area.",
"options": [
"192 m²",
"12 m²",
"72 m²",
"36 m²"
],
"answer": 3,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (8 + 16) × 3 = ½ × 24 × 3 = 36 m²."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 0.4 m³ into cm³.",
"options": [
"4,000 cm³",
"400,000 cm³",
"400 cm³",
"40 cm³"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 0.4 × 1,000,000 = 400,000 cm³."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 70 km at an average speed of 35 km/h. How long does the journey take?",
"options": [
"2 h 30 min",
"3 h",
"2 h 15 min",
"2 h"
],
"answer": 3,
"explain": "Time = distance ÷ speed = 70 ÷ 35 = 2 hours."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 14 cm. Find its circumference, to 1 decimal place.",
"options": [
"88 cm",
"175.9 cm",
"44 cm",
"615.8 cm"
],
"answer": 0,
"explain": "Circumference = 2πr (or πd) = 2 × π × 14 = 88 cm (1 d.p.)."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 inch ≈ 2.5 cm. Convert 12 inches into centimetres.",
"options": [
"4.8 cm",
"300 cm",
"144 cm",
"30 cm"
],
"answer": 3,
"explain": "Multiply by 2.5: 12 × 2.5 = 30 cm."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 4,884 mm into m.",
"options": [
"4,884,000 m",
"4.884 m",
"48.84 m",
"0.4884 m"
],
"answer": 1,
"explain": "1 m = 1,000 mm. Going from mm to m (a bigger unit) you divide by 1,000: 4,884 ÷ 1,000 = 4.884 m."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 5.9 litres?",
"options": [
"5,900 cm³",
"5,900,000 cm³",
"0.0059 cm³",
"590 cm³"
],
"answer": 0,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 5.9 × 1000 = 5,900 cm³."
}
],
[
{
"topic": "Area units",
"tier": "F",
"q": "Convert 5.9 m² into cm².",
"options": [
"0.00059 cm²",
"59,000 cm²",
"5,900 cm²",
"590 cm²"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 5.9 × 10,000 = 59,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 25 m long and 4 m wide. What is its perimeter?",
"options": [
"58 m",
"54 m",
"100 m",
"29 m"
],
"answer": 0,
"explain": "Perimeter is the distance all the way round: 25 + 4 + 25 + 4 = 58 m."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 6 cm and a height of 18 cm. Find its volume, to 1 decimal place.",
"options": [
"8,143 cm³",
"339.3 cm³",
"678.6 cm³",
"2,035.8 cm³"
],
"answer": 3,
"explain": "Volume of a cylinder = πr²h = π × 6² × 18 = π × 36 × 18 = 2,035.8 cm³ (1 d.p.)."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 2.1 m³ into cm³.",
"options": [
"210 cm³",
"21,000 cm³",
"2,100,000 cm³",
"2,100 cm³"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 2.1 × 1,000,000 = 2,100,000 cm³."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 2 times those of the smaller one. The smaller solid has a volume of 14 cm³. Find the volume of the larger solid.",
"options": [
"28 cm³",
"56 cm³",
"112 cm³",
"84 cm³"
],
"answer": 2,
"explain": "Length scale factor 2 → volume scale factor 2³ = 8. 14 × 8 = 112 cm³."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 10:35 and arrives at 15:15. How long is this?",
"options": [
"4 h 40 min",
"5 h 40 min",
"3 h 40 min",
"4 h 30 min"
],
"answer": 0,
"explain": "Count on from 10:35: up to the next whole hour, then whole hours, then the minutes to 15:15. The total is 4 h 40 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 35.2 pounds into kg.",
"options": [
"77.44 kg",
"33 kg",
"1.6 kg",
"16 kg"
],
"answer": 3,
"explain": "Divide by 2.2: 35.2 ÷ 2.2 = 16 kg."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 87 litre tank in 29 minutes. What is the rate of flow?",
"options": [
"0.333 litres/min",
"30 litres/min",
"2,523 litres/min",
"3 litres/min"
],
"answer": 3,
"explain": "Rate = amount ÷ time = 87 ÷ 29 = 3 litres per minute."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 450 cm² into m².",
"options": [
"4,500,000 m²",
"4.5 m²",
"0.045 m²",
"0.45 m²"
],
"answer": 2,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 450 ÷ 10,000 = 0.045 m²."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 18 cm long and 2 cm wide. What is its perimeter?",
"options": [
"36 cm",
"38 cm",
"20 cm",
"40 cm"
],
"answer": 3,
"explain": "Perimeter is the distance all the way round: 18 + 2 + 18 + 2 = 40 cm."
}
],
[
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of B from P is 053°. What is the bearing of P from B?",
"options": [
"053°",
"127°",
"307°",
"233°"
],
"answer": 3,
"explain": "A back bearing is 180° different. 053° is less than 180°, so add 180°: 233°."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a density of 0.8 g/cm³ and a volume of 10 cm³. Find its mass.",
"options": [
"12.5 g",
"8 g",
"10.8 g",
"80 g"
],
"answer": 1,
"explain": "Mass = density × volume = 0.8 × 10 = 8 g."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 35 miles at an average speed of 70 mph. How long does the journey take?",
"options": [
"45 min",
"1 h 30 min",
"0 h 50 min",
"30 min"
],
"answer": 3,
"explain": "Time = distance ÷ speed = 35 ÷ 70 = 0.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 30 min."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 86 cm, correct to the nearest whole number. What is the lower bound?",
"options": [
"85.5 cm",
"86.5 cm",
"85 cm",
"85.9 cm"
],
"answer": 0,
"explain": "Half of 1 is 0.5. Lower bound = 86 − 0.5 = 85.5 cm."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 24 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"600.25 cm²",
"575.5 cm²",
"552.25 cm²",
"576 cm²"
],
"answer": 2,
"explain": "Lower bound of the side = 24 − 0.5 = 23.5 cm. Lower bound area = 23.5² = 552.25 cm²."
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 5.1 cm, correct to 1 decimal place. What is the lower bound?",
"options": [
"5.15 cm",
"5.09 cm",
"5.05 cm",
"5 cm"
],
"answer": 2,
"explain": "Half of 0.1 is 0.05. Lower bound = 5.1 − 0.05 = 5.05 cm."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 07:05 and finishes at 11:40. How long is this?",
"options": [
"5 h 35 min",
"3 h 35 min",
"4 h 25 min",
"4 h 35 min"
],
"answer": 3,
"explain": "Count on from 07:05: up to the next whole hour, then whole hours, then the minutes to 11:40. The total is 4 h 35 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 551.2 kg into tonnes.",
"options": [
"5.512 tonnes",
"0.05512 tonnes",
"0.5512 tonnes",
"551,200 tonnes"
],
"answer": 2,
"explain": "1 tonne = 1,000 kg. Going from kg to tonnes (a bigger unit) you divide by 1,000: 551.2 ÷ 1,000 = 0.5512 tonnes."
},
{
"topic": "Density",
"tier": "F",
"q": "A stone has a density of 2.5 g/cm³ and a mass of 402.5 g. Find its volume.",
"options": [
"0.0062 cm³",
"1,006.25 cm³",
"1,610 cm³",
"161 cm³"
],
"answer": 3,
"explain": "Volume = mass ÷ density = 402.5 ÷ 2.5 = 161 cm³."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 5 m and 9 m, and a perpendicular height of 11 m. Find its area.",
"options": [
"22 m²",
"154 m²",
"247.5 m²",
"77 m²"
],
"answer": 3,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (5 + 9) × 11 = ½ × 14 × 11 = 77 m²."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 20,000. Two towns are 12 cm apart on the map. How far apart are they in real life?",
"options": [
"240 km",
"2.4 km",
"0.24 km",
"24 km"
],
"answer": 1,
"explain": "Real distance = 12 × 20,000 = 240,000 cm. Divide by 100 for metres (2,400 m) and by 1000 for km: 2.4 km."
},
{
"topic": "Density",
"tier": "F",
"q": "A bar has a mass of 135.1 g and a volume of 7 cm³. Find its density.",
"options": [
"0.052 g/cm³",
"193 g/cm³",
"945.7 g/cm³",
"19.3 g/cm³"
],
"answer": 3,
"explain": "Density = mass ÷ volume = 135.1 ÷ 7 = 19.3 g/cm³."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 803 ml into cl.",
"options": [
"8.03 cl",
"80.3 cl",
"8,030 cl",
"803 cl"
],
"answer": 1,
"explain": "1 cl = 10 ml. Going from ml to cl (a bigger unit) you divide by 10: 803 ÷ 10 = 80.3 cl."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 8 cm and a height of 7 cm. Find its volume, to 1 decimal place.",
"options": [
"351.9 cm³",
"1,407.4 cm³",
"5,629.7 cm³",
"175.9 cm³"
],
"answer": 1,
"explain": "Volume of a cylinder = πr²h = π × 8² × 7 = π × 64 × 7 = 1,407.4 cm³ (1 d.p.)."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 7 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"29.6 cm",
"26 cm",
"28 cm",
"30 cm"
],
"answer": 3,
"explain": "Upper bound of the side = 7 + 0.5 = 7.5 cm. Upper bound perimeter = 4 × 7.5 = 30 cm."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 250,000. Two towns are 8 cm apart on the map. How far apart are they in real life?",
"options": [
"20 km",
"2 km",
"2,000 km",
"200 km"
],
"answer": 0,
"explain": "Real distance = 8 × 250,000 = 2,000,000 cm. Divide by 100 for metres (20,000 m) and by 1000 for km: 20 km."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 15 m and a perpendicular height of 18 m. Find its area.",
"options": [
"135 m²",
"270 m²",
"33 m²",
"67.5 m²"
],
"answer": 0,
"explain": "Area of a triangle = ½ × base × height = ½ × 15 × 18 = 135 m²."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 6.3 kg, correct to 1 decimal place. What is the upper bound?",
"options": [
"6.34 kg",
"6.4 kg",
"6.35 kg",
"6.25 kg"
],
"answer": 2,
"explain": "Half of 0.1 is 0.05. Upper bound = 6.3 + 0.05 = 6.35 kg."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 660.4 cl into litres.",
"options": [
"6.604 litres",
"66.04 litres",
"0.6604 litres",
"66,040 litres"
],
"answer": 0,
"explain": "1 litre = 100 cl. Going from cl to litres (a bigger unit) you divide by 100: 660.4 ÷ 100 = 6.604 litres."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 5 times those of the smaller one. The smaller solid has a volume of 3 cm³. Find the volume of the larger solid.",
"options": [
"375 cm³",
"45 cm³",
"15 cm³",
"75 cm³"
],
"answer": 0,
"explain": "Length scale factor 5 → volume scale factor 5³ = 125. 3 × 125 = 375 cm³."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A block has a mass of 546 g and a volume of 182 cm³. Find its density.",
"options": [
"99,372 g/cm³",
"0.333 g/cm³",
"3 g/cm³",
"30 g/cm³"
],
"answer": 2,
"explain": "Density = mass ÷ volume = 546 ÷ 182 = 3 g/cm³."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 12 m by 2 m by 2 m. Find its volume.",
"options": [
"48 m³",
"52 m³",
"24 m³",
"104 m³"
],
"answer": 0,
"explain": "Volume of a cuboid = length × width × height = 12 × 2 × 2 = 48 m³."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 7.1 litres?",
"options": [
"7,100 cm³",
"0.0071 cm³",
"7,100,000 cm³",
"710 cm³"
],
"answer": 0,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 7.1 × 1000 = 7,100 cm³."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 137.5 miles at an average speed of 50 mph. How long does the journey take?",
"options": [
"2 h 30 min",
"3 h 45 min",
"2 h 45 min",
"2 h 75 min"
],
"answer": 2,
"explain": "Time = distance ÷ speed = 137.5 ÷ 50 = 2.75 hours. 0.75 hours × 60 = 45 minutes, so the time is 2 h 45 min."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 6 cm by 8 cm by 9 cm. Find its total surface area.",
"options": [
"348 cm²",
"432 cm²",
"288 cm²",
"174 cm²"
],
"answer": 0,
"explain": "A cuboid has 3 pairs of faces: 2 × (6×8) + 2 × (6×9) + 2 × (8×9) = 2 × (48 + 54 + 72) = 348 cm²."
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 1,417 mm into m.",
"options": [
"0.1417 m",
"1.417 m",
"14.17 m",
"1,417,000 m"
],
"answer": 1,
"explain": "1 m = 1,000 mm. Going from mm to m (a bigger unit) you divide by 1,000: 1,417 ÷ 1,000 = 1.417 m."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 20 litres per minute. How long does it take to fill 500 litres?",
"options": [
"0.04 minutes",
"10,000 minutes",
"25 minutes",
"480 minutes"
],
"answer": 2,
"explain": "Time = amount ÷ rate = 500 ÷ 20 = 25 minutes."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 11:00 and arrives at 16:55. How long is this?",
"options": [
"5 h 55 min",
"6 h 55 min",
"5 h 45 min",
"4 h 55 min"
],
"answer": 0,
"explain": "Count on from 11:00: up to the next whole hour, then whole hours, then the minutes to 16:55. The total is 5 h 55 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 12 m long and 14 m wide. What is its perimeter?",
"options": [
"26 m",
"38 m",
"52 m",
"168 m"
],
"answer": 2,
"explain": "Perimeter is the distance all the way round: 12 + 14 + 12 + 14 = 52 m."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 8 hours 18 minutes as a decimal number of hours.",
"options": [
"8.3 hours",
"4.98 hours",
"8.18 hours",
"8.7 hours"
],
"answer": 0,
"explain": "18 minutes = 18 ÷ 60 = 0.3 of an hour, so 8 h 18 min = 8.3 hours."
}
],
[
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 221.8 g into kg.",
"options": [
"0.2218 kg",
"0.02218 kg",
"221,800 kg",
"2.218 kg"
],
"answer": 0,
"explain": "1 kg = 1,000 g. Going from g to kg (a bigger unit) you divide by 1,000: 221.8 ÷ 1,000 = 0.2218 kg."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of B from P is 311°. What is the bearing of P from B?",
"options": [
"229°",
"131°",
"049°",
"311°"
],
"answer": 1,
"explain": "A back bearing is 180° different. 311° is more than 180°, so subtract 180°: 131°."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 8,900 cm² into m².",
"options": [
"8.9 m²",
"0.89 m²",
"89 m²",
"89,000,000 m²"
],
"answer": 1,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 8,900 ÷ 10,000 = 0.89 m²."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 55 m/s into km/h.",
"options": [
"3,300 km/h",
"15.28 km/h",
"55,000 km/h",
"198 km/h"
],
"answer": 3,
"explain": "In 1 hour there are 3600 seconds, so 55 m/s = 55 × 3600 = 198,000 m per hour = 198 km/h. (Shortcut: × 3.6.)"
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 35 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"1,260.25 cm²",
"1,224.5 cm²",
"1,225 cm²",
"1,190.25 cm²"
],
"answer": 3,
"explain": "Lower bound of the side = 35 − 0.5 = 34.5 cm. Lower bound area = 34.5² = 1,190.25 cm²."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 75 mph for 30 minutes. How far does it travel?",
"options": [
"2,250 miles",
"150 miles",
"22.5 miles",
"37.5 miles"
],
"answer": 3,
"explain": "Distance = speed × time. 30 minutes = 0.5 hours, so 75 × 0.5 = 37.5 miles."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 4.94 litres into cl.",
"options": [
"49.4 cl",
"0.0494 cl",
"4,940 cl",
"494 cl"
],
"answer": 3,
"explain": "1 litre = 100 cl. Going from litres to cl (a smaller unit) you multiply by 100: 4.94 × 100 = 494 cl."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 36 kg into pounds.",
"options": [
"792 pounds",
"38.2 pounds",
"79.2 pounds",
"16.4 pounds"
],
"answer": 2,
"explain": "Multiply by 2.2: 36 × 2.2 = 79.2 pounds."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 10 m long and 2 m wide. What is its perimeter?",
"options": [
"12 m",
"22 m",
"24 m",
"20 m"
],
"answer": 2,
"explain": "Perimeter is the distance all the way round: 10 + 2 + 10 + 2 = 24 m."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 12 m. Find its area, to 1 decimal place.",
"options": [
"1,809.6 m²",
"1,421.2 m²",
"75.4 m²",
"452.4 m²"
],
"answer": 3,
"explain": "Area = πr² = π × 12² = π × 144 = 452.4 m² (1 d.p.). Square the radius before multiplying by π."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 38 cm. One side is 4 cm. How long is the other side?",
"options": [
"15 cm",
"19 cm",
"34 cm",
"60 cm"
],
"answer": 0,
"explain": "Two sides of 4 make 8. 38 − 8 = 30, which is shared between the other two sides: 30 ÷ 2 = 15 cm."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 54 kg into pounds.",
"options": [
"56.2 pounds",
"118.8 pounds",
"24.5 pounds",
"1,188 pounds"
],
"answer": 1,
"explain": "Multiply by 2.2: 54 × 2.2 = 118.8 pounds."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 921 cm³?",
"options": [
"9.21 litres",
"0.921 litres",
"921,000 litres",
"92.1 litres"
],
"answer": 1,
"explain": "1 litre = 1000 cm³, so divide by 1000: 921 ÷ 1000 = 0.921 litres."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 7.49 kg into g.",
"options": [
"749 g",
"74,900 g",
"7,490 g",
"0.00749 g"
],
"answer": 2,
"explain": "1 kg = 1,000 g. Going from kg to g (a smaller unit) you multiply by 1,000: 7.49 × 1,000 = 7,490 g."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A pressure of 60 N/m² acts on an area of 0.2 m². Find the force.",
"options": [
"12 N",
"120 N",
"300 N",
"60.2 N"
],
"answer": 0,
"explain": "Force = pressure × area = 60 × 0.2 = 12 N."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "Write 7.8 hours in hours and minutes.",
"options": [
"7 h 48 min",
"7 h 80 min",
"7 h 8 min",
"7 h 12 min"
],
"answer": 0,
"explain": "0.8 of an hour = 0.8 × 60 = 48 minutes, so 7.8 hours = 7 h 48 min. It is not 7 h 80 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 914 cm³?",
"options": [
"9.14 litres",
"914,000 litres",
"0.914 litres",
"91.4 litres"
],
"answer": 2,
"explain": "1 litre = 1000 cm³, so divide by 1000: 914 ÷ 1000 = 0.914 litres."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 8 cm. Find its area, to 1 decimal place.",
"options": [
"50.3 cm²",
"631.7 cm²",
"804.2 cm²",
"201.1 cm²"
],
"answer": 3,
"explain": "Area = πr² = π × 8² = π × 64 = 201.1 cm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 8 cm long and 5 cm wide. What is its perimeter?",
"options": [
"40 cm",
"21 cm",
"26 cm",
"13 cm"
],
"answer": 2,
"explain": "Perimeter is the distance all the way round: 8 + 5 + 8 + 5 = 26 cm."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 70 km/h for 45 minutes. How far does it travel?",
"options": [
"31.5 km",
"52.5 km",
"93.3 km",
"3,150 km"
],
"answer": 1,
"explain": "Distance = speed × time. 45 minutes = 0.75 hours, so 70 × 0.75 = 52.5 km."
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 36 mm. Find its area, to 1 decimal place.",
"options": [
"113.1 mm²",
"1,017.9 mm²",
"226.2 mm²",
"4,071.5 mm²"
],
"answer": 1,
"explain": "First halve the diameter: r = 36 ÷ 2 = 18. Area = πr² = π × 18² = 1,017.9 mm² (1 d.p.)."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 25,000. Two towns are 4.5 cm apart on the map. How far apart are they in real life?",
"options": [
"0.1125 km",
"1.125 km",
"11.25 km",
"112.5 km"
],
"answer": 1,
"explain": "Real distance = 4.5 × 25,000 = 112,500 cm. Divide by 100 for metres (1,125 m) and by 1000 for km: 1.125 km."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 08:30 and arrives at 10:35. How long is this?",
"options": [
"1 h 55 min",
"1 h 5 min",
"2 h 5 min",
"3 h 5 min"
],
"answer": 2,
"explain": "Count on from 08:30: up to the next whole hour, then whole hours, then the minutes to 10:35. The total is 2 h 5 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 5 m² into cm².",
"options": [
"50,000 cm²",
"500 cm²",
"0.0005 cm²",
"5,000 cm²"
],
"answer": 0,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 5 × 10,000 = 50,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 640 m, correct to the nearest 10. What is the lower bound?",
"options": [
"630 m",
"639 m",
"645 m",
"635 m"
],
"answer": 3,
"explain": "Half of 10 is 5. Lower bound = 640 − 5 = 635 m."
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 13 m. Find its area, to 1 decimal place.",
"options": [
"1,668 m²",
"2,123.7 m²",
"81.7 m²",
"530.9 m²"
],
"answer": 3,
"explain": "Area = πr² = π × 13² = π × 169 = 530.9 m² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 175 km in 2 hours 30 minutes. What is the average speed?",
"options": [
"437.5 km/h",
"70 km/h",
"76.1 km/h",
"1.2 km/h"
],
"answer": 1,
"explain": "Speed = distance ÷ time. Write the time in hours: 2 hours 30 minutes = 2.5 hours. 175 ÷ 2.5 = 70 km/h."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 3 m and height 3 m. The prism is 7 m long. Find its volume.",
"options": [
"63 m³",
"21 m³",
"31.5 m³",
"4.5 m³"
],
"answer": 2,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 3 × 3 = 4.5. 4.5 × 7 = 31.5 m³."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 9 m³ into cm³.",
"options": [
"9,000,000 cm³",
"900 cm³",
"9,000 cm³",
"90,000 cm³"
],
"answer": 0,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 9 × 1,000,000 = 9,000,000 cm³."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 12.1 hours in hours and minutes.",
"options": [
"12 h 1 min",
"12 h 6 min",
"12 h 54 min",
"12 h 10 min"
],
"answer": 1,
"explain": "0.1 of an hour = 0.1 × 60 = 6 minutes, so 12.1 hours = 12 h 6 min. It is not 12 h 10 min, because an hour has 60 minutes, not 100."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A stone has a mass of 95.4 g and a volume of 106 cm³. Find its density.",
"options": [
"0.9 g/cm³",
"9 g/cm³",
"1.111 g/cm³",
"10,112.4 g/cm³"
],
"answer": 0,
"explain": "Density = mass ÷ volume = 95.4 ÷ 106 = 0.9 g/cm³."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 45 mph for 2 hours 30 minutes. How far does it travel?",
"options": [
"6,750 miles",
"18 miles",
"112.5 miles",
"103.5 miles"
],
"answer": 2,
"explain": "Distance = speed × time. 2 hours 30 minutes = 2.5 hours, so 45 × 2.5 = 112.5 miles."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 2 litres per minute. How long does it take to fill 80 litres?",
"options": [
"40 minutes",
"78 minutes",
"160 minutes",
"0.025 minutes"
],
"answer": 0,
"explain": "Time = amount ÷ rate = 80 ÷ 2 = 40 minutes."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 08:50 and ends at 12:45. How long is this?",
"options": [
"4 h 55 min",
"3 h 45 min",
"3 h 55 min",
"2 h 55 min"
],
"answer": 2,
"explain": "Count on from 08:50: up to the next whole hour, then whole hours, then the minutes to 12:45. The total is 3 h 55 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 11 mm. Find its area, to 1 decimal place.",
"options": [
"69.1 mm²",
"380.1 mm²",
"1,520.5 mm²",
"1,194.2 mm²"
],
"answer": 1,
"explain": "Area = πr² = π × 11² = π × 121 = 380.1 mm² (1 d.p.). Square the radius before multiplying by π."
}
],
[
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 3,205 cm³?",
"options": [
"32.05 litres",
"320.5 litres",
"3.205 litres",
"3,205,000 litres"
],
"answer": 2,
"explain": "1 litre = 1000 cm³, so divide by 1000: 3,205 ÷ 1000 = 3.205 litres."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of P from X is 036°. What is the bearing of X from P?",
"options": [
"324°",
"144°",
"036°",
"216°"
],
"answer": 3,
"explain": "A back bearing is 180° different. 036° is less than 180°, so add 180°: 216°."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 14 m, a perpendicular height of 11 m and a sloping side of 13 m. Find its area.",
"options": [
"54 m²",
"182 m²",
"154 m²",
"77 m²"
],
"answer": 2,
"explain": "Area of a parallelogram = base × perpendicular height = 14 × 11 = 154 m². The sloping side is not needed."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 8.21 m into cm.",
"options": [
"82.1 cm",
"821 cm",
"0.0821 cm",
"8,210 cm"
],
"answer": 1,
"explain": "1 m = 100 cm. Going from m to cm (a smaller unit) you multiply by 100: 8.21 × 100 = 821 cm."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 10 km in 15 minutes. What is the average speed?",
"options": [
"2.5 km/h",
"66.7 km/h",
"0.7 km/h",
"40 km/h"
],
"answer": 3,
"explain": "Speed = distance ÷ time. Write the time in hours: 15 minutes = 0.25 hours. 10 ÷ 0.25 = 40 km/h."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 55 mph for 4 hours. How far does it travel?",
"options": [
"275 miles",
"13.8 miles",
"13,200 miles",
"220 miles"
],
"answer": 3,
"explain": "Distance = speed × time. 55 × 4 = 220 miles."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of B from Q is 049°. What is the bearing of Q from B?",
"options": [
"229°",
"131°",
"311°",
"049°"
],
"answer": 0,
"explain": "A back bearing is 180° different. 049° is less than 180°, so add 180°: 229°."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 28 m. Find its area, to 1 decimal place.",
"options": [
"2,463 m²",
"88 m²",
"175.9 m²",
"615.8 m²"
],
"answer": 3,
"explain": "First halve the diameter: r = 28 ÷ 2 = 14. Area = πr² = π × 14² = 615.8 m² (1 d.p.)."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 8 m by 6 m by 2 m. Find its volume.",
"options": [
"48 m³",
"152 m³",
"76 m³",
"96 m³"
],
"answer": 3,
"explain": "Volume of a cuboid = length × width × height = 8 × 6 × 2 = 96 m³."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 51 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"2,550.25 cm²",
"2,601 cm²",
"2,600.5 cm²",
"2,652.25 cm²"
],
"answer": 0,
"explain": "Lower bound of the side = 51 − 0.5 = 50.5 cm. Lower bound area = 50.5² = 2,550.25 cm²."
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 inch ≈ 2.5 cm. Convert 48 inches into centimetres.",
"options": [
"19.2 cm",
"1,200 cm",
"120 cm",
"576 cm"
],
"answer": 2,
"explain": "Multiply by 2.5: 48 × 2.5 = 120 cm."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 26 m long and 19 m wide. What is its perimeter?",
"options": [
"45 m",
"71 m",
"90 m",
"494 m"
],
"answer": 2,
"explain": "Perimeter is the distance all the way round: 26 + 19 + 26 + 19 = 90 m."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 3,050 cm² into m².",
"options": [
"30.5 m²",
"30,500,000 m²",
"0.305 m²",
"3.05 m²"
],
"answer": 2,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 3,050 ÷ 10,000 = 0.305 m²."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 5 cm and height 8 cm. The prism is 15 cm long. Find its volume.",
"options": [
"20 cm³",
"600 cm³",
"97.5 cm³",
"300 cm³"
],
"answer": 3,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 5 × 8 = 20. 20 × 15 = 300 cm³."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 640 N acts on an area of 2 m². Find the pressure.",
"options": [
"1,280 N/m²",
"160 N/m²",
"320 N/m²",
"0.0031 N/m²"
],
"answer": 2,
"explain": "Pressure = force ÷ area = 640 ÷ 2 = 320 N/m²."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 120 km in 3 hours. What is the average speed?",
"options": [
"30 km/h",
"360 km/h",
"0.7 km/h",
"40 km/h"
],
"answer": 3,
"explain": "Speed = distance ÷ time. 120 ÷ 3 = 40 km/h."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 5 m long and 7 m wide. What is its perimeter?",
"options": [
"35 m",
"24 m",
"12 m",
"17 m"
],
"answer": 1,
"explain": "Perimeter is the distance all the way round: 5 + 7 + 5 + 7 = 24 m."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 36 m into cm.",
"options": [
"3,600 cm",
"36,000 cm",
"0.36 cm",
"360 cm"
],
"answer": 0,
"explain": "1 m = 100 cm. Going from m to cm (a smaller unit) you multiply by 100: 36 × 100 = 3,600 cm."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 15 cm by 2 cm by 2 cm. Find its total surface area.",
"options": [
"60 cm²",
"64 cm²",
"180 cm²",
"128 cm²"
],
"answer": 3,
"explain": "A cuboid has 3 pairs of faces: 2 × (15×2) + 2 × (15×2) + 2 × (2×2) = 2 × (30 + 30 + 4) = 128 cm²."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 10 m. Find its circumference, to 1 decimal place.",
"options": [
"62.8 m",
"125.7 m",
"31.4 m",
"314.2 m"
],
"answer": 0,
"explain": "Circumference = 2πr (or πd) = 2 × π × 10 = 62.8 m (1 d.p.)."
}
],
[
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 5.28 kg into g.",
"options": [
"52,800 g",
"528 g",
"5,280 g",
"0.00528 g"
],
"answer": 2,
"explain": "1 kg = 1,000 g. Going from kg to g (a smaller unit) you multiply by 1,000: 5.28 × 1,000 = 5,280 g."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 5 m and height 3 m. The prism is 23 m long. Find its volume.",
"options": [
"7.5 m³",
"172.5 m³",
"92 m³",
"345 m³"
],
"answer": 1,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 5 × 3 = 7.5. 7.5 × 23 = 172.5 m³."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 120 litre tank in 6 minutes. What is the rate of flow?",
"options": [
"0.05 litres/min",
"200 litres/min",
"720 litres/min",
"20 litres/min"
],
"answer": 3,
"explain": "Rate = amount ÷ time = 120 ÷ 6 = 20 litres per minute."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 18 m. Find its area, to 1 decimal place.",
"options": [
"113.1 m²",
"56.5 m²",
"1,017.9 m²",
"254.5 m²"
],
"answer": 3,
"explain": "First halve the diameter: r = 18 ÷ 2 = 9. Area = πr² = π × 9² = 254.5 m² (1 d.p.)."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 5 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"21.6 cm",
"22 cm",
"18 cm",
"20 cm"
],
"answer": 1,
"explain": "Upper bound of the side = 5 + 0.5 = 5.5 cm. Upper bound perimeter = 4 × 5.5 = 22 cm."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 21 m long and 11 m wide. What is its perimeter?",
"options": [
"64 m",
"231 m",
"32 m",
"53 m"
],
"answer": 0,
"explain": "Perimeter is the distance all the way round: 21 + 11 + 21 + 11 = 64 m."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 105 km in 1 hour 45 minutes. What is the average speed?",
"options": [
"183.8 km/h",
"60 km/h",
"72.4 km/h",
"1 km/h"
],
"answer": 1,
"explain": "Speed = distance ÷ time. Write the time in hours: 1 hour 45 minutes = 1.75 hours. 105 ÷ 1.75 = 60 km/h."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 11 litres?",
"options": [
"11,000 cm³",
"1,100 cm³",
"11,000,000 cm³",
"0.011 cm³"
],
"answer": 0,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 11 × 1000 = 11,000 cm³."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 13 m, a perpendicular height of 5 m and a sloping side of 9 m. Find its area.",
"options": [
"65 m²",
"44 m²",
"117 m²",
"32.5 m²"
],
"answer": 0,
"explain": "Area of a parallelogram = base × perpendicular height = 13 × 5 = 65 m². The sloping side is not needed."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 120 N acts on an area of 0.25 m². Find the pressure.",
"options": [
"0.0021 N/m²",
"30 N/m²",
"480 N/m²",
"240 N/m²"
],
"answer": 2,
"explain": "Pressure = force ÷ area = 120 ÷ 0.25 = 480 N/m²."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 22 cm. One side is 5 cm. How long is the other side?",
"options": [
"17 cm",
"11 cm",
"24 cm",
"6 cm"
],
"answer": 3,
"explain": "Two sides of 5 make 10. 22 − 10 = 12, which is shared between the other two sides: 12 ÷ 2 = 6 cm."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 2,375 g into kg.",
"options": [
"2.375 kg",
"2,375,000 kg",
"23.75 kg",
"0.2375 kg"
],
"answer": 0,
"explain": "1 kg = 1,000 g. Going from g to kg (a bigger unit) you divide by 1,000: 2,375 ÷ 1,000 = 2.375 kg."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 20,000. Two towns are 2.5 cm apart on the map. How far apart are they in real life?",
"options": [
"50 km",
"0.05 km",
"0.5 km",
"5 km"
],
"answer": 2,
"explain": "Real distance = 2.5 × 20,000 = 50,000 cm. Divide by 100 for metres (500 m) and by 1000 for km: 0.5 km."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of Q from Y is 235°. What is the bearing of Y from Q?",
"options": [
"125°",
"305°",
"235°",
"055°"
],
"answer": 3,
"explain": "A back bearing is 180° different. 235° is more than 180°, so subtract 180°: 055°."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two solids are similar. The lengths of the larger solid are 2 times those of the smaller one. The smaller solid has a volume of 9 cm³. Find the volume of the larger solid.",
"options": [
"18 cm³",
"54 cm³",
"36 cm³",
"72 cm³"
],
"answer": 3,
"explain": "Length scale factor 2 → volume scale factor 2³ = 8. 9 × 8 = 72 cm³."
}
],
[
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of A from Y is 064°. What is the bearing of Y from A?",
"options": [
"244°",
"296°",
"116°",
"064°"
],
"answer": 0,
"explain": "A back bearing is 180° different. 064° is less than 180°, so add 180°: 244°."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 10 cm into mm.",
"options": [
"1 mm",
"1,000 mm",
"100 mm",
"10 mm"
],
"answer": 2,
"explain": "1 cm = 10 mm. Going from cm to mm (a smaller unit) you multiply by 10: 10 × 10 = 100 mm."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 500,000. Two towns are 13 cm apart on the map. How far apart are they in real life?",
"options": [
"6.5 km",
"6,500 km",
"650 km",
"65 km"
],
"answer": 3,
"explain": "Real distance = 13 × 500,000 = 6,500,000 cm. Divide by 100 for metres (65,000 m) and by 1000 for km: 65 km."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 32.5 km at an average speed of 65 km/h. How long does the journey take?",
"options": [
"45 min",
"0 h 50 min",
"1 h 30 min",
"30 min"
],
"answer": 3,
"explain": "Time = distance ÷ speed = 32.5 ÷ 65 = 0.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 30 min."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 140 m, correct to the nearest 10. What is the upper bound?",
"options": [
"145 m",
"135 m",
"144 m",
"150 m"
],
"answer": 0,
"explain": "Half of 10 is 5. Upper bound = 140 + 5 = 145 m."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 100,000. Two places are 18 km apart in real life. How far apart are they on the map?",
"options": [
"180 cm",
"18 cm",
"1,800 cm",
"1.8 cm"
],
"answer": 1,
"explain": "18 km = 1,800,000 cm. Map distance = 1,800,000 ÷ 100,000 = 18 cm."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 10 miles in 30 minutes. What is the average speed?",
"options": [
"20 mph",
"0.3 mph",
"33.3 mph",
"5 mph"
],
"answer": 0,
"explain": "Speed = distance ÷ time. Write the time in hours: 30 minutes = 0.5 hours. 10 ÷ 0.5 = 20 mph."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 9.7 litres?",
"options": [
"0.0097 cm³",
"9,700,000 cm³",
"9,700 cm³",
"970 cm³"
],
"answer": 2,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 9.7 × 1000 = 9,700 cm³."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 12 cm by 12 cm by 10 cm. Find its volume.",
"options": [
"768 cm³",
"384 cm³",
"1,440 cm³",
"144 cm³"
],
"answer": 2,
"explain": "Volume of a cuboid = length × width × height = 12 × 12 × 10 = 1,440 cm³."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 19 cm, a perpendicular height of 9 cm and a sloping side of 10 cm. Find its area.",
"options": [
"58 cm²",
"85.5 cm²",
"190 cm²",
"171 cm²"
],
"answer": 3,
"explain": "Area of a parallelogram = base × perpendicular height = 19 × 9 = 171 cm². The sloping side is not needed."
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 6.8 kg, correct to 1 decimal place. What is the upper bound?",
"options": [
"6.9 kg",
"6.85 kg",
"6.75 kg",
"6.84 kg"
],
"answer": 1,
"explain": "Half of 0.1 is 0.05. Upper bound = 6.8 + 0.05 = 6.85 kg."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 30.8 pounds into kg.",
"options": [
"14 kg",
"67.76 kg",
"28.6 kg",
"1.4 kg"
],
"answer": 0,
"explain": "Divide by 2.2: 30.8 ÷ 2.2 = 14 kg."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of P from Q is 046°. What is the bearing of Q from P?",
"options": [
"226°",
"134°",
"046°",
"314°"
],
"answer": 0,
"explain": "A back bearing is 180° different. 046° is less than 180°, so add 180°: 226°."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 100,000. Two towns are 10.5 cm apart on the map. How far apart are they in real life?",
"options": [
"10.5 km",
"1.05 km",
"105 km",
"1,050 km"
],
"answer": 0,
"explain": "Real distance = 10.5 × 100,000 = 1,050,000 cm. Divide by 100 for metres (10,500 m) and by 1000 for km: 10.5 km."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 22 cm and a perpendicular height of 15 cm. Find its area.",
"options": [
"330 cm²",
"82.5 cm²",
"165 cm²",
"37 cm²"
],
"answer": 2,
"explain": "Area of a triangle = ½ × base × height = ½ × 22 × 15 = 165 cm²."
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 48 km into miles.",
"options": [
"76.8 miles",
"240 miles",
"30 miles",
"6 miles"
],
"answer": 2,
"explain": "48 ÷ 8 = 6 lots of 8 km. 6 × 5 = 30 miles."
},
{
"topic": "Density",
"tier": "F",
"q": "A block has a density of 1.5 g/cm³ and a volume of 173 cm³. Find its mass.",
"options": [
"174.5 g",
"259.5 g",
"2,595 g",
"115.33 g"
],
"answer": 1,
"explain": "Mass = density × volume = 1.5 × 173 = 259.5 g."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of P from Q is 242°. What is the bearing of Q from P?",
"options": [
"298°",
"062°",
"118°",
"242°"
],
"answer": 1,
"explain": "A back bearing is 180° different. 242° is more than 180°, so subtract 180°: 062°."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 72 kg, correct to the nearest whole number. What is the upper bound?",
"options": [
"72.5 kg",
"71.5 kg",
"72.4 kg",
"73 kg"
],
"answer": 0,
"explain": "Half of 1 is 0.5. Upper bound = 72 + 0.5 = 72.5 kg."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 13 cm by 9 cm by 4 cm. Find its volume.",
"options": [
"468 cm³",
"410 cm³",
"117 cm³",
"205 cm³"
],
"answer": 0,
"explain": "Volume of a cuboid = length × width × height = 13 × 9 × 4 = 468 cm³."
}
],
[
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a mass of 111.6 g and a volume of 93 cm³. Find its density.",
"options": [
"1.2 g/cm³",
"10,378.8 g/cm³",
"0.833 g/cm³",
"12 g/cm³"
],
"answer": 0,
"explain": "Density = mass ÷ volume = 111.6 ÷ 93 = 1.2 g/cm³."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 45 litres, correct to the nearest whole number. What is the lower bound?",
"options": [
"44.5 litres",
"44.9 litres",
"44 litres",
"45.5 litres"
],
"answer": 0,
"explain": "Half of 1 is 0.5. Lower bound = 45 − 0.5 = 44.5 litres."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 3,200 cm² into m².",
"options": [
"32 m²",
"0.32 m²",
"3.2 m²",
"32,000,000 m²"
],
"answer": 1,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 3,200 ÷ 10,000 = 0.32 m²."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 4 cm and a height of 8 cm. Find its volume, to 1 decimal place.",
"options": [
"402.1 cm³",
"201.1 cm³",
"100.5 cm³",
"1,608.5 cm³"
],
"answer": 0,
"explain": "Volume of a cylinder = πr²h = π × 4² × 8 = π × 16 × 8 = 402.1 cm³ (1 d.p.)."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 5 times those of the smaller one. The smaller shape has an area of 11 cm². Find the area of the larger shape.",
"options": [
"110 cm²",
"1,375 cm²",
"275 cm²",
"55 cm²"
],
"answer": 2,
"explain": "Length scale factor 5 → area scale factor 5² = 25. 11 × 25 = 275 cm²."
}
],
[
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of A from B is 353°. What is the bearing of B from A?",
"options": [
"187°",
"173°",
"007°",
"353°"
],
"answer": 1,
"explain": "A back bearing is 180° different. 353° is more than 180°, so subtract 180°: 173°."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 gallon ≈ 4.5 litres. Convert 7 gallons into litres.",
"options": [
"11.5 litres",
"1.56 litres",
"315 litres",
"31.5 litres"
],
"answer": 3,
"explain": "Multiply by 4.5: 7 × 4.5 = 31.5 litres."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 476.5 m into km.",
"options": [
"476,500 km",
"0.04765 km",
"0.4765 km",
"4.765 km"
],
"answer": 2,
"explain": "1 km = 1,000 m. Going from m to km (a bigger unit) you divide by 1,000: 476.5 ÷ 1,000 = 0.4765 km."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 2,503 cm³?",
"options": [
"2.503 litres",
"2,503,000 litres",
"250.3 litres",
"25.03 litres"
],
"answer": 0,
"explain": "1 litre = 1000 cm³, so divide by 1000: 2,503 ÷ 1000 = 2.503 litres."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 17.5 km at an average speed of 35 km/h. How long does the journey take?",
"options": [
"30 min",
"45 min",
"1 h 30 min",
"0 h 50 min"
],
"answer": 0,
"explain": "Time = distance ÷ speed = 17.5 ÷ 35 = 0.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 30 min."
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 3 mm. Find its area, to 1 decimal place.",
"options": [
"88.8 mm²",
"28.3 mm²",
"113.1 mm²",
"18.8 mm²"
],
"answer": 1,
"explain": "Area = πr² = π × 3² = π × 9 = 28.3 mm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 14:00 and ends at 16:25. How long is this?",
"options": [
"2 h 25 min",
"1 h 25 min",
"3 h 25 min",
"2 h 15 min"
],
"answer": 0,
"explain": "Count on from 14:00: up to the next whole hour, then whole hours, then the minutes to 16:25. The total is 2 h 25 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 5 cm and a perpendicular height of 8 cm. Find its area.",
"options": [
"13 cm²",
"40 cm²",
"10 cm²",
"20 cm²"
],
"answer": 3,
"explain": "Area of a triangle = ½ × base × height = ½ × 5 × 8 = 20 cm²."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 44 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"177.6 cm",
"178 cm",
"174 cm",
"176 cm"
],
"answer": 1,
"explain": "Upper bound of the side = 44 + 0.5 = 44.5 cm. Upper bound perimeter = 4 × 44.5 = 178 cm."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 4.5 m/s into km/h.",
"options": [
"270 km/h",
"1.25 km/h",
"4,500 km/h",
"16.2 km/h"
],
"answer": 3,
"explain": "In 1 hour there are 3600 seconds, so 4.5 m/s = 4.5 × 3600 = 16,200 m per hour = 16.2 km/h. (Shortcut: × 3.6.)"
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 60 kg, correct to the nearest whole number. What is the upper bound?",
"options": [
"59.5 kg",
"60.4 kg",
"60.5 kg",
"61 kg"
],
"answer": 2,
"explain": "Half of 1 is 0.5. Upper bound = 60 + 0.5 = 60.5 kg."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 90 miles at an average speed of 60 mph. How long does the journey take?",
"options": [
"1 h 30 min",
"1 h 50 min",
"1 h 45 min",
"2 h 30 min"
],
"answer": 0,
"explain": "Time = distance ÷ speed = 90 ÷ 60 = 1.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 1 h 30 min."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 13 cm. Find its circumference, to 1 decimal place.",
"options": [
"81.7 cm",
"530.9 cm",
"163.4 cm",
"40.8 cm"
],
"answer": 0,
"explain": "Circumference = 2πr (or πd) = 2 × π × 13 = 81.7 cm (1 d.p.)."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 7 cm by 8 cm by 8 cm. Find its total surface area.",
"options": [
"176 cm²",
"448 cm²",
"336 cm²",
"352 cm²"
],
"answer": 3,
"explain": "A cuboid has 3 pairs of faces: 2 × (7×8) + 2 × (7×8) + 2 × (8×8) = 2 × (56 + 56 + 64) = 352 cm²."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 14 cm by 7 cm by 8 cm. Find its volume.",
"options": [
"98 cm³",
"266 cm³",
"784 cm³",
"532 cm³"
],
"answer": 2,
"explain": "Volume of a cuboid = length × width × height = 14 × 7 × 8 = 784 cm³."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 40 mph for 2 hours. How far does it travel?",
"options": [
"20 miles",
"80 miles",
"120 miles",
"4,800 miles"
],
"answer": 1,
"explain": "Distance = speed × time. 40 × 2 = 80 miles."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 33 m into cm.",
"options": [
"0.33 cm",
"3,300 cm",
"330 cm",
"33,000 cm"
],
"answer": 1,
"explain": "1 m = 100 cm. Going from m to cm (a smaller unit) you multiply by 100: 33 × 100 = 3,300 cm."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 15 litre tank in 3 minutes. What is the rate of flow?",
"options": [
"5 litres/min",
"45 litres/min",
"0.2 litres/min",
"50 litres/min"
],
"answer": 0,
"explain": "Rate = amount ÷ time = 15 ÷ 3 = 5 litres per minute."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 15 m by 8 m by 2 m. Find its volume.",
"options": [
"120 m³",
"166 m³",
"240 m³",
"332 m³"
],
"answer": 2,
"explain": "Volume of a cuboid = length × width × height = 15 × 8 × 2 = 240 m³."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 75 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"300 cm",
"301.6 cm",
"302 cm",
"298 cm"
],
"answer": 2,
"explain": "Upper bound of the side = 75 + 0.5 = 75.5 cm. Upper bound perimeter = 4 × 75.5 = 302 cm."
}
],
[
{
"topic": "Area units",
"tier": "F",
"q": "Convert 3,500 cm² into m².",
"options": [
"0.35 m²",
"35 m²",
"35,000,000 m²",
"3.5 m²"
],
"answer": 0,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 3,500 ÷ 10,000 = 0.35 m²."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 895.8 g into kg.",
"options": [
"0.08958 kg",
"0.8958 kg",
"8.958 kg",
"895,800 kg"
],
"answer": 1,
"explain": "1 kg = 1,000 g. Going from g to kg (a bigger unit) you divide by 1,000: 895.8 ÷ 1,000 = 0.8958 kg."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 20 mph for 2 hours 45 minutes. How far does it travel?",
"options": [
"3,300 miles",
"55 miles",
"7.3 miles",
"49 miles"
],
"answer": 1,
"explain": "Distance = speed × time. 2 hours 45 minutes = 2.75 hours, so 20 × 2.75 = 55 miles."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 inch ≈ 2.5 cm. Convert 59 inches into centimetres.",
"options": [
"1,475 cm",
"147.5 cm",
"708 cm",
"23.6 cm"
],
"answer": 1,
"explain": "Multiply by 2.5: 59 × 2.5 = 147.5 cm."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 4 times those of the smaller one. The smaller shape has an area of 20 cm². Find the area of the larger shape.",
"options": [
"1,280 cm²",
"80 cm²",
"160 cm²",
"320 cm²"
],
"answer": 3,
"explain": "Length scale factor 4 → area scale factor 4² = 16. 20 × 16 = 320 cm²."
}
],
[
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 62 cm, correct to the nearest whole number. What is the upper bound?",
"options": [
"62.4 cm",
"62.5 cm",
"63 cm",
"61.5 cm"
],
"answer": 1,
"explain": "Half of 1 is 0.5. Upper bound = 62 + 0.5 = 62.5 cm."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 0.19 m into cm.",
"options": [
"0.0019 cm",
"190 cm",
"19 cm",
"1.9 cm"
],
"answer": 2,
"explain": "1 m = 100 cm. Going from m to cm (a smaller unit) you multiply by 100: 0.19 × 100 = 19 cm."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 50,000. Two places are 1 km apart in real life. How far apart are they on the map?",
"options": [
"2 cm",
"20 cm",
"0.2 cm",
"200 cm"
],
"answer": 0,
"explain": "1 km = 100,000 cm. Map distance = 100,000 ÷ 50,000 = 2 cm."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 2,450 cm² into m².",
"options": [
"0.245 m²",
"24.5 m²",
"24,500,000 m²",
"2.45 m²"
],
"answer": 0,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 2,450 ÷ 10,000 = 0.245 m²."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many litres is 119 cm³?",
"options": [
"0.119 litres",
"119,000 litres",
"1.19 litres",
"11.9 litres"
],
"answer": 0,
"explain": "1 litre = 1000 cm³, so divide by 1000: 119 ÷ 1000 = 0.119 litres."
}
],
[
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 729.3 cm into m.",
"options": [
"7.293 m",
"0.7293 m",
"72.93 m",
"72,930 m"
],
"answer": 0,
"explain": "1 m = 100 cm. Going from cm to m (a bigger unit) you divide by 100: 729.3 ÷ 100 = 7.293 m."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 132 litre tank in 22 minutes. What is the rate of flow?",
"options": [
"60 litres/min",
"2,904 litres/min",
"6 litres/min",
"0.167 litres/min"
],
"answer": 2,
"explain": "Rate = amount ÷ time = 132 ÷ 22 = 6 litres per minute."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 11 cm and 17 cm, and a perpendicular height of 14 cm. Find its area.",
"options": [
"1,309 cm²",
"392 cm²",
"196 cm²",
"42 cm²"
],
"answer": 2,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (11 + 17) × 14 = ½ × 28 × 14 = 196 cm²."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 250,000. Two towns are 1 cm apart on the map. How far apart are they in real life?",
"options": [
"25 km",
"0.25 km",
"2.5 km",
"250 km"
],
"answer": 2,
"explain": "Real distance = 1 × 250,000 = 250,000 cm. Divide by 100 for metres (2,500 m) and by 1000 for km: 2.5 km."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 09:40 and ends at 13:45. How long is this?",
"options": [
"4 h 5 min",
"3 h 5 min",
"3 h 55 min",
"5 h 5 min"
],
"answer": 0,
"explain": "Count on from 09:40: up to the next whole hour, then whole hours, then the minutes to 13:45. The total is 4 h 5 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 150 miles in 2 hours 30 minutes. What is the average speed?",
"options": [
"375 mph",
"1 mph",
"60 mph",
"65.2 mph"
],
"answer": 2,
"explain": "Speed = distance ÷ time. Write the time in hours: 2 hours 30 minutes = 2.5 hours. 150 ÷ 2.5 = 60 mph."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a density of 0.9 g/cm³ and a mass of 121.5 g. Find its volume.",
"options": [
"135 cm³",
"1,350 cm³",
"109.35 cm³",
"0.0074 cm³"
],
"answer": 0,
"explain": "Volume = mass ÷ density = 121.5 ÷ 0.9 = 135 cm³."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 8 cm by 4 cm by 7 cm. Find its volume.",
"options": [
"224 cm³",
"116 cm³",
"232 cm³",
"32 cm³"
],
"answer": 0,
"explain": "Volume of a cuboid = length × width × height = 8 × 4 × 7 = 224 cm³."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 470 cm² into m².",
"options": [
"4,700,000 m²",
"4.7 m²",
"0.047 m²",
"0.47 m²"
],
"answer": 2,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 470 ÷ 10,000 = 0.047 m²."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 450 N acts on an area of 2.5 m². Find the pressure.",
"options": [
"0.0056 N/m²",
"1,125 N/m²",
"180 N/m²",
"90 N/m²"
],
"answer": 2,
"explain": "Pressure = force ÷ area = 450 ÷ 2.5 = 180 N/m²."
}
],
[
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 12 m and height 6 m. The prism is 21 m long. Find its volume.",
"options": [
"36 m³",
"189 m³",
"1,512 m³",
"756 m³"
],
"answer": 3,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 12 × 6 = 36. 36 × 21 = 756 m³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 9,145 m into km.",
"options": [
"0.9145 km",
"91.45 km",
"9.145 km",
"9,145,000 km"
],
"answer": 2,
"explain": "1 km = 1,000 m. Going from m to km (a bigger unit) you divide by 1,000: 9,145 ÷ 1,000 = 9.145 km."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 09:25 and finishes at 11:30. How long is this?",
"options": [
"2 h 5 min",
"3 h 5 min",
"1 h 5 min",
"1 h 55 min"
],
"answer": 0,
"explain": "Count on from 09:25: up to the next whole hour, then whole hours, then the minutes to 11:30. The total is 2 h 5 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 13 m, a perpendicular height of 4 m and a sloping side of 7 m. Find its area.",
"options": [
"52 m²",
"26 m²",
"40 m²",
"91 m²"
],
"answer": 0,
"explain": "Area of a parallelogram = base × perpendicular height = 13 × 4 = 52 m². The sloping side is not needed."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 2.7 kg, correct to 1 decimal place. What is the upper bound?",
"options": [
"2.75 kg",
"2.65 kg",
"2.74 kg",
"2.8 kg"
],
"answer": 0,
"explain": "Half of 0.1 is 0.05. Upper bound = 2.7 + 0.05 = 2.75 kg."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 20 mph for 2 hours 15 minutes. How far does it travel?",
"options": [
"2,700 miles",
"43 miles",
"45 miles",
"8.9 miles"
],
"answer": 2,
"explain": "Distance = speed × time. 2 hours 15 minutes = 2.25 hours, so 20 × 2.25 = 45 miles."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 6 cm long and 15 cm wide. What is its perimeter?",
"options": [
"90 cm",
"27 cm",
"21 cm",
"42 cm"
],
"answer": 3,
"explain": "Perimeter is the distance all the way round: 6 + 15 + 6 + 15 = 42 cm."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 4 m. Find its area, to 1 decimal place.",
"options": [
"201.1 m²",
"157.9 m²",
"25.1 m²",
"50.3 m²"
],
"answer": 3,
"explain": "Area = πr² = π × 4² = π × 16 = 50.3 m² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 23 kg into pounds.",
"options": [
"506 pounds",
"25.2 pounds",
"10.5 pounds",
"50.6 pounds"
],
"answer": 3,
"explain": "Multiply by 2.2: 23 × 2.2 = 50.6 pounds."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 315 km/h into m/s.",
"options": [
"5,250 m/s",
"5.25 m/s",
"1,134 m/s",
"87.5 m/s"
],
"answer": 3,
"explain": "315 km/h = 315,000 m in 3600 seconds. 315,000 ÷ 3600 = 87.5 m/s. (Shortcut: ÷ 3.6.)"
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "Write 2.8 hours in hours and minutes.",
"options": [
"2 h 8 min",
"2 h 80 min",
"2 h 48 min",
"2 h 12 min"
],
"answer": 2,
"explain": "0.8 of an hour = 0.8 × 60 = 48 minutes, so 2.8 hours = 2 h 48 min. It is not 2 h 80 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 24 m long and 12 m wide. What is its perimeter?",
"options": [
"60 m",
"72 m",
"36 m",
"288 m"
],
"answer": 1,
"explain": "Perimeter is the distance all the way round: 24 + 12 + 24 + 12 = 72 m."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 10 litres?",
"options": [
"0.01 cm³",
"1,000 cm³",
"10,000 cm³",
"10,000,000 cm³"
],
"answer": 2,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 10 × 1000 = 10,000 cm³."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of Y from X is 162°. What is the bearing of X from Y?",
"options": [
"342°",
"162°",
"018°",
"198°"
],
"answer": 0,
"explain": "A back bearing is 180° different. 162° is less than 180°, so add 180°: 342°."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 3 times those of the smaller one. The smaller shape has an area of 15 cm². Find the area of the larger shape.",
"options": [
"90 cm²",
"405 cm²",
"135 cm²",
"45 cm²"
],
"answer": 2,
"explain": "Length scale factor 3 → area scale factor 3² = 9. 15 × 9 = 135 cm²."
}
],
[
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 7 cm by 11 cm by 9 cm. Find its total surface area.",
"options": [
"239 cm²",
"478 cm²",
"693 cm²",
"462 cm²"
],
"answer": 1,
"explain": "A cuboid has 3 pairs of faces: 2 × (7×11) + 2 × (7×9) + 2 × (11×9) = 2 × (77 + 63 + 99) = 478 cm²."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 50 km/h for 45 minutes. How far does it travel?",
"options": [
"66.7 km",
"2,250 km",
"22.5 km",
"37.5 km"
],
"answer": 3,
"explain": "Distance = speed × time. 45 minutes = 0.75 hours, so 50 × 0.75 = 37.5 km."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 inch ≈ 2.5 cm. Convert 54 inches into centimetres.",
"options": [
"648 cm",
"21.6 cm",
"1,350 cm",
"135 cm"
],
"answer": 3,
"explain": "Multiply by 2.5: 54 × 2.5 = 135 cm."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 6 cm and a height of 7 cm. Find its volume, to 1 decimal place.",
"options": [
"263.9 cm³",
"3,166.7 cm³",
"131.9 cm³",
"791.7 cm³"
],
"answer": 3,
"explain": "Volume of a cylinder = πr²h = π × 6² × 7 = π × 36 × 7 = 791.7 cm³ (1 d.p.)."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 73 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"5,329 cm²",
"5,402.25 cm²",
"5,328.5 cm²",
"5,256.25 cm²"
],
"answer": 3,
"explain": "Lower bound of the side = 73 − 0.5 = 72.5 cm. Lower bound area = 72.5² = 5,256.25 cm²."
}
],
[
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 33 litres into cl.",
"options": [
"330 cl",
"0.33 cl",
"3,300 cl",
"33,000 cl"
],
"answer": 2,
"explain": "1 litre = 100 cl. Going from litres to cl (a smaller unit) you multiply by 100: 33 × 100 = 3,300 cl."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 500,000. Two towns are 4 cm apart on the map. How far apart are they in real life?",
"options": [
"2,000 km",
"2 km",
"20 km",
"200 km"
],
"answer": 2,
"explain": "Real distance = 4 × 500,000 = 2,000,000 cm. Divide by 100 for metres (20,000 m) and by 1000 for km: 20 km."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a density of 1.5 g/cm³ and a volume of 26 cm³. Find its mass.",
"options": [
"390 g",
"17.33 g",
"27.5 g",
"39 g"
],
"answer": 3,
"explain": "Mass = density × volume = 1.5 × 26 = 39 g."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 11 m³ into cm³.",
"options": [
"110,000 cm³",
"11,000 cm³",
"11,000,000 cm³",
"1,100 cm³"
],
"answer": 2,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 11 × 1,000,000 = 11,000,000 cm³."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 52 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"206 cm",
"208 cm",
"209.6 cm",
"210 cm"
],
"answer": 3,
"explain": "Upper bound of the side = 52 + 0.5 = 52.5 cm. Upper bound perimeter = 4 × 52.5 = 210 cm."
}
],
[
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 7 cm by 7 cm by 4 cm. Find its total surface area.",
"options": [
"196 cm²",
"105 cm²",
"210 cm²",
"294 cm²"
],
"answer": 2,
"explain": "A cuboid has 3 pairs of faces: 2 × (7×7) + 2 × (7×4) + 2 × (7×4) = 2 × (49 + 28 + 28) = 210 cm²."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 390.9 kg into tonnes.",
"options": [
"0.03909 tonnes",
"390,900 tonnes",
"3.909 tonnes",
"0.3909 tonnes"
],
"answer": 3,
"explain": "1 tonne = 1,000 kg. Going from kg to tonnes (a bigger unit) you divide by 1,000: 390.9 ÷ 1,000 = 0.3909 tonnes."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 5 cm and 19 cm, and a perpendicular height of 6 cm. Find its area.",
"options": [
"42 cm²",
"72 cm²",
"144 cm²",
"285 cm²"
],
"answer": 1,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (5 + 19) × 6 = ½ × 24 × 6 = 72 cm²."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 1.8 m³ into cm³.",
"options": [
"180 cm³",
"1,800,000 cm³",
"1,800 cm³",
"18,000 cm³"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 1.8 × 1,000,000 = 1,800,000 cm³."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 140 km in 3 hours 30 minutes. What is the average speed?",
"options": [
"42.4 km/h",
"0.7 km/h",
"40 km/h",
"490 km/h"
],
"answer": 2,
"explain": "Speed = distance ÷ time. Write the time in hours: 3 hours 30 minutes = 3.5 hours. 140 ÷ 3.5 = 40 km/h."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 15:45 and arrives at 20:25. How long is this?",
"options": [
"5 h 40 min",
"4 h 30 min",
"4 h 40 min",
"3 h 40 min"
],
"answer": 2,
"explain": "Count on from 15:45: up to the next whole hour, then whole hours, then the minutes to 20:25. The total is 4 h 40 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 5.2 m into cm.",
"options": [
"52 cm",
"0.052 cm",
"520 cm",
"5,200 cm"
],
"answer": 2,
"explain": "1 m = 100 cm. Going from m to cm (a smaller unit) you multiply by 100: 5.2 × 100 = 520 cm."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 12 cm by 3 cm by 5 cm. Find its total surface area.",
"options": [
"111 cm²",
"180 cm²",
"216 cm²",
"222 cm²"
],
"answer": 3,
"explain": "A cuboid has 3 pairs of faces: 2 × (12×3) + 2 × (12×5) + 2 × (3×5) = 2 × (36 + 60 + 15) = 222 cm²."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 8 m³ into cm³.",
"options": [
"80,000 cm³",
"8,000 cm³",
"800 cm³",
"8,000,000 cm³"
],
"answer": 3,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 8 × 1,000,000 = 8,000,000 cm³."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 88 litre tank in 11 minutes. What is the rate of flow?",
"options": [
"8 litres/min",
"968 litres/min",
"80 litres/min",
"0.125 litres/min"
],
"answer": 0,
"explain": "Rate = amount ÷ time = 88 ÷ 11 = 8 litres per minute."
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 11 cm. Find its circumference, to 1 decimal place.",
"options": [
"34.6 cm",
"138.2 cm",
"69.1 cm",
"380.1 cm"
],
"answer": 2,
"explain": "Circumference = 2πr (or πd) = 2 × π × 11 = 69.1 cm (1 d.p.)."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 inch ≈ 2.5 cm. Convert 56 inches into centimetres.",
"options": [
"22.4 cm",
"140 cm",
"672 cm",
"1,400 cm"
],
"answer": 1,
"explain": "Multiply by 2.5: 56 × 2.5 = 140 cm."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 4,218 cl into litres.",
"options": [
"42.18 litres",
"421.8 litres",
"4.218 litres",
"421,800 litres"
],
"answer": 0,
"explain": "1 litre = 100 cl. Going from cl to litres (a bigger unit) you divide by 100: 4,218 ÷ 100 = 42.18 litres."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a density of 0.9 g/cm³ and a mass of 32.4 g. Find its volume.",
"options": [
"360 cm³",
"0.0278 cm³",
"36 cm³",
"29.16 cm³"
],
"answer": 2,
"explain": "Volume = mass ÷ density = 32.4 ÷ 0.9 = 36 cm³."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 30 N acts on an area of 0.25 m². Find the pressure.",
"options": [
"60 N/m²",
"0.0083 N/m²",
"7.5 N/m²",
"120 N/m²"
],
"answer": 3,
"explain": "Pressure = force ÷ area = 30 ÷ 0.25 = 120 N/m²."
}
],
[
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 104 km into miles.",
"options": [
"166.4 miles",
"13 miles",
"520 miles",
"65 miles"
],
"answer": 3,
"explain": "104 ÷ 8 = 13 lots of 8 km. 13 × 5 = 65 miles."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 7,852 m into km.",
"options": [
"7,852,000 km",
"0.7852 km",
"78.52 km",
"7.852 km"
],
"answer": 3,
"explain": "1 km = 1,000 m. Going from m to km (a bigger unit) you divide by 1,000: 7,852 ÷ 1,000 = 7.852 km."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 7 m³ into cm³.",
"options": [
"70,000 cm³",
"7,000 cm³",
"700 cm³",
"7,000,000 cm³"
],
"answer": 3,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 7 × 1,000,000 = 7,000,000 cm³."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 12 m and a perpendicular height of 14 m. Find its area.",
"options": [
"168 m²",
"26 m²",
"42 m²",
"84 m²"
],
"answer": 3,
"explain": "Area of a triangle = ½ × base × height = ½ × 12 × 14 = 84 m²."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 30 miles at an average speed of 20 mph. How long does the journey take?",
"options": [
"1 h 45 min",
"1 h 50 min",
"2 h 30 min",
"1 h 30 min"
],
"answer": 3,
"explain": "Time = distance ÷ speed = 30 ÷ 20 = 1.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 1 h 30 min."
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 18 m. Find its area, to 1 decimal place.",
"options": [
"1,017.9 m²",
"4,071.5 m²",
"113.1 m²",
"3,197.8 m²"
],
"answer": 0,
"explain": "Area = πr² = π × 18² = π × 324 = 1,017.9 m² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 10 m by 12 m by 8 m. Find its volume.",
"options": [
"120 m³",
"592 m³",
"296 m³",
"960 m³"
],
"answer": 3,
"explain": "Volume of a cuboid = length × width × height = 10 × 12 × 8 = 960 m³."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 6.38 cm into mm.",
"options": [
"63.8 mm",
"6.38 mm",
"638 mm",
"0.638 mm"
],
"answer": 0,
"explain": "1 cm = 10 mm. Going from cm to mm (a smaller unit) you multiply by 10: 6.38 × 10 = 63.8 mm."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 76 m. One side is 23 m. How long is the other side?",
"options": [
"38 m",
"60 m",
"15 m",
"53 m"
],
"answer": 2,
"explain": "Two sides of 23 make 46. 76 − 46 = 30, which is shared between the other two sides: 30 ÷ 2 = 15 m."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 8.5 m² into cm².",
"options": [
"0.00085 cm²",
"85,000 cm²",
"8,500 cm²",
"850 cm²"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 8.5 × 10,000 = 85,000 cm². A common mistake is multiplying by 100 only."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 14:40 and arrives at 17:05. How long is this?",
"options": [
"2 h 15 min",
"1 h 25 min",
"2 h 25 min",
"3 h 25 min"
],
"answer": 2,
"explain": "Count on from 14:40: up to the next whole hour, then whole hours, then the minutes to 17:05. The total is 2 h 25 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of Y from B is 307°. What is the bearing of B from Y?",
"options": [
"127°",
"233°",
"307°",
"053°"
],
"answer": 0,
"explain": "A back bearing is 180° different. 307° is more than 180°, so subtract 180°: 127°."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 14.2 ml into cl.",
"options": [
"14.2 cl",
"142 cl",
"0.142 cl",
"1.42 cl"
],
"answer": 3,
"explain": "1 cl = 10 ml. Going from ml to cl (a bigger unit) you divide by 10: 14.2 ÷ 10 = 1.42 cl."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 12.5 km in 30 minutes. What is the average speed?",
"options": [
"25 km/h",
"0.4 km/h",
"41.7 km/h",
"6.2 km/h"
],
"answer": 0,
"explain": "Speed = distance ÷ time. Write the time in hours: 30 minutes = 0.5 hours. 12.5 ÷ 0.5 = 25 km/h."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 5 m/s into km/h.",
"options": [
"300 km/h",
"5,000 km/h",
"18 km/h",
"1.39 km/h"
],
"answer": 2,
"explain": "In 1 hour there are 3600 seconds, so 5 m/s = 5 × 3600 = 18,000 m per hour = 18 km/h. (Shortcut: × 3.6.)"
}
],
[
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 7,518 g into kg.",
"options": [
"0.7518 kg",
"75.18 kg",
"7.518 kg",
"7,518,000 kg"
],
"answer": 2,
"explain": "1 kg = 1,000 g. Going from g to kg (a bigger unit) you divide by 1,000: 7,518 ÷ 1,000 = 7.518 kg."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 20 m. Find its area, to 1 decimal place.",
"options": [
"314.2 m²",
"1,256.6 m²",
"125.7 m²",
"62.8 m²"
],
"answer": 0,
"explain": "First halve the diameter: r = 20 ÷ 2 = 10. Area = πr² = π × 10² = 314.2 m² (1 d.p.)."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 10,000. Two towns are 15 cm apart on the map. How far apart are they in real life?",
"options": [
"0.15 km",
"150 km",
"1.5 km",
"15 km"
],
"answer": 2,
"explain": "Real distance = 15 × 10,000 = 150,000 cm. Divide by 100 for metres (1,500 m) and by 1000 for km: 1.5 km."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 5 cm by 11 cm by 5 cm. Find its total surface area.",
"options": [
"330 cm²",
"275 cm²",
"135 cm²",
"270 cm²"
],
"answer": 3,
"explain": "A cuboid has 3 pairs of faces: 2 × (5×11) + 2 × (5×5) + 2 × (11×5) = 2 × (55 + 25 + 55) = 270 cm²."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 4 cm, a perpendicular height of 5 cm and a sloping side of 7 cm. Find its area.",
"options": [
"10 cm²",
"20 cm²",
"28 cm²",
"22 cm²"
],
"answer": 1,
"explain": "Area of a parallelogram = base × perpendicular height = 4 × 5 = 20 cm². The sloping side is not needed."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 20 mph for 1 hour 30 minutes. How far does it travel?",
"options": [
"13.3 miles",
"30 miles",
"26 miles",
"1,800 miles"
],
"answer": 1,
"explain": "Distance = speed × time. 1 hour 30 minutes = 1.5 hours, so 20 × 1.5 = 30 miles."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 6.1 hours in hours and minutes.",
"options": [
"6 h 10 min",
"6 h 1 min",
"6 h 54 min",
"6 h 6 min"
],
"answer": 3,
"explain": "0.1 of an hour = 0.1 × 60 = 6 minutes, so 6.1 hours = 6 h 6 min. It is not 6 h 10 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 50,000. Two places are 9 km apart in real life. How far apart are they on the map?",
"options": [
"180 cm",
"18 cm",
"1,800 cm",
"1.8 cm"
],
"answer": 1,
"explain": "9 km = 900,000 cm. Map distance = 900,000 ÷ 50,000 = 18 cm."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 22 cm. Find its area, to 1 decimal place.",
"options": [
"1,520.5 cm²",
"138.2 cm²",
"380.1 cm²",
"69.1 cm²"
],
"answer": 2,
"explain": "First halve the diameter: r = 22 ÷ 2 = 11. Area = πr² = π × 11² = 380.1 cm² (1 d.p.)."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 3 cm and 11 cm, and a perpendicular height of 4 cm. Find its area.",
"options": [
"56 cm²",
"28 cm²",
"16 cm²",
"66 cm²"
],
"answer": 1,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (3 + 11) × 4 = ½ × 14 × 4 = 28 cm²."
}
],
[
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of Y from A is 203°. What is the bearing of A from Y?",
"options": [
"337°",
"157°",
"203°",
"023°"
],
"answer": 3,
"explain": "A back bearing is 180° different. 203° is more than 180°, so subtract 180°: 023°."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 60 mph for 4 hours. How far does it travel?",
"options": [
"240 miles",
"14,400 miles",
"300 miles",
"15 miles"
],
"answer": 0,
"explain": "Distance = speed × time. 60 × 4 = 240 miles."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 7 hours 33 minutes as a decimal number of hours.",
"options": [
"4.53 hours",
"7.45 hours",
"7.55 hours",
"7.33 hours"
],
"answer": 2,
"explain": "33 minutes = 33 ÷ 60 = 0.55 of an hour, so 7 h 33 min = 7.55 hours."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 5.36 m into cm.",
"options": [
"53.6 cm",
"5,360 cm",
"0.0536 cm",
"536 cm"
],
"answer": 3,
"explain": "1 m = 100 cm. Going from m to cm (a smaller unit) you multiply by 100: 5.36 × 100 = 536 cm."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 108 litre tank in 9 minutes. What is the rate of flow?",
"options": [
"120 litres/min",
"0.083 litres/min",
"972 litres/min",
"12 litres/min"
],
"answer": 3,
"explain": "Rate = amount ÷ time = 108 ÷ 9 = 12 litres per minute."
}
],
[
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of A from B is 216°. What is the bearing of B from A?",
"options": [
"216°",
"036°",
"324°",
"144°"
],
"answer": 1,
"explain": "A back bearing is 180° different. 216° is more than 180°, so subtract 180°: 036°."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 3 cm and a height of 8 cm. Find its volume, to 1 decimal place.",
"options": [
"75.4 cm³",
"226.2 cm³",
"150.8 cm³",
"904.8 cm³"
],
"answer": 1,
"explain": "Volume of a cylinder = πr²h = π × 3² × 8 = π × 9 × 8 = 226.2 cm³ (1 d.p.)."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 0.13 cm into mm.",
"options": [
"13 mm",
"0.013 mm",
"0.13 mm",
"1.3 mm"
],
"answer": 3,
"explain": "1 cm = 10 mm. Going from cm to mm (a smaller unit) you multiply by 10: 0.13 × 10 = 1.3 mm."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 64 cm. One side is 18 cm. How long is the other side?",
"options": [
"56 cm",
"14 cm",
"32 cm",
"46 cm"
],
"answer": 1,
"explain": "Two sides of 18 make 36. 64 − 36 = 28, which is shared between the other two sides: 28 ÷ 2 = 14 cm."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 7 m, a perpendicular height of 4 m and a sloping side of 6 m. Find its area.",
"options": [
"42 m²",
"28 m²",
"14 m²",
"26 m²"
],
"answer": 1,
"explain": "Area of a parallelogram = base × perpendicular height = 7 × 4 = 28 m². The sloping side is not needed."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 11 cm long and 10 cm wide. What is its perimeter?",
"options": [
"42 cm",
"21 cm",
"110 cm",
"32 cm"
],
"answer": 0,
"explain": "Perimeter is the distance all the way round: 11 + 10 + 11 + 10 = 42 cm."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of A from X is 260°. What is the bearing of X from A?",
"options": [
"260°",
"100°",
"080°",
"280°"
],
"answer": 2,
"explain": "A back bearing is 180° different. 260° is more than 180°, so subtract 180°: 080°."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a diameter of 6 m. Find its area, to 1 decimal place.",
"options": [
"28.3 m²",
"18.8 m²",
"113.1 m²",
"37.7 m²"
],
"answer": 0,
"explain": "First halve the diameter: r = 6 ÷ 2 = 3. Area = πr² = π × 3² = 28.3 m² (1 d.p.)."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 105 miles in 3 hours. What is the average speed?",
"options": [
"0.6 mph",
"26.2 mph",
"35 mph",
"315 mph"
],
"answer": 2,
"explain": "Speed = distance ÷ time. 105 ÷ 3 = 35 mph."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 59 m/s into km/h.",
"options": [
"59,000 km/h",
"3,540 km/h",
"212.4 km/h",
"16.39 km/h"
],
"answer": 2,
"explain": "In 1 hour there are 3600 seconds, so 59 m/s = 59 × 3600 = 212,400 m per hour = 212.4 km/h. (Shortcut: × 3.6.)"
}
],
[
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 7 m, a perpendicular height of 5 m and a sloping side of 8 m. Find its area.",
"options": [
"35 m²",
"30 m²",
"17.5 m²",
"56 m²"
],
"answer": 0,
"explain": "Area of a parallelogram = base × perpendicular height = 7 × 5 = 35 m². The sloping side is not needed."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 5 miles ≈ 8 km. Convert 150 miles into kilometres.",
"options": [
"24 km",
"93.75 km",
"240 km",
"1,200 km"
],
"answer": 2,
"explain": "150 ÷ 5 = 30 lots of 5 miles. 30 × 8 = 240 km."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 11 cm by 7 cm by 4 cm. Find its total surface area.",
"options": [
"462 cm²",
"298 cm²",
"149 cm²",
"308 cm²"
],
"answer": 1,
"explain": "A cuboid has 3 pairs of faces: 2 × (11×7) + 2 × (11×4) + 2 × (7×4) = 2 × (77 + 44 + 28) = 298 cm²."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 10.3 hours in hours and minutes.",
"options": [
"10 h 42 min",
"10 h 18 min",
"10 h 30 min",
"10 h 3 min"
],
"answer": 1,
"explain": "0.3 of an hour = 0.3 × 60 = 18 minutes, so 10.3 hours = 10 h 18 min. It is not 10 h 30 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 06:40 and finishes at 12:15. How long is this?",
"options": [
"5 h 25 min",
"4 h 35 min",
"6 h 35 min",
"5 h 35 min"
],
"answer": 3,
"explain": "Count on from 06:40: up to the next whole hour, then whole hours, then the minutes to 12:15. The total is 5 h 35 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A car travels at an average speed of 45 mph for 1 hour 30 minutes. How far does it travel?",
"options": [
"67.5 miles",
"4,050 miles",
"30 miles",
"58.5 miles"
],
"answer": 0,
"explain": "Distance = speed × time. 1 hour 30 minutes = 1.5 hours, so 45 × 1.5 = 67.5 miles."
},
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 10 cm and height 7 cm. The prism is 12 cm long. Find its volume.",
"options": [
"420 cm³",
"102 cm³",
"35 cm³",
"840 cm³"
],
"answer": 0,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 10 × 7 = 35. 35 × 12 = 420 cm³."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 9.7 hours in hours and minutes.",
"options": [
"9 h 7 min",
"9 h 42 min",
"9 h 70 min",
"9 h 18 min"
],
"answer": 1,
"explain": "0.7 of an hour = 0.7 × 60 = 42 minutes, so 9.7 hours = 9 h 42 min. It is not 9 h 70 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 17 m and a perpendicular height of 8 m. Find its area.",
"options": [
"34 m²",
"25 m²",
"136 m²",
"68 m²"
],
"answer": 3,
"explain": "Area of a triangle = ½ × base × height = ½ × 17 × 8 = 68 m²."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 62 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"248 cm",
"249.6 cm",
"250 cm",
"246 cm"
],
"answer": 2,
"explain": "Upper bound of the side = 62 + 0.5 = 62.5 cm. Upper bound perimeter = 4 × 62.5 = 250 cm."
}
],
[
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "Convert 4.2 m³ into cm³.",
"options": [
"42,000 cm³",
"420 cm³",
"4,200 cm³",
"4,200,000 cm³"
],
"answer": 3,
"explain": "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1,000,000 cm³. 4.2 × 1,000,000 = 4,200,000 cm³."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 5 cm, a perpendicular height of 8 cm and a sloping side of 12 cm. Find its area.",
"options": [
"20 cm²",
"40 cm²",
"60 cm²",
"34 cm²"
],
"answer": 1,
"explain": "Area of a parallelogram = base × perpendicular height = 5 × 8 = 40 cm². The sloping side is not needed."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 1 hours 57 minutes as a decimal number of hours.",
"options": [
"1.95 hours",
"1.05 hours",
"1.17 hours",
"1.57 hours"
],
"answer": 0,
"explain": "57 minutes = 57 ÷ 60 = 0.95 of an hour, so 1 h 57 min = 1.95 hours."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 27 litre tank in 9 minutes. What is the rate of flow?",
"options": [
"30 litres/min",
"3 litres/min",
"0.333 litres/min",
"243 litres/min"
],
"answer": 1,
"explain": "Rate = amount ÷ time = 27 ÷ 9 = 3 litres per minute."
},
{
"topic": "Time",
"tier": "F",
"q": "A coach sets off at 15:15 and arrives at 21:50. How long is this?",
"options": [
"6 h 35 min",
"7 h 35 min",
"5 h 35 min",
"6 h 25 min"
],
"answer": 0,
"explain": "Count on from 15:15: up to the next whole hour, then whole hours, then the minutes to 21:50. The total is 6 h 35 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 6 m long and 7 m wide. What is its perimeter?",
"options": [
"26 m",
"13 m",
"19 m",
"42 m"
],
"answer": 0,
"explain": "Perimeter is the distance all the way round: 6 + 7 + 6 + 7 = 26 m."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 3 cm and a perpendicular height of 19 cm. Find its area.",
"options": [
"22 cm²",
"57 cm²",
"28.5 cm²",
"14.25 cm²"
],
"answer": 2,
"explain": "Area of a triangle = ½ × base × height = ½ × 3 × 19 = 28.5 cm²."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 2.2 m² into cm².",
"options": [
"220 cm²",
"22,000 cm²",
"2,200 cm²",
"0.00022 cm²"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 2.2 × 10,000 = 22,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Density",
"tier": "F",
"q": "A stone has a density of 7.8 g/cm³ and a mass of 343.2 g. Find its volume.",
"options": [
"2,676.96 cm³",
"440 cm³",
"44 cm³",
"0.0227 cm³"
],
"answer": 2,
"explain": "Volume = mass ÷ density = 343.2 ÷ 7.8 = 44 cm³."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 2,480 N acts on an area of 2 m². Find the pressure.",
"options": [
"1,240 N/m²",
"620 N/m²",
"4,960 N/m²",
"0.0008 N/m²"
],
"answer": 0,
"explain": "Pressure = force ÷ area = 2,480 ÷ 2 = 1,240 N/m²."
}
],
[
{
"topic": "Area units",
"tier": "F",
"q": "Convert 1.4 m² into cm².",
"options": [
"1,400 cm²",
"140 cm²",
"0.00014 cm²",
"14,000 cm²"
],
"answer": 3,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 1.4 × 10,000 = 14,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Density",
"tier": "F",
"q": "A block has a density of 8.9 g/cm³ and a volume of 58 cm³. Find its mass.",
"options": [
"66.9 g",
"516.2 g",
"5,162 g",
"6.52 g"
],
"answer": 1,
"explain": "Mass = density × volume = 8.9 × 58 = 516.2 g."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 250,000. Two towns are 13.5 cm apart on the map. How far apart are they in real life?",
"options": [
"3.375 km",
"337.5 km",
"3,375 km",
"33.75 km"
],
"answer": 3,
"explain": "Real distance = 13.5 × 250,000 = 3,375,000 cm. Divide by 100 for metres (33,750 m) and by 1000 for km: 33.75 km."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 9.3 hours in hours and minutes.",
"options": [
"9 h 42 min",
"9 h 18 min",
"9 h 3 min",
"9 h 30 min"
],
"answer": 1,
"explain": "0.3 of an hour = 0.3 × 60 = 18 minutes, so 9.3 hours = 9 h 18 min. It is not 9 h 30 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 14 m, a perpendicular height of 15 m and a sloping side of 19 m. Find its area.",
"options": [
"266 m²",
"105 m²",
"66 m²",
"210 m²"
],
"answer": 3,
"explain": "Area of a parallelogram = base × perpendicular height = 14 × 15 = 210 m². The sloping side is not needed."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A van travels 22.5 km at an average speed of 45 km/h. How long does the journey take?",
"options": [
"0 h 50 min",
"1 h 30 min",
"45 min",
"30 min"
],
"answer": 3,
"explain": "Time = distance ÷ speed = 22.5 ÷ 45 = 0.5 hours. 0.5 hours × 60 = 30 minutes, so the time is 30 min."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 8 litres per minute. How long does it take to fill 136 litres?",
"options": [
"1,088 minutes",
"128 minutes",
"0.059 minutes",
"17 minutes"
],
"answer": 3,
"explain": "Time = amount ÷ rate = 136 ÷ 8 = 17 minutes."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 90 kg, correct to the nearest whole number. What is the lower bound?",
"options": [
"89.9 kg",
"89 kg",
"89.5 kg",
"90.5 kg"
],
"answer": 2,
"explain": "Half of 1 is 0.5. Lower bound = 90 − 0.5 = 89.5 kg."
},
{
"topic": "Metric & imperial",
"tier": "F",
"q": "Use 1 kg ≈ 2.2 pounds. Convert 33 kg into pounds.",
"options": [
"72.6 pounds",
"726 pounds",
"15 pounds",
"35.2 pounds"
],
"answer": 0,
"explain": "Multiply by 2.2: 33 × 2.2 = 72.6 pounds."
},
{
"topic": "Time",
"tier": "F",
"q": "A train leaves at 14:30 and arrives at 20:55. How long is this?",
"options": [
"7 h 25 min",
"6 h 25 min",
"5 h 25 min",
"6 h 15 min"
],
"answer": 1,
"explain": "Count on from 14:30: up to the next whole hour, then whole hours, then the minutes to 20:55. The total is 6 h 25 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
}
],
[
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 9 m. Find its area, to 1 decimal place.",
"options": [
"56.5 m²",
"254.5 m²",
"799.4 m²",
"1,017.9 m²"
],
"answer": 1,
"explain": "Area = πr² = π × 9² = π × 81 = 254.5 m² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 4.6 hours in hours and minutes.",
"options": [
"4 h 6 min",
"4 h 60 min",
"4 h 36 min",
"4 h 24 min"
],
"answer": 2,
"explain": "0.6 of an hour = 0.6 × 60 = 36 minutes, so 4.6 hours = 4 h 36 min. It is not 4 h 60 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 10 cm and a height of 8 cm. Find its volume, to 1 decimal place.",
"options": [
"251.3 cm³",
"502.7 cm³",
"2,513.3 cm³",
"10,053.1 cm³"
],
"answer": 2,
"explain": "Volume of a cylinder = πr²h = π × 10² × 8 = π × 100 × 8 = 2,513.3 cm³ (1 d.p.)."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 19.3 cm, correct to 1 decimal place. What is the upper bound?",
"options": [
"19.35 cm",
"19.4 cm",
"19.34 cm",
"19.25 cm"
],
"answer": 0,
"explain": "Half of 0.1 is 0.05. Upper bound = 19.3 + 0.05 = 19.35 cm."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 20,000. Two towns are 14 cm apart on the map. How far apart are they in real life?",
"options": [
"0.28 km",
"2.8 km",
"28 km",
"280 km"
],
"answer": 1,
"explain": "Real distance = 14 × 20,000 = 280,000 cm. Divide by 100 for metres (2,800 m) and by 1000 for km: 2.8 km."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 200,000. Two towns are 10 cm apart on the map. How far apart are they in real life?",
"options": [
"2 km",
"200 km",
"2,000 km",
"20 km"
],
"answer": 3,
"explain": "Real distance = 10 × 200,000 = 2,000,000 cm. Divide by 100 for metres (20,000 m) and by 1000 for km: 20 km."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 9 cm, a perpendicular height of 6 cm and a sloping side of 9 cm. Find its area.",
"options": [
"27 cm²",
"36 cm²",
"81 cm²",
"54 cm²"
],
"answer": 3,
"explain": "Area of a parallelogram = base × perpendicular height = 9 × 6 = 54 cm². The sloping side is not needed."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 7.5 miles in 15 minutes. What is the average speed?",
"options": [
"0.5 mph",
"50 mph",
"1.9 mph",
"30 mph"
],
"answer": 3,
"explain": "Speed = distance ÷ time. Write the time in hours: 15 minutes = 0.25 hours. 7.5 ÷ 0.25 = 30 mph."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 12 m by 8 m by 3 m. Find its volume.",
"options": [
"312 m³",
"96 m³",
"288 m³",
"156 m³"
],
"answer": 2,
"explain": "Volume of a cuboid = length × width × height = 12 × 8 × 3 = 288 m³."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "A force of 340 N acts on an area of 0.2 m². Find the pressure.",
"options": [
"68 N/m²",
"850 N/m²",
"0.0006 N/m²",
"1,700 N/m²"
],
"answer": 3,
"explain": "Pressure = force ÷ area = 340 ÷ 0.2 = 1,700 N/m²."
}
],
[
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 10 cm by 2 cm by 7 cm. Find its total surface area.",
"options": [
"120 cm²",
"208 cm²",
"104 cm²",
"140 cm²"
],
"answer": 1,
"explain": "A cuboid has 3 pairs of faces: 2 × (10×2) + 2 × (10×7) + 2 × (2×7) = 2 × (20 + 70 + 14) = 208 cm²."
},
{
"topic": "Area",
"tier": "F",
"q": "A triangle has a base of 14 cm and a perpendicular height of 14 cm. Find its area.",
"options": [
"28 cm²",
"49 cm²",
"196 cm²",
"98 cm²"
],
"answer": 3,
"explain": "Area of a triangle = ½ × base × height = ½ × 14 × 14 = 98 cm²."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 29 cm long and 17 cm wide. What is its perimeter?",
"options": [
"46 cm",
"92 cm",
"493 cm",
"75 cm"
],
"answer": 1,
"explain": "Perimeter is the distance all the way round: 29 + 17 + 29 + 17 = 92 cm."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 14:40 and ends at 20:30. How long is this?",
"options": [
"5 h 50 min",
"4 h 50 min",
"5 h 40 min",
"6 h 50 min"
],
"answer": 0,
"explain": "Count on from 14:40: up to the next whole hour, then whole hours, then the minutes to 20:30. The total is 5 h 50 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 17 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"289 cm²",
"306.25 cm²",
"288.5 cm²",
"272.25 cm²"
],
"answer": 3,
"explain": "Lower bound of the side = 17 − 0.5 = 16.5 cm. Lower bound area = 16.5² = 272.25 cm²."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 58 cm. One side is 20 cm. How long is the other side?",
"options": [
"29 cm",
"9 cm",
"38 cm",
"36 cm"
],
"answer": 1,
"explain": "Two sides of 20 make 40. 58 − 40 = 18, which is shared between the other two sides: 18 ÷ 2 = 9 cm."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 14 kg, correct to the nearest whole number. What is the upper bound?",
"options": [
"14.5 kg",
"13.5 kg",
"14.4 kg",
"15 kg"
],
"answer": 0,
"explain": "Half of 1 is 0.5. Upper bound = 14 + 0.5 = 14.5 kg."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 6.36 kg into g.",
"options": [
"63,600 g",
"636 g",
"6,360 g",
"0.00636 g"
],
"answer": 2,
"explain": "1 kg = 1,000 g. Going from kg to g (a smaller unit) you multiply by 1,000: 6.36 × 1,000 = 6,360 g."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 4 litres per minute. How long does it take to fill 48 litres?",
"options": [
"44 minutes",
"192 minutes",
"12 minutes",
"0.083 minutes"
],
"answer": 2,
"explain": "Time = amount ÷ rate = 48 ÷ 4 = 12 minutes."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 13 mm. Find its area, to 1 decimal place.",
"options": [
"81.7 mm²",
"1,668 mm²",
"530.9 mm²",
"2,123.7 mm²"
],
"answer": 2,
"explain": "Area = πr² = π × 13² = π × 169 = 530.9 mm² (1 d.p.). Square the radius before multiplying by π."
}
],
[
{
"topic": "Time",
"tier": "F",
"q": "Write 10.8 hours in hours and minutes.",
"options": [
"10 h 80 min",
"10 h 48 min",
"10 h 8 min",
"10 h 12 min"
],
"answer": 1,
"explain": "0.8 of an hour = 0.8 × 60 = 48 minutes, so 10.8 hours = 10 h 48 min. It is not 10 h 80 min, because an hour has 60 minutes, not 100."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 25,000. Two places are 2.25 km apart in real life. How far apart are they on the map?",
"options": [
"90 cm",
"9 cm",
"900 cm",
"0.9 cm"
],
"answer": 1,
"explain": "2.25 km = 225,000 cm. Map distance = 225,000 ÷ 25,000 = 9 cm."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 11 m into mm.",
"options": [
"1,100 mm",
"110,000 mm",
"0.011 mm",
"11,000 mm"
],
"answer": 3,
"explain": "1 m = 1,000 mm. Going from m to mm (a smaller unit) you multiply by 1,000: 11 × 1,000 = 11,000 mm."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 8,900 g, correct to the nearest 100. What is the upper bound?",
"options": [
"8,850 g",
"8,940 g",
"9,000 g",
"8,950 g"
],
"answer": 3,
"explain": "Half of 100 is 50. Upper bound = 8,900 + 50 = 8,950 g."
},
{
"topic": "Volume & capacity units",
"tier": "F",
"q": "How many cm³ is 0.8 litres?",
"options": [
"800 cm³",
"800,000 cm³",
"80 cm³",
"0.0008 cm³"
],
"answer": 0,
"explain": "1 litre = 1000 cm³, so multiply by 1000: 0.8 × 1000 = 800 cm³."
}
],
[
{
"topic": "Volume",
"tier": "F",
"q": "A triangular prism has a triangular cross-section with base 2 m and height 9 m. The prism is 18 m long. Find its volume.",
"options": [
"99 m³",
"162 m³",
"324 m³",
"9 m³"
],
"answer": 1,
"explain": "Volume of a prism = area of cross-section × length. Triangle area = ½ × 2 × 9 = 9. 9 × 18 = 162 m³."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of X from Y is 095°. What is the bearing of Y from X?",
"options": [
"265°",
"085°",
"275°",
"095°"
],
"answer": 2,
"explain": "A back bearing is 180° different. 095° is less than 180°, so add 180°: 275°."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 3 m. Find its area, to 1 decimal place.",
"options": [
"18.8 m²",
"88.8 m²",
"28.3 m²",
"113.1 m²"
],
"answer": 2,
"explain": "Area = πr² = π × 3² = π × 9 = 28.3 m² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 4 kg, correct to the nearest whole number. What is the upper bound?",
"options": [
"4.5 kg",
"3.5 kg",
"5 kg",
"4.4 kg"
],
"answer": 0,
"explain": "Half of 1 is 0.5. Upper bound = 4 + 0.5 = 4.5 kg."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 32 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"129.6 cm",
"130 cm",
"128 cm",
"126 cm"
],
"answer": 1,
"explain": "Upper bound of the side = 32 + 0.5 = 32.5 cm. Upper bound perimeter = 4 × 32.5 = 130 cm."
}
],
[
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 12 kg into g.",
"options": [
"1,200 g",
"120,000 g",
"12,000 g",
"0.012 g"
],
"answer": 2,
"explain": "1 kg = 1,000 g. Going from kg to g (a smaller unit) you multiply by 1,000: 12 × 1,000 = 12,000 g."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 2.9 m² into cm².",
"options": [
"2,900 cm²",
"29,000 cm²",
"0.00029 cm²",
"290 cm²"
],
"answer": 1,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 2.9 × 10,000 = 29,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 90 miles in 1 hour 30 minutes. What is the average speed?",
"options": [
"135 mph",
"69.2 mph",
"1 mph",
"60 mph"
],
"answer": 3,
"explain": "Speed = distance ÷ time. Write the time in hours: 1 hour 30 minutes = 1.5 hours. 90 ÷ 1.5 = 60 mph."
},
{
"topic": "Surface area",
"tier": "F",
"q": "A cuboid measures 4 cm by 6 cm by 4 cm. Find its total surface area.",
"options": [
"96 cm²",
"128 cm²",
"64 cm²",
"144 cm²"
],
"answer": 1,
"explain": "A cuboid has 3 pairs of faces: 2 × (4×6) + 2 × (4×4) + 2 × (6×4) = 2 × (24 + 16 + 24) = 128 cm²."
},
{
"topic": "Area",
"tier": "F",
"q": "A trapezium has parallel sides of 11 cm and 14 cm, and a perpendicular height of 10 cm. Find its area.",
"options": [
"250 cm²",
"125 cm²",
"770 cm²",
"15 cm²"
],
"answer": 1,
"explain": "Area of a trapezium = ½ × (a + b) × h = ½ × (11 + 14) × 10 = ½ × 25 × 10 = 125 cm²."
}
],
[
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of X from Q is 278°. What is the bearing of Q from X?",
"options": [
"262°",
"278°",
"082°",
"098°"
],
"answer": 3,
"explain": "A back bearing is 180° different. 278° is more than 180°, so subtract 180°: 098°."
},
{
"topic": "Compound measures",
"tier": "F",
"q": "A tap fills a 180 litre tank in 18 minutes. What is the rate of flow?",
"options": [
"0.1 litres/min",
"3,240 litres/min",
"10 litres/min",
"100 litres/min"
],
"answer": 2,
"explain": "Rate = amount ÷ time = 180 ÷ 18 = 10 litres per minute."
},
{
"topic": "Metric units: length",
"tier": "F",
"q": "Convert 471 mm into cm.",
"options": [
"4.71 cm",
"47.1 cm",
"471 cm",
"4,710 cm"
],
"answer": 1,
"explain": "1 cm = 10 mm. Going from mm to cm (a bigger unit) you divide by 10: 471 ÷ 10 = 47.1 cm."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 4 cm, a perpendicular height of 13 cm and a sloping side of 16 cm. Find its area.",
"options": [
"40 cm²",
"64 cm²",
"26 cm²",
"52 cm²"
],
"answer": 3,
"explain": "Area of a parallelogram = base × perpendicular height = 4 × 13 = 52 cm². The sloping side is not needed."
},
{
"topic": "Time",
"tier": "F",
"q": "A film starts at 07:00 and finishes at 09:50. How long is this?",
"options": [
"2 h 40 min",
"3 h 50 min",
"1 h 50 min",
"2 h 50 min"
],
"answer": 3,
"explain": "Count on from 07:00: up to the next whole hour, then whole hours, then the minutes to 09:50. The total is 2 h 50 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
}
],
[
{
"topic": "Compound measures",
"tier": "F",
"q": "Water flows into a tank at 6 litres per minute. How long does it take to fill 96 litres?",
"options": [
"576 minutes",
"0.062 minutes",
"16 minutes",
"90 minutes"
],
"answer": 2,
"explain": "Time = amount ÷ rate = 96 ÷ 6 = 16 minutes."
},
{
"topic": "Circles",
"tier": "F",
"q": "A circle has a radius of 7 mm. Find its area, to 1 decimal place.",
"options": [
"483.6 mm²",
"615.8 mm²",
"153.9 mm²",
"44 mm²"
],
"answer": 2,
"explain": "Area = πr² = π × 7² = π × 49 = 153.9 mm² (1 d.p.). Square the radius before multiplying by π."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 12 m² into cm².",
"options": [
"120,000 cm²",
"12,000 cm²",
"1,200 cm²",
"0.0012 cm²"
],
"answer": 0,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 12 × 10,000 = 120,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Time",
"tier": "F",
"q": "Write 1 hours 36 minutes as a decimal number of hours.",
"options": [
"1.6 hours",
"1.4 hours",
"1.36 hours",
"0.96 hours"
],
"answer": 0,
"explain": "36 minutes = 36 ÷ 60 = 0.6 of an hour, so 1 h 36 min = 1.6 hours."
},
{
"topic": "Time",
"tier": "F",
"q": "A shift starts at 06:45 and ends at 10:05. How long is this?",
"options": [
"3 h 10 min",
"4 h 20 min",
"2 h 20 min",
"3 h 20 min"
],
"answer": 3,
"explain": "Count on from 06:45: up to the next whole hour, then whole hours, then the minutes to 10:05. The total is 3 h 20 min. Don't subtract the times like decimals: there are 60 minutes in an hour."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 58 cm. One side is 12 cm. How long is the other side?",
"options": [
"17 cm",
"29 cm",
"46 cm",
"68 cm"
],
"answer": 0,
"explain": "Two sides of 12 make 24. 58 − 24 = 34, which is shared between the other two sides: 34 ÷ 2 = 17 cm."
},
{
"topic": "Density",
"tier": "F",
"q": "A piece of metal has a mass of 93.6 g and a volume of 78 cm³. Find its density.",
"options": [
"12 g/cm³",
"1.2 g/cm³",
"7,300.8 g/cm³",
"0.833 g/cm³"
],
"answer": 1,
"explain": "Density = mass ÷ volume = 93.6 ÷ 78 = 1.2 g/cm³."
},
{
"topic": "Metric units: mass",
"tier": "F",
"q": "Convert 3,139 g into kg.",
"options": [
"3,139,000 kg",
"31.39 kg",
"3.139 kg",
"0.3139 kg"
],
"answer": 2,
"explain": "1 kg = 1,000 g. Going from g to kg (a bigger unit) you divide by 1,000: 3,139 ÷ 1,000 = 3.139 kg."
},
{
"topic": "Bounds & accuracy",
"tier": "F",
"q": "A measurement is 10.8 kg, correct to 1 decimal place. What is the upper bound?",
"options": [
"10.75 kg",
"10.84 kg",
"10.85 kg",
"10.9 kg"
],
"answer": 2,
"explain": "Half of 0.1 is 0.05. Upper bound = 10.8 + 0.05 = 10.85 kg."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 250 cm² into m².",
"options": [
"2.5 m²",
"0.025 m²",
"2,500,000 m²",
"0.25 m²"
],
"answer": 1,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 250 ÷ 10,000 = 0.025 m²."
}
],
[
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 25,000. Two towns are 11.5 cm apart on the map. How far apart are they in real life?",
"options": [
"28.75 km",
"0.2875 km",
"287.5 km",
"2.875 km"
],
"answer": 3,
"explain": "Real distance = 11.5 × 25,000 = 287,500 cm. Divide by 100 for metres (2,875 m) and by 1000 for km: 2.875 km."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 18 m long and 16 m wide. What is its perimeter?",
"options": [
"68 m",
"288 m",
"52 m",
"34 m"
],
"answer": 0,
"explain": "Perimeter is the distance all the way round: 18 + 16 + 18 + 16 = 68 m."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cylinder has a radius of 3 m and a height of 6 m. Find its volume, to 1 decimal place.",
"options": [
"113.1 m³",
"56.5 m³",
"169.6 m³",
"678.6 m³"
],
"answer": 2,
"explain": "Volume of a cylinder = πr²h = π × 3² × 6 = π × 9 × 6 = 169.6 m³ (1 d.p.)."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 390 cm² into m².",
"options": [
"0.039 m²",
"0.39 m²",
"3,900,000 m²",
"3.9 m²"
],
"answer": 0,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 390 ÷ 10,000 = 0.039 m²."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 40 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"160 cm",
"161.6 cm",
"162 cm",
"158 cm"
],
"answer": 2,
"explain": "Upper bound of the side = 40 + 0.5 = 40.5 cm. Upper bound perimeter = 4 × 40.5 = 162 cm."
}
],
[
{
"topic": "Speed, distance, time",
"tier": "F",
"q": "A cyclist travels 210 miles in 3 hours 30 minutes. What is the average speed?",
"options": [
"735 mph",
"1 mph",
"60 mph",
"63.6 mph"
],
"answer": 2,
"explain": "Speed = distance ÷ time. Write the time in hours: 3 hours 30 minutes = 3.5 hours. 210 ÷ 3.5 = 60 mph."
},
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle is 6 cm long and 13 cm wide. What is its perimeter?",
"options": [
"38 cm",
"19 cm",
"78 cm",
"25 cm"
],
"answer": 0,
"explain": "Perimeter is the distance all the way round: 6 + 13 + 6 + 13 = 38 cm."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 230 cm² into m².",
"options": [
"2,300,000 m²",
"2.3 m²",
"0.023 m²",
"0.23 m²"
],
"answer": 2,
"explain": "1 m² = 100 × 100 = 10,000 cm², so divide by 10,000: 230 ÷ 10,000 = 0.023 m²."
},
{
"topic": "Compound measures",
"tier": "H",
"q": "Convert 29 m/s into km/h.",
"options": [
"8.06 km/h",
"104.4 km/h",
"1,740 km/h",
"29,000 km/h"
],
"answer": 1,
"explain": "In 1 hour there are 3600 seconds, so 29 m/s = 29 × 3600 = 104,400 m per hour = 104.4 km/h. (Shortcut: × 3.6.)"
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 42 cm, correct to the nearest cm. What is the upper bound for its perimeter?",
"options": [
"170 cm",
"166 cm",
"169.6 cm",
"168 cm"
],
"answer": 0,
"explain": "Upper bound of the side = 42 + 0.5 = 42.5 cm. Upper bound perimeter = 4 × 42.5 = 170 cm."
}
],
[
{
"topic": "Perimeter",
"tier": "F",
"q": "A rectangle has a perimeter of 50 cm. One side is 17 cm. How long is the other side?",
"options": [
"32 cm",
"25 cm",
"33 cm",
"8 cm"
],
"answer": 3,
"explain": "Two sides of 17 make 34. 50 − 34 = 16, which is shared between the other two sides: 16 ÷ 2 = 8 cm."
},
{
"topic": "Scale & maps",
"tier": "F",
"q": "A map has a scale of 1 : 500,000. Two towns are 14.5 cm apart on the map. How far apart are they in real life?",
"options": [
"7,250 km",
"7.25 km",
"72.5 km",
"725 km"
],
"answer": 2,
"explain": "Real distance = 14.5 × 500,000 = 7,250,000 cm. Divide by 100 for metres (72,500 m) and by 1000 for km: 72.5 km."
},
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 9,168 ml into litres.",
"options": [
"0.9168 litres",
"9.168 litres",
"91.68 litres",
"9,168,000 litres"
],
"answer": 1,
"explain": "1 litre = 1,000 ml. Going from ml to litres (a bigger unit) you divide by 1,000: 9,168 ÷ 1,000 = 9.168 litres."
},
{
"topic": "Bearings",
"tier": "F",
"q": "The bearing of B from P is 201°. What is the bearing of P from B?",
"options": [
"201°",
"021°",
"159°",
"339°"
],
"answer": 1,
"explain": "A back bearing is 180° different. 201° is more than 180°, so subtract 180°: 021°."
},
{
"topic": "Bounds & accuracy",
"tier": "H",
"q": "The side of a square is 9 cm, correct to the nearest cm. What is the lower bound for its area?",
"options": [
"80.5 cm²",
"90.25 cm²",
"81 cm²",
"72.25 cm²"
],
"answer": 3,
"explain": "Lower bound of the side = 9 − 0.5 = 8.5 cm. Lower bound area = 8.5² = 72.25 cm²."
}
],
[
{
"topic": "Metric units: capacity",
"tier": "F",
"q": "Convert 910.7 cl into litres.",
"options": [
"91.07 litres",
"9.107 litres",
"0.9107 litres",
"91,070 litres"
],
"answer": 1,
"explain": "1 litre = 100 cl. Going from cl to litres (a bigger unit) you divide by 100: 910.7 ÷ 100 = 9.107 litres."
},
{
"topic": "Volume",
"tier": "F",
"q": "A cuboid measures 7 cm by 6 cm by 3 cm. Find its volume.",
"options": [
"126 cm³",
"42 cm³",
"162 cm³",
"81 cm³"
],
"answer": 0,
"explain": "Volume of a cuboid = length × width × height = 7 × 6 × 3 = 126 cm³."
},
{
"topic": "Area units",
"tier": "F",
"q": "Convert 2.3 m² into cm².",
"options": [
"0.00023 cm²",
"2,300 cm²",
"230 cm²",
"23,000 cm²"
],
"answer": 3,
"explain": "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm². 2.3 × 10,000 = 23,000 cm². A common mistake is multiplying by 100 only."
},
{
"topic": "Area",
"tier": "F",
"q": "A parallelogram has a base of 20 m, a perpendicular height of 8 m and a sloping side of 9 m. Find its area.",
"options": [
"80 m²",
"180 m²",
"58 m²",
"160 m²"
],
"answer": 3,
"explain": "Area of a parallelogram = base × perpendicular height = 20 × 8 = 160 m². The sloping side is not needed."
},
{
"topic": "Similar shapes",
"tier": "H",
"q": "Two shapes are similar. The lengths of the larger shape are 3 times those of the smaller one. The smaller shape has an area of 16 cm². Find the area of the larger shape.",
"options": [
"48 cm²",
"144 cm²",
"432 cm²",
"96 cm²"
],
"answer": 1,
"explain": "Length scale factor 3 → area scale factor 3² = 9. 16 × 9 = 144 cm²."
}
]
]
};
