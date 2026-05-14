const bets = [
  {
    id: "sahel-microgrids",
    kind: "good",
    title: "Sahel Microgrids Become Strategic",
    lat: 14.48,
    lon: -1.7,
    labelRank: 1,
    confidence: 71,
    region: "SAHEL / ENERGY RESILIENCE",
    category: "Energy",
    horizon: "24-48 months",
    signalCount: 76,
    summary:
      "Distributed solar, battery storage, and cooling demand are converging around places where central-grid assumptions are weakest.",
    implication:
      "Useful capacity may come from small resilient systems before large infrastructure catches up.",
    rationale:
      "Heat stress, uneven grid extension, and lower-cost storage make local energy systems more attractive. The bet is that resilience infrastructure becomes a practical development layer rather than a niche climate project.",
    why:
      "If cooling, connectivity, and water pumping become more dependent on electricity while grids remain fragile, small systems become strategically important earlier than consensus expects.",
    signals: [
      "Current-event signals: repeated reporting around grid strain, heat exposure, and infrastructure interruption across the Sahel belt.",
      "Structural signals: World Bank access-to-electricity data and population growth point to unmet demand outside dense urban grids.",
      "Official/geographic signals: open infrastructure and settlement layers show many high-need areas far from robust transmission networks.",
    ],
    sources: ["GDELT", "World Bank Indicators", "OpenStreetMap Overpass"],
  },
  {
    id: "red-sea-routing",
    kind: "bad",
    title: "Single-Corridor Shipping Looks More Fragile",
    lat: 13.3,
    lon: 43.4,
    labelRank: 2,
    confidence: 78,
    region: "RED SEA / LOGISTICS",
    category: "Logistics",
    horizon: "6-18 months",
    signalCount: 83,
    summary:
      "Maritime risk, insurance repricing, and rerouting behavior suggest supply chains built around narrow chokepoints are becoming easier to disrupt.",
    implication:
      "Plan for route optionality, buffer stock, and slower inventory cycles where chokepoint exposure is material.",
    rationale:
      "The bet is not that one waterway closes permanently. It is that routing assumptions become less stable as conflict, insurance, naval posture, and port congestion interact.",
    why:
      "A fragile corridor can transmit cost and timing pressure into food, energy, manufacturing, and humanitarian logistics even when the initiating signal is regional.",
    signals: [
      "Current-event signals: clusters of maritime security reporting and shipping disruption coverage.",
      "Structural signals: trade-route concentration and just-in-time inventory practices leave little slack.",
      "Official/geographic signals: chokepoint geography and vessel-route data make the exposure place-specific.",
    ],
    sources: ["GDELT", "World Bank Indicators", "OpenStreetMap Overpass"],
  },
  {
    id: "taiwan-redundancy",
    kind: "good",
    title: "Manufacturing Redundancy Gains Premium",
    lat: 23.7,
    lon: 121,
    labelRank: 3,
    confidence: 74,
    region: "TAIWAN STRAIT / INDUSTRIAL BASE",
    category: "Manufacturing",
    horizon: "18-36 months",
    signalCount: 79,
    summary:
      "Semiconductor concentration, geopolitical risk, and subsidy competition keep making redundant production capacity more valuable.",
    implication:
      "Treat manufacturing duplication as strategic resilience, not inefficient excess.",
    rationale:
      "Advanced manufacturing remains geographically concentrated while state industrial policy is pushing capacity into allied and domestic supply chains.",
    why:
      "The strategic value sits in having credible backup capacity before a disruption arrives, especially for components with long qualification cycles.",
    signals: [
      "Current-event signals: policy, export-control, and defense-posture news clusters around chip supply chains.",
      "Structural signals: industry concentration and national industrial strategies reinforce the same direction.",
      "Official/geographic signals: fabs, ports, and power systems make the risk spatial rather than abstract.",
    ],
    sources: ["OECD AI", "GDELT", "World Bank Indicators"],
  },
  {
    id: "europe-retrofit",
    kind: "good",
    title: "Heat Retrofits Move From Nice-To-Have To Default",
    lat: 48.2,
    lon: 9.1,
    labelRank: 10,
    confidence: 69,
    region: "EUROPE / BUILT ENVIRONMENT",
    category: "Cities",
    horizon: "12-36 months",
    signalCount: 72,
    summary:
      "Urban heat, aging housing stock, and energy-price sensitivity point toward demand for passive cooling and building adaptation.",
    implication:
      "Retrofitting for heat resilience may become a mainstream planning assumption.",
    rationale:
      "Europe's housing stock was not designed for repeated heat extremes, while energy affordability limits the ability to solve the problem with cooling alone.",
    why:
      "The opportunity is practical: insulation, shading, ventilation, materials, and district-level cooling can reduce exposure without turning every building into a power problem.",
    signals: [
      "Current-event signals: repeated heatwave and grid-demand reporting across European cities.",
      "Structural signals: demographic aging and building-stock age raise vulnerability.",
      "Official/geographic signals: city heat maps and public health reporting localize the exposure.",
    ],
    sources: ["WHO GHO", "Eurostat", "GDELT"],
  },
  {
    id: "coastal-insurance",
    kind: "bad",
    title: "Coastal Insurance Retreat Keeps Spreading",
    lat: 29.5,
    lon: -90.2,
    labelRank: 4,
    confidence: 81,
    region: "GULF COAST / RISK PRICING",
    category: "Climate",
    horizon: "12-36 months",
    signalCount: 86,
    summary:
      "Storm exposure, rebuilding costs, and insurer withdrawal suggest more property risk will move from private markets to households and states.",
    implication:
      "Asset resilience and insurability become linked decisions.",
    rationale:
      "The pattern is a transfer of risk-bearing from insurers to owners, public programs, and local governments when hazard models and replacement costs move faster than premiums can absorb.",
    why:
      "When insurance availability weakens, the price signal travels into housing liquidity, municipal budgets, lending, and migration decisions.",
    signals: [
      "Current-event signals: insurer exits, premium shock, and severe-weather reporting.",
      "Structural signals: rising replacement costs and coastal population exposure.",
      "Official/geographic signals: hurricane tracks, flood maps, and disaster declarations provide place-based confirmation.",
    ],
    sources: ["NOAA", "World Bank Indicators", "GDELT"],
  },
  {
    id: "gulf-hydrogen",
    kind: "good",
    title: "Gulf Molecules Stay Strategically Relevant",
    lat: 25.3,
    lon: 51.2,
    labelRank: 20,
    confidence: 64,
    region: "GULF / ENERGY TRANSITION",
    category: "Energy",
    horizon: "36-72 months",
    signalCount: 68,
    summary:
      "Export infrastructure, industrial capital, and clean-molecule policy suggest Gulf energy relevance may mutate rather than simply decline.",
    implication:
      "Watch ports, ammonia, hydrogen, and industrial heat rather than only oil narratives.",
    rationale:
      "Countries with export terminals, cheap capital, and energy-system expertise may convert old advantages into new molecule logistics.",
    why:
      "The transition does not erase geography; it changes which infrastructure and partnerships matter.",
    signals: [
      "Current-event signals: project announcements and offtake agreements cluster around clean-molecule corridors.",
      "Structural signals: industrial demand for heat and feedstocks remains hard to electrify.",
      "Official/geographic signals: port and pipeline geography make export optionality measurable.",
    ],
    sources: ["IEA", "GDELT", "OpenStreetMap Overpass"],
  },
  {
    id: "amazon-rainfall",
    kind: "bad",
    title: "Rainfall Dependence Becomes A Board-Level Risk",
    lat: -3.2,
    lon: -60,
    labelRank: 7,
    confidence: 73,
    region: "AMAZON BASIN / WATER CYCLE",
    category: "Food systems",
    horizon: "24-60 months",
    signalCount: 75,
    summary:
      "Drought, deforestation pressure, and hydropower exposure make regional rainfall stability a wider economic dependency.",
    implication:
      "Treat water-cycle health as infrastructure, not background nature.",
    rationale:
      "The Amazon is not only an ecological story. It is tied into electricity, agriculture, transport, and urban water security across a much wider geography.",
    why:
      "If rainfall becomes less reliable, dependent systems can feel pressure through power prices, crop yields, river transport, and social conflict.",
    signals: [
      "Current-event signals: drought, river-transport, and fire reporting clusters.",
      "Structural signals: land-use change and hydropower reliance create long-term sensitivity.",
      "Official/geographic signals: satellite fire and river-level monitoring anchor the pattern in observed conditions.",
    ],
    sources: ["NASA FIRMS", "FAOSTAT", "GDELT"],
  },
  {
    id: "india-heat-labour",
    kind: "bad",
    title: "Heat Starts Pricing Into Labour Capacity",
    lat: 22.6,
    lon: 78.9,
    labelRank: 5,
    confidence: 77,
    region: "INDIA / LABOUR PRODUCTIVITY",
    category: "Labour",
    horizon: "12-36 months",
    signalCount: 84,
    summary:
      "Heat exposure, informal outdoor work, and urban demand growth point toward lost working hours becoming a harder economic constraint.",
    implication:
      "Shift-work design, cooling access, and heat-safe logistics become productivity infrastructure.",
    rationale:
      "The practical risk is not only headline temperature. It is the overlap between heat, labour formality, housing quality, and the timing of work.",
    why:
      "A small reduction in safe work hours across large exposed sectors can change delivery reliability, construction timelines, and health costs.",
    signals: [
      "Current-event signals: heatwave and health-system reporting during peak seasons.",
      "Structural signals: labour-force composition and urbanization increase exposure.",
      "Official/geographic signals: meteorological and public-health datasets localize the risk.",
    ],
    sources: ["ILOSTAT", "WHO GHO", "GDELT"],
  },
  {
    id: "japan-care-automation",
    kind: "good",
    title: "Care Automation Moves Out Of The Lab",
    lat: 36.2,
    lon: 138.2,
    labelRank: 6,
    confidence: 70,
    region: "JAPAN / DEMOGRAPHICS",
    category: "Robotics",
    horizon: "24-60 months",
    signalCount: 73,
    summary:
      "Aging demographics, staffing scarcity, and sensor/robotics maturity make care automation more viable in practical settings.",
    implication:
      "The near-term value is augmentation of care work, not full replacement.",
    rationale:
      "Countries facing acute care labour shortages are likely to normalize smaller assistive systems before humanoid narratives fully mature.",
    why:
      "The demand signal is unusually durable: demographic pressure does not wait for perfect technology.",
    signals: [
      "Current-event signals: policy pilots, hospital staffing, and robotics deployment coverage.",
      "Structural signals: age dependency ratios create persistent demand.",
      "Official/geographic signals: health and population datasets make the pressure measurable.",
    ],
    sources: ["UN Population", "WHO GHO", "GDELT"],
  },
  {
    id: "arctic-routing",
    kind: "bad",
    title: "Arctic Optionality Brings Messier Risk",
    lat: 69.1,
    lon: 80,
    labelRank: 16,
    confidence: 61,
    region: "ARCTIC / ROUTES",
    category: "Geopolitics",
    horizon: "36-84 months",
    signalCount: 62,
    summary:
      "Climate-driven access, sparse infrastructure, and military attention make northern routes strategically tempting but operationally brittle.",
    implication:
      "Do not read new access as simple efficiency; governance and rescue capacity lag behind.",
    rationale:
      "The route may become more visible before it becomes reliably safe, insured, governed, or serviced.",
    why:
      "A region can be more accessible and more risky at the same time.",
    signals: [
      "Current-event signals: defense posture, ice, and shipping coverage.",
      "Structural signals: limited port, rescue, and communications infrastructure.",
      "Official/geographic signals: polar data and route maps define the operating envelope.",
    ],
    sources: ["NOAA", "OpenStreetMap Overpass", "GDELT"],
  },
  {
    id: "east-africa-cold-chain",
    kind: "good",
    title: "Cold Chains Become Growth Infrastructure",
    lat: -1.3,
    lon: 36.8,
    labelRank: 9,
    confidence: 68,
    region: "EAST AFRICA / FOOD + HEALTH",
    category: "Food systems",
    horizon: "24-48 months",
    signalCount: 70,
    summary:
      "Urban food demand, vaccine logistics, and solar cooling point toward cold-chain capacity as a high-leverage infrastructure layer.",
    implication:
      "Cooling logistics may unlock health, agriculture, and retail reliability at once.",
    rationale:
      "Cold chain is a multi-sector bet: the same capability can reduce food loss, support clinics, and stabilize commerce.",
    why:
      "Infrastructure that solves several bottlenecks at once can become valuable faster than single-purpose assets.",
    signals: [
      "Current-event signals: food-price, vaccine, and refrigeration project reporting.",
      "Structural signals: urbanization and perishable-food demand keep rising.",
      "Official/geographic signals: road, clinic, and grid-access layers show where cold-chain gaps matter.",
    ],
    sources: ["FAOSTAT", "WHO GHO", "World Bank Indicators"],
  },
  {
    id: "south-china-sea",
    kind: "bad",
    title: "Maritime Autonomy Raises Misread Risk",
    lat: 14,
    lon: 115,
    labelRank: 8,
    confidence: 66,
    region: "SOUTH CHINA SEA / SECURITY",
    category: "Geopolitics",
    horizon: "18-48 months",
    signalCount: 69,
    summary:
      "More unmanned systems, denser patrols, and disputed waters increase the chance of ambiguous incidents becoming strategic signals.",
    implication:
      "Communication protocols and attribution matter as much as hardware.",
    rationale:
      "Autonomous and remotely operated systems can lower the threshold for presence while making intent harder to read.",
    why:
      "In a crowded security environment, ambiguity itself can become escalation fuel.",
    signals: [
      "Current-event signals: patrol, drone, and maritime incident reporting.",
      "Structural signals: contested claims and naval modernization keep the theater dense.",
      "Official/geographic signals: reef, route, and exclusive-zone geography shape encounter risk.",
    ],
    sources: ["GDELT", "OpenStreetMap Overpass", "World Bank Indicators"],
  },
  {
    id: "chile-lithium-circularity",
    kind: "good",
    title: "Lithium Circularity Looks Less Optional",
    lat: -23.5,
    lon: -68.2,
    labelRank: 18,
    confidence: 65,
    region: "ANDES / BATTERY MATERIALS",
    category: "Materials",
    horizon: "36-72 months",
    signalCount: 67,
    summary:
      "Resource nationalism, water sensitivity, and battery demand make recycling and chemistry flexibility more attractive.",
    implication:
      "Supply security may come from circular systems as much as new extraction.",
    rationale:
      "The material story is shifting from raw reserve volume to how cleanly, politically, and flexibly supply can scale.",
    why:
      "When extraction faces water and governance constraints, circular capacity can become strategic insurance.",
    signals: [
      "Current-event signals: mining policy, community, and battery demand coverage.",
      "Structural signals: electrification demand pressures material supply chains.",
      "Official/geographic signals: water-stress and mine-location data show physical constraints.",
    ],
    sources: ["World Bank Indicators", "FAOSTAT", "GDELT"],
  },
  {
    id: "ukraine-distributed-energy",
    kind: "good",
    title: "Distributed Energy Becomes Security Doctrine",
    lat: 49,
    lon: 31.2,
    labelRank: 11,
    confidence: 75,
    region: "UKRAINE / INFRASTRUCTURE SECURITY",
    category: "Energy",
    horizon: "12-36 months",
    signalCount: 80,
    summary:
      "Attacks on central infrastructure and rapid repair efforts point toward modular, distributed energy as a security model.",
    implication:
      "Resilience design becomes part of national security planning.",
    rationale:
      "Infrastructure targeted under conflict creates a live case study for decentralization, repairability, and redundancy.",
    why:
      "Systems that can fail gracefully are more valuable when disruption is not rare or accidental.",
    signals: [
      "Current-event signals: grid attack, repair, and outage coverage.",
      "Structural signals: centralized assets remain vulnerable to precision disruption.",
      "Official/geographic signals: power-plant and transmission maps define exposure points.",
    ],
    sources: ["GDELT", "OpenStreetMap Overpass", "World Bank Indicators"],
  },
  {
    id: "uk-grid-flex",
    kind: "good",
    title: "Grid Flexibility Becomes A Consumer Product",
    lat: 53.2,
    lon: -2.4,
    labelRank: 19,
    confidence: 67,
    region: "UNITED KINGDOM / POWER",
    category: "Energy",
    horizon: "12-30 months",
    signalCount: 65,
    summary:
      "Renewables variability, electrification, and smart-meter penetration make demand flexibility more usable at household scale.",
    implication:
      "Energy users become active grid participants through quiet automation.",
    rationale:
      "The value is not only generation. It is shifting loads, vehicles, heat, and storage around system constraints.",
    why:
      "If flexibility can be packaged simply, it becomes a mainstream utility behavior rather than an energy-nerd niche.",
    signals: [
      "Current-event signals: grid-constraint and price-volatility reporting.",
      "Structural signals: electrification adds loads that can be shifted.",
      "Official/geographic signals: grid and smart-meter datasets show where flexibility can scale.",
    ],
    sources: ["OECD AI", "World Bank Indicators", "GDELT"],
  },
  {
    id: "california-water-reuse",
    kind: "good",
    title: "Water Reuse Gets Normal",
    lat: 36.5,
    lon: -119.5,
    labelRank: 17,
    confidence: 72,
    region: "CALIFORNIA / WATER",
    category: "Water",
    horizon: "18-48 months",
    signalCount: 71,
    summary:
      "Drought cycles, urban demand, and treatment technology suggest recycled water shifts from edge case to core supply.",
    implication:
      "Cities with reuse competence gain adaptive capacity before scarcity becomes acute.",
    rationale:
      "The pattern favors systems that make water supply less dependent on one rainfall or snowpack outcome.",
    why:
      "Water reuse is boring in the right way: it reduces fragility without requiring a miracle source.",
    signals: [
      "Current-event signals: drought, reservoir, and municipal supply reporting.",
      "Structural signals: population and agricultural demand sustain water pressure.",
      "Official/geographic signals: hydrology and infrastructure datasets reveal reuse feasibility.",
    ],
    sources: ["USGS", "World Bank Indicators", "GDELT"],
  },
  {
    id: "caribbean-grid-hardening",
    kind: "good",
    title: "Island Grid Hardening Gains Urgency",
    lat: 18.2,
    lon: -66.5,
    labelRank: 27,
    confidence: 66,
    region: "CARIBBEAN / RESILIENCE",
    category: "Infrastructure",
    horizon: "12-48 months",
    signalCount: 64,
    summary:
      "Storm exposure, fuel import dependence, and outage memory point toward resilient island power as a practical priority.",
    implication:
      "Microgrids and hardened distribution become economic stability tools.",
    rationale:
      "Islands concentrate the consequences of power failure: hospitals, ports, telecoms, water systems, and tourism all feel it quickly.",
    why:
      "Hardening the grid can protect far more than electricity bills.",
    signals: [
      "Current-event signals: outage and storm-damage reporting.",
      "Structural signals: import dependence and island geography raise systemic exposure.",
      "Official/geographic signals: hurricane and infrastructure maps pinpoint vulnerable nodes.",
    ],
    sources: ["NOAA", "OpenStreetMap Overpass", "GDELT"],
  },
  {
    id: "antarctic-governance",
    kind: "bad",
    title: "Antarctic Governance Gets Less Quiet",
    lat: -73.2,
    lon: 20,
    labelRank: 29,
    confidence: 55,
    region: "ANTARCTICA / GOVERNANCE",
    category: "Geopolitics",
    horizon: "60-120 months",
    signalCount: 54,
    summary:
      "Science logistics, resource curiosity, and strategic competition make a historically quiet governance regime feel more exposed.",
    implication:
      "Treat polar governance as a slow-burn strategic issue, not only an environmental one.",
    rationale:
      "The bet is early and low-certainty: more actors, technology, and climate access may gradually test old norms.",
    why:
      "Slow governance strain can matter long before a treaty crisis is visible.",
    signals: [
      "Current-event signals: research, logistics, and polar-policy coverage.",
      "Structural signals: strategic competition keeps expanding into remote domains.",
      "Official/geographic signals: station and route locations show where state presence manifests.",
    ],
    sources: ["GDELT", "OpenStreetMap Overpass", "World Values Survey"],
  },
  {
    id: "north-sea-subsea",
    kind: "bad",
    title: "Subsea Infrastructure Becomes A Bigger Soft Target",
    lat: 56.3,
    lon: 3.1,
    labelRank: 12,
    confidence: 76,
    region: "NORTH SEA / CABLES + ENERGY",
    category: "Infrastructure",
    horizon: "6-30 months",
    signalCount: 82,
    summary:
      "Energy interconnectors, telecom cables, and gray-zone conflict make undersea systems more strategically exposed.",
    implication:
      "Monitoring, redundancy, and repair capacity are no longer specialist concerns.",
    rationale:
      "The economic surface area under the sea is growing while attribution and protection remain hard.",
    why:
      "Infrastructure that is hard to see is often easy to forget until failure cascades into daily systems.",
    signals: [
      "Current-event signals: cable damage, naval posture, and energy-security reporting.",
      "Structural signals: more offshore wind and interconnectors increase dependency.",
      "Official/geographic signals: cable and pipeline maps define concentrated exposure.",
    ],
    sources: ["OpenStreetMap Overpass", "GDELT", "World Bank Indicators"],
  },
  {
    id: "west-africa-cocoa",
    kind: "bad",
    title: "Cocoa Stress Becomes A Wider Food-Security Signal",
    lat: 7.7,
    lon: -5.2,
    labelRank: 15,
    confidence: 70,
    region: "WEST AFRICA / AGRICULTURE",
    category: "Food systems",
    horizon: "12-36 months",
    signalCount: 74,
    summary:
      "Crop disease, rainfall volatility, and farmer economics suggest specialty commodities can signal deeper agricultural fragility.",
    implication:
      "Consumer price shocks may reveal producer resilience problems rather than temporary scarcity alone.",
    rationale:
      "Commodity stress often contains a local livelihood story, a climate story, and a market-structure story at the same time.",
    why:
      "The visible price is downstream of slower fragilities in land, labour, disease, and farmer incentives.",
    signals: [
      "Current-event signals: crop shortfall and price-shock reporting.",
      "Structural signals: smallholder economics and climate exposure constrain adaptation.",
      "Official/geographic signals: production and land-use data show where sensitivity is concentrated.",
    ],
    sources: ["FAOSTAT", "World Bank Indicators", "GDELT"],
  },
  {
    id: "balkans-batteries",
    kind: "good",
    title: "Battery Supply Leverage Moves Into The Balkans",
    lat: 44.2,
    lon: 20.6,
    labelRank: 30,
    confidence: 58,
    region: "BALKANS / INDUSTRIAL POLICY",
    category: "Materials",
    horizon: "36-84 months",
    signalCount: 57,
    summary:
      "European industrial policy and local mineral debates make the region more strategically visible in battery supply discussions.",
    implication:
      "Social license may determine whether resource geography turns into industrial advantage.",
    rationale:
      "The signal is not simply deposits. It is whether policy, communities, and processing capacity can align.",
    why:
      "Mineral potential without trust can become blockage rather than leverage.",
    signals: [
      "Current-event signals: permitting, protest, and battery-project reporting.",
      "Structural signals: EU supply-chain diversification pressure persists.",
      "Official/geographic signals: mine, transport, and power data shape feasibility.",
    ],
    sources: ["GDELT", "V-Dem", "OpenStreetMap Overpass"],
  },
  {
    id: "australia-fire-comms",
    kind: "good",
    title: "Fire-Resilient Communications Matter More",
    lat: -33.9,
    lon: 151.2,
    labelRank: 24,
    confidence: 63,
    region: "AUSTRALIA / DISASTER RESPONSE",
    category: "Infrastructure",
    horizon: "12-48 months",
    signalCount: 60,
    summary:
      "Wildfire intensity, remote communities, and satellite connectivity make resilient communications a practical public-safety layer.",
    implication:
      "Backup connectivity becomes a civic utility in hazard-prone places.",
    rationale:
      "When disasters interrupt power, roads, and cell towers together, communications resilience becomes part of survival infrastructure.",
    why:
      "Coordination fails quickly when information flow fails.",
    signals: [
      "Current-event signals: fire, evacuation, and outage reporting.",
      "Structural signals: remote settlement patterns and climate exposure increase need.",
      "Official/geographic signals: fire hotspot and telecom infrastructure layers show weak points.",
    ],
    sources: ["NASA FIRMS", "OpenStreetMap Overpass", "GDELT"],
  },
  {
    id: "nile-water-politics",
    kind: "bad",
    title: "Water Politics Gets Harder To Compartmentalise",
    lat: 26.8,
    lon: 30.8,
    labelRank: 13,
    confidence: 68,
    region: "NILE BASIN / WATER SECURITY",
    category: "Water",
    horizon: "24-72 months",
    signalCount: 70,
    summary:
      "Dams, irrigation demand, population growth, and rainfall variability make basin politics harder to separate from domestic stability.",
    implication:
      "Water diplomacy becomes economic policy, food policy, and security policy at once.",
    rationale:
      "Shared rivers are slow-moving strategic systems. Pressure builds through demography, agriculture, power, and legitimacy.",
    why:
      "A basin stress can surface as electricity tension, food costs, migration pressure, or diplomacy.",
    signals: [
      "Current-event signals: dam negotiation, drought, and food-price reporting.",
      "Structural signals: population and irrigation demand sustain pressure.",
      "Official/geographic signals: basin, reservoir, and crop data reveal dependencies.",
    ],
    sources: ["FAOSTAT", "World Bank Indicators", "GDELT"],
  },
  {
    id: "brazil-bioindustrial",
    kind: "good",
    title: "Bioindustrial Capacity Gets More Interesting",
    lat: -15.8,
    lon: -47.9,
    labelRank: 22,
    confidence: 62,
    region: "BRAZIL / BIOECONOMY",
    category: "Biotechnology",
    horizon: "36-84 months",
    signalCount: 61,
    summary:
      "Agricultural scale, biodiversity, and industrial fermentation suggest bio-based materials and inputs may find stronger footing.",
    implication:
      "The bioeconomy may be a manufacturing story, not only a conservation story.",
    rationale:
      "The convergence is between feedstock, science, domestic markets, and climate-linked demand for lower-carbon inputs.",
    why:
      "Countries that combine biological abundance with processing capability can shape new industrial niches.",
    signals: [
      "Current-event signals: biofuel, biotech, and industrial policy reporting.",
      "Structural signals: agricultural scale and scientific capacity create options.",
      "Official/geographic signals: land-use and production datasets show resource base.",
    ],
    sources: ["FAOSTAT", "World Bank Indicators", "GDELT"],
  },
  {
    id: "us-heartland-robotics",
    kind: "good",
    title: "Practical Robotics Finds Quiet Adoption",
    lat: 41.6,
    lon: -93.6,
    labelRank: 14,
    confidence: 69,
    region: "US HEARTLAND / AUTOMATION",
    category: "Robotics",
    horizon: "12-48 months",
    signalCount: 72,
    summary:
      "Labour scarcity, farm economics, and cheaper sensing make narrow robotics more useful than theatrical general-purpose systems.",
    implication:
      "Watch repetitive field, warehouse, and inspection tasks before humanoid hype cycles.",
    rationale:
      "Adoption tends to follow pain points that are dull, frequent, and measurable.",
    why:
      "The future of robotics may arrive first as reliable narrow tools that save labour in places with persistent shortages.",
    signals: [
      "Current-event signals: farm automation, warehouse robotics, and labour-shortage reporting.",
      "Structural signals: demographic and wage pressure keep automation demand alive.",
      "Official/geographic signals: agricultural and logistics infrastructure layers show where tasks cluster.",
    ],
    sources: ["ILOSTAT", "FAOSTAT", "GDELT"],
  },
  {
    id: "med-tourism-heat",
    kind: "bad",
    title: "Peak-Season Tourism Gets Re-rated",
    lat: 39.3,
    lon: 15,
    labelRank: 21,
    confidence: 67,
    region: "MEDITERRANEAN / TOURISM",
    category: "Cities",
    horizon: "12-36 months",
    signalCount: 66,
    summary:
      "Heat, wildfire, water pressure, and visitor crowding point toward tourism shifting in timing, geography, and risk perception.",
    implication:
      "Shoulder seasons and heat-adapted destinations may gain relative advantage.",
    rationale:
      "Tourism depends on comfort, water, insurance, transport reliability, and social tolerance for crowding.",
    why:
      "A destination can stay desirable while the old calendar becomes less wise.",
    signals: [
      "Current-event signals: heatwave, wildfire, and visitor-management reporting.",
      "Structural signals: water scarcity and aging infrastructure constrain peak load.",
      "Official/geographic signals: fire and weather data place the stress on specific regions.",
    ],
    sources: ["NASA FIRMS", "WHO GHO", "GDELT"],
  },
  {
    id: "indonesia-nickel",
    kind: "good",
    title: "Nickel Governance Premium Rises",
    lat: -2.4,
    lon: 121.6,
    labelRank: 23,
    confidence: 64,
    region: "INDONESIA / BATTERY MATERIALS",
    category: "Materials",
    horizon: "24-72 months",
    signalCount: 63,
    summary:
      "Battery demand, environmental scrutiny, and downstream industrial policy make governance quality part of material value.",
    implication:
      "Cleaner, more transparent supply can become a competitive advantage.",
    rationale:
      "The material is valuable, but the future premium may attach to proof: emissions, labour, biodiversity, and processing standards.",
    why:
      "When buyers need resilient and defensible supply, governance becomes part of the product.",
    signals: [
      "Current-event signals: mining, export policy, and environmental reporting.",
      "Structural signals: battery demand keeps pressure on nickel supply.",
      "Official/geographic signals: mine and processing locations connect policy to place.",
    ],
    sources: ["World Bank Indicators", "V-Dem", "GDELT"],
  },
  {
    id: "central-asia-water",
    kind: "bad",
    title: "Water-Energy Tradeoffs Tighten",
    lat: 41.3,
    lon: 69.3,
    labelRank: 25,
    confidence: 65,
    region: "CENTRAL ASIA / WATER + POWER",
    category: "Water",
    horizon: "24-72 months",
    signalCount: 64,
    summary:
      "Hydropower, irrigation, glacier loss, and regional demand make water-energy bargains more difficult to maintain.",
    implication:
      "Energy planning and agricultural planning need to be read as one system.",
    rationale:
      "Seasonal water needs do not always align with seasonal power needs, and climate variability makes that mismatch sharper.",
    why:
      "A water decision upstream can become an energy, food, or diplomatic decision downstream.",
    signals: [
      "Current-event signals: drought, power shortage, and irrigation reporting.",
      "Structural signals: hydropower and agricultural demand are deeply interlocked.",
      "Official/geographic signals: basin and glacier datasets locate the slow pressure.",
    ],
    sources: ["FAOSTAT", "World Bank Indicators", "GDELT"],
  },
  {
    id: "korea-ai-efficiency",
    kind: "good",
    title: "AI Efficiency Becomes Hardware Strategy",
    lat: 36.4,
    lon: 128,
    labelRank: 26,
    confidence: 66,
    region: "KOREA / SEMICONDUCTORS",
    category: "AI",
    horizon: "12-48 months",
    signalCount: 67,
    summary:
      "Power constraints, memory bottlenecks, and model deployment demand make efficient chips and packaging more strategically valuable.",
    implication:
      "Compute advantage shifts toward performance per watt and supply reliability.",
    rationale:
      "The next constraint is not only bigger models. It is powering, cooling, and integrating AI into real products at scale.",
    why:
      "Efficiency becomes an infrastructure advantage when power and memory become limiting factors.",
    signals: [
      "Current-event signals: chip export, memory, and data-center power reporting.",
      "Structural signals: AI deployment expands compute demand beyond frontier labs.",
      "Official/geographic signals: semiconductor clusters and power systems define scaling constraints.",
    ],
    sources: ["OECD AI", "arXiv", "GDELT"],
  },
  {
    id: "horn-maritime-food",
    kind: "bad",
    title: "Maritime Risk Meets Food Vulnerability",
    lat: 10.6,
    lon: 45.2,
    labelRank: 28,
    confidence: 72,
    region: "HORN OF AFRICA / FOOD + ROUTES",
    category: "Food systems",
    horizon: "6-24 months",
    signalCount: 77,
    summary:
      "Shipping disruption, import dependence, drought exposure, and conflict signals can compound into food-system pressure.",
    implication:
      "Route resilience and food resilience should be read together in import-dependent regions.",
    rationale:
      "The risk is convergence: maritime insurance and route delays are more painful where food systems already carry stress.",
    why:
      "A logistics shock rarely stays a logistics shock when households are already price-sensitive.",
    signals: [
      "Current-event signals: shipping, conflict, and food-price reporting clusters.",
      "Structural signals: import dependence and climate exposure reduce slack.",
      "Official/geographic signals: ports, roads, and drought data show where pressure can compound.",
    ],
    sources: ["FAOSTAT", "GDELT", "OpenStreetMap Overpass"],
  },
];

const categorySignalAdditions = {
  AI: [
    "Cross-signal inference: model capability growth only matters where power, memory bandwidth, and deployment economics can keep up.",
    "Constraint check: look for procurement language, chip packaging investment, and grid interconnection queues moving together.",
    "Disconfirmation watch: if inference costs fall faster than power constraints rise, the bet weakens.",
  ],
  Biotechnology: [
    "Cross-signal inference: biology becomes industrial when feedstock, regulation, and local processing incentives align.",
    "Constraint check: permitting, contamination risk, and buyer trust may matter more than lab capability.",
    "Disconfirmation watch: weak offtake agreements or inconsistent policy support would slow the implied transition.",
  ],
  Cities: [
    "Cross-signal inference: heat, insurance, comfort, and maintenance budgets can reprice urban behavior before migration shows up.",
    "Constraint check: track building codes, cooling-load data, health guidance, and visitor timing together.",
    "Disconfirmation watch: if adaptation investment arrives faster than stress signals compound, the bet becomes less sharp.",
  ],
  Climate: [
    "Cross-signal inference: climate stress becomes a systems bet when ecological signals start changing logistics, finance, or food assumptions.",
    "Constraint check: official hazard data is strongest when paired with observable behavior changes in markets or policy.",
    "Disconfirmation watch: stable rainfall, lower fire incidence, or new buffers would reduce near-term pressure.",
  ],
  Energy: [
    "Cross-signal inference: energy advantage is shifting from pure generation scale toward controllability, storage, and local reliability.",
    "Constraint check: watch grid queues, outage frequency, cooling demand, and battery deployment as one stack.",
    "Disconfirmation watch: fast transmission buildout or cheaper centralized capacity would soften the resilience premium.",
  ],
  "Food systems": [
    "Cross-signal inference: food risk becomes non-linear when crop stress, route fragility, household sensitivity, and storage constraints overlap.",
    "Constraint check: the useful signal is not one bad harvest; it is repeated stress across price, logistics, and policy layers.",
    "Disconfirmation watch: high stocks, diversified imports, and stable local prices would weaken the pressure reading.",
  ],
  Geopolitics: [
    "Cross-signal inference: institutional ambiguity becomes expensive when infrastructure, trade, and security assumptions all need predictability.",
    "Constraint check: track sanctions, insurance, port behavior, military posture, and domestic legitimacy together.",
    "Disconfirmation watch: credible de-escalation or durable coordination would slow the risk premium.",
  ],
  Infrastructure: [
    "Cross-signal inference: infrastructure value is moving toward sensing, redundancy, and recovery speed rather than only bigger assets.",
    "Constraint check: look for maintenance backlogs, outage maps, emergency procurement, and insurance exclusions lining up.",
    "Disconfirmation watch: if regulation funds hardening early, the advantage may move from disruption response to implementation quality.",
  ],
  Labour: [
    "Cross-signal inference: heat and demographic stress can quietly change productivity assumptions before labour markets visibly break.",
    "Constraint check: compare illness, absenteeism, wage pressure, working-hour restrictions, and cooling infrastructure.",
    "Disconfirmation watch: adaptation, mechanisation, or job redesign can absorb some pressure if deployed early.",
  ],
  Logistics: [
    "Cross-signal inference: route fragility is becoming a balance-sheet issue, not just an operations issue.",
    "Constraint check: freight rates, insurance language, naval posture, and port congestion should be read as one signal surface.",
    "Disconfirmation watch: sustained route normalization and falling insurance premiums would reduce the bet.",
  ],
  Manufacturing: [
    "Cross-signal inference: manufacturing resilience becomes valuable when qualification cycles are slower than geopolitical risk cycles.",
    "Constraint check: subsidies, export controls, power reliability, and supplier geography need to move in the same direction.",
    "Disconfirmation watch: if trust and capacity concentrate again without disruption, redundant production loses urgency.",
  ],
  Materials: [
    "Cross-signal inference: material value is migrating from tonnes alone toward proof, processing, provenance, and political durability.",
    "Constraint check: price, permitting, buyer ESG requirements, and downstream policy should be cross-read.",
    "Disconfirmation watch: lower demand growth or cleaner substitutes would reduce the strategic premium.",
  ],
  Robotics: [
    "Cross-signal inference: robotics adoption is likelier where labour pain is repetitive, measurable, and geographically clustered.",
    "Constraint check: watch maintenance capacity, sensor cost, insurance acceptance, and dull operational use cases.",
    "Disconfirmation watch: if labour availability improves or robots remain service-heavy, adoption stays narrower.",
  ],
  Water: [
    "Cross-signal inference: water stress becomes strategic when it couples to electricity, food, and cross-border legitimacy.",
    "Constraint check: basin data, crop patterns, hydropower output, and household price sensitivity matter together.",
    "Disconfirmation watch: wet years can hide structural fragility; durable infrastructure and governance reform would weaken the bet.",
  ],
  default: [
    "Cross-signal inference: the bet strengthens when current events sit inside a deeper structural constraint.",
    "Constraint check: the signal is more useful when geography, institutions, and behavior point in the same direction.",
    "Disconfirmation watch: contrary official data or durable behavioral reversal would weaken the thesis.",
  ],
};

const betReadouts = {
  "sahel-microgrids": {
    surprise:
      "The mind-bending version is that the Sahel may skip parts of the old grid-development sequence: cooling, phones, pumps, and security demand can make microgrids a sovereignty layer before they are a climate story.",
    watch:
      "Watch diesel displacement, mobile-money financing, battery theft/security rules, and whether clinics or telecom towers become anchor customers.",
  },
  "red-sea-routing": {
    surprise:
      "The deeper bet is not a shipping crisis. It is that boardrooms relearn geography: a narrow waterway can quietly decide food prices, inventory accounting, and which factories look well-run.",
    watch:
      "Watch war-risk premiums, Cape routing persistence, port blank sailings, and whether importers accept higher working capital as normal.",
  },
  "taiwan-redundancy": {
    surprise:
      "The non-obvious edge is that duplicate capacity may become a trust product: buyers pay for qualified fallback before anything breaks because qualification time itself is the scarce asset.",
    watch:
      "Watch advanced packaging bottlenecks, power contracts, export-control language, and whether smaller suppliers get pulled into redundancy mandates.",
  },
  "europe-retrofit": {
    surprise:
      "Buildings may become the hidden health infrastructure of Europe: insulation, shading, and heat pumps start looking like public-health tools rather than renovation choices.",
    watch:
      "Watch mortality data, cooling-load peaks, landlord compliance rules, and whether insurers or lenders start pricing heat exposure.",
  },
  "coastal-insurance": {
    surprise:
      "The surprising part is that retreat can happen through paperwork before politics: exclusions, deductibles, and mortgage friction can move faster than zoning maps.",
    watch:
      "Watch insurer exits, public backstop losses, post-storm rebuilding rules, and whether buyers demand flood-risk discounts earlier.",
  },
  "gulf-hydrogen": {
    surprise:
      "Hydrogen may become less a fuel export and more a diplomacy instrument: ports, ammonia, steel, and offtake contracts could turn energy transition into alliance architecture.",
    watch:
      "Watch electrolyzer utilization, water sourcing scrutiny, ammonia shipping standards, and whether buyers sign bankable long-term contracts.",
  },
  "amazon-rainfall": {
    surprise:
      "The Amazon signal is not only forest loss. It is whether rainfall reliability becomes a credit condition for agriculture, hydropower, and even urban expansion.",
    watch:
      "Watch dry-season length, river transport interruptions, soy/cattle credit terms, and commodity buyers tightening deforestation proof.",
  },
  "india-heat-labour": {
    surprise:
      "Heat could become a hidden wage: factories and cities may pay through lower output, shorter shifts, cooling capital, and worker churn before official productivity data catches up.",
    watch:
      "Watch wet-bulb alerts, construction shift rules, cooling subsidies, and absenteeism in logistics and outdoor work.",
  },
  "japan-care-automation": {
    surprise:
      "The care robot story may not be humanoids; it may be mundane dignity infrastructure: lifts, sensors, scheduling, and fall prevention that keep institutions functional.",
    watch:
      "Watch caregiver vacancy rates, reimbursement codes, procurement by elder-care chains, and whether families accept ambient monitoring.",
  },
  "arctic-routing": {
    surprise:
      "The Arctic may become strategically important even before it becomes commercially convenient: mapping, insurance, rescue capacity, and military presence can arrive ahead of profitable shipping.",
    watch:
      "Watch ice variability, search-and-rescue investment, port hardening, and whether insurers price Arctic routes as experimental or routine.",
  },
  "east-africa-cold-chain": {
    surprise:
      "The cold-chain upside is that food security can be won after harvest: refrigeration and logistics may beat yield improvement as the fastest visible gain.",
    watch:
      "Watch mini-grid cold rooms, vaccine logistics reuse, market-loss data, and whether aggregators finance storage for small producers.",
  },
  "south-china-sea": {
    surprise:
      "The risk is not just naval confrontation. It is operational hesitation: firms may pay for optionality because ambiguity itself slows routing, investment, and inventory decisions.",
    watch:
      "Watch coast-guard incidents, insurance wording, subsea cable routing, and procurement moving from cheapest to most optional.",
  },
  "chile-lithium-circularity": {
    surprise:
      "The strategic prize may shift from extraction to retention: whoever can keep lithium in a circular loop owns resilience after the first mining boom.",
    watch:
      "Watch recycling yields, brine-water rules, battery passport enforcement, and automaker deals that reserve recycled supply.",
  },
  "ukraine-distributed-energy": {
    surprise:
      "Ukraine may turn distributed power from emergency improvisation into a playbook for hostile-environment infrastructure everywhere.",
    watch:
      "Watch microgrid procurement, substation repair times, mobile storage, and whether reconstruction funds favor modular resilience over old centralization.",
  },
  "uk-grid-flex": {
    surprise:
      "The UK grid constraint may create a new asset class in invisible flexibility: batteries, demand response, and controllable loads become as strategic as generation.",
    watch:
      "Watch queue reform, negative pricing, grid-connection auctions, and whether data centers pay for flexible load behavior.",
  },
  "california-water-reuse": {
    surprise:
      "Water reuse may cross a psychological threshold: once trust, regulation, and scarcity converge, recycled water becomes civic infrastructure rather than a last resort.",
    watch:
      "Watch direct potable reuse approvals, utility bond language, drought restrictions, and whether industry signs long offtake contracts.",
  },
  "caribbean-grid-hardening": {
    surprise:
      "Island grids may become test beds for the future of resilience finance: storms make payback visible, so microgrids can be justified faster than on continents.",
    watch:
      "Watch parametric insurance, hospital and port microgrids, battery procurement, and post-hurricane rebuild standards.",
  },
  "antarctic-governance": {
    surprise:
      "Antarctica may matter because it is one of the last places where science, minerals, tourism, and strategic signaling collide under a fragile treaty norm.",
    watch:
      "Watch inspection disputes, tourism caps, research-station expansion, and any language that reframes access as national interest.",
  },
  "north-sea-subsea": {
    surprise:
      "The North Seaâs valuable infrastructure is becoming less visible and more vulnerable: cables, interconnectors, pipelines, and wind assets form one undersea nervous system.",
    watch:
      "Watch seabed surveillance budgets, cable repair capacity, sabotage investigations, and insurance terms for offshore energy assets.",
  },
  "west-africa-cocoa": {
    surprise:
      "Cocoa stress is a social signal as much as a crop signal: when climate, disease, farmer incomes, and regulation converge, chocolate becomes a governance problem.",
    watch:
      "Watch farmgate prices, swollen-shoot disease, EU traceability enforcement, and whether processors invest directly in farmer resilience.",
  },
  "balkans-batteries": {
    surprise:
      "The Balkans could become a battery corridor only if social license becomes part of industrial strategy; minerals without legitimacy may strand themselves.",
    watch:
      "Watch protest intensity, permitting speed, EU supply-chain language, and whether communities receive credible local benefits.",
  },
  "australia-fire-comms": {
    surprise:
      "Fire resilience may make communications infrastructure a life-safety layer: satellites, mesh networks, and battery-backed towers move from nice-to-have to civic baseline.",
    watch:
      "Watch tower outage data, emergency-service procurement, satellite handset adoption, and insurance pressure on rural connectivity.",
  },
  "nile-water-politics": {
    surprise:
      "The Nile risk is that water becomes a calendar problem: power generation, irrigation, and domestic legitimacy peak at different moments and force political tradeoffs.",
    watch:
      "Watch reservoir filling rules, wheat import costs, hydropower output, and diplomatic language during drought years.",
  },
  "brazil-bioindustrial": {
    surprise:
      "Brazilâs edge may be turning agriculture into a platform: sugar, residues, biodiversity, and industrial biology can make rural assets feel like a manufacturing base.",
    watch:
      "Watch SAF mandates, fermentation capacity, feedstock traceability, and whether global buyers pay for lower-carbon molecules.",
  },
  "us-heartland-robotics": {
    surprise:
      "Robotics may win first by being boring: the most consequential machines will do repetitive inspection, picking, spraying, and hauling where labour gaps are already priced in.",
    watch:
      "Watch dealer service networks, farm credit terms, insurance acceptance, and whether robots reduce input waste rather than only labour hours.",
  },
  "med-tourism-heat": {
    surprise:
      "Mediterranean tourism may not shrink so much as invert: value moves to shade, timing, water reliability, and places that can make heat feel managed.",
    watch:
      "Watch hotel cooling costs, cruise schedule changes, wildfire cancellations, and municipal visitor caps during peak heat.",
  },
  "indonesia-nickel": {
    surprise:
      "Nickel may become a reputational material: buyers want batteries, but they also want a supply chain they can defend in public.",
    watch:
      "Watch tailings rules, power-source disclosure, local processing margins, and automaker pressure for auditable supply.",
  },
  "central-asia-water": {
    surprise:
      "Central Asiaâs water issue may express as electricity stress first: irrigation decisions, winter heating, and hydropower can pull the same rivers in opposite directions.",
    watch:
      "Watch reservoir levels, winter blackouts, cotton acreage, and regional compensation deals during dry years.",
  },
  "korea-ai-efficiency": {
    surprise:
      "The AI race may become a thermodynamics race: the winner is not just the best model, but the stack that can turn watts and memory into reliable products.",
    watch:
      "Watch HBM supply, advanced packaging yield, data-center power deals, and edge-AI deployments that prize performance per watt.",
  },
  "horn-maritime-food": {
    surprise:
      "The Horn signal is a compounding trap: shipping disruption is most dangerous where households already convert small price moves into political and humanitarian stress.",
    watch:
      "Watch grain tender delays, port congestion, exchange-rate pressure, and whether aid agencies pre-position food before route risk spikes.",
  },
};

for (const bet of bets) {
  const readout = betReadouts[bet.id] || {
    surprise:
      "The important signal is the second-order behavior that becomes rational before the headline trend is obvious.",
    watch:
      "Watch for confirming and disconfirming signals across policy, price, geography, and institutional behavior.",
  };
  const additions = categorySignalAdditions[bet.category] || categorySignalAdditions.default;
  bet.surprise = readout.surprise;
  bet.watch = readout.watch;
  bet.signals = [...bet.signals, ...additions];
  bet.signalCount = Math.max(bet.signalCount + 38, 104 + ((bet.id.length * 7) % 31));
}

const sourceIndex = {
  arXiv: "https://arxiv.org/",
  Eurostat: "https://ec.europa.eu/eurostat",
  FAOSTAT: "https://www.fao.org/faostat/",
  GDELT: "https://www.gdeltproject.org/",
  IEA: "https://www.iea.org/data-and-statistics",
  ILOSTAT: "https://ilostat.ilo.org/data/",
  "NASA FIRMS": "https://firms.modaps.eosdis.nasa.gov/",
  NOAA: "https://www.noaa.gov/",
  "OECD AI": "https://oecd.ai/",
  "OpenStreetMap Overpass": "https://overpass-api.de/",
  "UN Population": "https://population.un.org/wpp/",
  USGS: "https://www.usgs.gov/programs/national-geospatial-program",
  "V-Dem": "https://www.v-dem.net/data/",
  "WHO GHO": "https://www.who.int/data/gho",
  "World Bank Indicators": "https://data.worldbank.org/indicator",
  "World Values Survey": "https://www.worldvaluessurvey.org/",
};

const ambientLinks = [
  ["red-sea-routing", "horn-maritime-food"],
  ["taiwan-redundancy", "korea-ai-efficiency"],
  ["coastal-insurance", "caribbean-grid-hardening"],
  ["india-heat-labour", "europe-retrofit"],
  ["amazon-rainfall", "brazil-bioindustrial"],
  ["north-sea-subsea", "uk-grid-flex"],
  ["west-africa-cocoa", "east-africa-cold-chain"],
  ["central-asia-water", "nile-water-politics"],
  ["ukraine-distributed-energy", "sahel-microgrids"],
  ["indonesia-nickel", "chile-lithium-circularity"],
  ["australia-fire-comms", "med-tourism-heat"],
  ["arctic-routing", "antarctic-governance"],
];

const landMasses = [
  [
    [72, -168],
    [63, -150],
    [58, -125],
    [50, -125],
    [44, -110],
    [31, -117],
    [18, -98],
    [8, -80],
    [16, -63],
    [31, -81],
    [45, -70],
    [53, -55],
    [65, -74],
    [72, -95],
  ],
  [
    [13, -80],
    [6, -77],
    [-4, -81],
    [-18, -75],
    [-34, -72],
    [-55, -69],
    [-52, -58],
    [-35, -52],
    [-21, -43],
    [-8, -35],
    [3, -50],
    [9, -62],
  ],
  [
    [36, -10],
    [58, -8],
    [70, 25],
    [64, 60],
    [73, 100],
    [60, 150],
    [45, 142],
    [34, 122],
    [20, 105],
    [8, 78],
    [24, 60],
    [32, 34],
    [31, 12],
    [43, 4],
  ],
  [
    [32, -17],
    [35, 9],
    [31, 31],
    [12, 44],
    [-8, 40],
    [-34, 20],
    [-35, 17],
    [-22, 14],
    [-12, 10],
    [2, 9],
    [9, -12],
    [20, -17],
  ],
  [
    [-11, 113],
    [-18, 122],
    [-25, 114],
    [-35, 116],
    [-39, 145],
    [-28, 154],
    [-13, 143],
  ],
  [
    [83, -51],
    [76, -20],
    [64, -35],
    [60, -48],
    [70, -62],
  ],
];

const LAND_TOPOLOGY_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json";
let landRings = landMasses;
let landDots = [];
let landFillDots = [];
let landSource = "fallback";

function setLandTelemetry() {
  document.documentElement.dataset.landSource = landSource;
  document.documentElement.dataset.landDots = String(landDots.length + landFillDots.length);
}

const stars = Array.from({ length: 140 }, (_, index) => {
  const seed = Math.sin(index * 999) * 10000;
  const x = seed - Math.floor(seed);
  const seed2 = Math.sin(index * 1319) * 10000;
  const y = seed2 - Math.floor(seed2);
  return {
    x,
    y,
    alpha: 0.12 + ((index * 17) % 11) / 90,
    radius: 0.35 + ((index * 13) % 8) / 12,
  };
});

const appShell = document.querySelector(".app-shell");
const canvas = document.querySelector("#globeCanvas");
const ctx = canvas.getContext("2d");
const betCard = document.querySelector("#betCard");
const spinField = document.querySelector("#spinField");
const enterButton = document.querySelector("#enterButton");
const openBriefButton = document.querySelector("#openBrief");
const sourcesButton = document.querySelector("#sourcesButton");
const hoverPlate = document.querySelector("#hoverPlate");
const hoverKind = document.querySelector("#hoverKind");
const hoverTitle = document.querySelector("#hoverTitle");
const readoutMode = document.querySelector("#readoutMode");
const readoutLocation = document.querySelector("#readoutLocation");
const filterButtons = [...document.querySelectorAll("[data-filter]")];

const fields = {
  kind: document.querySelector("#cardKind"),
  confidence: document.querySelector("#cardConfidence"),
  region: document.querySelector("#cardRegion"),
  title: document.querySelector("#cardTitle"),
  summary: document.querySelector("#cardSummary"),
  implication: document.querySelector("#cardImplication"),
  surprise: document.querySelector("#cardSurprise"),
  horizon: document.querySelector("#cardHorizon"),
  signals: document.querySelector("#cardSignals"),
  category: document.querySelector("#cardCategory"),
  briefTitle: document.querySelector("#briefTitle"),
  briefDeck: document.querySelector("#briefDeck"),
  rationale: document.querySelector("#briefRationale"),
  why: document.querySelector("#briefWhy"),
  briefSurprise: document.querySelector("#briefSurprise"),
  briefWatch: document.querySelector("#briefWatch"),
  signalList: document.querySelector("#signalList"),
  sourceList: document.querySelector("#sourceList"),
};

let width = 1;
let height = 1;
let dpr = 1;
let mode = "landing";
let activeFilter = "all";
let selectedBet = bets[0];
let hoveredBet = null;
let projectedPins = [];
let centerLon = 15;
let autoLon = 15;
let targetLon = 15;
let lastTime = performance.now();
let pointer = { x: -9999, y: -9999 };
const spin = {
  dragging: false,
  lastX: 0,
  velocity: 0,
  manualUntil: 0,
  moved: false,
};

function isDesktop() {
  return window.matchMedia("(min-width: 821px)").matches;
}

function passesFilter(bet) {
  return activeFilter === "all" || bet.kind === activeFilter;
}

function getBet(id) {
  return bets.find((bet) => bet.id === id);
}

function shortestAngle(from, to) {
  return ((((to - from) % 360) + 540) % 360) - 180;
}

function normalizeLon(value) {
  return ((((value + 180) % 360) + 360) % 360) - 180;
}

function decodeTopoArc(topology, arcIndex) {
  const arc = topology.arcs[arcIndex < 0 ? ~arcIndex : arcIndex];
  const [scaleX, scaleY] = topology.transform.scale;
  const [translateX, translateY] = topology.transform.translate;
  let x = 0;
  let y = 0;
  const points = arc.map(([dx, dy]) => {
    x += dx;
    y += dy;
    return [y * scaleY + translateY, x * scaleX + translateX];
  });
  return arcIndex < 0 ? points.reverse() : points;
}

function decodeTopoRing(topology, ring) {
  return ring.flatMap((arcIndex, index) => {
    const arc = decodeTopoArc(topology, arcIndex);
    return index === 0 ? arc : arc.slice(1);
  });
}

function collectLandRings(topology) {
  const geometry = topology.objects.land;
  const geometries =
    geometry.type === "GeometryCollection" ? geometry.geometries : [geometry];
  const rings = [];

  for (const item of geometries) {
    const polygons = item.type === "Polygon" ? [item.arcs] : item.arcs;
    for (const polygon of polygons || []) {
      for (const ring of polygon) {
        const decoded = decodeTopoRing(topology, ring);
        if (decoded.length > 3) rings.push(decoded);
      }
    }
  }

  return rings;
}

function buildLandDots(rings) {
  const dots = [];
  for (const ring of rings) {
    for (let index = 0; index < ring.length - 1; index += 2) {
      const [latA, lonA] = ring[index];
      const [latB, lonB] = ring[index + 1];
      dots.push([latA, lonA]);
      const distance = Math.hypot(latB - latA, lonB - lonA);
      const steps = Math.min(6, Math.floor(distance / 1.6));
      for (let step = 1; step < steps; step += 1) {
        const t = step / steps;
        dots.push([
          latA + (latB - latA) * t,
          lonA + (lonB - lonA) * t,
        ]);
      }
    }
  }
  return dots;
}

function ringBounds(ring) {
  return ring.reduce(
    (bounds, [lat, lon]) => ({
      minLat: Math.min(bounds.minLat, lat),
      maxLat: Math.max(bounds.maxLat, lat),
      minLon: Math.min(bounds.minLon, lon),
      maxLon: Math.max(bounds.maxLon, lon),
    }),
    { minLat: 90, maxLat: -90, minLon: 180, maxLon: -180 },
  );
}

function pointInRing(lat, lon, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i, i += 1) {
    const [latI, lonI] = ring[i];
    const [latJ, lonJ] = ring[j];
    const intersects =
      lonI > lon !== lonJ > lon &&
      lat < ((latJ - latI) * (lon - lonI)) / (lonJ - lonI || 0.00001) + latI;
    if (intersects) inside = !inside;
  }
  return inside;
}

function buildLandFillDots(rings) {
  const prepared = rings
    .map((ring) => ({ ring, bounds: ringBounds(ring) }))
    .filter(({ bounds }) => bounds.maxLon - bounds.minLon < 340);
  const dots = [];
  const step = 1.65;
  for (let lat = -58; lat <= 78; lat += step) {
    const offset = Math.sin(lat * 2.71) * 0.45;
    for (let lon = -180 + offset; lon <= 180; lon += step) {
      const ring = prepared.find(
        ({ bounds, ring: candidate }) =>
          lat >= bounds.minLat &&
          lat <= bounds.maxLat &&
          lon >= bounds.minLon &&
          lon <= bounds.maxLon &&
          pointInRing(lat, lon, candidate),
      );
      if (ring) {
        dots.push([
          lat + Math.sin((lat + lon) * 1.7) * 0.18,
          lon + Math.cos((lat - lon) * 1.3) * 0.18,
        ]);
      }
    }
  }
  return dots;
}

async function loadDetailedLand() {
  try {
    const response = await fetch(LAND_TOPOLOGY_URL, { cache: "force-cache" });
    if (!response.ok) throw new Error(`land topology ${response.status}`);
    const topology = await response.json();
    const rings = collectLandRings(topology);
    if (rings.length < 5) throw new Error("land topology empty");
    landRings = rings;
    landDots = buildLandDots(rings);
    landFillDots = buildLandFillDots(rings);
    landSource = "natural-earth";
    setLandTelemetry();
  } catch (error) {
    landSource = "fallback";
    landRings = landMasses;
    landDots = buildLandDots(landMasses);
    landFillDots = buildLandFillDots(landMasses);
    setLandTelemetry();
    console.warn("Using fallback land geometry", error);
  }
}

function resize() {
  const rect = canvas.getBoundingClientRect();
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = Math.max(1, rect.width);
  height = Math.max(1, rect.height);
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function globeMetrics() {
  const selectedShift = mode === "selected" || mode === "brief";
  const desktop = isDesktop();
  return {
    cx: desktop ? width * (selectedShift ? 0.35 : 0.42) : width * 0.5,
    cy: height * (desktop ? 0.54 : selectedShift ? 0.37 : 0.47),
    r: desktop
      ? Math.min(width * 0.36, height * 0.58)
      : Math.min(width, height) * (selectedShift ? 0.36 : 0.39),
  };
}

function project(lat, lon, metrics = globeMetrics()) {
  const latRad = (lat * Math.PI) / 180;
  const lonRad = ((lon - centerLon) * Math.PI) / 180;
  const tilt = (-7 * Math.PI) / 180;
  const cosLat = Math.cos(latRad);
  const x = cosLat * Math.sin(lonRad);
  const y = Math.sin(latRad);
  const z = cosLat * Math.cos(lonRad);
  const y2 = y * Math.cos(tilt) - z * Math.sin(tilt);
  const z2 = y * Math.sin(tilt) + z * Math.cos(tilt);
  return {
    x: metrics.cx + x * metrics.r,
    y: metrics.cy - y2 * metrics.r,
    z: z2,
    visible: z2 > -0.04,
  };
}

function drawBackground(now) {
  ctx.clearRect(0, 0, width, height);
  ctx.save();
  for (const star of stars) {
    const pulse = Math.sin(now * 0.00045 + star.x * 8) * 0.04;
    ctx.globalAlpha = Math.max(0, star.alpha * 0.42 + pulse * 0.24);
    ctx.fillStyle = "#1d2023";
    ctx.beginPath();
    ctx.arc(star.x * width, star.y * height, star.radius, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawSphere(metrics) {
  const gradient = ctx.createRadialGradient(
    metrics.cx - metrics.r * 0.32,
    metrics.cy - metrics.r * 0.28,
    metrics.r * 0.1,
    metrics.cx,
    metrics.cy,
    metrics.r * 1.06,
  );
  gradient.addColorStop(0, "rgba(255, 255, 255, 0.98)");
  gradient.addColorStop(0.46, "rgba(238, 240, 240, 0.92)");
  gradient.addColorStop(0.78, "rgba(214, 217, 218, 0.72)");
  gradient.addColorStop(1, "rgba(178, 183, 184, 0.28)");

  ctx.save();
  ctx.beginPath();
  ctx.arc(metrics.cx, metrics.cy, metrics.r, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(28, 31, 34, 0.18)";
  ctx.stroke();

  const rim = ctx.createRadialGradient(
    metrics.cx,
    metrics.cy,
    metrics.r * 0.76,
    metrics.cx,
    metrics.cy,
    metrics.r * 1.12,
  );
  rim.addColorStop(0, "rgba(255,255,255,0)");
  rim.addColorStop(0.78, "rgba(210, 28, 28, 0.035)");
  rim.addColorStop(1, "rgba(16, 18, 20, 0.15)");
  ctx.fillStyle = rim;
  ctx.fill();
  ctx.restore();
}

function strokeProjectedLine(points, options = {}) {
  const metrics = globeMetrics();
  ctx.save();
  ctx.lineWidth = options.width || 1;
  ctx.strokeStyle = options.color || "rgba(17, 20, 24, 0.1)";
  ctx.globalAlpha = options.alpha ?? 1;
  ctx.beginPath();

  let drawing = false;
  for (const [lat, lon] of points) {
    const point = project(lat, lon, metrics);
    if (!point.visible) {
      drawing = false;
      continue;
    }
    if (!drawing) {
      ctx.moveTo(point.x, point.y);
      drawing = true;
    } else {
      ctx.lineTo(point.x, point.y);
    }
  }
  ctx.stroke();
  ctx.restore();
}

function drawGraticule(metrics) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(metrics.cx, metrics.cy, metrics.r, 0, Math.PI * 2);
  ctx.clip();

  for (let lat = -60; lat <= 60; lat += 20) {
    const points = [];
    for (let lon = -180; lon <= 180; lon += 4) points.push([lat, lon]);
    strokeProjectedLine(points, {
      color: lat === 0 ? "rgba(198, 33, 31, 0.16)" : "rgba(20, 24, 28, 0.075)",
      width: lat === 0 ? 1.1 : 0.75,
    });
  }

  for (let lon = -180; lon < 180; lon += 30) {
    const points = [];
    for (let lat = -82; lat <= 82; lat += 3) points.push([lat, lon]);
    strokeProjectedLine(points, {
      color: lon % 90 === 0 ? "rgba(20, 24, 28, 0.11)" : "rgba(20, 24, 28, 0.052)",
      width: lon % 90 === 0 ? 1 : 0.7,
    });
  }
  ctx.restore();
}

function drawLand(metrics) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(metrics.cx, metrics.cy, metrics.r, 0, Math.PI * 2);
  ctx.clip();

  ctx.fillStyle = "rgba(18, 21, 24, 0.56)";
  for (let index = 0; index < landFillDots.length; index += 1) {
    const [lat, lon] = landFillDots[index];
    const point = project(lat, lon, metrics);
    if (point.visible && point.z > 0.03) {
      ctx.globalAlpha = Math.min(0.36, 0.08 + point.z * 0.22);
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.z > 0.55 ? 0.9 : 0.58, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.globalAlpha = 1;

  for (const ring of landRings) {
    ctx.beginPath();
    let drawing = false;
    for (const pointLatLon of ring) {
      const point = project(pointLatLon[0], pointLatLon[1], metrics);
      if (point.visible && point.z > -0.01) {
        if (!drawing) {
          ctx.moveTo(point.x, point.y);
          drawing = true;
        } else {
          ctx.lineTo(point.x, point.y);
        }
      } else {
        drawing = false;
      }
    }
    ctx.strokeStyle =
      landSource === "natural-earth"
        ? "rgba(35, 39, 42, 0.19)"
        : "rgba(35, 39, 42, 0.1)";
    ctx.lineWidth = landSource === "natural-earth" ? 0.72 : 0.85;
    ctx.stroke();
  }

  ctx.fillStyle = "rgba(34, 37, 40, 0.32)";
  const stride = landSource === "natural-earth" ? 1 : 2;
  for (let index = 0; index < landDots.length; index += stride) {
    const [lat, lon] = landDots[index];
    const point = project(lat, lon, metrics);
    if (point.visible && point.z > 0.04) {
      const alpha = Math.min(0.34, 0.08 + point.z * 0.18);
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.z > 0.55 ? 0.72 : 0.48, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.globalAlpha = 1;
  ctx.restore();
}

function toVector(lat, lon) {
  const latRad = (lat * Math.PI) / 180;
  const lonRad = (lon * Math.PI) / 180;
  return [
    Math.cos(latRad) * Math.cos(lonRad),
    Math.sin(latRad),
    Math.cos(latRad) * Math.sin(lonRad),
  ];
}

function toLatLon(vector) {
  const [x, y, z] = vector;
  const lat = (Math.asin(y) * 180) / Math.PI;
  const lon = (Math.atan2(z, x) * 180) / Math.PI;
  return [lat, lon];
}

function greatCirclePoints(a, b, count = 44) {
  const start = toVector(a.lat, a.lon);
  const end = toVector(b.lat, b.lon);
  const dot = Math.min(
    1,
    Math.max(-1, start[0] * end[0] + start[1] * end[1] + start[2] * end[2]),
  );
  const omega = Math.acos(dot);
  if (omega < 0.0001) return [[a.lat, a.lon], [b.lat, b.lon]];
  const sinOmega = Math.sin(omega);
  const points = [];
  for (let i = 0; i <= count; i += 1) {
    const t = i / count;
    const s1 = Math.sin((1 - t) * omega) / sinOmega;
    const s2 = Math.sin(t * omega) / sinOmega;
    points.push(
      toLatLon([
        start[0] * s1 + end[0] * s2,
        start[1] * s1 + end[1] * s2,
        start[2] * s1 + end[2] * s2,
      ]),
    );
  }
  return points;
}

function drawArc(fromBet, toBet, color, alpha = 0.3, widthValue = 1) {
  const points = greatCirclePoints(fromBet, toBet, 50);
  ctx.save();
  ctx.lineCap = "round";
  ctx.shadowColor = color;
  ctx.shadowBlur = 10;
  strokeProjectedLine(points, { color, alpha, width: widthValue });
  ctx.restore();
}

function drawLinks() {
  for (const [from, to] of ambientLinks) {
    const a = getBet(from);
    const b = getBet(to);
    if (!a || !b) continue;
    drawArc(a, b, "rgba(46, 50, 55, 0.3)", 0.16, 0.72);
  }

  if (mode !== "selected" && mode !== "brief") return;
  const related = ambientLinks
    .filter(([from, to]) => from === selectedBet.id || to === selectedBet.id)
    .map(([from, to]) => getBet(from === selectedBet.id ? to : from))
    .filter(Boolean);

  for (const bet of related) {
    const color =
      selectedBet.kind === "good"
        ? "rgba(42, 46, 50, 0.72)"
        : "rgba(198, 33, 31, 0.66)";
    drawArc(selectedBet, bet, color, 0.44, 1.25);
  }
}

function kindColor(bet, alpha = 1) {
  const base = bet.kind === "good" ? "28, 32, 36" : "198, 33, 31";
  return `rgba(${base}, ${alpha})`;
}

function drawPin(bet, projected, isSelected, isHovered) {
  const filtered = passesFilter(bet);
  const dim = filtered ? 1 : 0.16;
  const radius = isSelected ? 5.6 : isHovered ? 4.8 : 3.4;
  ctx.save();
  ctx.globalAlpha = dim * Math.max(0.2, projected.z);
  ctx.shadowColor = kindColor(bet, isSelected || isHovered ? 0.72 : 0.42);
  ctx.shadowBlur = isSelected ? 18 : isHovered ? 12 : 4;
  ctx.fillStyle = kindColor(bet, isSelected ? 0.95 : 0.76);
  ctx.beginPath();
  ctx.arc(projected.x, projected.y, radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.shadowBlur = 0;
  ctx.lineWidth = 1;
  ctx.strokeStyle = kindColor(bet, isSelected ? 0.72 : 0.34);
  ctx.beginPath();
  ctx.arc(projected.x, projected.y, radius + (isSelected ? 8 : 5), 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function rectsOverlap(a, b) {
  return !(
    a.x + a.w < b.x ||
    b.x + b.w < a.x ||
    a.y + a.h < b.y ||
    b.y + b.h < a.y
  );
}

function drawLabel(bet, projected, isSelected, isHovered, boxes) {
  const shouldForce = isSelected || isHovered;
  const desktop = isDesktop();
  if (!shouldForce && bet.labelRank > (desktop ? 18 : 8)) return;
  if (!passesFilter(bet) && !shouldForce) return;

  const text = bet.title.toUpperCase();
  ctx.save();
  ctx.font = "10px 'DM Mono', monospace";
  const maxTextLength = desktop ? 31 : 21;
  const displayText =
    text.length > maxTextLength ? `${text.slice(0, maxTextLength)}...` : text;
  const labelWidth = Math.min(ctx.measureText(displayText).width, desktop ? 220 : 150);
  const x = projected.x + 11;
  const y = projected.y - 18;
  const box = { x, y: y - 2, w: labelWidth + 18, h: 20 };

  if (!shouldForce && boxes.some((existing) => rectsOverlap(existing, box))) {
    ctx.restore();
    return;
  }
  boxes.push(box);
  if (passesFilter(bet) || shouldForce) {
    projectedPins.push({
      type: "label",
      id: bet.id,
      x: box.x,
      y: box.y,
      w: box.w,
      h: box.h,
    });
  }

  ctx.globalAlpha = shouldForce ? 1 : 0.72;
  ctx.fillStyle = "rgba(255, 255, 255, 0.74)";
  ctx.strokeStyle = kindColor(bet, shouldForce ? 0.42 : 0.18);
  ctx.lineWidth = 1;
  roundRect(ctx, box.x, box.y, box.w, box.h, 10);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = bet.kind === "good" ? "rgba(24, 27, 30, 0.86)" : "rgba(198, 33, 31, 0.92)";
  ctx.fillText(displayText, x + 9, y + 12);
  ctx.restore();
}

function roundRect(context, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  context.beginPath();
  context.moveTo(x + radius, y);
  context.arcTo(x + w, y, x + w, y + h, radius);
  context.arcTo(x + w, y + h, x, y + h, radius);
  context.arcTo(x, y + h, x, y, radius);
  context.arcTo(x, y, x + w, y, radius);
  context.closePath();
}

function drawPins(metrics) {
  projectedPins = [];
  const labelBoxes = [];
  const visibleBets = bets
    .map((bet) => ({ bet, point: project(bet.lat, bet.lon, metrics) }))
    .filter(({ point }) => point.visible)
    .sort((a, b) => a.point.z - b.point.z);

  for (const { bet, point } of visibleBets) {
    const isSelected = selectedBet.id === bet.id && (mode === "selected" || mode === "brief");
    const isHovered = hoveredBet?.id === bet.id;
    drawPin(bet, point, isSelected, isHovered);
    if (passesFilter(bet)) {
      projectedPins.push({
        type: "pin",
        id: bet.id,
        x: point.x,
        y: point.y,
        z: point.z,
        hit: isSelected || isHovered ? 24 : 19,
      });
    }
  }

  visibleBets
    .filter(({ point }) => point.z > 0.2)
    .sort((a, b) => a.bet.labelRank - b.bet.labelRank)
    .forEach(({ bet, point }) => {
      const isSelected = selectedBet.id === bet.id && (mode === "selected" || mode === "brief");
      const isHovered = hoveredBet?.id === bet.id;
      drawLabel(bet, point, isSelected, isHovered, labelBoxes);
    });

  const qaPin = projectedPins.find(
    (pin) =>
      pin.type === "pin" &&
      pin.x > 24 &&
      pin.y > 24 &&
      pin.x < width - 24 &&
      pin.y < height - 24,
  );
  if (qaPin) {
    document.documentElement.dataset.visiblePin = `${Math.round(qaPin.x)},${Math.round(qaPin.y)}`;
  }
}

function drawCalibration(metrics) {
  ctx.save();
  ctx.strokeStyle = "rgba(24, 28, 32, 0.16)";
  ctx.lineWidth = 1;
  const gap = metrics.r + 22;
  const size = 12;
  const points = [
    [metrics.cx - gap, metrics.cy],
    [metrics.cx + gap, metrics.cy],
    [metrics.cx, metrics.cy - gap],
    [metrics.cx, metrics.cy + gap],
  ];
  for (const [x, y] of points) {
    ctx.beginPath();
    ctx.moveTo(x - size, y);
    ctx.lineTo(x + size, y);
    ctx.moveTo(x, y - size);
    ctx.lineTo(x, y + size);
    ctx.stroke();
  }
  ctx.restore();
}

function animate(now = performance.now()) {
  const delta = Math.min(40, now - lastTime);
  lastTime = now;

  if (!spin.dragging && Math.abs(spin.velocity) > 0.001) {
    targetLon = normalizeLon(targetLon + spin.velocity * delta);
    spin.velocity *= 0.94;
  } else if (mode === "browse" && now > spin.manualUntil) {
    autoLon = normalizeLon(autoLon + delta * 0.0024);
    targetLon = autoLon;
  } else if ((mode === "selected" || mode === "brief") && now > spin.manualUntil) {
    targetLon = normalizeLon(targetLon + shortestAngle(targetLon, selectedBet.lon) * 0.018);
  }

  centerLon += shortestAngle(centerLon, targetLon) * 0.045;

  const metrics = globeMetrics();
  drawBackground(now);
  drawSphere(metrics);
  drawLand(metrics);
  drawGraticule(metrics);
  drawLinks();
  drawPins(metrics);
  drawCalibration(metrics);

  requestAnimationFrame(animate);
}

function findHoveredBet() {
  let winner = null;
  let bestDistance = Infinity;
  for (const target of projectedPins) {
    if (target.type === "label") {
      const inside =
        pointer.x >= target.x &&
        pointer.x <= target.x + target.w &&
        pointer.y >= target.y &&
        pointer.y <= target.y + target.h;
      if (inside) return getBet(target.id);
      continue;
    }

    const distance = Math.hypot(pointer.x - target.x, pointer.y - target.y);
    if (distance < target.hit && distance < bestDistance) {
      winner = getBet(target.id);
      bestDistance = distance;
    }
  }
  return winner;
}

function updateHoverPlate(event) {
  if (!hoveredBet || mode === "landing") {
    hoverPlate.classList.remove("is-visible");
    return;
  }
  hoverKind.textContent = hoveredBet.kind === "good" ? "GOOD BET" : "BAD BET";
  hoverTitle.textContent = hoveredBet.title;
  hoverPlate.style.left = `${event.clientX}px`;
  hoverPlate.style.top = `${event.clientY}px`;
  hoverPlate.classList.add("is-visible");
}

function setMode(nextMode) {
  mode = nextMode;
  appShell.dataset.mode = nextMode;
  readoutMode.textContent = nextMode === "browse" ? "BROWSE" : nextMode === "brief" ? "BRIEF" : "SELECTED";
  readoutLocation.textContent =
    nextMode === "browse" ? "GLOBAL SIGNAL SURFACE" : selectedBet.region;
}

function setSelectedBet(bet) {
  selectedBet = bet;
  targetLon = normalizeLon(bet.lon);
  spin.velocity = 0;
  spin.manualUntil = performance.now() + 1800;
  updateCard(bet);
  updateBrief(bet);
  setMode("selected");
}

function updateCard(bet) {
  betCard.dataset.kind = bet.kind;
  fields.kind.textContent = bet.kind === "good" ? "GOOD BET" : "BAD BET";
  fields.kind.dataset.kind = bet.kind;
  fields.confidence.textContent = `CONFIDENCE ${bet.confidence}`;
  fields.region.textContent = bet.region;
  fields.title.textContent = bet.title;
  fields.summary.textContent = bet.summary;
  fields.implication.textContent = bet.implication;
  fields.surprise.textContent = bet.surprise;
  fields.horizon.textContent = bet.horizon;
  fields.signals.textContent = String(bet.signalCount);
  fields.category.textContent = bet.category;
}

function updateBrief(bet) {
  fields.briefTitle.textContent = bet.title;
  fields.briefDeck.textContent = `${bet.region}. ${bet.summary}`;
  fields.rationale.textContent = bet.rationale;
  fields.why.textContent = bet.why;
  fields.briefSurprise.textContent = bet.surprise;
  fields.briefWatch.textContent = bet.watch;
  fields.signalList.replaceChildren(
    ...bet.signals.map((signal) => {
      const item = document.createElement("li");
      item.textContent = signal;
      return item;
    }),
  );
  fields.sourceList.replaceChildren(
    ...bet.sources.map((source) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = sourceIndex[source] || "#";
      link.textContent = source;
      link.target = "_blank";
      link.rel = "noreferrer";
      item.append(link);
      return item;
    }),
  );
}

function openBrief() {
  if (mode === "landing" || mode === "browse") {
    setSelectedBet(selectedBet);
  }
  setMode("brief");
  document.querySelector("#brief").scrollIntoView({ behavior: "smooth", block: "start" });
}

function enterExperience() {
  setMode("browse");
  setTimeout(() => canvas.focus?.(), 400);
}

function beginSpinScrub(event) {
  if (mode === "landing") return;
  spin.dragging = true;
  spin.lastX = event.clientX;
  spin.velocity = 0;
  spin.moved = false;
  spin.manualUntil = performance.now() + 5000;
  appShell.dataset.scrubbing = "true";
  try {
    canvas.setPointerCapture?.(event.pointerId);
  } catch {
    // Synthetic pointer events used in QA do not always register capture state.
  }
}

function updateSpinScrub(event, multiplier = 0.34) {
  const dx = event.clientX - spin.lastX;
  if (Math.abs(dx) < 0.2) return;
  targetLon = normalizeLon(targetLon - dx * multiplier);
  autoLon = targetLon;
  spin.velocity = -dx * 0.012;
  spin.lastX = event.clientX;
  spin.moved = spin.moved || Math.abs(dx) > 2;
  spin.manualUntil = performance.now() + 4200;
}

function endSpinScrub(event) {
  if (!spin.dragging) return;
  spin.dragging = false;
  spin.manualUntil = performance.now() + 3800;
  delete appShell.dataset.scrubbing;
  try {
    canvas.releasePointerCapture?.(event.pointerId);
  } catch {
    // Release can fail if the pointer left the document before capture completed.
  }
}

function handleCanvasPointerMove(event) {
  const rect = canvas.getBoundingClientRect();
  pointer = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
  if (spin.dragging) {
    updateSpinScrub(event);
  } else if (mode !== "landing" && pointer.x > width * 0.68 && Math.abs(event.movementX) > 0.4) {
    spin.lastX = event.clientX - event.movementX;
    updateSpinScrub(event, 0.08);
  }
  hoveredBet = findHoveredBet();
  updateHoverPlate(event);
}

function handleCanvasClick(event) {
  if (spin.moved) {
    spin.moved = false;
    return;
  }
  const rect = canvas.getBoundingClientRect();
  pointer = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
  const clickedBet = findHoveredBet();
  if (clickedBet) {
    hoveredBet = clickedBet;
    setSelectedBet(clickedBet);
  }
}

function handleCanvasLeave() {
  pointer = { x: -9999, y: -9999 };
  hoveredBet = null;
  hoverPlate.classList.remove("is-visible");
}

function setFilter(filter) {
  activeFilter = filter;
  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });
  if (mode === "selected" && !passesFilter(selectedBet)) {
    setMode("browse");
  }
}

window.addEventListener("resize", resize);
enterButton.addEventListener("click", enterExperience);
openBriefButton.addEventListener("click", openBrief);
sourcesButton.addEventListener("click", openBrief);
canvas.addEventListener("pointermove", handleCanvasPointerMove);
canvas.addEventListener("pointerdown", beginSpinScrub);
canvas.addEventListener("pointerup", endSpinScrub);
canvas.addEventListener("pointercancel", endSpinScrub);
canvas.addEventListener("pointerleave", handleCanvasLeave);
canvas.addEventListener("click", handleCanvasClick);
spinField.addEventListener("pointerdown", beginSpinScrub);
spinField.addEventListener("pointermove", handleCanvasPointerMove);
spinField.addEventListener("pointerup", endSpinScrub);
spinField.addEventListener("pointercancel", endSpinScrub);
filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

updateCard(selectedBet);
updateBrief(selectedBet);
resize();
setLandTelemetry();
window.__futureBetsState = () => ({
  mode,
  centerLon,
  targetLon,
  activeFilter,
  selected: selectedBet.id,
  hovering: hoveredBet?.id || null,
  scrubbing: spin.dragging,
  landSource,
  landDots: landDots.length,
});
loadDetailedLand();
requestAnimationFrame(animate);

