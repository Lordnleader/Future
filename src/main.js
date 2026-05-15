const signals = [
  {
    id: "sahel-microgrids",
    kind: "signal",
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
      "Heat stress, uneven grid extension, and lower-cost storage make local energy systems more attractive. The signal is that resilience infrastructure becomes a practical development layer rather than a niche climate project.",
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
    kind: "signal",
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
      "The signal is not that one waterway closes permanently. It is that routing assumptions become less stable as conflict, insurance, naval posture, and port congestion interact.",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
      "Cold chain is a multi-sector signal: the same capability can reduce food loss, support clinics, and stabilize commerce.",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
      "The signal is early and low-certainty: more actors, technology, and climate access may gradually test old norms.",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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
    kind: "signal",
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

const additionalSignalSeeds = [
  ["australia-darling-basin", "Murray-Darling Water Accounting Tightens", -34.7, 144.6, "AUSTRALIA / WATER + AGRICULTURE", "Water", "Farm economics, basin politics, and dry-year allocation rules point toward water accounting becoming a sharper operating constraint.", "Treat water rights, crop choice, and rural credit as one signal surface.", "18-48 months", 63],
  ["australia-queensland-batteries", "Queensland Batteries Become Grid Insurance", -23.8, 146.6, "AUSTRALIA / GRID FLEXIBILITY", "Energy", "Coal retirements, solar saturation, and peak load volatility make dispatchable storage more strategically useful.", "Watch storage duration, grid services, and local manufacturing tie together.", "12-36 months", 66],
  ["australia-pilbara-autonomy", "Pilbara Autonomy Moves Beyond Mining", -22.7, 119.4, "AUSTRALIA / REMOTE OPERATIONS", "Robotics", "Remote mining operations, private networks, and harsh-site logistics suggest autonomy can spill into energy and construction.", "The frontier may be remote industrial work, not consumer robotics.", "24-60 months", 59],
  ["australia-great-barrier-tourism", "Reef Tourism Needs Proof Of Resilience", -18.3, 147.7, "AUSTRALIA / TOURISM + ECOLOGY", "Climate", "Reef stress, insurance, and destination branding make ecological proof part of tourism value.", "Tourism operators may need measurable resilience, not just marketing optimism.", "12-48 months", 61],
  ["australia-northern-housing-heat", "Northern Housing Gets Repriced By Heat", -12.5, 130.9, "AUSTRALIA / HOUSING + HEAT", "Cities", "Humidity, insurance, cooling costs, and cyclone standards make old housing assumptions less stable.", "Heat-adapted housing may become an affordability issue.", "24-60 months", 58],
  ["australia-bushfire-insurance", "Bushfire Insurance Signals Land-Use Pressure", -37.1, 146.2, "AUSTRALIA / FIRE + INSURANCE", "Infrastructure", "Fire seasons, rebuild costs, and insurer risk models make settlement edges more financially visible.", "Insurance can move land-use behavior before planning law does.", "12-36 months", 64],
  ["australia-critical-minerals-port", "Critical Minerals Depend On Port Bottlenecks", -20.3, 148.8, "AUSTRALIA / MATERIALS + PORTS", "Materials", "Battery mineral ambition depends on port, power, water, and downstream-processing capacity lining up.", "The constraint may be industrial coordination more than ore availability.", "24-72 months", 62],
  ["australia-antarctic-logistics", "Hobart Becomes Antarctic Logistics Leverage", -42.9, 147.3, "AUSTRALIA / ANTARCTIC ACCESS", "Geopolitics", "Science, tourism, maritime capability, and Antarctic governance signals raise the value of southern logistics hubs.", "Access infrastructure becomes quiet geopolitical leverage.", "36-84 months", 55],
  ["australia-indigenous-carbon", "Indigenous Carbon Projects Gain Strategic Weight", -16.1, 132.7, "AUSTRALIA / LAND + CARBON", "Climate", "Fire management, carbon markets, biodiversity, and land rights point toward local stewardship becoming economic infrastructure.", "Carbon value may follow governance quality and land knowledge.", "24-72 months", 57],
  ["australia-coastal-desal", "Coastal Desalination Returns As Drought Hedge", -31.9, 115.9, "AUSTRALIA / URBAN WATER", "Water", "Urban growth, rainfall variability, and energy economics keep desalination in the strategic toolkit.", "Water security and renewable power planning become harder to separate.", "24-60 months", 60],
  ["new-zealand-alpine-water", "Alpine Water Becomes Infrastructure Risk", -43.5, 170.3, "NEW ZEALAND / GLACIERS + POWER", "Water", "Snowpack variability, hydropower timing, and tourism exposure make mountain water a broader economic signal.", "Seasonal water reliability can reprice power and place-brand value.", "24-72 months", 54],
  ["pacific-island-data-cables", "Pacific Cables Become Sovereignty Infrastructure", -17.7, 178.1, "PACIFIC / SUBSEA + STATE CAPACITY", "Infrastructure", "Subsea cable routes, cyclone exposure, and diplomatic competition make connectivity a state-capacity signal.", "Digital resilience may become as strategic as ports and runways.", "18-60 months", 65],
  ["singapore-heat-productivity", "Singapore Prices Heat Into Urban Operations", 1.35, 103.8, "SINGAPORE / HEAT + WORK", "Cities", "Heat, air-conditioning load, older residents, and outdoor labour constraints make cooling an operating system.", "Productivity may depend on thermal design as much as digital design.", "12-36 months", 68],
  ["malaysia-data-center-water", "Data Centers Start Competing For Water", 1.5, 103.8, "MALAYSIA / COMPUTE + WATER", "AI", "AI infrastructure, industrial parks, and water stress make compute growth a local resource negotiation.", "Compute expansion will be judged by power and water credibility.", "12-48 months", 67],
  ["vietnam-manufacturing-power", "Vietnam Manufacturing Needs Cleaner Power Certainty", 16.1, 108.2, "VIETNAM / MANUFACTURING + POWER", "Manufacturing", "Supply-chain relocation, grid demand, and buyer emissions rules converge around reliable clean electricity.", "Factories may compete on power credibility, not only labour cost.", "18-60 months", 70],
  ["philippines-climate-remittances", "Climate Shocks Start Touching Remittance Flows", 12.9, 122.3, "PHILIPPINES / HOUSEHOLDS + CLIMATE", "Climate", "Storm exposure, migration, household debt, and food prices can convert climate shocks into financial-flow signals.", "Household resilience may become macro resilience.", "12-48 months", 58],
  ["thailand-aging-care", "Thailand Care Demand Becomes A Regional Signal", 15.8, 101.0, "THAILAND / AGING + CARE", "Labour", "Aging, medical tourism, and caregiver labour markets suggest care capacity becomes a regional advantage.", "Care infrastructure may become part of competitiveness.", "24-72 months", 56],
  ["pakistan-flood-rebuild", "Pakistan Rebuild Choices Shape Future Losses", 30.4, 69.3, "PAKISTAN / FLOOD + INFRASTRUCTURE", "Infrastructure", "Flood memory, fiscal pressure, and settlement exposure make rebuild standards a compounding risk signal.", "Reconstruction quality may determine whether disaster becomes chronic drag.", "12-60 months", 69],
  ["bangladesh-garment-heat", "Garment Exports Meet Wet-Bulb Limits", 23.7, 90.4, "BANGLADESH / LABOUR + HEAT", "Labour", "Heat stress, export deadlines, factory density, and buyer compliance make working conditions a supply-chain signal.", "Apparel resilience may depend on cooling, shifts, and worker protection.", "12-48 months", 70],
  ["kenya-geothermal-data", "Geothermal Power Pulls In Compute Demand", -0.9, 36.3, "KENYA / POWER + COMPUTE", "Energy", "Geothermal baseload, connectivity, and regional digital demand make clean compute more plausible.", "Energy geography may shape where AI infrastructure lands.", "24-60 months", 64],
  ["nigeria-lagos-flood-credit", "Lagos Flood Risk Enters Credit Decisions", 6.5, 3.4, "NIGERIA / CITIES + CREDIT", "Cities", "Flood exposure, informal housing, and insurance gaps can turn climate risk into credit friction.", "Urban finance may become more location-sensitive.", "12-48 months", 62],
  ["morocco-solar-desal", "Morocco Links Solar To Water Security", 31.8, -7.1, "MOROCCO / SOLAR + WATER", "Energy", "Solar capacity, desalination, agriculture, and export industry point toward water-energy integration.", "Cheap clean power becomes a water-security strategy.", "24-72 months", 66],
  ["egypt-heat-cooling", "Cooling Demand Becomes A Grid Stress Test", 30.0, 31.2, "EGYPT / HEAT + POWER", "Energy", "Population growth, heat, and air-conditioning adoption make peak power a social stability signal.", "Cooling infrastructure may become basic urban resilience.", "12-48 months", 67],
  ["south-africa-water-mining", "Mining Regions Face Water Reliability Premiums", -26.2, 28.0, "SOUTH AFRICA / WATER + MINING", "Materials", "Mine operations, power strain, and water stress combine into a production reliability signal.", "Resource value increasingly includes local water resilience.", "24-60 months", 58],
  ["norway-arctic-energy", "Arctic Energy Assets Need New Risk Models", 69.6, 18.9, "NORWAY / ARCTIC + ENERGY", "Energy", "Climate access, offshore assets, and security concerns make northern energy infrastructure more exposed.", "Operational resilience moves into colder, darker, more contested environments.", "24-72 months", 63],
  ["sweden-battery-town", "Battery Towns Test Industrial Social License", 64.8, 20.9, "SWEDEN / BATTERIES + LABOUR", "Manufacturing", "Green industry, migrant labour, local housing, and power availability make industrial growth a civic test.", "Factory speed may depend on housing and trust as much as capital.", "12-48 months", 59],
  ["france-nuclear-water", "Nuclear Output Meets River Temperature Limits", 45.8, 4.8, "FRANCE / POWER + WATER", "Energy", "Heatwaves, river cooling, and electricity exports connect climate variability to nuclear reliability.", "Low-carbon baseload still depends on physical water conditions.", "12-48 months", 69],
  ["germany-heat-pumps-labour", "Heat Pump Deployment Becomes Labour-Constrained", 51.1, 10.4, "GERMANY / BUILDINGS + SKILLS", "Labour", "Policy pressure, installer shortages, and household economics make workforce capacity the hidden bottleneck.", "The energy transition may move at the speed of skilled trades.", "12-48 months", 66],
  ["spain-water-tourism", "Water Stress Rewrites Destination Value", 40.4, -3.7, "SPAIN / WATER + TOURISM", "Water", "Tourism growth, drought, agriculture, and municipal restrictions make water legitimacy part of destination value.", "A place can stay beautiful while becoming harder to operate.", "12-48 months", 65],
  ["italy-alpine-hydropower", "Alpine Hydropower Loses Predictability", 45.9, 10.9, "ITALY / ALPS + POWER", "Energy", "Snowpack shifts, glacier loss, and summer cooling demand pressure seasonal hydropower assumptions.", "Mountain water becomes a grid-planning signal.", "24-72 months", 61],
  ["netherlands-salt-intrusion", "Salt Intrusion Tests Delta Engineering", 52.0, 5.3, "NETHERLANDS / WATER + AGRICULTURE", "Water", "Sea-level pressure, drought, and river flow variability can make salt management a food and infrastructure issue.", "Delta resilience becomes a chemistry problem as well as an engineering one.", "24-72 months", 62],
  ["canada-wildfire-smoke", "Wildfire Smoke Becomes A Labour Signal", 53.9, -116.6, "CANADA / FIRE + HEALTH", "Labour", "Smoke days, remote work, insurance, and public-health guidance turn fire into a productivity signal.", "Air quality may become an economic calendar.", "12-36 months", 67],
  ["canada-arctic-ports", "Northern Ports Gain Strategic Optionality", 63.7, -68.5, "CANADA / ARCTIC + LOGISTICS", "Infrastructure", "Arctic access, sovereignty, minerals, and community supply chains raise the value of northern logistics.", "Port resilience becomes a sovereignty layer.", "36-84 months", 57],
  ["mexico-nearshoring-water", "Nearshoring Runs Into Water Reality", 25.7, -100.3, "MEXICO / MANUFACTURING + WATER", "Manufacturing", "Industrial relocation, drought, grid constraints, and border logistics make site selection more complex.", "Nearshoring advantage depends on water and power reliability.", "12-48 months", 71],
  ["us-sunbelt-cooling", "Cooling Load Becomes A Growth Constraint", 33.4, -112.1, "US SUNBELT / POWER + HOUSING", "Cities", "Population growth, heat, water, and power peaks make Sunbelt expansion more infrastructure-sensitive.", "Housing growth may be limited by cooling reliability.", "12-48 months", 72],
  ["us-great-lakes-water", "Great Lakes Water Becomes Strategic Magnet", 43.0, -87.9, "US GREAT LAKES / WATER + INDUSTRY", "Water", "Water abundance, climate migration narratives, and industrial reshoring raise the region's strategic attractiveness.", "Water-rich places may regain industrial gravity.", "24-84 months", 64],
  ["us-texas-grid-ai", "AI Load Tests Texas Grid Flexibility", 31.5, -97.1, "TEXAS / AI + GRID", "AI", "Data centers, heat, power-market design, and battery deployment make compute growth a grid stress signal.", "Compute expansion becomes a power-market design test.", "12-48 months", 73],
  ["us-florida-condo-insurance", "Condo Insurance Exposes Coastal Affordability", 26.1, -80.2, "FLORIDA / HOUSING + INSURANCE", "Cities", "Insurance premiums, building repairs, storms, and older residents make coastal housing fragility visible.", "Affordability risk may show up through fees before migration data.", "12-36 months", 70],
  ["colombia-hydro-el-nino", "Hydropower Dependence Meets El Nino Volatility", 4.7, -74.1, "COLOMBIA / POWER + CLIMATE", "Energy", "Rainfall variability, reservoirs, and power prices connect climate cycles to industrial planning.", "Hydropower can be low-carbon and still highly weather-exposed.", "12-48 months", 62],
  ["peru-copper-water", "Copper Expansion Carries Water Politics", -13.5, -72.0, "PERU / COPPER + WATER", "Materials", "Copper demand, community trust, and watershed stress make mining approvals more politically sensitive.", "Materials strategy increasingly depends on local legitimacy.", "24-72 months", 66],
  ["argentina-lithium-inflation", "Lithium Ambition Meets Macro Fragility", -24.8, -66.0, "ARGENTINA / LITHIUM + MACRO", "Materials", "Battery demand, capital controls, inflation, and provincial politics complicate extraction timelines.", "Mineral potential does not automatically become reliable supply.", "18-60 months", 59],
  ["greenland-minerals-access", "Greenland Access Becomes Mineral Leverage", 64.2, -51.7, "GREENLAND / MINERALS + ARCTIC", "Geopolitics", "Mineral interest, ice access, shipping, and geopolitical attention converge around a small population base.", "Extraction signals must be read through sovereignty and consent.", "36-96 months", 58],
  ["turkey-water-earthquake", "Turkey Rebuilds Under Water And Quake Stress", 39.0, 35.2, "TURKEY / REBUILD + WATER", "Infrastructure", "Earthquake recovery, drought, urban growth, and public finance create layered infrastructure pressure.", "Resilience planning needs to combine shocks that are usually budgeted separately.", "12-60 months", 67],
  ["saudi-cooling-load", "Cooling Demand Shapes Energy Transition Pace", 24.7, 46.7, "SAUDI ARABIA / COOLING + POWER", "Energy", "Extreme heat, urban growth, solar, and industrial diversification make cooling demand central to power planning.", "Peak load management becomes transition infrastructure.", "12-48 months", 68],
  ["uae-desal-brine", "Desalination Scale Creates Brine Scrutiny", 24.4, 54.4, "UAE / WATER + ENVIRONMENT", "Water", "Desalination growth, marine ecology, and industrial water demand make brine management more visible.", "Water security may need a cleaner disposal story.", "24-72 months", 57],
  ["israel-water-tech", "Water Tech Becomes Diplomacy Infrastructure", 31.8, 35.2, "LEVANT / WATER + DIPLOMACY", "Water", "Scarcity, reuse technology, agriculture, and regional diplomacy make water systems strategically meaningful.", "Water expertise can become quiet geopolitical leverage.", "24-72 months", 63],
  ["poland-defense-manufacturing", "Defense Manufacturing Pulls Labour Tight", 52.2, 21.0, "POLAND / DEFENSE + LABOUR", "Manufacturing", "Security spending, industrial expansion, and demographic pressure turn workforce capacity into a defense signal.", "Industrial readiness may be labour-constrained.", "12-48 months", 66],
  ["ireland-data-power", "Data Centers Force Power Tradeoffs", 53.3, -6.3, "IRELAND / COMPUTE + GRID", "AI", "Compute demand, grid constraints, and public acceptance make data-center growth politically visible.", "Digital infrastructure needs social license and power credibility.", "12-48 months", 68],
  ["uk-housing-heat", "UK Housing Reveals Heat Adaptation Gap", 52.5, -1.9, "UK / HOUSING + HEALTH", "Cities", "Old housing stock, heatwaves, fuel poverty, and care demand make summer resilience a social signal.", "Cold-weather policy needs a summer-risk counterpart.", "12-48 months", 64],
  ["portugal-lithium-social-license", "Lithium Projects Test Community Consent", 41.6, -7.4, "PORTUGAL / LITHIUM + TRUST", "Materials", "Critical-mineral urgency, tourism identity, and local opposition make social license central to supply.", "European mineral security depends on public trust.", "24-72 months", 55],
  ["greece-island-microgrids", "Island Microgrids Become Tourism Resilience", 37.9, 23.7, "GREECE / ISLANDS + POWER", "Energy", "Tourism peaks, heat, ferry logistics, and grid fragility make local power resilience more valuable.", "Island energy becomes a visitor-experience asset.", "12-48 months", 60],
  ["ethiopia-industrial-parks-power", "Industrial Parks Need Power Reliability Proof", 9.0, 38.7, "ETHIOPIA / MANUFACTURING + POWER", "Manufacturing", "Industrial ambition, hydropower, currency stress, and logistics make reliable electricity a decisive signal.", "Manufacturing growth depends on grid credibility.", "18-60 months", 57],
  ["ghana-cocoa-youth", "Cocoa Regions Face Youth Retention Risk", 6.7, -1.6, "GHANA / COCOA + DEMOGRAPHICS", "Food systems", "Crop disease, income volatility, and youth migration challenge long-term cocoa production capacity.", "Agriculture resilience may depend on whether young workers see a future in it.", "24-72 months", 56],
  ["rwanda-drone-logistics", "Medical Drone Logistics Becomes Infrastructure Template", -1.9, 30.1, "RWANDA / HEALTH + LOGISTICS", "Robotics", "Drone delivery, health access, and terrain constraints suggest automated logistics can become public infrastructure.", "Robotics adoption may start where geography makes the value obvious.", "12-48 months", 61],
  ["nepal-hydropower-risk", "Hydropower Exports Meet Himalayan Volatility", 28.4, 84.1, "NEPAL / POWER + MOUNTAINS", "Energy", "Hydropower investment, landslide risk, and export ambitions make mountain resilience central to growth.", "Clean power exports still depend on slope stability.", "24-72 months", 56],
  ["mongolia-winter-energy", "Winter Energy Security Becomes Urban Health Signal", 47.9, 106.9, "MONGOLIA / HEATING + AIR", "Energy", "Cold snaps, heating fuels, air quality, and urban growth make winter energy a public-health signal.", "Energy reliability can show up first as respiratory stress.", "12-48 months", 54],
  ["south-korea-aging-robots", "Aging Pushes Service Automation Into Reality", 36.2, 127.9, "KOREA / AGING + ROBOTICS", "Robotics", "Demographics, service labour shortages, and manufacturing depth make practical automation more likely.", "Care, retail, and logistics may adopt robotics before spectacle catches up.", "18-60 months", 62],
  ["japan-coastal-defense", "Coastal Defense Becomes Aging Infrastructure", 35.3, 139.7, "JAPAN / COAST + DEMOGRAPHICS", "Infrastructure", "Sea-level risk, old infrastructure, and shrinking municipalities complicate coastal protection choices.", "Some defenses may be limited by local fiscal capacity.", "24-84 months", 55],
  ["china-sponge-cities", "Sponge Cities Face Larger Stress Tests", 30.6, 114.3, "CHINA / URBAN WATER", "Cities", "Extreme rainfall, urban density, and drainage retrofits make flood adaptation a practical governance signal.", "Adaptation credibility depends on repeated performance, not pilot projects.", "12-60 months", 66],
  ["laos-mekong-hydropower", "Mekong Hydropower Carries Downstream Legitimacy Risk", 18.0, 102.6, "LAOS / RIVERS + POWER", "Water", "Dam exports, fisheries, sediment, and regional diplomacy make hydropower a cross-border signal.", "Power revenue may carry ecological and diplomatic liabilities.", "24-84 months", 58],
];

for (const [index, seed] of additionalSignalSeeds.entries()) {
  const [
    id,
    title,
    lat,
    lon,
    region,
    category,
    summary,
    implication,
    horizon,
    impact,
  ] = seed;
  signals.push({
    id,
    kind: "signal",
    title,
    lat,
    lon,
    labelRank: 31 + index,
    zoomTier: impact >= 68 ? 1 : 2,
    impact,
    confidence: Math.min(76, Math.max(52, impact + ((index % 5) - 2))),
    region,
    category,
    horizon,
    signalCount: 58 + (impact % 19),
    summary,
    implication,
    rationale:
      "This local signal is included because current reporting, structural constraints, and place-based exposure appear to point in the same direction.",
    why:
      "The useful read is the overlap: a local constraint becomes more important when it connects to finance, labour, infrastructure, or policy timing.",
    signals: [
      "Current-event signals: clustered reporting around operational stress, public policy, or infrastructure pressure.",
      "Structural signals: demographic, climate, economic, or capacity data suggest the pressure is not isolated.",
      "Official/geographic signals: location, infrastructure, hazard, or resource layers make the signal place-specific.",
    ],
    sources: ["GDELT", "World Bank Indicators", "OpenStreetMap Overpass"],
  });
}

const categorySignalAdditions = {
  AI: [
    "Cross-signal inference: model capability growth only matters where power, memory bandwidth, and deployment economics can keep up.",
    "Constraint check: look for procurement language, chip packaging investment, and grid interconnection queues moving together.",
    "Disconfirmation watch: if inference costs fall faster than power constraints rise, the signal weakens.",
  ],
  Biotechnology: [
    "Cross-signal inference: biology becomes industrial when feedstock, regulation, and local processing incentives align.",
    "Constraint check: permitting, contamination risk, and buyer trust may matter more than lab capability.",
    "Disconfirmation watch: weak offtake agreements or inconsistent policy support would slow the implied transition.",
  ],
  Cities: [
    "Cross-signal inference: heat, insurance, comfort, and maintenance budgets can reprice urban behavior before migration shows up.",
    "Constraint check: track building codes, cooling-load data, health guidance, and visitor timing together.",
    "Disconfirmation watch: if adaptation investment arrives faster than stress signals compound, the signal becomes less sharp.",
  ],
  Climate: [
    "Cross-signal inference: climate stress becomes a systems signal when ecological signals start changing logistics, finance, or food assumptions.",
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
    "Disconfirmation watch: sustained route normalization and falling insurance premiums would reduce the signal.",
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
    "Disconfirmation watch: wet years can hide structural fragility; durable infrastructure and governance reform would weaken the signal.",
  ],
  default: [
    "Cross-signal inference: the signal strengthens when current events sit inside a deeper structural constraint.",
    "Constraint check: the signal is more useful when geography, institutions, and behavior point in the same direction.",
    "Disconfirmation watch: contrary official data or durable behavioral reversal would weaken the thesis.",
  ],
};

const signalReadouts = {
  "sahel-microgrids": {
    surprise:
      "The mind-bending version is that the Sahel may skip parts of the old grid-development sequence: cooling, phones, pumps, and security demand can make microgrids a sovereignty layer before they are a climate story.",
    watch:
      "Watch diesel displacement, mobile-money financing, battery theft/security rules, and whether clinics or telecom towers become anchor customers.",
  },
  "red-sea-routing": {
    surprise:
      "The deeper signal is not a shipping crisis. It is that boardrooms relearn geography: a narrow waterway can quietly decide food prices, inventory accounting, and which factories look well-run.",
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
      "The North Sea’s valuable infrastructure is becoming less visible and more vulnerable: cables, interconnectors, pipelines, and wind assets form one undersea nervous system.",
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
      "Brazil’s edge may be turning agriculture into a platform: sugar, residues, biodiversity, and industrial biology can make rural assets feel like a manufacturing base.",
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
      "Central Asia’s water issue may express as electricity stress first: irrigation decisions, winter heating, and hydropower can pull the same rivers in opposite directions.",
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

for (const signal of signals) {
  const readout = signalReadouts[signal.id] || {
    surprise:
      "The important signal is the second-order behavior that becomes rational before the headline trend is obvious.",
    watch:
      "Watch for confirming and disconfirming signals across policy, price, geography, and institutional behavior.",
  };
  const additions = categorySignalAdditions[signal.category] || categorySignalAdditions.default;
  signal.surprise = readout.surprise;
  signal.watch = readout.watch;
  signal.signals = [...signal.signals, ...additions];
  signal.signalCount = Math.max(signal.signalCount + 38, 104 + ((signal.id.length * 7) % 31));
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
  "./assets/land-110m.json";
const mountainRanges = [
  [[-53, -72], [-35, -70], [-22, -68], [-8, -76], [5, -77], [11, -73]],
  [[32, -115], [39, -110], [48, -114], [58, -128], [63, -151]],
  [[27, 68], [30, 78], [31, 88], [29, 96], [27, 103]],
  [[36, 66], [40, 72], [42, 80], [43, 88]],
  [[43, 5], [46, 8], [47, 12], [46, 16]],
  [[41, 40], [42, 45], [43, 50], [44, 56]],
  [[31, 35], [33, 39], [35, 44], [38, 50]],
  [[-34, 18], [-28, 22], [-22, 28], [-16, 33], [-4, 37], [8, 39]],
  [[-37, 146], [-31, 150], [-25, 151], [-18, 146]],
  [[-45, 168], [-43, 171], [-41, 173]],
  [[63, -45], [69, -38], [73, -28]],
];
const landTextureZones = [
  { lat: 48, lon: -104, rx: 57, ry: 34 },
  { lat: 17, lon: -92, rx: 26, ry: 22 },
  { lat: -18, lon: -61, rx: 26, ry: 43 },
  { lat: 52, lon: 15, rx: 34, ry: 19 },
  { lat: 2, lon: 20, rx: 34, ry: 42 },
  { lat: 35, lon: 80, rx: 72, ry: 36 },
  { lat: -25, lon: 134, rx: 24, ry: 15 },
  { lat: 72, lon: -42, rx: 22, ry: 12 },
  { lat: -76, lon: 18, rx: 170, ry: 9 },
];
let landRings = landMasses;
let landDots = [];
let landFillDots = [];
let landSource = "fallback";

function setLandTelemetry() {
  document.documentElement.dataset.landSource = landSource;
  document.documentElement.dataset.landDots = String(landDots.length + landFillDots.length);
}

function setRuntimeTelemetry() {
  document.documentElement.dataset.centerLon = centerLon.toFixed(2);
  document.documentElement.dataset.centerLat = centerLat.toFixed(2);
  document.documentElement.dataset.targetLon = targetLon.toFixed(2);
  document.documentElement.dataset.targetLat = targetLat.toFixed(2);
  document.documentElement.dataset.zoom = currentZoom.toFixed(3);
  document.documentElement.dataset.signalCount = String(signals.length);
  document.documentElement.dataset.visibleSignals = String(projectedPins.filter((pin) => pin.type === "pin").length);
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

const terrainSamples = Array.from({ length: 1900 }, (_, index) => {
  const a = Math.sin(index * 12.9898) * 43758.5453;
  const b = Math.sin(index * 78.233) * 24634.6345;
  return {
    x: a - Math.floor(a),
    y: b - Math.floor(b),
    seed: index * 0.013,
  };
});

const terrainPointer = {
  x: 0,
  y: 0,
  targetX: 0,
  targetY: 0,
};

const appShell = document.querySelector(".app-shell");
const landing = document.querySelector(".landing");
const canvas = document.querySelector("#globeCanvas");
const ctx = canvas.getContext("2d");
const terrainCanvas = document.querySelector("#terrainCanvas");
const terrainCtx = terrainCanvas.getContext("2d");
const terrainShadeCanvas = document.createElement("canvas");
const terrainShadeCtx = terrainShadeCanvas.getContext("2d");
const topologyTexture = {
  image: new Image(),
  canvas: document.createElement("canvas"),
  renderCanvas: document.createElement("canvas"),
  ctx: null,
  renderCtx: null,
  data: null,
  width: 0,
  height: 0,
  ready: false,
};
const signalCard = document.querySelector("#signalCard");
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

topologyTexture.ctx = topologyTexture.canvas.getContext("2d", { willReadFrequently: true });
topologyTexture.renderCtx = topologyTexture.renderCanvas.getContext("2d", { willReadFrequently: true });
topologyTexture.image.addEventListener("load", () => {
  topologyTexture.width = topologyTexture.image.naturalWidth;
  topologyTexture.height = topologyTexture.image.naturalHeight;
  topologyTexture.canvas.width = topologyTexture.width;
  topologyTexture.canvas.height = topologyTexture.height;
  topologyTexture.ctx.drawImage(topologyTexture.image, 0, 0);
  topologyTexture.data = topologyTexture.ctx.getImageData(
    0,
    0,
    topologyTexture.width,
    topologyTexture.height,
  ).data;
  topologyTexture.ready = true;
});
topologyTexture.image.src = "./assets/earth-topology.png";

let width = 1;
let height = 1;
let terrainWidth = 1;
let terrainHeight = 1;
let dpr = 1;
let mode = "landing";
let activeFilter = "all";
let selectedSignal = signals[0];
let hoveredSignal = null;
let projectedPins = [];
let landingHideTimer = null;
let centerLon = 15;
let centerLat = 8;
let autoLon = 15;
let targetLon = 15;
let targetLat = 8;
let currentZoom = 1;
let targetZoom = 1;
let lastTime = performance.now();
let pointer = { x: -9999, y: -9999 };
const spin = {
  dragging: false,
  lastX: 0,
  lastY: 0,
  velocityX: 0,
  velocityY: 0,
  manualUntil: 0,
  moved: false,
  resetMovedTimer: 0,
};

function isDesktop() {
  return window.matchMedia("(min-width: 821px)").matches;
}

function passesFilter(signal) {
  return signalVisibleAtZoom(signal);
}

function getSignal(id) {
  return signals.find((signal) => signal.id === id);
}

function shortestAngle(from, to) {
  return ((((to - from) % 360) + 540) % 360) - 180;
}

function normalizeLon(value) {
  return ((((value + 180) % 360) + 360) % 360) - 180;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function signalImpact(signal) {
  return signal.impact ?? Math.max(48, 96 - signal.labelRank * 1.45);
}

function signalVisibleAtZoom(signal) {
  if (signal.id === selectedSignal.id && (mode === "selected" || mode === "brief")) return true;
  const impact = signalImpact(signal);
  if (currentZoom < 0.86) return impact >= 76;
  if (currentZoom < 1.08) return impact >= 62;
  if (currentZoom < 1.34) return impact >= 55;
  return true;
}

function labelLimit() {
  if (!isDesktop()) return currentZoom > 1.22 ? 13 : 7;
  if (currentZoom < 0.88) return 10;
  if (currentZoom < 1.12) return 12;
  if (currentZoom < 1.42) return 20;
  return 34;
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
  const step = 1.25;
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

function buildCoarseLandFillDots() {
  const dots = [];
  const step = 1.95;
  for (let lat = -82; lat <= 78; lat += step) {
    const rowOffset = Math.sin(lat * 3.1) * 0.45;
    for (let lon = -180 + rowOffset; lon <= 180; lon += step) {
      const inside = landTextureZones.some((zone) => {
        const dLon = shortestAngle(zone.lon, lon);
        const dLat = lat - zone.lat;
        const edgeNoise =
          Math.sin((lat + zone.lat) * 0.34 + lon * 0.18) * 0.08 +
          Math.cos((lon - zone.lon) * 0.23) * 0.05;
        return (dLon / zone.rx) ** 2 + (dLat / zone.ry) ** 2 < 1 + edgeNoise;
      });
      if (inside) {
        dots.push([
          lat + Math.sin((lat + lon) * 1.7) * 0.16,
          lon + Math.cos((lat - lon) * 1.3) * 0.16,
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
    if (landFillDots.length < 6500) {
      landFillDots = buildCoarseLandFillDots();
    }
    landSource = "natural-earth";
    setLandTelemetry();
  } catch (error) {
    landSource = "fallback";
    landRings = landMasses;
    landDots = buildLandDots(landMasses);
    landFillDots = buildCoarseLandFillDots();
    setLandTelemetry();
    console.warn("Using fallback land geometry", error);
  }
}

function resize() {
  const rect = canvas.getBoundingClientRect();
  const terrainRect = terrainCanvas.getBoundingClientRect();
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = Math.max(1, rect.width);
  height = Math.max(1, rect.height);
  terrainWidth = Math.max(1, terrainRect.width);
  terrainHeight = Math.max(1, terrainRect.height);
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  terrainCanvas.width = Math.floor(terrainWidth * dpr);
  terrainCanvas.height = Math.floor(terrainHeight * dpr);
  terrainCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function globeMetrics() {
  const selectedShift = mode === "selected" || mode === "brief";
  const desktop = isDesktop();
  const baseRadius = desktop
    ? Math.min(width * 0.36, height * 0.58)
    : Math.min(width, height) * (selectedShift ? 0.36 : 0.39);
  return {
    cx: desktop ? width * (selectedShift ? 0.35 : 0.42) : width * 0.5,
    cy: height * (desktop ? 0.54 : selectedShift ? 0.37 : 0.47),
    r: baseRadius * currentZoom,
  };
}

function project(lat, lon, metrics = globeMetrics()) {
  const latRad = (lat * Math.PI) / 180;
  const lonRad = ((lon - centerLon) * Math.PI) / 180;
  const pitch = ((centerLat - 7) * Math.PI) / 180;
  const cosLat = Math.cos(latRad);
  const x = cosLat * Math.sin(lonRad);
  const y = Math.sin(latRad);
  const z = cosLat * Math.cos(lonRad);
  const y2 = y * Math.cos(pitch) - z * Math.sin(pitch);
  const z2 = y * Math.sin(pitch) + z * Math.cos(pitch);
  return {
    x: metrics.cx + x * metrics.r,
    y: metrics.cy - y2 * metrics.r,
    z: z2,
    visible: z2 > -0.04,
  };
}

function drawBackground(now) {
  ctx.clearRect(0, 0, width, height);
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
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.5, "rgba(247, 248, 247, 0.96)");
  gradient.addColorStop(0.82, "rgba(231, 233, 233, 0.72)");
  gradient.addColorStop(1, "rgba(205, 210, 211, 0.26)");

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

function sampleTopology(lat, lon) {
  if (!topologyTexture.ready || !topologyTexture.data) return 0;
  const x = clamp(
    Math.round(((normalizeLon(lon) + 180) / 360) * (topologyTexture.width - 1)),
    0,
    topologyTexture.width - 1,
  );
  const y = clamp(
    Math.round(((90 - clamp(lat, -90, 90)) / 180) * (topologyTexture.height - 1)),
    0,
    topologyTexture.height - 1,
  );
  const index = (y * topologyTexture.width + x) * 4;
  return topologyTexture.data[index] / 255;
}

function drawTopologySurface(metrics) {
  if (!topologyTexture.ready || !topologyTexture.data) return;

  const size = isDesktop() ? 430 : 270;
  if (topologyTexture.renderCanvas.width !== size) {
    topologyTexture.renderCanvas.width = size;
    topologyTexture.renderCanvas.height = size;
  }

  const image = topologyTexture.renderCtx.createImageData(size, size);
  const output = image.data;
  const source = topologyTexture.data;
  const pitch = ((centerLat - 7) * Math.PI) / 180;
  const cosPitch = Math.cos(pitch);
  const sinPitch = Math.sin(pitch);
  const topoWidth = topologyTexture.width;
  const topoHeight = topologyTexture.height;

  for (let y = 0; y < size; y += 1) {
    const sy = 1 - (y / (size - 1)) * 2;
    for (let x = 0; x < size; x += 1) {
      const sx = (x / (size - 1)) * 2 - 1;
      const sphere = sx * sx + sy * sy;
      if (sphere > 1) continue;

      const z2 = Math.sqrt(1 - sphere);
      const worldY = sy * cosPitch + z2 * sinPitch;
      const worldZ = -sy * sinPitch + z2 * cosPitch;
      const lat = (Math.asin(clamp(worldY, -1, 1)) * 180) / Math.PI;
      const lon = normalizeLon(centerLon + (Math.atan2(sx, worldZ) * 180) / Math.PI);
      const tx = Math.round(((lon + 180) / 360) * (topoWidth - 1));
      const ty = Math.round(((90 - lat) / 180) * (topoHeight - 1));
      const sourceIndex = (ty * topoWidth + tx) * 4;
      const topo = source[sourceIndex] / 255;
      if (topo < 0.018) continue;

      const shade = Math.pow(topo, 0.72);
      const frontFade = 0.28 + z2 * 0.72;
      const alpha = Math.round(Math.min(58, shade * frontFade * 74));
      if (alpha < 2) continue;

      const targetIndex = (y * size + x) * 4;
      output[targetIndex] = 30;
      output[targetIndex + 1] = 34;
      output[targetIndex + 2] = 35;
      output[targetIndex + 3] = alpha;
    }
  }

  topologyTexture.renderCtx.putImageData(image, 0, 0);
  ctx.save();
  ctx.beginPath();
  ctx.arc(metrics.cx, metrics.cy, metrics.r, 0, Math.PI * 2);
  ctx.clip();
  ctx.globalCompositeOperation = "multiply";
  ctx.globalAlpha = 0.78;
  ctx.drawImage(
    topologyTexture.renderCanvas,
    metrics.cx - metrics.r,
    metrics.cy - metrics.r,
    metrics.r * 2,
    metrics.r * 2,
  );
  ctx.restore();
}

function traceLandPath(metrics, { closeSegments = true, minZ = -0.015 } = {}) {
  let traced = 0;
  for (const ring of landRings) {
    let drawing = false;
    let segmentPoints = 0;
    for (const pointLatLon of ring) {
      const point = project(pointLatLon[0], pointLatLon[1], metrics);
      if (point.visible && point.z > minZ) {
        if (!drawing) {
          ctx.moveTo(point.x, point.y);
          drawing = true;
          segmentPoints = 1;
        } else {
          ctx.lineTo(point.x, point.y);
          segmentPoints += 1;
        }
      } else {
        if (drawing && closeSegments && segmentPoints > 2) {
          ctx.closePath();
          traced += 1;
        }
        drawing = false;
        segmentPoints = 0;
      }
    }
    if (drawing && closeSegments && segmentPoints > 2) {
      ctx.closePath();
      traced += 1;
    }
  }
  return traced;
}

function strokeLandPath(metrics, color, widthValue, alpha = 1) {
  ctx.save();
  ctx.beginPath();
  traceLandPath(metrics, { closeSegments: false, minZ: -0.012 });
  ctx.strokeStyle = color;
  ctx.lineWidth = widthValue;
  ctx.globalAlpha = alpha;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.restore();
}

function drawLandRelief(metrics) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(metrics.cx, metrics.cy, metrics.r, 0, Math.PI * 2);
  ctx.clip();

  ctx.save();
  ctx.filter = "blur(3px)";
  ctx.fillStyle = "rgba(118, 128, 128, 0.26)";
  for (let index = 0; index < landFillDots.length; index += 1) {
    const [lat, lon] = landFillDots[index];
    const point = project(lat, lon, metrics);
    if (point.visible && point.z > 0.015) {
      ctx.globalAlpha = Math.min(0.12, 0.035 + point.z * 0.052);
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.z > 0.55 ? 6.2 : 4.8, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.globalAlpha = 1;
  ctx.restore();

  ctx.fillStyle = "rgba(29, 33, 36, 0.3)";
  const fillStride = currentZoom > 1.05 ? 2 : 3;
  for (let index = 0; index < landFillDots.length; index += fillStride) {
    const [lat, lon] = landFillDots[index];
    const point = project(lat, lon, metrics);
    if (point.visible && point.z > 0.02) {
      const topo = sampleTopology(lat, lon);
      const texture =
        Math.sin((lat + lon) * 0.46) * 0.5 +
        Math.sin(lat * 0.77 - lon * 0.19) * 0.35;
      const alpha = topologyTexture.ready
        ? Math.min(0.16, 0.012 + topo * 0.22 + point.z * 0.018)
        : Math.min(0.095, Math.max(0.018, 0.022 + point.z * 0.046 + texture * 0.012));
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(
        point.x,
        point.y,
        topologyTexture.ready ? 0.28 + topo * 0.72 : point.z > 0.55 ? 0.36 : 0.24,
        0,
        Math.PI * 2,
      );
      ctx.fill();
    }
  }

  const reliefStride = currentZoom > 1.08 ? 1 : 3;
  for (let index = 0; index < landFillDots.length; index += reliefStride) {
    const [lat, lon] = landFillDots[index];
    const point = project(lat, lon, metrics);
    if (!point.visible || point.z < 0.08) continue;

    const folded =
      Math.abs(Math.sin(lat * 0.33 + lon * 0.18)) +
      Math.abs(Math.sin(lat * 0.77 - lon * 0.09)) * 0.72 +
      Math.abs(Math.cos(lat * 0.18 + lon * 0.41)) * 0.48;
    const topo = sampleTopology(lat, lon);
    const relief = topologyTexture.ready ? topo * 2.4 + folded * 0.16 : folded;
    if (relief < (topologyTexture.ready ? 0.18 : 0.68)) continue;

    const angle = lat * 0.018 + lon * 0.009 + relief * 0.8;
    const length = (1.2 + relief * 2.4) * Math.min(1.5, currentZoom);
    const dx = Math.cos(angle) * length;
    const dy = Math.sin(angle) * length * 0.45;
    const alpha = topologyTexture.ready
      ? Math.min(0.22, 0.018 + topo * 0.32 + point.z * 0.024)
      : Math.min(0.27, 0.05 + folded * 0.05 + point.z * 0.064);

    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 1.55})`;
    ctx.lineWidth = 0.72;
    ctx.moveTo(point.x - dx - 0.55, point.y - dy - 0.55);
    ctx.lineTo(point.x + dx - 0.55, point.y + dy - 0.55);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = `rgba(27, 31, 34, ${alpha})`;
    ctx.lineWidth = 0.58;
    ctx.moveTo(point.x - dx, point.y - dy);
    ctx.lineTo(point.x + dx, point.y + dy);
    ctx.stroke();
  }

  ctx.globalAlpha = 1;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  for (const range of mountainRanges) {
    strokeProjectedLine(range, {
      color: "rgba(31, 35, 38, 0.28)",
      alpha: 0.36,
      width: 0.58,
    });
    const highlight = range.map(([lat, lon]) => [lat + 0.18, lon - 0.22]);
    strokeProjectedLine(highlight, {
      color: "rgba(255, 255, 255, 0.78)",
      alpha: 0.3,
      width: 0.82,
    });
  }

  ctx.globalAlpha = 1;
  ctx.restore();
}

function drawLand(metrics) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(metrics.cx, metrics.cy, metrics.r, 0, Math.PI * 2);
  ctx.clip();

  const landGradient = ctx.createRadialGradient(
    metrics.cx - metrics.r * 0.28,
    metrics.cy - metrics.r * 0.28,
    metrics.r * 0.12,
    metrics.cx + metrics.r * 0.12,
    metrics.cy + metrics.r * 0.1,
    metrics.r * 0.95,
  );
  landGradient.addColorStop(0, "rgba(237, 239, 239, 0.72)");
  landGradient.addColorStop(0.46, "rgba(216, 221, 220, 0.54)");
  landGradient.addColorStop(0.74, "rgba(191, 198, 197, 0.4)");
  landGradient.addColorStop(1, "rgba(155, 165, 164, 0.24)");

  ctx.beginPath();
  for (const ring of landRings) {
    const projected = ring.map(([lat, lon]) => project(lat, lon, metrics));
    const visibleCount = projected.filter((point) => point.visible && point.z > -0.012).length;
    if (visibleCount < Math.max(4, projected.length * 0.985)) continue;
    projected.forEach((point, index) => {
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.closePath();
  }
  ctx.fillStyle = landGradient;
  ctx.fill();
  ctx.restore();

  drawLandRelief(metrics);
  drawTopologySurface(metrics);

  ctx.save();
  ctx.beginPath();
  ctx.arc(metrics.cx, metrics.cy, metrics.r, 0, Math.PI * 2);
  ctx.clip();
  ctx.translate(-0.45, -0.55);
  strokeLandPath(metrics, "rgba(255, 255, 255, 0.74)", 1.3, 0.82);
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.arc(metrics.cx, metrics.cy, metrics.r, 0, Math.PI * 2);
  ctx.clip();
  strokeLandPath(
    metrics,
    landSource === "natural-earth" ? "rgba(29, 33, 36, 0.32)" : "rgba(29, 33, 36, 0.18)",
    landSource === "natural-earth" ? 0.74 : 0.88,
    1,
  );
  ctx.restore();
}

function drawMountainTexture() {
  // Terrain detail now lives inside the land clip in drawLandRelief.
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

function drawArc(fromSignal, toSignal, color, alpha = 0.3, widthValue = 1) {
  const points = greatCirclePoints(fromSignal, toSignal, 50);
  ctx.save();
  ctx.lineCap = "round";
  ctx.shadowColor = color;
  ctx.shadowBlur = 10;
  strokeProjectedLine(points, { color, alpha, width: widthValue });
  ctx.restore();
}

function drawLinks() {
  if (mode !== "selected" && mode !== "brief") return;

  for (const [from, to] of ambientLinks) {
    const a = getSignal(from);
    const b = getSignal(to);
    if (!a || !b) continue;
    drawArc(a, b, "rgba(46, 50, 55, 0.28)", 0.08, 0.58);
  }

  const related = ambientLinks
    .filter(([from, to]) => from === selectedSignal.id || to === selectedSignal.id)
    .map(([from, to]) => getSignal(from === selectedSignal.id ? to : from))
    .filter(Boolean);

  for (const signal of related) {
    const color = "rgba(198, 33, 31, 0.66)";
    drawArc(selectedSignal, signal, color, 0.44, 1.25);
  }
}

function kindColor(signal, alpha = 1, active = false) {
  const base = active ? "198, 33, 31" : "24, 28, 31";
  return `rgba(${base}, ${alpha})`;
}

function drawPin(signal, projected, isSelected, isHovered) {
  const filtered = passesFilter(signal);
  const dim = filtered ? 1 : 0.16;
  const radius = isSelected ? 5.6 : isHovered ? 4.8 : 3.4;
  ctx.save();
  ctx.globalAlpha = dim * Math.max(0.2, projected.z);
  ctx.shadowColor = kindColor(signal, isSelected || isHovered ? 0.72 : 0.42, isSelected || isHovered);
  ctx.shadowBlur = isSelected ? 18 : isHovered ? 12 : 4;
  ctx.fillStyle = kindColor(signal, isSelected ? 0.95 : 0.76, isSelected || isHovered);
  ctx.beginPath();
  ctx.arc(projected.x, projected.y, radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.shadowBlur = 0;
  ctx.lineWidth = 1;
  ctx.strokeStyle = kindColor(signal, isSelected ? 0.72 : 0.34, isSelected || isHovered);
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

function drawLabel(signal, projected, isSelected, isHovered, boxes) {
  const shouldForce = isSelected || isHovered;
  const desktop = isDesktop();
  if (!shouldForce && signal.labelRank > labelLimit()) return;
  if (!passesFilter(signal) && !shouldForce) return;

  const text = signal.title.toUpperCase();
  ctx.save();
  ctx.font = "10px 'DM Mono', monospace";
  const maxTextLength = desktop ? 31 : 21;
  const displayText =
    text.length > maxTextLength ? `${text.slice(0, maxTextLength)}...` : text;
  const labelWidth = Math.min(ctx.measureText(displayText).width, desktop ? 220 : 150);
  const x = projected.x + 11;
  const y = projected.y - 18;
  const box = { x, y: y - 2, w: labelWidth + 18, h: 20 };

  boxes.push(box);
  if (passesFilter(signal) || shouldForce) {
    projectedPins.push({
      type: "label",
      id: signal.id,
      x: box.x,
      y: box.y,
      w: box.w,
      h: box.h,
    });
  }

  ctx.globalAlpha = shouldForce ? 1 : 0.72;
  ctx.fillStyle = "rgba(255, 255, 255, 0.74)";
  ctx.strokeStyle = kindColor(signal, shouldForce ? 0.42 : 0.18, shouldForce);
  ctx.lineWidth = 1;
  roundRect(ctx, box.x, box.y, box.w, box.h, 10);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = shouldForce ? "rgba(198, 33, 31, 0.94)" : "rgba(24, 27, 30, 0.86)";
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
  const visibleSignals = signals
    .filter((signal) => passesFilter(signal) || signal.id === selectedSignal.id)
    .map((signal) => ({ signal, point: project(signal.lat, signal.lon, metrics) }))
    .filter(({ point }) => point.visible)
    .sort((a, b) => a.point.z - b.point.z);

  for (const { signal, point } of visibleSignals) {
    const isSelected = selectedSignal.id === signal.id && (mode === "selected" || mode === "brief");
    const isHovered = hoveredSignal?.id === signal.id;
    drawPin(signal, point, isSelected, isHovered);
    if (passesFilter(signal)) {
      projectedPins.push({
        type: "pin",
        id: signal.id,
        x: point.x,
        y: point.y,
        z: point.z,
        hit: isSelected || isHovered ? 24 : 19,
      });
    }
  }

  visibleSignals
    .filter(({ point }) => point.z > 0.2)
    .sort((a, b) => a.signal.labelRank - b.signal.labelRank)
    .forEach(({ signal, point }) => {
      const isSelected = selectedSignal.id === signal.id && (mode === "selected" || mode === "brief");
      const isHovered = hoveredSignal?.id === signal.id;
      drawLabel(signal, point, isSelected, isHovered, labelBoxes);
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

function terrainNoise(x, y, t) {
  return (
    Math.sin(x * 8.2 + y * 1.7 + t) * 0.32 +
    Math.sin(x * 15.7 - y * 4.1 - t * 0.6) * 0.22 +
    Math.sin((x + y) * 28.5 + t * 0.4) * 0.12
  );
}

function terrainHeightValue(x, y, t) {
  const base =
    terrainNoise(x * 0.9, y * 0.8, t * 0.7) * 0.9 +
    terrainNoise(x * 1.8 + 2.5, y * 1.35 - 1.4, t * 0.45) * 0.45;
  const ridgeA = 1 - Math.abs(Math.sin(x * 4.2 + y * 1.6 + terrainNoise(x, y, t) * 1.8));
  const ridgeB = 1 - Math.abs(Math.sin(x * 2.7 - y * 3.4 + terrainNoise(x * 0.7, y * 0.7, t) * 1.3));
  return base * 0.42 + ridgeA ** 3 * 0.46 + ridgeB ** 4 * 0.28;
}

function drawLandingHillshade(t, parallaxX, parallaxY) {
  const shadeWidth = Math.max(260, Math.min(560, Math.round(terrainWidth / 3)));
  const shadeHeight = Math.max(160, Math.min(360, Math.round(terrainHeight / 3)));
  if (terrainShadeCanvas.width !== shadeWidth || terrainShadeCanvas.height !== shadeHeight) {
    terrainShadeCanvas.width = shadeWidth;
    terrainShadeCanvas.height = shadeHeight;
  }

  const image = terrainShadeCtx.createImageData(shadeWidth, shadeHeight);
  const data = image.data;
  const lightX = -0.58;
  const lightY = -0.74;
  const pixelStep = 1 / Math.min(shadeWidth, shadeHeight);

  for (let y = 0; y < shadeHeight; y += 1) {
    for (let x = 0; x < shadeWidth; x += 1) {
      const nx = (x / shadeWidth - 0.5) * 3.15 - parallaxX / Math.max(terrainWidth, 1) * 0.8;
      const ny = (y / shadeHeight - 0.5) * 2.05 - parallaxY / Math.max(terrainHeight, 1) * 0.65;
      const h = terrainHeightValue(nx, ny, t);
      const hx = terrainHeightValue(nx + pixelStep * 3.2, ny, t);
      const hy = terrainHeightValue(nx, ny + pixelStep * 3.2, t);
      const slope = (h - hx) * lightX + (h - hy) * lightY;
      const vignette = Math.max(0, 1 - Math.hypot(nx * 0.42, ny * 0.7));
      const value = clamp(242 + h * 11 + slope * 36, 218, 255);
      const index = (y * shadeWidth + x) * 4;
      data[index] = value;
      data[index + 1] = value;
      data[index + 2] = value;
      data[index + 3] = Math.round(118 * vignette);
    }
  }

  terrainShadeCtx.putImageData(image, 0, 0);
  terrainCtx.save();
  terrainCtx.globalCompositeOperation = "multiply";
  terrainCtx.globalAlpha = 0.72;
  terrainCtx.imageSmoothingEnabled = true;
  terrainCtx.drawImage(
    terrainShadeCanvas,
    -terrainWidth * 0.035 + parallaxX * 0.12,
    -terrainHeight * 0.03 + parallaxY * 0.1,
    terrainWidth * 1.07,
    terrainHeight * 1.06,
  );
  terrainCtx.restore();
}

function drawTerrainOverlayLine(x1, y1, x2, y2, alpha = 0.18) {
  terrainCtx.strokeStyle = `rgba(198, 33, 31, ${alpha})`;
  terrainCtx.lineWidth = 0.75;
  terrainCtx.beginPath();
  terrainCtx.moveTo(x1, y1);
  terrainCtx.lineTo(x2, y2);
  terrainCtx.stroke();
}

function drawTerrainPolyline(points, options = {}) {
  if (points.length < 2) return;
  terrainCtx.save();
  terrainCtx.lineCap = "round";
  terrainCtx.lineJoin = "round";

  terrainCtx.beginPath();
  points.forEach(([x, y], index) => {
    if (index === 0) terrainCtx.moveTo(x, y);
    else terrainCtx.lineTo(x, y);
  });
  terrainCtx.strokeStyle = options.highlight || "rgba(255, 255, 255, 0.68)";
  terrainCtx.lineWidth = options.width ? options.width + 0.8 : 1.4;
  terrainCtx.shadowColor = "rgba(255,255,255,0.65)";
  terrainCtx.shadowBlur = 0;
  terrainCtx.shadowOffsetX = -1;
  terrainCtx.shadowOffsetY = -1;
  terrainCtx.stroke();

  terrainCtx.beginPath();
  points.forEach(([x, y], index) => {
    if (index === 0) terrainCtx.moveTo(x, y);
    else terrainCtx.lineTo(x, y);
  });
  terrainCtx.strokeStyle = options.shadow || "rgba(24, 27, 30, 0.12)";
  terrainCtx.lineWidth = options.width || 0.7;
  terrainCtx.shadowColor = "rgba(24,27,30,0.1)";
  terrainCtx.shadowOffsetX = 1.1;
  terrainCtx.shadowOffsetY = 1.1;
  terrainCtx.stroke();
  terrainCtx.restore();
}

function drawReliefRange(centerX, centerY, widthValue, heightValue, angle, intensity = 1) {
  terrainCtx.save();
  terrainCtx.translate(centerX, centerY);
  terrainCtx.rotate(angle);
  const lineCount = Math.round(9 + intensity * 5);
  for (let row = 0; row < lineCount; row += 1) {
    const rowT = row / Math.max(1, lineCount - 1);
    const baseY = (rowT - 0.5) * heightValue;
    const taper = Math.sin(rowT * Math.PI);
    const points = [];
    for (let step = -42; step <= 42; step += 1) {
      const x = (step / 42) * widthValue * (0.42 + taper * 0.44);
      const peak =
        Math.sin(step * 0.22 + row * 0.7) * heightValue * 0.035 +
        terrainNoise(step * 0.04, row * 0.18, 0) * heightValue * 0.08;
      const y = baseY + peak - taper * heightValue * 0.16 * Math.sin((step / 42) * Math.PI);
      points.push([x, y]);
    }
    drawTerrainPolyline(points, {
      width: row % 3 === 0 ? 0.95 : 0.58,
      highlight: `rgba(255, 255, 255, ${0.58 + intensity * 0.14})`,
      shadow: `rgba(25, 28, 31, ${0.075 + intensity * 0.055})`,
    });
  }
  terrainCtx.restore();
}

function drawTerrainDotField(originX, originY, columns, rows, spacing, alpha = 0.08) {
  terrainCtx.save();
  terrainCtx.fillStyle = `rgba(24, 27, 30, ${alpha})`;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < columns; col += 1) {
      if ((row + col) % 7 === 0) continue;
      const fade = 1 - Math.hypot(col / columns - 0.5, row / rows - 0.5) * 1.55;
      if (fade <= 0) continue;
      terrainCtx.globalAlpha = alpha * fade;
      terrainCtx.fillRect(originX + col * spacing, originY + row * spacing, 1, 1);
    }
  }
  terrainCtx.globalAlpha = 1;
  terrainCtx.restore();
}

function drawLandingTerrain(now) {
  if (!terrainCtx || mode !== "landing" || terrainCanvas.offsetParent === null) return;
  terrainCtx.clearRect(0, 0, terrainWidth, terrainHeight);

  terrainPointer.x += (terrainPointer.targetX - terrainPointer.x) * 0.08;
  terrainPointer.y += (terrainPointer.targetY - terrainPointer.y) * 0.08;

  const t = now * 0.00007;
  const cx = terrainWidth * 0.5;
  const cy = terrainHeight * 0.53;
  const scale = Math.max(terrainWidth, terrainHeight);
  const parallaxX = terrainPointer.x * scale * 0.045;
  const parallaxY = terrainPointer.y * scale * 0.034;

  terrainCtx.fillStyle = "#f7f6f2";
  terrainCtx.fillRect(0, 0, terrainWidth, terrainHeight);

  const ground = terrainCtx.createRadialGradient(
    cx + parallaxX * 0.3,
    cy + parallaxY * 0.3,
    scale * 0.08,
    cx,
    cy,
    scale * 0.72,
  );
  ground.addColorStop(0, "rgba(255, 255, 255, 0.98)");
  ground.addColorStop(0.5, "rgba(230, 231, 228, 0.7)");
  ground.addColorStop(1, "rgba(246, 245, 241, 0)");
  terrainCtx.fillStyle = ground;
  terrainCtx.fillRect(0, 0, terrainWidth, terrainHeight);

  drawLandingHillshade(t, parallaxX, parallaxY);

  terrainCtx.save();
  terrainCtx.translate(cx + parallaxX, cy + parallaxY);
  terrainCtx.rotate(-0.13);

  for (let band = -15; band <= 15; band += 1) {
    const points = [];
    for (let step = -110; step <= 110; step += 1) {
      const x = (step / 110) * scale * 0.72;
      const n =
        terrainNoise(step * 0.036, band * 0.24, t) +
        terrainNoise(step * 0.018 + 2.8, band * 0.12, t * 0.5) * 0.8;
      const y =
        band * scale * 0.03 +
        n * scale * 0.021 +
        Math.sin(step * 0.055 + band * 0.5) * scale * 0.006;
      points.push([x, y]);
    }
    drawTerrainPolyline(points, {
      width: band % 4 === 0 ? 0.82 : 0.48,
      highlight:
        band % 4 === 0 ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.45)",
      shadow: band % 4 === 0 ? "rgba(24,27,30,0.13)" : "rgba(24,27,30,0.055)",
    });
  }
  terrainCtx.restore();

  drawReliefRange(
    terrainWidth * 0.2 + parallaxX * 0.48,
    terrainHeight * 0.2 + parallaxY * 0.28,
    scale * 0.34,
    scale * 0.11,
    -0.08,
    0.86,
  );
  drawReliefRange(
    terrainWidth * 0.7 + parallaxX * 0.38,
    terrainHeight * 0.2 + parallaxY * 0.34,
    scale * 0.42,
    scale * 0.14,
    -0.16,
    0.94,
  );
  drawReliefRange(
    terrainWidth * 0.64 + parallaxX * 0.44,
    terrainHeight * 0.72 + parallaxY * 0.38,
    scale * 0.43,
    scale * 0.16,
    -0.18,
    1,
  );
  drawReliefRange(
    terrainWidth * 0.34 + parallaxX * 0.36,
    terrainHeight * 0.44 + parallaxY * 0.3,
    scale * 0.25,
    scale * 0.1,
    -0.28,
    0.7,
  );

  terrainCtx.fillStyle = "rgba(23, 25, 28, 0.34)";
  for (const sample of terrainSamples) {
    const px = sample.x * terrainWidth + parallaxX * (0.1 + sample.x * 0.08);
    const py = sample.y * terrainHeight + parallaxY * (0.1 + sample.y * 0.08);
    const nx = (px - cx) / scale;
    const ny = (py - cy) / scale;
    const falloff = Math.max(0, 1 - Math.hypot(nx * 1.6, ny * 1.25));
    const heightValue = terrainNoise(nx * 9, ny * 9, t + sample.seed);
    const alpha = falloff * Math.max(0, heightValue + 0.34) * 0.075;
    if (alpha <= 0.006) continue;
    terrainCtx.globalAlpha = alpha;
    terrainCtx.beginPath();
    terrainCtx.arc(px, py, 0.55 + falloff * 0.65, 0, Math.PI * 2);
    terrainCtx.fill();
  }
  terrainCtx.globalAlpha = 1;

  drawTerrainDotField(
    terrainWidth * 0.18 + parallaxX * 0.12,
    terrainHeight * 0.18 + parallaxY * 0.08,
    34,
    14,
    8,
    0.07,
  );
  drawTerrainDotField(
    terrainWidth * 0.67 + parallaxX * 0.1,
    terrainHeight * 0.58 + parallaxY * 0.08,
    42,
    16,
    7,
    0.055,
  );

  terrainCtx.save();
  terrainCtx.translate(parallaxX * 0.16, parallaxY * 0.12);
  drawTerrainOverlayLine(terrainWidth * 0.1, terrainHeight * 0.24, terrainWidth * 0.86, terrainHeight * 0.24, 0.12);
  drawTerrainOverlayLine(terrainWidth * 0.62, terrainHeight * 0.1, terrainWidth * 0.62, terrainHeight * 0.82, 0.16);
  drawTerrainOverlayLine(terrainWidth * 0.14, terrainHeight * 0.71, terrainWidth * 0.14, terrainHeight * 0.28, 0.1);
  for (let i = 0; i < 16; i += 1) {
    const x = terrainWidth * (0.18 + i * 0.043);
    const y = terrainHeight * (0.24 + Math.sin(i * 1.7) * 0.012);
    terrainCtx.fillStyle = i % 5 === 0 ? "rgba(198, 33, 31, 0.32)" : "rgba(198, 33, 31, 0.14)";
    terrainCtx.fillRect(x, y - 1, i % 5 === 0 ? 8 : 4, 1);
  }
  terrainCtx.font = "9px 'DM Mono', monospace";
  terrainCtx.fillStyle = "rgba(198, 33, 31, 0.32)";
  terrainCtx.fillText("SURFACE SIGNAL", terrainWidth * 0.64, terrainHeight * 0.245);
  terrainCtx.fillText("PATTERN INDEX", terrainWidth * 0.15, terrainHeight * 0.708);
  terrainCtx.restore();
}

function animate(now = performance.now()) {
  const delta = Math.min(40, now - lastTime);
  lastTime = now;

  drawLandingTerrain(now);

  const hasInertia = Math.hypot(spin.velocityX, spin.velocityY) > 0.001;
  if (!spin.dragging && hasInertia) {
    targetLon = normalizeLon(targetLon + spin.velocityX * delta);
    targetLat = clamp(targetLat + spin.velocityY * delta, -72, 72);
    spin.velocityX *= 0.94;
    spin.velocityY *= 0.94;
  } else if (mode === "browse" && now > spin.manualUntil) {
    autoLon = normalizeLon(autoLon + delta * 0.0024);
    targetLon = autoLon;
    targetLat += (8 - targetLat) * 0.01;
  } else if ((mode === "selected" || mode === "brief") && now > spin.manualUntil) {
    targetLon = normalizeLon(targetLon + shortestAngle(targetLon, selectedSignal.lon) * 0.018);
    targetLat += (clamp(selectedSignal.lat * 0.42, -58, 58) - targetLat) * 0.018;
  }

  currentZoom += (targetZoom - currentZoom) * 0.08;
  centerLon = normalizeLon(centerLon + shortestAngle(centerLon, targetLon) * 0.07);
  centerLat += (targetLat - centerLat) * 0.07;

  const metrics = globeMetrics();
  drawBackground(now);
  drawSphere(metrics);
  drawLand(metrics);
  drawMountainTexture(metrics);
  drawGraticule(metrics);
  drawLinks();
  drawPins(metrics);
  drawCalibration(metrics);
  setRuntimeTelemetry();

  requestAnimationFrame(animate);
}

function findHoveredSignal() {
  let winner = null;
  let bestDistance = Infinity;
  for (const target of projectedPins) {
    if (target.type === "label") {
      const inside =
        pointer.x >= target.x &&
        pointer.x <= target.x + target.w &&
        pointer.y >= target.y &&
        pointer.y <= target.y + target.h;
      if (inside) return getSignal(target.id);
      continue;
    }

    const distance = Math.hypot(pointer.x - target.x, pointer.y - target.y);
    if (distance < target.hit && distance < bestDistance) {
      winner = getSignal(target.id);
      bestDistance = distance;
    }
  }
  return winner;
}

function updateHoverPlate(event) {
  if (!hoveredSignal || mode === "landing") {
    hoverPlate.classList.remove("is-visible");
    return;
  }
  hoverKind.textContent = "SIGNAL";
  hoverTitle.textContent = hoveredSignal.title;
  hoverPlate.style.left = `${event.clientX}px`;
  hoverPlate.style.top = `${event.clientY}px`;
  hoverPlate.classList.add("is-visible");
}

function setMode(nextMode) {
  mode = nextMode;
  appShell.dataset.mode = nextMode;
  window.clearTimeout(landingHideTimer);
  if (nextMode === "landing") {
    delete appShell.dataset.landingDone;
  } else {
    landingHideTimer = window.setTimeout(() => {
      if (mode !== "landing") {
        appShell.dataset.landingDone = "true";
      }
    }, 980);
  }
  readoutMode.textContent = nextMode === "browse" ? "BROWSE" : nextMode === "brief" ? "BRIEF" : "SELECTED";
  readoutLocation.textContent =
    nextMode === "browse" ? "GLOBAL SIGNAL SURFACE" : selectedSignal.region;
}

function setSelectedSignal(signal) {
  selectedSignal = signal;
  targetLon = normalizeLon(signal.lon);
  targetLat = clamp(signal.lat * 0.42, -58, 58);
  spin.velocityX = 0;
  spin.velocityY = 0;
  spin.manualUntil = performance.now() + 1800;
  updateCard(signal);
  updateBrief(signal);
  setMode("selected");
}

function updateCard(signal) {
  signalCard.dataset.kind = "signal";
  fields.kind.textContent = "SIGNAL";
  fields.kind.dataset.kind = "signal";
  fields.confidence.textContent = `CONFIDENCE ${signal.confidence}`;
  fields.region.textContent = signal.region;
  fields.title.textContent = signal.title;
  fields.summary.textContent = signal.summary;
  fields.implication.textContent = signal.implication;
  fields.surprise.textContent = signal.surprise;
  fields.horizon.textContent = signal.horizon;
  fields.signals.textContent = String(signal.signalCount);
  fields.category.textContent = signal.category;
}

function updateBrief(signal) {
  fields.briefTitle.textContent = signal.title;
  fields.briefDeck.textContent = `${signal.region}. ${signal.summary}`;
  fields.rationale.textContent = signal.rationale;
  fields.why.textContent = signal.why;
  fields.briefSurprise.textContent = signal.surprise;
  fields.briefWatch.textContent = signal.watch;
  fields.signalList.replaceChildren(
    ...signal.signals.map((signal) => {
      const item = document.createElement("li");
      item.textContent = signal;
      return item;
    }),
  );
  fields.sourceList.replaceChildren(
    ...signal.sources.map((source) => {
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
    setSelectedSignal(selectedSignal);
  }
  setMode("brief");
  document.querySelector("#brief").scrollIntoView({ behavior: "smooth", block: "start" });
}

function enterExperience() {
  setMode("browse");
  setTimeout(() => canvas.focus?.(), 400);
}

function applyLaunchState() {
  const params = new URLSearchParams(window.location.search);
  const launchMode = params.get("mode");

  const launchLon = Number(params.get("lon"));
  const launchLat = Number(params.get("lat"));
  const launchZoom = Number(params.get("zoom"));
  if (Number.isFinite(launchLon)) {
    centerLon = normalizeLon(launchLon);
    targetLon = centerLon;
    autoLon = centerLon;
  }
  if (Number.isFinite(launchLat)) {
    centerLat = clamp(launchLat, -72, 72);
    targetLat = centerLat;
  }
  if (Number.isFinite(launchZoom)) {
    currentZoom = clamp(launchZoom, 0.68, 1.78);
    targetZoom = currentZoom;
  }
  if (params.get("still") === "1") {
    spin.manualUntil = Number.POSITIVE_INFINITY;
  }

  if (!launchMode) return;

  const launchSignal = getSignal(params.get("signal")) || selectedSignal;
  appShell.dataset.landingDone = "true";
  if (launchMode === "browse") {
    setMode("browse");
    return;
  }

  if (launchMode === "selected" || launchMode === "brief") {
    setSelectedSignal(launchSignal);
    if (launchMode === "brief") {
      setMode("brief");
      window.setTimeout(() => {
        document.querySelector("#brief").scrollIntoView({ behavior: "auto", block: "start" });
      }, 120);
    }
  }
}

function beginSpinScrub(event) {
  if (mode === "landing") return;
  spin.dragging = true;
  spin.lastX = event.clientX;
  spin.lastY = event.clientY;
  spin.velocityX = 0;
  spin.velocityY = 0;
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
  const dy = event.clientY - spin.lastY;
  if (Math.hypot(dx, dy) < 0.2) return;
  targetLon = normalizeLon(targetLon - dx * multiplier);
  targetLat = clamp(targetLat + dy * multiplier * 0.72, -72, 72);
  autoLon = targetLon;
  spin.velocityX = -dx * 0.00045;
  spin.velocityY = dy * 0.00025;
  spin.lastX = event.clientX;
  spin.lastY = event.clientY;
  spin.moved = spin.moved || Math.hypot(dx, dy) > 2;
  spin.manualUntil = performance.now() + 4200;
}

function endSpinScrub(event) {
  if (!spin.dragging) return;
  spin.dragging = false;
  spin.manualUntil = performance.now() + 3800;
  window.clearTimeout(spin.resetMovedTimer);
  spin.resetMovedTimer = window.setTimeout(() => {
    if (!spin.dragging) spin.moved = false;
  }, 220);
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
  }
  hoveredSignal = findHoveredSignal();
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
  const clickedSignal = findHoveredSignal();
  if (clickedSignal) {
    hoveredSignal = clickedSignal;
    setSelectedSignal(clickedSignal);
  }
}

function handleCanvasMouseUp(event) {
  if (mode === "landing" || spin.dragging || spin.moved) return;
  const rect = canvas.getBoundingClientRect();
  pointer = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
  const clickedSignal = findHoveredSignal();
  if (clickedSignal) {
    hoveredSignal = clickedSignal;
    setSelectedSignal(clickedSignal);
  }
}

function handleWheel(event) {
  if (mode !== "browse") return;
  event.preventDefault();
  const direction = event.deltaY > 0 ? -1 : 1;
  const scale = event.deltaMode === 1 ? 0.12 : 0.0018;
  targetZoom = clamp(targetZoom + direction * Math.abs(event.deltaY) * scale, 0.68, 1.78);
  appShell.dataset.zooming = "true";
  window.clearTimeout(handleWheel.timeout);
  handleWheel.timeout = window.setTimeout(() => {
    delete appShell.dataset.zooming;
  }, 420);
}

function handleCanvasLeave() {
  pointer = { x: -9999, y: -9999 };
  hoveredSignal = null;
  hoverPlate.classList.remove("is-visible");
}

function handleLandingPointerMove(event) {
  const rect = landing.getBoundingClientRect();
  terrainPointer.targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
  terrainPointer.targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  landing.style.setProperty("--landing-x", terrainPointer.targetX.toFixed(3));
  landing.style.setProperty("--landing-y", terrainPointer.targetY.toFixed(3));
}

function handleLandingPointerLeave() {
  terrainPointer.targetX = 0;
  terrainPointer.targetY = 0;
  landing.style.setProperty("--landing-x", "0");
  landing.style.setProperty("--landing-y", "0");
}

function setFilter(filter) {
  activeFilter = filter;
  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });
  if (mode === "selected" && !passesFilter(selectedSignal)) {
    setMode("browse");
  }
}

window.addEventListener("resize", resize);
window.addEventListener("wheel", handleWheel, { passive: false });
enterButton.addEventListener("click", enterExperience);
openBriefButton.addEventListener("click", openBrief);
sourcesButton.addEventListener("click", openBrief);
landing.addEventListener("pointermove", handleLandingPointerMove);
landing.addEventListener("pointerleave", handleLandingPointerLeave);
canvas.addEventListener("pointermove", handleCanvasPointerMove);
canvas.addEventListener("pointerdown", beginSpinScrub);
canvas.addEventListener("pointerup", endSpinScrub);
canvas.addEventListener("pointercancel", endSpinScrub);
canvas.addEventListener("pointerleave", handleCanvasLeave);
canvas.addEventListener("click", handleCanvasClick);
canvas.addEventListener("mouseup", handleCanvasMouseUp);
filterButtons.forEach((button) => button.addEventListener("click", () => setFilter(button.dataset.filter)));

updateCard(selectedSignal);
updateBrief(selectedSignal);
resize();
setLandTelemetry();
applyLaunchState();
window.__futureSignalsState = () => ({
  mode,
  centerLon,
  centerLat,
  targetLon,
  targetLat,
  currentZoom,
  targetZoom,
  activeFilter,
  selected: selectedSignal.id,
  hovering: hoveredSignal?.id || null,
  scrubbing: spin.dragging,
  landSource,
  landDots: landDots.length + landFillDots.length,
  landFillDots: landFillDots.length,
});
loadDetailedLand();
requestAnimationFrame(animate);
