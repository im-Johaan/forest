export interface Question {
    id: number;
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctAnswer: string;
  }
  
  export const questions: Question[] = [
    {
      question: 'Which of these is not a consumptive value?',
      optionA: 'timber',
      optionB: 'firewood',
      optionC: 'non-timber forest products',
      optionD: 'education',
      correctAnswer: 'education',
      id: 1
    },
    {
      question: 'Which of these is not a forest type found in India?',
      optionA: 'Mediterranean dry',
      optionB: 'Tropical dry',
      optionC: 'Montane temperate',
      optionD: 'Alpine',
      correctAnswer: 'Mediterranean dry',
      id: 2
    },
    {
      question: 'Plant community, predominantly comprised of trees and other woody vegetation, usually with a closed canopy is',
      optionA: 'silvicultural definition of forests',
      optionB: 'FAO definition of forests',
      optionC: 'legal definition of forests',
      optionD: 'ecological definition of forests',
      correctAnswer: 'ecological definition of forests',
      id: 3
    },
    {
      question: 'According to the Supreme Court, the word forest must be understood according to its',
      optionA: 'biological meaning',
      optionB: 'ecological meaning',
      optionC: 'silvicultural meaning',
      optionD: 'dictionary meaning',
      correctAnswer: 'dictionary meaning',
      id: 4
    },
    {
      question: 'Which of these is not a use value?',
      optionA: 'direct value',
      optionB: 'indirect value',
      optionC: 'option value',
      optionD: 'existence value',
      correctAnswer: 'existence value',
      id: 5
    },
    {
      question: 'According to the Supreme Court, the term forest land includes',
      optionA: 'some area recorded as forest in the Government record according to ownership',
      optionB: 'any area recorded as forest in the Government record according to ownership',
      optionC: 'some area recorded as forest in the Government record irrespective of ownership',
      optionD: 'any area recorded as forest in the Government record irrespective of ownership',
      correctAnswer: 'any area recorded as forest in the Government record irrespective of ownership',
      id: 6
    },
    {
      question: 'Tropical moist forests do not include',
      optionA: 'broadleaved forests',
      optionB: 'wet evergreen forests',
      optionC: 'semi-evergreen forests',
      optionD: 'moist deciduous forests',
      correctAnswer: 'broadleaved forests',
      id: 7
    },
    {
      question: 'The value of leaving use and non-use values for offspring’s or future generations is called',
      optionA: 'altruistic value',
      optionB: 'bequest value',
      optionC: 'existence value',
      optionD: 'option value',
      correctAnswer: 'bequest value',
      id: 8
    },
    {
      question: "The term 'forest' originates from",
      optionA: 'Latin foris meaning outside',
      optionB: 'Greek foris meaning outside',
      optionC: 'Latin foris meaning trees',
      optionD: 'Greek foris meaning trees',
      correctAnswer: 'Latin foris meaning outside',
      id: 9
    },
    {
      question: 'The value derived from the knowledge of use of resources by others in the current generation is called',
      optionA: 'altruistic value',
      optionB: 'bequest value',
      optionC: 'existence value',
      optionD: 'option value',
      correctAnswer: 'altruistic value',
      id: 10
    },
    {
      question: 'Lithosere is an example of',
      optionA: 'hydrosere',
      optionB: 'xerosere',
      optionC: 'psammosere',
      optionD: 'halosere',
      correctAnswer: 'xerosere',
      id: 11
    },
    {
      question: 'Which of these depicts correctly the lithosere primary succession?',
      optionA: 'Rock → Crustose lichen → Foliose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax',
      optionB: 'Rock → Foliose lichen → Crustose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax',
      optionC: 'Moss → Crustose lichen → Foliose lichen → Rock → Herbaceous stage → Shrub → Woodland → Climax',
      optionD: 'Rock → Crustose lichen → Foliose lichen → Shrub → Herbaceous stage → Moss → Woodland → Climax',
      correctAnswer: 'Rock → Crustose lichen → Foliose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax',
      id: 12
    },
    {
      question: 'At compensation point,',
      optionA: 'photosynthesis = respiration',
      optionB: 'photosynthesis > respiration',
      optionC: 'photosynthesis < respiration',
      optionD: 'none of these',
      correctAnswer: 'photosynthesis = respiration',
      id: 13
    },
    {
      question: 'The study of life history / general features of forest crops with respect to environmental factors is called',
      optionA: 'foresticulture',
      optionB: 'monoculture',
      optionC: 'silviculture',
      optionD: 'silvics',
      correctAnswer: 'silvics',
      id: 14
    },
    {
      question: 'A climax caused by wildfires is an example of',
      optionA: 'climatic climax',
      optionB: 'edaphic climax',
      optionC: 'disclimax',
      optionD: 'catastrophic climax',
      correctAnswer: 'catastrophic climax',
      id: 15
    },
    {
      question: 'Net primary productivity is given by',
      optionA: 'APAR + LUE',
      optionB: 'APAR X LUE',
      optionC: 'APAR - LUE',
      optionD: 'APAR ÷ LUE',
      correctAnswer: 'APAR X LUE',
      id: 16
    },
    {
      question: 'Practical application of scientific, technical and economic principles of forestry comes under which branch of forestry?',    optionA: 'forest management',
      optionB: 'forest economics',
      optionC: 'forest mensuration',
      optionD: 'forest protection',
      correctAnswer: 'forest management',
      id: 17
    },
    {
      question: 'In the context of plant nutrition, boron is',
      optionA: 'macronutrient',
      optionB: 'micronutrient',
      optionC: 'primary nutrient',
      optionD: 'secondary nutrient',
      correctAnswer: 'micronutrient',
      id: 18
    },
    {
      question: 'Which of these is not a characteristic of pioneer species?',
      optionA: 'ability to grow on bare rocks',
      optionB: 'ability to tolerate extreme temperatures',
      optionC: 'large size',
      optionD: 'short life span',
      correctAnswer: 'large size',
      id: 19
    },
    {
      question: 'The climax near Tindni village is being controlled by disturbance by cattle. This is an example of',
      optionA: 'climatic climax',
      optionB: 'edaphic climax',
      optionC: 'disclimax',
      optionD: 'catastrophic climax',
      correctAnswer: 'disclimax',
      id: 20
    },
    {
      question: 'Mechanical action of ocean waves is an example of',
      optionA: 'chemical weathering',
      optionB: 'physical weathering',
      optionC: 'biological weathering',
      optionD: 'none of the above',
      correctAnswer: 'physical weathering',
      id: 21
    },
    {
      question: 'Khadar is a type of',
      optionA: 'black cotton soil',
      optionB: 'alluvial soil',
      optionC: 'saline soil',
      optionD: 'red and yellow soil',
      correctAnswer: 'alluvial soil',
      id: 22
    },
    {
      question: 'In soil profile, C refers to',
      optionA: 'organic surface layer',
      optionB: 'topsoil layer',
      optionC: 'subsoil layer',
      optionD: 'substratum layer',
      correctAnswer: 'substratum layer',
      id: 23
    },
    {
      question: 'Regur is a term for',
      optionA: 'black cotton soil',
      optionB: 'alluvial soil',
      optionC: 'saline soil',
      optionD: 'red and yellow soil',
      correctAnswer: 'black cotton soil',
      id: 24
    },
    {
      question: 'Bangar is a type of',
      optionA: 'black cotton soil',
      optionB: 'alluvial soil',
      optionC: 'saline soil',
      optionD: 'red and yellow soil',
      correctAnswer: 'alluvial soil',
      id: 25
    },
    {
      question: 'Soil formation is dependent upon',
      optionA: 'vegetation',
      optionB: 'time',
      optionC: 'climate',
      optionD: 'all of the above',
      correctAnswer: 'all of the above',
      id: 26
    },
    {
      question: 'Thermal stresses lead to',
      optionA: 'chemical weathering',
      optionB: 'physical weathering',
      optionC: 'biological weathering',
      optionD: 'none of the above',
      correctAnswer: 'physical weathering',
      id: 27
    },
    {
      question: 'Carbonation is an example of',
      optionA: 'chemical weathering',
      optionB: 'physical weathering',
      optionC: 'biological weathering',
      optionD: 'none of the above',
      correctAnswer: 'chemical weathering',
      id: 28
    },
    {
      question: 'Cryofracturing is an example of',
      optionA: 'chemical weathering',
      optionB: 'physical weathering',
      optionC: 'biological weathering',
      optionD: 'none of the above',
      correctAnswer: 'physical weathering',
      id: 29
    },
    {
      question: 'Hydrolysis is an example of',
      optionA: 'chemical weathering',
      optionB: 'physical weathering',
      optionC: 'biological weathering',
      optionD: 'none of the above',
      correctAnswer: 'chemical weathering',
      id: 30
    },
    {
      question: 'For absolute form factor, the reference for the base of the cylinder is',
      optionA: 'base of the tree',
      optionB: 'breast height',
      optionC: '10% of tree height',
      optionD: '20% of tree height',
      correctAnswer: 'base of the tree',
      id: 31
    },
    {
      question: 'For normal form factor, the reference for the base of the cylinder is',
      optionA: 'base of the tree',
      optionB: 'breast height',
      optionC: '10% of tree height',
      optionD: '20% of tree height',
      correctAnswer: '10% of tree height',
      id: 32
    },
    {
      question: 'In India, the breast height is considered to be',
      optionA: '1.37 m',
      optionB: '1.47 m',
      optionC: '1.57 m',
      optionD: '2.47 m',
      correctAnswer: '1.37 m',
      id: 33
    },
    {
      question: 'Measurement of height based on similar triangles comes under:',
      optionA: 'similar measurement',
      optionB: 'dissimilar measurement',
      optionC: 'direct measurement',
      optionD: 'indirect measurement',
      correctAnswer: 'indirect measurement',
      id: 34
    },
    {
      question: 'For a tree with dbh = 45.6 cm, height = 27 m and total stem volume of 1.78 cum, the artificial form factor for the tree is:',
      optionA: '0.1',
      optionB: '0.2',
      optionC: '0.3',
      optionD: '0.4',
      correctAnswer: '0.4',
      id: 35
    },
    {
      question: 'Consider a stand of eucalyptus trees that are on average 30 cm in diameter and spaced on a regular 3 m grid. Find the spacing factor.',
      optionA: '5',
      optionB: '10',
      optionC: '15',
      optionD: 'data insufficient',
      correctAnswer: '10',
      id: 36
    },
    {
      question: 'Diameter over bark (dob), diameter under bark (dub) and bark thickness (tb) are related as:',
      optionA: 'dob = dub + tb',
      optionB: 'dob = dub - tb',
      optionC: 'dob = dub + 2 × tb',
      optionD: 'dob = dub - 2 × tb',
      correctAnswer: 'dob = dub + 2 × tb',
      id: 37
    },
    {
      question: 'For false form factor, the reference for the base of the cylinder is',
      optionA: 'base of the tree',
      optionB: 'breast height',
      optionC: '10% of tree height',
      optionD: '20% of tree height',
      correctAnswer: 'breast height',
      id: 38
    },
    {
      question: 'Choose the correct statement:',
      optionA: 'For a non-circular cross-section, girth tape over-estimates the sectional area.',
      optionB: 'For a non-circular cross-section, girth tape under-estimates the sectional area.',
      optionC: 'For a non-circular cross-section, girth tape correctly estimates the sectional area.',
      optionD: 'None of these is a correct statement.',
      correctAnswer: 'For a non-circular cross-section, girth tape over-estimates the sectional area.',
      id: 39
    },
    {
      question: 'A tree has dbh of 25 cm. Find its basal area in sq m.',
      optionA: '.049',
      optionB: '.096',
      optionC: '.149',
      optionD: '.195',
      correctAnswer: '.049',
      id: 40
    },
    {
      question: "This sampling employs a simple rule of selecting every kth unit starting with a number chosen at random from 1 to k as the random start. We're talking about",
      optionA: 'Simple random sampling',
      optionB: 'Systematic sampling',
      optionC: 'Stratified sampling',
      optionD: 'Multistage sampling',
      correctAnswer: 'Systematic sampling',
      id: 41
    },
    {
      question: 'IMU stands for',
      optionA: 'Imperial metering unit',
      optionB: 'Inertial metering unit',
      optionC: 'Imperial measurement unit',
      optionD: 'Inertial measurement unit',
      correctAnswer: 'Inertial measurement unit',
      id: 42
    },
    {
      question: '___ is how close the measured values are to the correct value.',
      optionA: 'Accuracy',
      optionB: 'Precision',
      optionC: 'Bias',
      optionD: 'Variance',
      correctAnswer: 'Accuracy',
      id: 43
    },
    {
      question: 'A list of sampling units is called a',
      optionA: 'frame',
      optionB: 'window',
      optionC: 'sample',
      optionD: 'population',
      correctAnswer: 'frame',
      id: 44
    },
    {
      question: 'The time of flight for LiDAR is 0.00001 sec. Find the distance of the object from the instrument.',
      optionA: '500 m',
      optionB: '1000 m',
      optionC: '1500 m',
      optionD: '2000 m',
      correctAnswer: '1500 m',
      id: 45
    },
    {
      question: 'Which of these is correct?',
      optionA: 'Plane surveying takes into account the true shape of the Earth and is used for smaller areas (< 250 sq km)',
      optionB: 'Plane surveying takes into account the true shape of the Earth and is used for larger areas (> 250 sq km)',
      optionC: 'Geodetic surveying takes into account the true shape of the Earth and is used for smaller areas (< 250 sq km)',
      optionD: 'Geodetic surveying takes into account the true shape of the Earth and is used for larger areas (> 250 sq km)',
      correctAnswer: 'Geodetic surveying takes into account the true shape of the Earth and is used for larger areas (> 250 sq km)',       
      id: 46
    },
    {
      question: 'A sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as',
      optionA: 'Simple random sampling',
      optionB: 'Systematic sampling',
      optionC: 'Stratified sampling',
      optionD: 'Multistage sampling',
      correctAnswer: 'Simple random sampling',
      id: 47
    },
    {
      question: 'The frequency of flyovers is an indicator of',
      optionA: 'spatial resolution',
      optionB: 'temporal resolution',
      optionC: 'spectral resolution',
      optionD: 'radiometric resolution',
      correctAnswer: 'temporal resolution',
      id: 48
    },
    {
      question: '___ is how close the measured values are to each other.',
      optionA: 'Accuracy',
      optionB: 'Precision',
      optionC: 'Bias',
      optionD: 'Variance',
      correctAnswer: 'Precision',
      id: 49
    },
    {
      question: 'Bathymetric LiDAR uses',
      optionA: 'far infrared light',
      optionB: 'near infrared light',
      optionC: 'orange light',
      optionD: 'green light',
      correctAnswer: 'green light',
      id: 50
    },
    {
      question: 'Invasive climbers increase the probability of which of these fire types?',
      optionA: 'ground fire',
      optionB: 'surface fire',
      optionC: 'ladder fire',
      optionD: 'firestorm',
      correctAnswer: 'ladder fire',
      id: 51
    },
    {
      question: 'Which of these forms the fire triangle?',
      optionA: 'fire, air, heat',
      optionB: 'fire, oxygen, wood',
      optionC: 'fuel, air, wood',
      optionD: 'fuel, oxygen, heat',
      correctAnswer: 'fuel, oxygen, heat',
      id: 52
    },
    {
      question: 'A scientist uses a trap to capture a monkey. In the context of Wildlife Protection Act 1972,',
      optionA: 'the trap is a weapon and capturing is hunting.',
      optionB: 'the trap is not a weapon and capturing is hunting.',
      optionC: 'the trap is a weapon and capturing is not hunting.',
      optionD: 'the trap is not a weapon and capturing is not hunting.',
      correctAnswer: 'the trap is a weapon and capturing is hunting.',
      id: 53
    },
    {
      question: 'In the formula I = PXAXT, P refers to',
      optionA: 'professional pressure',
      optionB: 'pollution pressure',
      optionC: 'population pressure',
      optionD: 'none of the above',
      correctAnswer: 'population pressure',
      id: 54
    },
    {
      question: 'In the formula I = PXAXT, T refers to',
      optionA: 'transference',
      optionB: 'time',
      optionC: 'technology',
      optionD: 'none of the above',
      correctAnswer: 'technology',
      id: 55
    },
    {
      question: 'Which of these is a stochastic factor?',
      optionA: 'birth rate',
      optionB: 'death rate',
      optionC: 'population structure',
      optionD: 'forest fire',
      correctAnswer: 'forest fire',
      id: 56
    },
    {
      question: 'The acronym HIPPO does not include',
      optionA: 'habitat loss',
      optionB: 'habitat enhancement',
      optionC: 'over-harvesting',
      optionD: 'human over-population',
      correctAnswer: 'habitat enhancement',
      id: 57
    },
    {
      question: 'A veterinarian uses an immobilising gun to capture a deer. In the context of Wildlife Protection Act 1972,',
      optionA: 'the immobilising gun is a weapon and capturing is hunting.',
      optionB: 'the immobilising gun is not a weapon and capturing is hunting.',
      optionC: 'the immobilising gun is a weapon and capturing is not hunting.',
      optionD: 'the immobilising gun is not a weapon and capturing is not hunting.',
      correctAnswer: 'the immobilising gun is a weapon and capturing is hunting.',
      id: 58
    },
    {
      question: 'Which of these is a deterministic factor?',
      optionA: 'environmental variation',
      optionB: 'forest fire',
      optionC: 'death rate',
      optionD: 'diseases',
      correctAnswer: 'death rate',
      id: 59
    },
    {
      question: 'The acronym HIPPO does not include',
      optionA: 'habitat loss',
      optionB: 'invasive species',
      optionC: 'pollination',
      optionD: 'pollution',
      correctAnswer: 'pollination',
      id: 60
    },
    {
      question: 'Taungya regeneration is',
      optionA: 'natural regeneration',
      optionB: 'artificial regeneration with villagers',
      optionC: 'artificial regeneration with nomadic tribes',
      optionD: 'artificial regeneration with hunters and gatherers',
      correctAnswer: 'artificial regeneration with villagers',
      id: 61
    },
    {
      question: 'Which of these is not an advantage of the clear felling system?',
      optionA: 'Simple system, easy and efficient operations',
      optionB: 'Allows for establishment of a more uniform crop',
      optionC: 'Increases soil erosion and landslides in hilly areas',
      optionD: 'Mimics natural processes of fire and large-scale insect attacks',
      correctAnswer: 'Increases soil erosion and landslides in hilly areas',
      id: 62
    },
    {
      question: 'Which of these is the correct sequence of a silvicultural system?',
      optionA: 'Stand tending -> Regeneration -> Harvesting',
      optionB: 'Harvesting -> Stand tending -> Regeneration',
      optionC: 'Harvesting -> Regeneration -> Stand tending',
      optionD: 'Regeneration -> Harvesting -> Stand tending',
      correctAnswer: 'Harvesting -> Regeneration -> Stand tending',
      id: 63
    },
    {
      question: 'Ring weeding is primarily a feature of',
      optionA: 'natural regeneration',
      optionB: 'assisted natural regeneration',
      optionC: 'artificial regeneration by direct sowing',
      optionD: 'artificial regeneration by planting seedlings',
      correctAnswer: 'assisted natural regeneration',
      id: 64
    },
    {
      question: 'Tending is done during',
      optionA: 'early stage of life',
      optionB: 'middle stage of life',
      optionC: 'late stage of life',
      optionD: 'any stage of life',
      correctAnswer: 'any stage of life',
      id: 65
    },
    {
      question: 'The movement of seeds away from their place of seed production into a new area is called',
      optionA: 'translocation',
      optionB: 'migration',
      optionC: 'dispersal',
      optionD: 'drifting',
      correctAnswer: 'dispersal',
      id: 66
    },
    {
      question: 'Average age at which a tree is considered mature for felling is called',
      optionA: 'crop age',
      optionB: 'felling age',
      optionC: 'rotation age',
      optionD: 'maturity age',
      correctAnswer: 'rotation age',
      id: 67
    },
    {
      question: 'A site was clear-cut. Which of these methods of regeneration cannot be used in a short time-frame?',
      optionA: 'natural regeneration',
      optionB: 'artificial regeneration by direct sowing',
      optionC: 'artificial regeneration by planting seedlings',
      optionD: 'artificial regeneration by transplanting trees',
      correctAnswer: 'natural regeneration',
      id: 68
    },
    {
      question: 'Which of these is not a feature of natural regeneration?',
      optionA: 'low cost and less requirement of heavy machinery and labour',
      optionB: 'less requirement of heavy machinery and labour',
      optionC: 'preservation of genetic variability',
      optionD: 'good control over genetic improvement',
      correctAnswer: 'good control over genetic improvement',
      id: 69
    },
    {
      question: 'Which of these is not a feature of natural regeneration?',
      optionA: 'seed consumption by insects and seed feeders',
      optionB: 'little control over spacing and stand density',
      optionC: 'long time needed to regenerate forest',
      optionD: 'high requirement of heavy machinery and labour',
      correctAnswer: 'high requirement of heavy machinery and labour',
      id: 70
    },
    {
      question: 'Shelterwood system results in',
      optionA: 'even aged stand with natural aesthetics',
      optionB: 'even aged stand with artificial aesthetics',
      optionC: 'uneven aged stand with natural aesthetics',
      optionD: 'uneven aged stand with artificial aesthetics',
      correctAnswer: 'even aged stand with natural aesthetics',
      id: 71
    },
    {
      question: 'In group shelterwood system, the regeneration area is increased',
      optionA: 'centrifugally around gaps',
      optionB: 'centripetally around gaps',
      optionC: 'parallel to gaps',
      optionD: 'perpendicular to gaps',
      correctAnswer: 'centrifugally around gaps',
      id: 72
    },
    {
      question: 'Trees not putting increment are removed during',
      optionA: 'preparatory felling',
      optionB: 'seeding felling',
      optionC: 'secondary felling',
      optionD: 'final felling',
      correctAnswer: 'preparatory felling',
      id: 73
    },
    {
      question: 'Clear felling system is not used for',
      optionA: 'light demanding species',
      optionB: 'shade bearer species',
      optionC: 'plain areas',
      optionD: 'plateau areas',
      correctAnswer: 'shade bearer species',
      id: 74
    },
    {
      question: 'For a crop with rotation age of 120 years, PB-III would have crop age',
      optionA: '0-30 years',
      optionB: '30-60 years',
      optionC: '60-90 years',
      optionD: '90-120 years',
      correctAnswer: '30-60 years',
      id: 75
    },
    {
      question: 'Felling made with the object of opening the canopy to remove shelter and allow more light for the regenerated crop is',   
      optionA: 'preparatory felling',
      optionB: 'seeding felling',
      optionC: 'secondary felling',
      optionD: 'final felling',
      correctAnswer: 'secondary felling',
      id: 76
    },
    {
      question: 'Close to nature forestry is a feature of',
      optionA: 'clear felling system',
      optionB: 'selection system',
      optionC: 'uniform shelterwood system',
      optionD: 'group shelterwood system',
      correctAnswer: 'selection system',
      id: 77
    },
    {
      question: 'Inverse-J shaped number-diameter curves are seen in',
      optionA: 'clear felling system',
      optionB: 'selection system',
      optionC: 'uniform shelterwood system',
      optionD: 'group shelterwood system',
      correctAnswer: 'selection system',
      id: 78
    },
    {
      question: 'Which of these is the correct sequence for shelterwood system?',
      optionA: 'Preparatory felling -> Secondary felling -> Seeding felling -> Final felling',
      optionB: 'Preparatory felling -> Seeding felling -> Secondary felling -> Final felling',
      optionC: 'Preparatory felling -> Secondary felling -> Seedling felling -> Final felling',
      optionD: 'Preparatory felling -> Seedling felling -> Secondary felling -> Final felling',
      correctAnswer: 'Preparatory felling -> Seeding felling -> Secondary felling -> Final felling',
      id: 79
    },
    {
      question: 'Catchment areas are best suited for',
      optionA: 'clear felling system',
      optionB: 'selection system',
      optionC: 'uniform shelterwood system',
      optionD: 'group shelterwood system',
      correctAnswer: 'selection system',
      id: 80
    },
    {
      question: 'Trees to be retained are shown in ___ marking colour',
      optionA: 'yellow',
      optionB: 'blue',
      optionC: 'red',
      optionD: 'white',
      correctAnswer: 'blue',
      id: 81
    },
    {
      question: 'Trees on boundary are shown in ___ marking colour',
      optionA: 'yellow',
      optionB: 'blue',
      optionC: 'red',
      optionD: 'white',
      correctAnswer: 'red',
      id: 82
    },
    {
      question: 'Cutting of timber into logs is known as',
      optionA: 'marking',
      optionB: 'bucking',
      optionC: 'skidding',
      optionD: 'delimbing',
      correctAnswer: 'bucking',
      id: 83
    },
    {
      question: 'Careful selection of trees for harvesting based on a forest management prescription is known as',
      optionA: 'surveying',
      optionB: 'cruising',
      optionC: 'marking',
      optionD: 'logging',
      correctAnswer: 'marking',
      id: 84
    },
    {
      question: 'Net growth in initial volume is given by',
      optionA: 'V2-V1',
      optionB: 'V2-V1+H-I',
      optionC: 'V2-V1+H-I+M',
      optionD: 'V2-V1+H-I-M',
      correctAnswer: 'V2-V1+H-I',
      id: 85
    },
    {
      question: 'Research plots are shown in ___ marking colour',
      optionA: 'yellow',
      optionB: 'blue',
      optionC: 'red',
      optionD: 'white',
      correctAnswer: 'white',
      id: 86
    },
    {
      question: 'Which of these gives the greatest accuracy in constructing face cuts',
      optionA: 'conventional face',
      optionB: 'humboldt face',
      optionC: 'open face',
      optionD: 'all of these',
      correctAnswer: 'conventional face',
      id: 87
    },
    {
      question: 'Which of these gives the greatest saving of lumber',
      optionA: 'conventional face',
      optionB: 'humboldt face',
      optionC: 'open face',
      optionD: 'all of these',
      correctAnswer: 'humboldt face',
      id: 88
    },
    {
      question: 'Moving of logs from forest to landing area is known as',
      optionA: 'marking',
      optionB: 'bucking',
      optionC: 'skidding',
      optionD: 'delimbing',
      correctAnswer: 'skidding',
      id: 89
    },
    {
      question: 'Surveying timberlands to locate and estimate the volumes and grades of standing timber meeting requirements is known as', 
      optionA: 'surveying',
      optionB: 'cruising',
      optionC: 'marking',
      optionD: 'logging',
      correctAnswer: 'cruising',
      id: 90
    },
    {
      question: 'Wet and dry treatment of seeds is used for which species?',
      optionA: 'amla',
      optionB: 'mango',
      optionC: 'ber',
      optionD: 'teak',
      correctAnswer: 'teak',
      id: 91
    },
    {
      question: 'Which of these is not a laboratory method to determine best days for seed collection?',
      optionA: 'maximum dry weight',
      optionB: 'colour of fruits',
      optionC: 'moisture content of fruits',
      optionD: 'chemical analysis of fat and nitrogen content',
      correctAnswer: 'colour of fruits',
      id: 92
    },
    {
      question: 'Which of these characterises a refractory site?',
      optionA: 'soil depth < 10 cm',
      optionB: 'soil depth 10-30 cm',
      optionC: 'soil depth > 30 cm',
      optionD: 'none of these',
      correctAnswer: 'soil depth < 10 cm',
      id: 93
    },
    {
      question: 'Which of these prevents water logging?',
      optionA: 'sunken bed',
      optionB: 'raised bed',
      optionC: 'flat bed',
      optionD: 'all of these',
      correctAnswer: 'raised bed',
      id: 94
    },
    {
      question: 'Number of seeds in sample that germinate up to the peak germination period expressed as % is a definition of',
      optionA: 'germination number',
      optionB: 'germination percentage',
      optionC: 'germination energy',
      optionD: 'germination power',
      correctAnswer: 'germination energy',
      id: 95
    },
    {
      question: 'Which of these conserves moisture?',
      optionA: 'sunken bed',
      optionB: 'raised bed',
      optionC: 'flat bed',
      optionD: 'all of these',
      correctAnswer: 'sunken bed',
      id: 96
    },
    {
      question: 'Agave is used for',
      optionA: 'barbed wire fencing',
      optionB: 'live fencing',
      optionC: 'chain link fencing',
      optionD: 'stone wall fencing',
      correctAnswer: 'live fencing',
      id: 97
    },
    {
      question: 'Shell cracking of seeds is used for which species?',
      optionA: 'amla',
      optionB: 'mango',
      optionC: 'ber',
      optionD: 'teak',
      correctAnswer: 'ber',
      id: 98
    },
    {
      question: 'Choice of spacing is dependent upon',
      optionA: 'objective of plantation',
      optionB: 'site-species matching',
      optionC: 'growth rate',
      optionD: 'all of these',
      correctAnswer: 'all of these',
      id: 99
    },
    {
      question: 'Which of these is a good storage condition?',
      optionA: 'high moisture, high temperature',
      optionB: 'high moisture, low temperature',
      optionC: 'low moisture, high temperature',
      optionD: 'low moisture, low temperature',
      correctAnswer: 'low moisture, low temperature',
      id: 100
    }
  ]


