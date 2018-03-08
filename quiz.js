
'use strict'

const levelLength = 10;

const shuffle = function (level) {
    let array = data[level]; //.slice((level - 1) * levelLength, level * levelLength);
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};




const data_difficult = [
  {
   "que":"Who was the first pre-Socratic philosopher to suggest that matter could neither be created nor destroyed?",
   "ans":"Parmenides"
  },
  {
   "que":"In 1729 AD, Pieter Van Musschenbroek used the term ‘PHYSICS’ for the first time. What was the subject called so far?",
   "ans":"Natural philosophy"
  },
  {
   "que":"Who in 1231 was the first to describe the science of optics?",
   "ans":"Robert Grosseteste"
  },
  {
   "que":"Who in 1808 discovered polarization of light and introduced the term ‘Polarization’?",
   "ans":"Etienne-Louis Malus"
  },
  {
   "que":" The first scientist to apply scientific reasoning to cosmology was Rene Descartes. What was his theory called?",
   "ans":"Vortex Theory"
  },
  {
   "que":"Who was the first to attack Newton’s Corpuscular theory of light?",
   "ans":"Thomas Young"
  },
  {
   "que":"Who was the first person to design models of flying machine?",
   "ans":"Leonardo da Vinci"
  },
  {
   "que":"Hydrodynamica gave explanation of Bernoulli’s theorem in 1738. Who was the first to suggest this theorem?",
   "ans":"Daniel Bernoulli"
  },
  {
   "que":"Which famous Danish physicist in 1675 measured the speed of light?",
   "ans":"Romer"
  },
  {
   "que":"What did Sir William Herschel discover in 1800?",
   "ans":"Infra-red radiation"
  },
  {
   "que":"Who first gave the concept of ‘Atom’?",
   "ans":"Kanada"
  },
  {
   "que":"The energy released from the sun and the other stars is due to what?",
   "ans":"Nuclear fusion"
  },
  {
   "que":"Which force is responsible to keep the atomic nuclei together?",
   "ans":"Nuclear force "
  },
  {
   "que":"What are Alpha particles?",
   "ans":"Helium nucleus"
  },
  {
   "que":"Where is installed the most powerful accelerator, the atom smasher?",
   "ans":"Illinois, USA"
  },
  {
   "que":"X-rays consists of what?",
   "ans":"Electromagnetic radiations"
  },
  {
   "que":"Who discovered positron?",
   "ans":"Anderson"
  },
  {
   "que":"What is called the law of equivalence of mass and energy?",
   "ans":"Einstein’s law"
  },
  {
   "que":"What is known as, no two fermions can exist in identical quantum states?",
   "ans":" Pauli Exclusion Principle"
  },
  {
   "que":" In which form is energy radiated from a source?",
   "ans":"Photons"
  },
  {
   "que":"what must we consider to explain fine structure of the spectrum of hydrogen atom?",
   "ans":"Spin angular momentum"
  },
  {
   "que":"In which color, wavelength of 5450 A0 occurs?",
   "ans":"Green"
  },
  {
   "que":"What is called an electron’s movement around the nucleus in circular orbits?",
   "ans":" Stationary orbits"
  },
  {
   "que":"What is the total energy of an electron in atom?",
   "ans":"negative"
  },
  {
   "que":"Which source is associated with a line emission spectrum?",
   "ans":"Neon street sign"
  },
  {
   "que":"Hydrogen atoms are excited from ground state of principal quantum number 4. How many number of spectral lines are observed?",
   "ans":""
  },
  {
   "que":"Which is the main source of energy to earth?",
   "ans":"Sun"
  },
  {
   "que":"One H.P is equal to what?",
   "ans":"746 Watts"
  },
  {
   "que":"What is called the capacity to do work?",
   "ans":"Energy"
  },
  {
   "que":"What is called the energy possessed by a body because of its velocity?",
   "ans":"Kinetic energy"
  },
  {
   "que":" What is called the energy possessed by a body because of its position?",
   "ans":"Potential"
  },
  {
   "que":"In the interior of the sun, which reaction takes place?",
   "ans":"Nuclear fusion"
  },
  {
   "que":" In the sun, which is converted in to energy?",
   "ans":"Matter"
  },
  {
   "que":"In the core of the sun, hydrogen nuclei fuse together to form which nuclei?",
   "ans":"Helium"
  },
  {
   "que":"What is called a device which reduces human effort?",
   "ans":"Machine"
  },
  {
   "que":"What is called the rigid code that can rotate about a fixe point, fulcrum?",
   "ans":"Lever"
  },
  {
   "que":"What is called the force overcome by a lever?",
   "ans":"Resistance"
  },
  {
   "que":"In the first order of levers, what is between the resistance and the effort?",
   "ans":"Fulcrum"
  },
  {
   "que":"What is called the perpendicular distance from effort to fulcrum?",
   "ans":"Effort arm"
  },
  {
   "que":"Which phenomenon is best explained by the particle nature of light?",
   "ans":"The photoelectric effect"
  },
  {
   "que":"The energy of a photon varies directly with its?",
   "ans":"frequency"
  },
  {
   "que":"Which color of light has the greatest energy per photon?",
   "ans":"violet"
  },
  {
   "que":"Which  instrument is  commonly used for measurement of atmospheric pressure?",
   "ans":"Barometer"
  },
  {
   "que":"State the law of conservation of energy?",
   "ans":"Energy can neither be created nor destroyed"
  },
  {
   "que":"What is the shape of s-orbital?",
   "ans":"Spherical"
  },
  {
   "que":"Who proposed elliptical orbits?",
   "ans":"Sommerfeld"
  },
  {
   "que":"How many atomic orbitals are known? What are they?",
   "ans":"Four S, p, d, and f"
  },
  {
   "que":"How many orbitals are there in p-subshell?",
   "ans":"Three"
  },
  {
   "que":"How many electrons can be accommodated in the M shell?",
   "ans":"18"
  },
  {
   "que":"Which atom has only one electron?",
   "ans":"hydrogen"
  },
  {
   "que":"What is the maximum number of electrons in principal energy level?",
   "ans":"K-2, L-8, M-18, N-32"
  },
  {
   "que":"What is the atomic number of the element which has 3 electrons in its M shell?",
   "ans":"13"
  },
  {
   "que":"The path of the electron according to Niels Bohr’s theory was called what?",
   "ans":"Orbit shell"
  },
  {
   "que":"The element with the minimum atomic number having 8 electrons in the outer most shell is what?",
   "ans":"Neon"
  },
  {
   "que":"According to which theory Electron is looked upon as a cloud of negative charge?",
   "ans":"Wave-mechanics theory"
  },
  {
   "que":"The electronic configuration of an atom is 2, 8, and 2. What is its atomic number?",
   "ans":"12"
  },
  {
   "que":" What are the integers used to express the energy, posit, etc. of an electron?",
   "ans":"Quantum numbers"
  },
  {
   "que":"The steady state from which no spontaneous change takes place is called what?",
   "ans":"Equilibrium"
  },
  {
   "que":"The chemical reactions which never go to completion are called what?",
   "ans":"Reversible reactions"
  },
  {
   "que":"What is the color of Phenolphthalein in sodium hydroxide solution?",
   "ans":"Pink"
  },
  {
   "que":"When temperature is decreased the speed of the reaction increases. Which was the action?",
   "ans":"Exothermic"
  },
  {
   "que":"What must be constant for the system to reach equilibrium?",
   "ans":"Temperature"
  },
  {
   "que":"Name the reactant used in excess in contact process?",
   "ans":"Air"
  },
  {
   "que":"What is the pressure used in the manufacture of ammonia?",
   "ans":"1000 atmospheres"
  },
  {
   "que":"What is the color of solution obtained when hydrolysis of ferric chloride takes place?",
   "ans":"Chocolate"
  },
  {
   "que":"What is the name of process used for manufacturing ammonia direct from Nitrogen and hydrogen elements?",
   "ans":"Haber process"
  },
  {
   "que":"What accelerate the forward and backward reactions equally in a reversible reaction?",
   "ans":"Catalyst"
  },
  {
   "que":"Which is the most suitable temperature for the production of sulfur trioxide from sulfur dioxide and oxygen?",
   "ans":"450° C"
  },
  {
   "que":"Who put forward a principle relating to the equilibrium system?",
   "ans":"Le Chatelier"
  },
  {
   "que":" Which substance  conducts with  electricity with the help of the ions present in them ?",
   "ans":"Electrolytes"
  },
  {
   "que":"Which is the best conductor of electric current?",
   "ans":"Silver"
  },
  {
   "que":"Who gave the scientific explanation to the electrolytic reaction?",
   "ans":"Faraday"
  },
  {
   "que":"Which do not conduct electricity?",
   "ans":"Non-Metals"
  },
  {
   "que":"Which compound produced by anodic oxidation?",
   "ans":"Potassium permanganate"
  },
  {
   "que":"When sodium chloride solution is electrolyzed what is obtained at the anode?",
   "ans":"Chlorine"
  },
  {
   "que":" The atoms or groups of atoms that carry electrical charge are called what?",
   "ans":"Ions"
  },
  {
   "que":"Which is obtained at the cathode when sodium chloride solution is electrolyzed?",
   "ans":"Hydrogen"
  },
  {
   "que":"Electrolytic refining is used to refine what?",
   "ans":"Copper"
  },
  {
   "que":"Which electrode is known as The negative electrode ?",
   "ans":"Cathode"
  },
  {
   "que":"How many elements are there in the sixth period?",
   "ans":"32"
  },
  {
   "que":"What is the total number of inner transition metals?",
   "ans":"28"
  },
  {
   "que":"The symbol Sb stands for stibnum or stibnite. What is the modern name of this element?",
   "ans":"Antimony"
  },
  {
   "que":"What is the most common isotope of hydrogen?",
   "ans":"Protium"
  },
  {
   "que":"Who is credited with the invention of the modern periodic table?",
   "ans":"Mendeleev"
  },
  {
   "que":"The symbol Ag stands for which element?",
   "ans":"Silver"
  },
  {
   "que":"What do you call an atom that has more protons than electrons?",
   "ans":"a cation"
  },
  {
   "que":"How many groups are there in the modern periodic table?",
   "ans":"Eighteen"
  },
  {
   "que":"The comprehensive classification of elements by Mendeleev was on the basis of the law known as what?",
   "ans":"The periodic law"
  },
  {
   "que":"PC/AT stands for?",
   "ans":"personal computers advanced technology"
  },
  {
   "que":"What is the Speed of CPU in the case of Minicomputers?",
   "ans":"20-50 MIPS"
  },
  {
   "que":"What is the Speed of CPU in the case of Micro computers?",
   "ans":"1-10 MIPS"
  },
  {
   "que":"What is the Speed of CPU in the case of Mainframe computers?",
   "ans":"30-100 MIPS"
  },
  {
   "que":"What is the Speed of CPU in the case of supercomputers?",
   "ans":"400-10000 MIPS"
  },
  {
   "que":"What is the Word length of Microcomputers?",
   "ans":"8-32 bit"
  },
  {
   "que":"what is the Word length of Mainframe computers?",
   "ans":"48-64 bit"
  },
  {
   "que":"what is the Word length of Super computers?",
   "ans":"64 or 96 bit"
  },
  {
   "que":"Which standard protocol  describes communication between computers, synthesizers and musical instrument ?",
   "ans":"MIDI"
  },
  {
   "que":"What is The basis of internet?",
   "ans":"TCP/IP"
  },
  {
   "que":"FORTRAN is acronym for?",
   "ans":"Formula Translator"
  },
  {
   "que":"A method is used to process information in which the first item in the list is processed first is?",
   "ans":"FIFO"
  },
  {
   "que":"What refers to the processed of creating messages and answers?",
   "ans":"Composition"
  },
  {
   "que":"What are special test messages consisting of empty envelopes?",
   "ans":"Probes"
  },
  {
   "que":"Which beam is commonly used for optical data storage?",
   "ans":"Laser"
  },
  {
   "que":"ISDN stands for?",
   "ans":"Integrated Services Digital Networks"
  },
  {
   "que":"In numeric pagers what type of messages can be received?",
   "ans":"Numeric type"
  },
  {
   "que":"In operator assisted paging systems who act as a link between the calling party and the called party?",
   "ans":"Operator"
  },
  {
   "que":"When was the first paging system used?",
   "ans":"1957"
  },
  {
   "que":" From which  Greek word morphing term comes?",
   "ans":"Morphe"
  },
  {
   "que":"The sophisticated and impressive use of computer graphics is the production of images that can be manipulated in three dimensions. This technique is called?",
   "ans":"3D Animation"
  },
  {
   "que":" Which computer is used for computer graphics imaging?",
   "ans":"Silicon computer"
  },
  {
   "que":"The menu which is used for pointing to the selection of colors is called?",
   "ans":"Palette"
  },
  {
   "que":"Which is the biggest annoyance in computer generated modeling?",
   "ans":"Aliasing"
  },
  {
   "que":"What is the reason for aliasing problem?",
   "ans":"Low resolution"
  },
  {
   "que":"Who is considered as the father of industrial robot?",
   "ans":"Joseph Engelberger"
  },
  {
   "que":"Which part controls the movement of robots hand?",
   "ans":"Manipulator"
  },
  {
   "que":"The Expert system was introduced in which year?",
   "ans":"1958"
  },
  {
   "que":"The expert system was developed by which university?",
   "ans":"Stanford"
  },
  {
   "que":"What was The first expert system ?",
   "ans":"DENDRAL"
  },
  {
   "que":"In which field the expert system has application areas of A.I?",
   "ans":"Artificial intelligence"
  },
  {
   "que":"Which system has been designed to assist geologist in mineral exploration?",
   "ans":"PROSPECTOR"
  },
  {
   "que":"Who is the father of Artificial Intelligence?",
   "ans":"Allen Turing"
  },
  {
   "que":"Which is the first test programming language?",
   "ans":"IPL"
  },
  {
   "que":"LISP is acronym for?",
   "ans":"List Programming Language"
  }
];

const data_easy = [
    {
        "que":"How long does it take for light from the Sun to reach Earth?"
       ,"ans":"8 minutes and 20 seconds"
       ,"more":"Photons emitted from the surface of the Sun travel across the vacuum of space to reach our eyes."
     },
     {
        "que":"How many time zones are there in the world?"
       ,"ans":"24"
       ,"more":"There are 24 time zones, maybe more. Some time zones are only 30-45 minutes apart."
     },
     {
        "que":"Which planet has the most moons?"
       ,"ans":"Jupiter"
       ,"more":"Jupiter has at least 67 known moons currently, and is the 5th planet from the Sun."
     },
     {
        "que":"An octopus can fit through any hole larger than its what?"
       ,"ans":"Beak"
       ,"more":"An octopus has two eyes and four pairs of arms... it is bilaterally symmetric. It has a beak, with its mouth at the center point of the arms."
     },
     {
        "que":"What is a group of whales called?"
       ,"ans":"A Pod"
       ,"more":" A group of whales is commonly called a pod, a school or a gam."
     },
     {
        "que":"What is the first element on the periodic table?"
       ,"ans":"Hydrogen"
       ,"more":" There are 118 elements on the periodic table, Hydrogen being the first one listed."
     },
     {
        "que":"What is the chemical symbol for table salt?"
       ,"ans":"NaCl"
       ,"more":"Sodium chloride (also known as salt or halite), is an ionic compound representing a 1:1 ratio of sodium and chloride ions."
     },
     {
        "que":"At what temperature are Celsius and Fahrenheit equal?"
       ,"ans":"-40 degrees"
       ,"more":" To find the temperature when both are equal, use an algebra trick and just set ºF = ºC and solve one of the equations."
     },
     {
        "que":"What is the chemical formula for ozone?"
       ,"ans":"O3"
       ,"more":"Ozone, also known as trioxygen, is an inorganic molecule. It is a pale blue gas with a pungent smell."
     },
     {
        "que":"The theory that Earth's outer shell is divided into gliding plates over the mantle is know as what?"
       ,"ans":"Plate Tectonics"
       ,"more":"One famous transform boundary is the San Jose fault line in California. Scientist can now track the movement of the plates through GPS."
     },
     {
        "que":"What is the first organisms to grow back after fire?"
       ,"ans":"Moss"
       ,"more":"Moss grows and spreads extremely easily. For moss to grow, it requires a lot of moisture."
     },
     {
        "que":"What was the first planet to be discovered using the telescope?"
       ,"ans":"Uranus"
       ,"more":"Uranus is the seventh planet from the Sun. One day on Uranus last about 17 hours and 14 minutes."
     },
     {
        "que":"Oncology focuses on what disease?"
       ,"ans":"Cancer"
       ,"more":"Oncology is the study and treatment of tumors. Every year, 12.4 million people discover they have cancer."
     },
     {
        "que":"What is the medical term for low blood sugar?"
       ,"ans":"Hypoglycemia"
       ,"more":"Hypoglycemia is low blood sugar, which is the body's main source of energy."
     },
     {
        "que":"What is an infant whale called?"
       ,"ans":"Calf"
       ,"more":"An infant whale is a calf, his mother is a cow, and his father is a bull. Together, the family is a pod."
     },
     {
        "que":"At what wind speed does a Tropical storm turn into a Hurricane?"
       ,"ans":"74 MPH "
       ,"more":"There are four different levels of hurricanes. A level 2 hurricane being the tamest, and a level 5 being the worst."
     },
     {
        "que":"What does the \"N\" stand for in NATO?"
       ,"ans":"North"
       ,"more":"NATO stand for North Atlantic Treaty Organization."
     },
     {
        "que":"What is the most commonly diagnosed cancer in men?"
       ,"ans":"Prostate "
       ,"more":"There are more than 200,000 cases of prostate cancer in the U.S. alone. It mostly effects men over the age of 60."
     },
     {
        "que":"The average human body contains how many pints of blood?"
       ,"ans":"10 "
       ,"more":"The average human body contains around 10 pints of blood. Men usually have more blood than women, averaging 10-11 pints of blood."
     },
     {
        "que":"How many colors are there in a rainbow?"
       ,"ans":"7"
       ,"more":"The colors in a rainbow are red, orange, yellow, green, blue, indigo and violet. The acronym ROYGBIV is used to remember all of the colors."
     },
     {
        "que":"Which bone is the longest bone in the human body?"
       ,"ans":"Femur"
       ,"more":"The Femur is not only the longest bone in the human body, it is also the strongest bone. The Femur bone is located in the thigh."
     },
     {
        "que":"An animal that lives part of its life on land and part in water is known as what?"
       ,"ans":"Amphibian "
       ,"more":" Amphibians usually have soft, moist skin that is protected by a layer of mucus. They also tend to live in moist places or by a body of water. Examples of Amphibians would be frogs and toads."
     },
     {
        "que":"Which animal has the longest tongue relative to its total size?"
       ,"ans":"Chameleon"
       ,"more":"The Chameleon's tongue can stretch between 1.5 to two times it's body length. It uses this tongue to catch insects on nearby branches."
     },
     {
        "que":"Diamonds are made up almost entirely of what element?"
       ,"ans":"Carbon"
       ,"more":"Scientists speculate that diamonds originated from carbon dioxide atoms 100 miles below the Earth's surface more than a billion years ago."
     },
     {
        "que":"Which bird is often associated with delivering babies?"
       ,"ans":"Stork"
       ,"more":"Storks are large birds with long legs, long necks, and long bills. This association came from a German folk tail that said storks found babies in caves or marshes and brought them to households in a basket."
     },
     {
        "que":"In the United States, where can alligators and crocodiles be found together in the wild?"
       ,"ans":"South Florida "
       ,"more":"Although crocodiles and alligators look very similar, there is actually a difference. Alligators have wider, rounder shaped snouts, while crocodile snouts are pointed and V-shaped."
     },
     {
        "que":"What is the world's largest active volcano?"
       ,"ans":"Mauna Loa "
       ,"more":" Mauna Loa is located in Hawaii and is one of the five volcanoes that forms the island. The last time Mauna Loa erupted was April 15, 1984."
     },
     {
        "que":"What is the largest internal organ of the human body?"
       ,"ans":"Liver"
       ,"more":"The Liver isn't only the biggest organ, it is also the heaviest. The Liver weighs about 3.5 pounds on average. This is on average about 1/36 of your total body weight."
     },
     {
        "que":"Rod Serling created what famous science fiction television show?"
       ,"ans":"The Twilight Zone"
       ,"more":"Rod Serling wrote over 80 episodes of the original show's 150-plus episode run. \"The Twilight Zone\" came out in 1959."
     },
     {
        "que":"How many hearts does an octopus have?"
       ,"ans":"3"
       ,"more":" Octopuses have three hearts; two branchial hearts that pump blood through each of the gills. The third heart is a systemic heart that pumps blood through the whole body."
     },
     {
        "que":"What animal has the largest ears?"
       ,"ans":"African Elephant "
       ,"more":"An African elephant's ears can grow to be six feet long and four feet wide. Elephants use their giant ears to cool themselves down in warm weather."
     },
     {
        "que":"What planet in our solar system has the most gravity?"
       ,"ans":"Jupiter"
       ,"more":"A person who weighs 100 pounds on Earth would weigh about 236 pounds on Jupiter."
     },
     {
        "que":"What animal has the largest brain?"
       ,"ans":"Sperm Whale "
       ,"more":"The Sperm Whales brain weighs about 17 pounds, which is about five times the size of a human brain."
     },
     {
        "que":"Which two elements on the periodic table are liquids at room temperature?"
       ,"ans":"Mercury and Bromine "
       ,"more":"Mercury and Bromine are the only two elements on the periodic table that are liquid at room temperature. These elements are liquids because the intermolecular forces are strong enough so that it does not vaporize."
     },
     {
        "que":"What is a meteor called when it reaches Earth's surface?"
       ,"ans":"Meteorite "
       ,"more":"Millions of materials from space enter Earths atmosphere everyday, but most is burned up before it reaches Earth's surface. The heat caused by friction is what causes Meteorite's to glow in the sky."
     },
     {
        "que":"What is the fastest fish in the Ocean?"
       ,"ans":"Sailfish "
       ,"more":"Out of the 31,500 identified fish, the Sailfish is the fastest. The Sailfish is able to swim at a speed of 68 MPH, 18 MPH faster than the second place fish."
     },
     {
        "que":"What was the first electronic computer called?"
       ,"ans":"ENIAC "
       ,"more":"ENIAC was the first electronic computer made. It was so large it filled a whole room and was used to solve large numerical equations."
     },
     {
        "que":"What is the fastest land snake in the world?"
       ,"ans":"Black Mamba "
       ,"more":"The Black Mamba can reach up to 12 miles per hour. Don't be too afraid though, the Black Mamba uses its speed to escape danger, not catch prey."
     },
     {
        "que":"What natural phenomena are measured by the Richter scale?"
       ,"ans":"Earthquakes "
       ,"more":"The Richter scale measures the size of Earthquakes. The formula, mb = log10(A/T) + Q(D,h), is used. The Richter scale ranges from 1-10. The highest recorded Earthquake was on May 22, 1960 in Southern Chile. The richter scale of this Earthquake was a 9.5."
     },
     {
        "que":"What planet in our solar system has the longest day?"
       ,"ans":"Venus"
       ,"more":"One day on Venus is equal to 116 days on Earth. That is equal to 2784 hours or 167040 minutes. The surface temperature of Venus is 462 °C which is equal to 863.6°F."
     },
     {
        "que":"What is the tallest tree in the world?"
       ,"ans":"The Giant Sequoia in California's Sequoia National Park "
       ,"more":"The tree is about 52,500 cubic feet (1,487 cubic meters) in volume. It has been alive for approximately 2,000 years."
     },
     {
        "que":"Who is considered the \"father of psychoanalysis\"?"
       ,"ans":"Sigmund Freud"
       ,"more":""
     },
     {
        "que":"A puggle is the mix of what two dog breeds?"
       ,"ans":" A Pug and Beagle"
       ,"more":""
     },
     {
        "que":"In what month is the Earth closest to the sun?"
       ,"ans":"January"
       ,"more":""
     },
     {
        "que":"What is the medical term for bad breath?"
       ,"ans":"Halitosis"
       ,"more":""
     },
     {
        "que":"On what continent would you not find bees?"
       ,"ans":"Antarctica"
       ,"more":""
     },
     {
        "que":"Who was the last man to walk on the moon?"
       ,"ans":"Captain Eugene Cernan"
       ,"more":""
     },
     {
        "que":"Who came up with the three laws of motion?"
       ,"ans":"Sir Isaac Newton"
       ,"more":""
     },
     {
        "que":"Which US city has been hit by the most tornadoes?"
       ,"ans":"Oklahoma City"
       ,"more":""
     },
     {
        "que":"Penicillin is used to fight what type of infections?"
       ,"ans":"Bacterial"
       ,"more":""
     },
     {
        "que":"Of the four rocky planets in our solar system, which is the largest and most dense?"
       ,"ans":"Earth"
       ,"more":""
     },
     {
        "que":"The fear of being in a commitment or getting married is known as what?"
       ,"ans":"Gamophobia"
       ,"more":""
     },
     {
        "que":"Natural pearls are found in what sea creature?"
       ,"ans":"Oysters"
       ,"more":""
     },
     {
        "que":"What does NASA stand for?"
       ,"ans":"National Aeronautics and Space Administration"
       ,"more":""
     },
     {
        "que":"What are the three base units of measurement for the metric system?"
       ,"ans":"Meter, Liter & Gram"
       ,"more":""
     },
     {
        "que":"Polar Bears mainly feed on what animals?"
       ,"ans":"Seals"
       ,"more":""
     },
     {
        "que":"What has no electric charge, and is one of the fundamental particles making up an atom's nucleus?"
       ,"ans":"Neutron"
       ,"more":""
     },
     {
        "que":"Foxes, Wolves, and Jackals all belong to what family of mammals?"
       ,"ans":"Canines"
       ,"more":""
     },
     {
        "que":"The Olfactory nerves affect what sense in the brain?"
       ,"ans":"Smell"
       ,"more":""
     },
     {
        "que":"The lowest region of the earth's atmosphere comes between the earth and the stratosphere, what is this regions name?"
       ,"ans":"The Troposphere"
       ,"more":""
     },
     {
        "que":"The Yukon River flows northwest into Alaska before emptying into what sea?"
       ,"ans":"Bering Sea"
       ,"more":""
     },
     {
        "que":"Ceres"
       ,"ans":"An Asteroid"
       ,"more":""
     },
     {
        "que":"What melted rock eventually becomes lava?"
       ,"ans":"Magma"
       ,"more":""
     },
     {
        "que":"What is the body's natural or acquired ability to resist certain diseases?"
       ,"ans":"Immunity"
       ,"more":""
     },
     {
        "que":"What is the name for excessive bodily hair growth in women?"
       ,"ans":"Hursutism"
       ,"more":""
     },
     {
        "que":"How many bones are in a giraffe's neck?"
       ,"ans":"7 bones"
       ,"more":""
     },
     {
        "que":"What U.S. spider's poison is 15 times as powerful as rattlesnake venom?"
       ,"ans":"The black widow"
       ,"more":""
     },
     {
        "que":"The outermost layer of the Earth is called the what?"
       ,"ans":"Crust"
       ,"more":""
     },
     {
        "que":"The study of the weather is called what?"
       ,"ans":"Meteorology"
       ,"more":""
     },
     {
        "que":"How long does it take for the Earth to spin once on its axis?"
       ,"ans":"One day"
       ,"more":""
     },
     {
        "que":"What is it that prevents the earth's atmosphere from drifting away into space?"
       ,"ans":"Gravity"
       ,"more":""
     },
     {
        "que":"Whats the world's largest ocean?"
       ,"ans":"Pacific ocean"
       ,"more":""
     },
     {
        "que":"What is a group of porcupines called?"
       ,"ans":"A prickle"
       ,"more":""
     },
     {
        "que":"What percentage of mass does our Sun take up in our solar system?"
       ,"ans":"99%"
       ,"more":""
     },
     {
        "que":"What is a group of cats called?"
       ,"ans":"Clowder"
       ,"more":""
     },
     {
        "que":"How many time zones does China have?"
       ,"ans":"One"
       ,"more":""
     },
     {
        "que":"How many quills does a porcupine have?"
       ,"ans":"30,000"
       ,"more":""
     },
     {
        "que":"How many frowns cause one wrinkle?"
       ,"ans":"two thousand"
       ,"more":""
     },
     {
        "que":"How much saliva does the average human produce in a lifetime?"
       ,"ans":"10,000 gallons"
       ,"more":""
     },
     {
        "que":"How many earths would fill up the sun?"
       ,"ans":"1 million"
       ,"more":""
     },
     {
        "que":"How many taste buds does a tongue have?"
       ,"ans":"9,000"
       ,"more":""
     },
     {
        "que":"What sense don't dolphins have?"
       ,"ans":"Smell"
       ,"more":""
     },
     {
        "que":"How many breaths does the average human take in a day?"
       ,"ans":"23,000"
       ,"more":""
     },
     {
        "que":"How much can an ant lift?"
       ,"ans":"50 times its own weight"
       ,"more":""
     },
     {
        "que":"How fast can a honey bee fly?"
       ,"ans":"15 MPH"
       ,"more":""
     },
     {
        "que":"What temperature can the sun reach?"
       ,"ans":"15 million degrees Fahrenheit"
       ,"more":""
     },
     {
        "que":"What is the only bird that can fly backwards?"
       ,"ans":"The Hummingbird"
       ,"more":""
     },
     {
        "que":"What percentage of a pandas diet is bamboo?"
       ,"ans":"99%"
       ,"more":""
     },
     {
        "que":"How much does the human brain weigh?"
       ,"ans":"About 3 pounds"
       ,"more":""
     },
     {
        "que":"How much of a jelly fish is water?"
       ,"ans":"About 95%"
       ,"more":""
     },
     {
        "que":"Why are flamingos pink?"
       ,"ans":"From eating shrimp"
       ,"more":""
     },
     {
        "que":"Is the stratosphere above or below the troposphere? "
       ,"ans":"Above"
       ,"more":""
     },
     {
        "que":"Which is the rarest blood type in humans?"
       ,"ans":"AB negative"
       ,"more":"1% of the population is AB negative"
     },
     {
        "que":"Who has more hair follicles, blondes or brunettes?"
       ,"ans":"Blondes"
       ,"more":""
     },
     {
        "que":"Which tree's bark is used to produce aspirin?"
       ,"ans":"The white willow tree"
       ,"more":""
     },
     {
        "que":"What shark is thought to have been the largest in Earth's history?"
       ,"ans":"The Megalodon"
       ,"more":""
     },
     {
        "que":"The psychological test of human emotions and personality, using inkblots, is formally known as what?"
       ,"ans":"The Rorschach test"
       ,"more":""
     },
     {
        "que":"Which element, previously used in the production of felt, lead to the expression \"mad as a hatter\"?"
       ,"ans":"Mercury"
       ,"more":""
     },
     {
        "que":"What do you use to connect to the internet?"
       ,"ans":"Modem"
       ,"more":""
     },
     {
        "que":"What do you call a portable computer?"
       ,"ans":"Laptop"
       ,"more":""
     },
     {
        "que":"Do you need a a Internet browser to go on the Internet?"
       ,"ans":"Yes"
       ,"more":""
     },
     {
        "que":"What is the closest planet to the Sun?"
       ,"ans":" Mercury"
       ,"more":""
     },
     {
        "que":"What is the name of the 2nd biggest planet in our solar system?"
       ,"ans":"Saturn"
       ,"more":""
     },
     {
        "que":"What is the hottest planet in our solar system?"
       ,"ans":"Venus"
       ,"more":""
     },
     {
        "que":"What planet is famous for its big red spot on it?"
       ,"ans":"Jupiter"
       ,"more":""
     },
     {
        "que":"What planet is famous for the beautiful rings that surround it?"
       ,"ans":"Saturn"
       ,"more":""
     },
     {
        "que":"Can humans breathe normally in space as they can on Earth?"
       ,"ans":"No"
       ,"more":""
     },
     {
        "que":"Is the sun a star or a planet?"
       ,"ans":"A star"
       ,"more":""
     },
     {
        "que":"Who was the first person to walk on the moon?"
       ,"ans":"Neil Armstrong"
       ,"more":""
     },
     {
        "que":"What planet is known as the red planet?"
       ,"ans":"Mars"
       ,"more":""
     },
     {
        "que":"What is the name of the force holding us to the Earth?"
       ,"ans":"Gravity"
       ,"more":""
     },
     {
        "que":"Have human beings ever set foot on Mars?"
       ,"ans":"No"
       ,"more":""
     },
     {
        "que":"What is the name of a place that uses telescopes and other scientific equipment to research space and astronomy?"
       ,"ans":"An observatory"
       ,"more":""
     },
     {
        "que":"What is the name of NASA’s most famous space telescope?"
       ,"ans":"Hubble Space Telescope"
       ,"more":""
     },
     {
        "que":"Earth is located in which galaxy?"
       ,"ans":"The Milky Way Galaxy"
       ,"more":""
     },
     {
        "que":"What is the name of the first satellite sent into space?"
       ,"ans":"Sputnik"
       ,"more":""
     },
     {
        "que":"Ganymede is a moon of which planet?"
       ,"ans":"Jupiter"
       ,"more":""
     },
     {
        "que":"What is the name of Saturn’s largest moon?"
       ,"ans":"Titan"
       ,"more":""
     },
     {
        "que":"Olympus Mons is a large volcanic mountain on which planet?"
       ,"ans":"Mars"
       ,"more":""
     },
     {
        "que":" Does the sun orbit the Earth?"
       ,"ans":"No"
       ,"more":""
     },
     {
        "que":" Is the planet Neptune bigger than Earth?"
       ,"ans":"Yes"
       ,"more":""
     },
     {
        "que":"Now that Pluto is no longer included, how many planets are there in the Solar System?"
       ,"ans":"8"
       ,"more":""
     },
     {
        "que":"What is the smallest planet in the Solar System?"
       ,"ans":"Mercury"
       ,"more":""
     },
     {
        "que":"What is the largest planet in the Solar System?"
       ,"ans":"Jupiter"
       ,"more":""
     },
     {
        "que":"The sixth planet from the Sun features an extensive ring system, what is the name of this planet?"
       ,"ans":"Saturn"
       ,"more":""
     },
     {
        "que":"The chemical element uranium was named after what planet?"
       ,"ans":"Uranus"
       ,"more":""
     },
     {
        "que":"What planet in the solar system is farthest from the Sun?"
       ,"ans":"Neptune"
       ,"more":""
     }
];

const data = {
    'easy' : data_easy,
    'difficult': data_difficult
};


module.exports = { shuffle };