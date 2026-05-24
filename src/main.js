let signals = [
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

const predictionEngineConfig = {
  version: "PFE-2.1",
  generatedAt: new Date().toISOString(),
  cadenceTarget: "nightly-0100-local",
  weights: {
    baseRate: 0.1,
    evidence: 0.11,
    weakSignalBurst: 0.12,
    convergence: 0.15,
    causalTension: 0.13,
    friction: 0.1,
    asymmetry: 0.09,
    leadLag: 0.07,
    timing: 0.07,
    falsifiability: 0.06,
  },
  nightlyInputContract: [
    "geo_signal_seed",
    "source_mix",
    "reference_class_prior",
    "leading_indicators",
    "disconfirmers",
    "previous_resolution_outcomes",
  ],
};

const predictionCategoryPriors = {
  AI: {
    baseRate: 64,
    volatility: 72,
    referenceClass: "compute infrastructure adoption under resource constraints",
    leading: ["power-purchase agreements", "HBM and packaging supply", "inference cost curves"],
    failure: "model efficiency improves faster than local power, water, or memory limits tighten",
  },
  Biotechnology: {
    baseRate: 54,
    volatility: 65,
    referenceClass: "lab capability crossing into industrial scale",
    leading: ["offtake agreements", "regulatory classification", "contamination and quality controls"],
    failure: "buyers keep treating the capability as experimental rather than operational",
  },
  Cities: {
    baseRate: 59,
    volatility: 57,
    referenceClass: "urban operating costs changing before migration data",
    leading: ["insurance wording", "building-code revisions", "utility peak-load data"],
    failure: "adaptation investment absorbs stress before households or lenders change behavior",
  },
  Climate: {
    baseRate: 62,
    volatility: 70,
    referenceClass: "physical risk becoming financial or policy behavior",
    leading: ["hazard-data revisions", "insurer exclusions", "emergency procurement"],
    failure: "seasonal recovery restores buffers and keeps market behavior stable",
  },
  Energy: {
    baseRate: 68,
    volatility: 60,
    referenceClass: "energy reliability repricing under capacity stress",
    leading: ["grid-connection queues", "capacity-market prices", "backup-power procurement"],
    failure: "transmission and flexible capacity arrive faster than demand peaks",
  },
  "Food systems": {
    baseRate: 61,
    volatility: 66,
    referenceClass: "food-system stress compounding across climate, logistics, and households",
    leading: ["stocks-to-use ratios", "grain tenders", "cold-chain utilization"],
    failure: "stocks, imports, and household purchasing power stay resilient through stress periods",
  },
  Geopolitics: {
    baseRate: 57,
    volatility: 74,
    referenceClass: "strategic ambiguity converting into optionality spending",
    leading: ["insurance language", "military posture", "redundant route or supplier procurement"],
    failure: "durable de-escalation removes the option value before capital is committed",
  },
  Infrastructure: {
    baseRate: 66,
    volatility: 56,
    referenceClass: "infrastructure fragility becoming a procurement rule",
    leading: ["maintenance backlog", "outage recurrence", "hardening finance"],
    failure: "public funding and maintenance capacity close the resilience gap early",
  },
  Labour: {
    baseRate: 63,
    volatility: 52,
    referenceClass: "capacity shortages changing service quality before headline unemployment",
    leading: ["absenteeism", "wage premia", "shift rules and vacancy duration"],
    failure: "automation, migration, or redesign expands usable capacity before demand peaks",
  },
  Logistics: {
    baseRate: 65,
    volatility: 68,
    referenceClass: "route disruption becoming balance-sheet friction",
    leading: ["war-risk premiums", "blank sailings", "inventory days"],
    failure: "route normalization and lower insurance premia persist for multiple cycles",
  },
  Manufacturing: {
    baseRate: 60,
    volatility: 58,
    referenceClass: "industrial redundancy becoming a trust and qualification asset",
    leading: ["supplier qualification", "subsidy conditions", "power reliability contracts"],
    failure: "buyers reconcentrate capacity without pricing continuity risk",
  },
  Materials: {
    baseRate: 58,
    volatility: 64,
    referenceClass: "material scarcity filtered through proof, processing, and consent",
    leading: ["permitting velocity", "buyer provenance rules", "processing margins"],
    failure: "substitution, recycling, or lower demand removes the strategic premium",
  },
  Robotics: {
    baseRate: 55,
    volatility: 61,
    referenceClass: "automation adoption where work is repetitive and scarcity is measurable",
    leading: ["service-network density", "insurance acceptance", "maintenance cost curves"],
    failure: "human labour availability improves or robots remain too service-heavy",
  },
  Water: {
    baseRate: 67,
    volatility: 63,
    referenceClass: "water stress coupling into power, food, and legitimacy",
    leading: ["basin allocations", "reservoir and groundwater levels", "industrial water permits"],
    failure: "durable governance reform or infrastructure buffers reduce allocation conflict",
  },
  default: {
    baseRate: 56,
    volatility: 58,
    referenceClass: "weak-signal convergence across geography, institutions, and behavior",
    leading: ["policy wording", "price behavior", "local operating data"],
    failure: "official data and observed behavior stop moving in the same direction",
  },
};

const predictionDomains = {
  physical: ["heat", "water", "drought", "rainfall", "river", "snowpack", "storm", "fire", "cooling"],
  capital: ["insurance", "credit", "capital", "premium", "price", "finance", "bond", "market"],
  policy: ["policy", "regulation", "public", "rules", "permitting", "subsidy", "compliance"],
  capacity: ["labour", "skills", "worker", "grid", "power", "housing", "storage", "capacity"],
  security: ["security", "conflict", "defense", "sanctions", "sovereignty", "naval", "treaty"],
  technology: ["AI", "automation", "robotics", "data", "compute", "semiconductor", "battery", "sensor"],
  logistics: ["shipping", "route", "port", "corridor", "cable", "subsea", "freight", "cold-chain"],
  legitimacy: ["trust", "consent", "legitimacy", "household", "community", "health", "migration"],
};

const sourceReliability = {
  arXiv: 64,
  Crossref: 70,
  Eurostat: 78,
  FAOSTAT: 76,
  GDELT: 56,
  "GDELT DOC 2.1": 56,
  IEA: 78,
  ILOSTAT: 74,
  "NASA FIRMS": 76,
  "NASA POWER": 77,
  NOAA: 78,
  "OECD AI": 75,
  "Open-Meteo Forecast": 74,
  "OpenStreetMap Overpass": 63,
  ReliefWeb: 68,
  "UN Population": 78,
  USGS: 77,
  "USGS Earthquake Catalog": 77,
  "V-Dem": 72,
  "WHO GHO": 76,
  "Wikipedia / MediaWiki": 58,
  "World Bank Indicators": 78,
  "World Values Survey": 70,
};

const sourceGroups = {
  arXiv: "research",
  Crossref: "research",
  Eurostat: "official",
  FAOSTAT: "official",
  GDELT: "event stream",
  "GDELT DOC 2.1": "event stream",
  IEA: "sector data",
  ILOSTAT: "official",
  "NASA FIRMS": "remote sensing",
  "NASA POWER": "physical data",
  NOAA: "physical data",
  "OECD AI": "sector data",
  "Open-Meteo Forecast": "physical data",
  "OpenStreetMap Overpass": "geography",
  ReliefWeb: "humanitarian",
  "UN Population": "official",
  USGS: "geography",
  "USGS Earthquake Catalog": "geography",
  "V-Dem": "institutional",
  "WHO GHO": "official",
  "Wikipedia / MediaWiki": "context",
  "World Bank Indicators": "official",
  "World Values Survey": "survey",
};

const archetypeRules = [
  {
    name: "Chokepoint repricing",
    terms: ["shipping", "route", "port", "corridor", "cable", "subsea", "logistics"],
    pressure: "security risk -> insurance wording -> route time -> working capital",
    hidden: "working-capital tolerance",
    thesis:
      "the cost first moves through contracts, inventory days, and risk language before it shows up as a simple shortage",
    leading: ["insurance exclusions", "route persistence", "inventory days", "blank sailings"],
    lagging: ["consumer prices", "formal route redesign", "new infrastructure announcements"],
    failure: "insurance premia fall while routing normalizes for at least two reporting cycles",
  },
  {
    name: "Physical constraint",
    terms: ["water", "heat", "cooling", "drought", "rainfall", "river", "snowpack", "hydro"],
    pressure: "physical stress -> operating limits -> public policy -> asset repricing",
    hidden: "the point where environmental stress becomes an operating cost",
    thesis:
      "the forecast matters when a physical condition becomes a budget line, not just a climate headline",
    leading: ["allocation rules", "utility peak-load data", "insurer wording", "operating-hour changes"],
    lagging: ["migration statistics", "asset-price resets", "new zoning maps"],
    failure: "buffers improve and price, policy, and operating behavior decouple from physical stress",
  },
  {
    name: "Capacity gap",
    terms: ["labour", "worker", "skills", "care", "staffing", "installer", "productivity"],
    pressure: "demographic pressure -> labour scarcity -> service reliability -> automation demand",
    hidden: "usable human capacity at the exact moment demand peaks",
    thesis:
      "the hidden shift is not unemployment; it is whether enough usable capacity exists in the exact place and hour demand appears",
    leading: ["vacancy duration", "wage premia", "overtime and absenteeism", "automation procurement"],
    lagging: ["headline unemployment", "national productivity data", "formal shortage declarations"],
    failure: "work redesign or labour supply expands faster than the service bottleneck",
  },
  {
    name: "Resilience premium",
    terms: ["grid", "power", "microgrid", "battery", "outage", "energy", "infrastructure"],
    pressure: "reliability shock -> backup demand -> procurement change -> capital allocation",
    hidden: "credible fallback capacity",
    thesis:
      "buyers start paying for continuity and controllability, even when headline capacity looks adequate",
    leading: ["backup procurement", "capacity-market prices", "interconnection queues", "outage recurrence"],
    lagging: ["new central generation", "headline demand forecasts", "post-crisis policy packages"],
    failure: "central reliability improves before users change procurement or financing behavior",
  },
  {
    name: "Trust bottleneck",
    terms: ["minerals", "materials", "lithium", "copper", "nickel", "carbon", "license", "consent"],
    pressure: "strategic demand -> permitting friction -> proof requirements -> supply reliability",
    hidden: "whether the supply story can survive public scrutiny",
    thesis:
      "volume is not enough when buyers, regulators, and communities require proof that the supply can be defended",
    leading: ["permitting velocity", "traceability rules", "community benefit language", "buyer audits"],
    lagging: ["mine output", "commodity price spikes", "national supply targets"],
    failure: "substitution, cleaner processing, or local consent removes the credibility bottleneck",
  },
  {
    name: "Strategic optionality",
    terms: ["manufacturing", "redundancy", "defense", "nearshoring", "fabs", "supply"],
    pressure: "geopolitical uncertainty -> duplicated capacity -> qualification cycles -> pricing power",
    hidden: "time saved when concentrated assumptions fail",
    thesis:
      "the valuable asset is not spare capacity alone; it is already-qualified capacity that can be used before panic buying starts",
    leading: ["qualification cycles", "supplier audits", "subsidy conditions", "dual-source contracts"],
    lagging: ["completed factories", "trade statistics", "headline reshoring claims"],
    failure: "buyers stop paying for redundancy and reconcentrate supply without disruption",
  },
  {
    name: "Institutional ambiguity",
    terms: ["governance", "arctic", "treaty", "sovereignty", "diplomacy", "security"],
    pressure: "ambiguous rules -> risk premium -> strategic positioning -> infrastructure investment",
    hidden: "who can act before rules become clear",
    thesis:
      "ambiguity itself becomes expensive because firms and states must buy options before institutions settle the rules",
    leading: ["treaty language", "inspection disputes", "insurance wording", "dual-use infrastructure"],
    lagging: ["formal rule changes", "new institutions", "resolved territorial claims"],
    failure: "coordination becomes credible before option-value spending accelerates",
  },
];

function textForSignal(signal) {
  return [
    signal.title,
    signal.region,
    signal.category,
    signal.summary,
    signal.implication,
    signal.rationale,
    signal.why,
    signal.watch,
    ...(signal.signals || []),
    ...(signal.sources || []),
  ]
    .join(" ")
    .toLowerCase();
}

function parseHorizonMonths(horizon) {
  const matches = String(horizon).match(/\d+/g)?.map(Number) || [36];
  if (matches.length === 1) return { min: matches[0], max: matches[0] };
  return { min: Math.min(matches[0], matches[1]), max: Math.max(matches[0], matches[1]) };
}

function inferArchetype(signal) {
  const text = textForSignal(signal);
  const match =
    archetypeRules.find((rule) => rule.terms.some((term) => includesTerm(text, term))) ||
    archetypeRules[0];
  return match;
}

function uniqueItems(items) {
  return [...new Set(items.map((item) => item?.trim()).filter(Boolean))];
}

function sentence(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function includesTerm(text, term) {
  const normalized = term.toLowerCase();
  if (!/^[a-z0-9 ]+$/.test(normalized)) return text.includes(normalized);
  return new RegExp(`(^|[^a-z0-9])${escapeRegExp(normalized)}(?=[^a-z0-9]|$)`).test(text);
}

function matchingTerms(text, terms) {
  return terms.filter((term) => includesTerm(text, term));
}

function countMatches(text, terms) {
  return matchingTerms(text, terms).length;
}

function categoryPriorFor(signal) {
  const prior = predictionCategoryPriors[signal.category] || predictionCategoryPriors.default;
  const livePrior = signal.referenceClassPrior;
  if (!livePrior) return prior;

  return {
    ...prior,
    baseRate: Number(livePrior.base_rate) || prior.baseRate,
    volatility: Number(livePrior.volatility) || prior.volatility,
    referenceClass: livePrior.label || prior.referenceClass,
  };
}

function assessSourceMix(sources) {
  const uniqueSources = uniqueItems(sources || []);
  const reliability =
    uniqueSources.reduce((sum, source) => sum + (sourceReliability[source] || 58), 0) /
    Math.max(1, uniqueSources.length);
  const groups = uniqueItems(uniqueSources.map((source) => sourceGroups[source] || "general"));
  return {
    depth: uniqueSources.length,
    groups,
    diversity: groups.length,
    reliability: Math.round(reliability),
  };
}

function inferDomainProfile(text) {
  const active = Object.entries(predictionDomains)
    .map(([domain, terms]) => ({
      domain,
      terms: matchingTerms(text, terms),
    }))
    .filter((entry) => entry.terms.length > 0);

  return {
    active: active.map((entry) => entry.domain),
    count: active.length,
    terms: uniqueItems(active.flatMap((entry) => entry.terms)),
  };
}

function inferPredictionFeatures(signal, archetype) {
  const text = textForSignal(signal);
  const horizon = parseHorizonMonths(signal.horizon);
  const prior = categoryPriorFor(signal);
  const sourceMix = assessSourceMix(signal.sources);
  const domainProfile = inferDomainProfile(text);
  const initialSignalStrength = signal.confidence ?? signal.impact ?? 58;
  const signalLines = signal.signals || [];
  const currentEventCount = countMatches(text, [
    "current-event",
    "reporting",
    "premiums",
    "queues",
    "procurement",
    "vacancy",
    "outage",
    "stress",
    "spikes",
  ]);
  const structuralCount = countMatches(text, [
    "structural",
    "demographic",
    "climate",
    "capacity",
    "dependency",
    "constraint",
    "exposure",
    "fragility",
    "reliability",
  ]);
  const frictionCount = countMatches(text, [
    "bottleneck",
    "scarcity",
    "constraint",
    "shortage",
    "queue",
    "insurance",
    "permitting",
    "capacity",
    "trust",
    "legitimacy",
    "reliability",
  ]);
  const asymmetryCount = countMatches(text, [
    "fragile",
    "risk",
    "stress",
    "exposure",
    "shock",
    "withdrawal",
    "volatility",
    "disruption",
    "contested",
    "sensitivity",
  ]);
  const causalCount = countMatches(text, [
    "because",
    "converge",
    "couples",
    "connect",
    "depends",
    "turn",
    "becomes",
    "when",
    "before",
    "rather than",
  ]);

  const baseRate = clamp(
    prior.baseRate +
      (sourceMix.reliability - 62) * 0.16 +
      sourceMix.diversity * 1.8 -
      Math.max(0, horizon.max - 48) * 0.08,
    28,
    88,
  );
  const evidence = clamp(
    28 + sourceMix.reliability * 0.33 + sourceMix.diversity * 5.5 + Math.min(signalLines.length, 7) * 4.2,
    20,
    96,
  );
  const weakSignalBurst = clamp(
    24 +
      initialSignalStrength * 0.42 +
      currentEventCount * 5.5 +
      (horizon.min <= 18 ? 7 : 0) +
      (text.includes("watch") ? 4 : 0),
    18,
    94,
  );
  const convergence = clamp(
    34 +
      domainProfile.count * 8.4 +
      sourceMix.diversity * 4.8 +
      structuralCount * 3.5 +
      (text.includes("+") ? 5 : 0),
    22,
    98,
  );
  const causalTension = clamp(36 + causalCount * 4.8 + structuralCount * 4.2 + domainProfile.count * 2.8, 24, 96);
  const friction = clamp(38 + frictionCount * 7.4 + (archetype.terms.some((term) => includesTerm(text, term)) ? 8 : 0), 22, 98);
  const asymmetry = clamp(42 + asymmetryCount * 6.5 + prior.volatility * 0.18 + domainProfile.count * 2.2, 24, 96);
  const leadLag = clamp(
    34 +
      Math.min(buildLeadingIndicators(signal, archetype).length, 4) * 8 +
      Math.min(archetype.lagging.length, 4) * 4 +
      (horizon.max >= 36 ? 6 : 0),
    22,
    94,
  );
  const timing = clamp(94 - horizon.min * 0.52 - horizon.max * 0.1 + weakSignalBurst * 0.08, 24, 96);
  const falsifiability = clamp(
    42 + Math.min(buildDisconfirmers(signal, archetype).length, 3) * 10 + sourceMix.depth * 3.8,
    24,
    96,
  );
  const novelty = clamp(42 + countMatches(text, ["hidden", "non-obvious", "second-order", "quiet", "before"]) * 7 + archetype.name.length * 0.4, 26, 92);
  const uncertainty = clamp(
    94 -
      evidence * 0.22 -
      convergence * 0.2 -
      falsifiability * 0.18 -
      baseRate * 0.12 +
      Math.max(0, horizon.max - 36) * 0.26 +
      prior.volatility * 0.1,
    12,
    74,
  );

  return {
    horizon,
    prior,
    sourceMix,
    domainProfile,
    baseRate,
    evidence,
    weakSignalBurst,
    convergence,
    causalTension,
    friction,
    asymmetry,
    leadLag,
    timing,
    falsifiability,
    novelty,
    uncertainty,
  };
}

function scoreSignal(signal, archetype) {
  const features = inferPredictionFeatures(signal, archetype);
  const weightedScore = Object.entries(predictionEngineConfig.weights).reduce(
    (total, [dimension, weight]) => total + features[dimension] * weight,
    0,
  );
  const calibrationPenalty = features.uncertainty * 0.08;
  const noveltyLift = features.novelty * 0.025;
  const score = Math.round(clamp(weightedScore - calibrationPenalty + noveltyLift, 28, 92));
  return {
    baseRate: Math.round(features.baseRate),
    evidence: Math.round(features.evidence),
    weakSignalBurst: Math.round(features.weakSignalBurst),
    convergence: Math.round(features.convergence),
    causalTension: Math.round(features.causalTension),
    friction: Math.round(features.friction),
    asymmetry: Math.round(features.asymmetry),
    leadLag: Math.round(features.leadLag),
    timing: Math.round(features.timing),
    falsifiability: Math.round(features.falsifiability),
    novelty: Math.round(features.novelty),
    uncertainty: Math.round(features.uncertainty),
    sourceDiversity: features.sourceMix.diversity,
    sourceReliability: features.sourceMix.reliability,
    domains: features.domainProfile.active,
    referenceClass: features.prior.referenceClass,
    score,
  };
}

function convictionBand(score, horizon, uncertainty = 50) {
  if (score >= 80 && uncertainty <= 38 && horizon.min <= 18) return "Near-term inflection";
  if (score >= 76 && uncertainty <= 48) return "High-conviction watch";
  if (score >= 72 && uncertainty > 48) return "Strong signal, wide spread";
  if (score >= 66) return "Structured watch";
  return "Early signal";
}

function buildLeadingIndicators(signal, archetype) {
  const nightlyIndicators = Array.isArray(signal.leadingIndicators)
    ? signal.leadingIndicators.map((indicator) => indicator.text || indicator)
    : [];
  const watch = signal.watch || "";
  const parts = watch
    .replace(/^Watch\s+/i, "")
    .split(/,\s+|;\s+| and whether | and /)
    .map((part) => part.trim().replace(/\.$/, ""))
    .filter(Boolean)
    .slice(0, 4);
  return uniqueItems([
    ...nightlyIndicators,
    ...parts,
    ...(categoryPriorFor(signal).leading || []),
    ...(archetype.leading || []),
    `${archetype.hidden} becoming visible in procurement language`,
  ]).slice(0, 4);
}

function buildDisconfirmers(signal, archetype) {
  const nightlyDisconfirmers = Array.isArray(signal.disconfirmers)
    ? signal.disconfirmers.map((disconfirmer) => disconfirmer.text || disconfirmer)
    : [];
  const category = categorySignalAdditions[signal.category] || categorySignalAdditions.default;
  const disconfirmation = category.find((item) => item.startsWith("Disconfirmation watch:"));
  const clean = disconfirmation?.replace("Disconfirmation watch:", "").trim();
  return uniqueItems([
    ...nightlyDisconfirmers,
    clean,
    archetype.failure,
    categoryPriorFor(signal).failure,
    `the ${archetype.hidden} constraint eases for two reporting cycles`,
  ]).slice(0, 3);
}

function topScoreDimensions(scores) {
  const dimensions = [
    ["base-rate prior", scores.baseRate],
    ["evidence quality", scores.evidence],
    ["weak-signal burst", scores.weakSignalBurst],
    ["cross-domain convergence", scores.convergence],
    ["causal tension", scores.causalTension],
    ["friction", scores.friction],
    ["asymmetry", scores.asymmetry],
    ["lead/lag clarity", scores.leadLag],
    ["timing", scores.timing],
    ["falsifiability", scores.falsifiability],
  ];
  return dimensions.sort((a, b) => b[1] - a[1]);
}

function buildScenarioWeights(scores) {
  let base = Math.round(clamp(32 + scores.score * 0.34 + scores.baseRate * 0.12 - scores.uncertainty * 0.1, 38, 70));
  let upside = Math.round(
    clamp(15 + scores.asymmetry * 0.1 + scores.weakSignalBurst * 0.08 + scores.friction * 0.04 - scores.uncertainty * 0.06, 14, 34),
  );
  let downside = 100 - base - upside;
  if (downside < 10) {
    const adjustment = 10 - downside;
    base -= Math.ceil(adjustment * 0.65);
    upside -= Math.floor(adjustment * 0.35);
    downside = 10;
  }
  if (downside > 42) {
    const adjustment = downside - 42;
    base += Math.ceil(adjustment * 0.7);
    upside += Math.floor(adjustment * 0.3);
    downside = 42;
  }
  return { base, upside, downside };
}

function buildEvidenceStack(signal, model) {
  const domains = model.scores.domains.length ? model.scores.domains.join(", ") : "single-domain signal";
  return [
    `Reference class: ${model.scores.referenceClass}; prior ${model.scores.baseRate}/100 before weak-signal updates.`,
    `Signal burst: ${model.scores.weakSignalBurst}/100 from current reporting, watch terms, and near-term timing pressure.`,
    `Convergence: ${model.scores.convergence}/100 across ${domains}; source mix spans ${model.scores.sourceDiversity} evidence types.`,
    `Causal test: ${model.archetype} maps ${model.pressurePath}`,
    `Falsification: ${model.disconfirmers[0]}`,
  ];
}

function buildPredictionModel(signal, readout) {
  const archetype = inferArchetype(signal);
  const scores = scoreSignal(signal, archetype);
  const horizon = parseHorizonMonths(signal.horizon);
  const band = convictionBand(scores.score, horizon, scores.uncertainty);
  const leadingIndicators = buildLeadingIndicators(signal, archetype);
  const disconfirmers = buildDisconfirmers(signal, archetype);
  const scenarioWeights = buildScenarioWeights(scores);
  const [primaryDimension, secondaryDimension, thirdDimension] = topScoreDimensions(scores);
  const region = signal.region.replace(/\s*\/\s*/g, " / ");
  const baseCase = `${scenarioWeights.base}% base weight: ${sentence(signal.summary)} In ${region}, operating read: ${sentence(signal.implication)} Edge: ${archetype.thesis}.`;
  const upsideCase = `${scenarioWeights.upside}% acceleration weight: if ${leadingIndicators[0]}, the signal can move from watchlist to operating assumption before consensus data catches up.`;
  const downsideCase = `${scenarioWeights.downside}% break weight: the forecast should be downgraded if ${disconfirmers[0]}`;
  const pressurePath = `${archetype.pressure} -> lagging confirmation: ${archetype.lagging[0]}.`;
  const nonObviousRead = `${readout.surprise} Model edge: ${archetype.hidden} is being treated as the variable that can move first.`;
  const confidenceReason = `${predictionEngineConfig.version} score ${scores.score}/100: ${primaryDimension[0]} ${primaryDimension[1]}, ${secondaryDimension[0]} ${secondaryDimension[1]}, ${thirdDimension[0]} ${thirdDimension[1]}; uncertainty ${scores.uncertainty}/100.`;
  const executiveRead = `${region}. ${band}: ${archetype.hidden} is the hinge variable. ${sentence(signal.summary)}`;
  const model = {
    version: predictionEngineConfig.version,
    generatedAt: predictionEngineConfig.generatedAt,
    score: scores.score,
    scores,
    scenarioWeights,
    convictionBand: band,
    archetype: archetype.name,
    hiddenVariable: archetype.hidden,
    pressurePath,
    leadingIndicators,
    disconfirmers,
    baseCase,
    upsideCase,
    downsideCase,
    nonObviousRead,
    confidenceReason,
    executiveRead,
    automationContract: predictionEngineConfig.nightlyInputContract,
  };
  model.evidenceStack = buildEvidenceStack(signal, model);
  model.publicNarrative = buildPublicNarrative(signal, model);

  return model;
}

function compactText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function lowerFirst(value) {
  const text = compactText(value);
  if (!text) return "";
  return `${text.charAt(0).toLowerCase()}${text.slice(1)}`;
}

function upperFirst(value) {
  const text = compactText(value);
  if (!text) return "";
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
}

function asTextList(items, limit = 4) {
  return uniqueItems(
    (items || [])
      .map((item) => (typeof item === "string" ? item : item?.text || item?.summary || ""))
      .map((item) => compactText(item).replace(/\.$/, "")),
  ).slice(0, limit);
}

function formatSeries(items, fallback = "the signal") {
  const list = asTextList(items, 4);
  if (!list.length) return fallback;
  if (list.length === 1) return list[0];
  if (list.length === 2) return `${list[0]} and ${list[1]}`;
  return `${list.slice(0, -1).join(", ")}, and ${list[list.length - 1]}`;
}

function publicRegion(region) {
  return compactText(region || "Global")
    .replace(/\s*\/\s*/g, " / ")
    .split(" / ")
    .map((part) =>
      part
        .toLowerCase()
        .replace(/\b(ai|eu|uk|us|usa|uae|who|un)\b/g, (match) => match.toUpperCase())
        .replace(/\b\w/g, (match) => match.toUpperCase()),
    )
    .join(" / ");
}

function cleanInternalLanguage(value) {
  return compactText(value)
    .replace(/\bPFE-[\w.-]+\s+score\s+\d+\/100:?\s*/gi, "")
    .replace(/\bThe model is watching\b/gi, "The important thing to watch is")
    .replace(/\bthe model is watching\b/gi, "the important thing to watch is")
    .replace(/\bModel edge:\s*/gi, "A useful clue: ")
    .replace(/\bmodel edge:\s*/gi, "a useful clue: ")
    .replace(/\brather than the headline theme itself\b/gi, "rather than the headline itself")
    .replace(/\bReference class:\s*/gi, "Similar historical pattern: ")
    .replace(/\bSignal burst:\s*/gi, "Fresh reporting: ")
    .replace(/\bConvergence:\s*/gi, "Evidence is converging: ")
    .replace(/\bCausal test:\s*/gi, "Possible chain: ")
    .replace(/\bFalsification:\s*/gi, "The picture weakens if ")
    .replace(/\bDisconfirmation test:\s*/gi, "The picture weakens if ")
    .replace(/\s+;\s+/g, "; ");
}

function looksInternal(value) {
  return /PFE-|score\s+\d+\/100|Generated from|Fallback context|source adapters|evidence contract|Nightly run|candidate is worth monitoring|Reference class prior|Nightly source mix/i.test(
    compactText(value),
  );
}

function publicSentence(primary, fallback) {
  const text = cleanInternalLanguage(primary);
  if (!text || looksInternal(text)) return sentence(cleanInternalLanguage(fallback));
  return sentence(text);
}

function indefiniteArticle(phrase) {
  return /^[aeiou]/i.test(compactText(phrase)) ? "an" : "a";
}

function stripScenarioPrefix(value) {
  return sentence(
    cleanInternalLanguage(value)
      .replace(/^\d+%\s+(base|main|upside|acceleration|downside|break|reversal)\s+(case|weight):\s*/i, "")
      .replace(/^downgrade the forecast if\s+/i, "the picture weakens if ")
      .replace(/^if\s+/i, "if "),
  );
}

function humanizePressurePath(path) {
  const text = compactText(path);
  if (!text) return "The likely sequence starts with a quiet operating pressure and only later becomes visible in public data.";
  const [mainPath, lagging] = text.split(/\s*->\s*lagging confirmation:\s*/i);
  const steps = mainPath.split(/\s*->\s*/).map(compactText).filter(Boolean);
  if (steps.length < 2) return sentence(cleanInternalLanguage(text.replace(/\s*->\s*/g, " then ")));

  const [first, ...rest] = steps;
  const nextSteps = formatSeries(rest, "the next visible behavior");
  const lag = compactText(lagging);
  return `${sentence(`The likely sequence starts with ${first}`)} That pressure can move into ${nextSteps}${lag ? `, while the public confirmation may arrive later through ${lag}` : ""}.`;
}

function publicHiddenVariable(signal, model) {
  const hidden = compactText(model.hiddenVariable || "the first behavior that changes");
  const signalText = textForSignal(signal);
  const inferred = inferArchetype(signal);
  const hiddenLooksPhysical = /environmental stress|physical condition/i.test(hidden);
  const signalLooksPhysical = /water|heat|drought|rainfall|river|snowpack|storm|fire|cooling/i.test(signalText);
  const resilience = archetypeRules.find((rule) => rule.name === "Resilience premium");
  if (hiddenLooksPhysical && /grid|power|battery|microgrid|flexibility|backup|resilience/i.test(signalText)) {
    return resilience?.hidden || hidden;
  }
  if (hiddenLooksPhysical && !signalLooksPhysical && inferred?.hidden) return inferred.hidden;
  return hidden;
}

function buildPublicNarrative(signal, model) {
  const region = publicRegion(signal.region);
  const category = compactText(signal.category || "future signal").toLowerCase();
  const hidden = publicHiddenVariable(signal, model);
  const leading = asTextList(model.leadingIndicators, 4);
  const disconfirmers = asTextList(model.disconfirmers, 3);
  const sources = asTextList(signal.sources, 4);
  const referenceClass = compactText(model.scores?.referenceClass || "similar past patterns");
  const weights = model.scenarioWeights || {};
  const baseWeight = Number.isFinite(Number(weights.base)) ? Number(weights.base) : null;
  const upsideWeight = Number.isFinite(Number(weights.upside)) ? Number(weights.upside) : null;
  const downsideWeight = Number.isFinite(Number(weights.downside)) ? Number(weights.downside) : null;
  const score = Number.isFinite(Number(model.score)) ? Number(model.score) : Number(signal.confidence) || 0;
  const scorePhrase = score >= 78 ? "strong" : score >= 68 ? "developing" : "emerging";
  const deeperBase = cleanInternalLanguage(model.nonObviousRead || signal.why || signal.rationale);
  const rationale = publicSentence(signal.rationale, signal.summary);
  const why = publicSentence(signal.why, signal.implication);

  return {
    deck: `${region}. ${sentence(signal.summary)} The useful question is whether ${lowerFirst(hidden)} is starting to move from background condition to practical constraint.`,
    overview: `${signal.title} is ${indefiniteArticle(scorePhrase)} ${scorePhrase} ${category} reading about ${region}. ${rationale} ${why} It becomes more interesting when ${lowerFirst(hidden)} starts changing decisions before the public story has a single neat explanation.`,
    evidenceNotes: [
      `Recent reporting gives the signal its timing: ${sentence(signal.summary)}`,
      `The older context matters because this resembles ${referenceClass}.`,
      `The place matters because ${region} turns the pattern into an observable operating problem rather than an abstract global theme.`,
      `The reading strengthens if ${formatSeries(leading, hidden)} keep appearing across unrelated reports.`,
      sources.length ? `The source base currently includes ${formatSeries(sources, "public datasets and reporting")}.` : "",
    ].filter(Boolean),
    pathway: humanizePressurePath(model.pressurePath),
    deeperRead: `${sentence(upperFirst(deeperBase))} In plain terms, the visible headline may be late; the earlier move is when ${lowerFirst(hidden)} changes prices, rules, contracts, capacity, or everyday operating choices.`,
    watch: `Watch ${formatSeries([hidden, ...leading], hidden)}. The reading becomes more durable when these signs appear together instead of as isolated anecdotes.`,
    changePicture: `This reading should soften if ${formatSeries(disconfirmers, "the next evidence window points the other way")}.`,
    scenarioSpread: [
      `Main path${baseWeight ? ` (${baseWeight}%)` : ""}: ${stripScenarioPrefix(model.baseCase || signal.summary)}`,
      `Faster path${upsideWeight ? ` (${upsideWeight}%)` : ""}: ${stripScenarioPrefix(model.upsideCase || signal.implication)}`,
      `Reversal path${downsideWeight ? ` (${downsideWeight}%)` : ""}: ${stripScenarioPrefix(model.downsideCase || disconfirmers[0] || signal.why)}`,
    ].join(" "),
    cardRead: `This reads less like one headline and more like a pattern taking shape: ${lowerFirst(signal.implication)} Watch whether ${lowerFirst(hidden)} starts showing up in prices, policy, contracts, or operating decisions.`,
    watchShort: formatSeries([hidden, ...leading], hidden),
  };
}

function publicNarrativeFor(signal, model) {
  const fallback = buildPublicNarrative(signal, model);
  const incoming = model.publicNarrative && typeof model.publicNarrative === "object" ? model.publicNarrative : {};
  const evidenceNotes =
    Array.isArray(incoming.evidenceNotes) && incoming.evidenceNotes.length
      ? incoming.evidenceNotes.map(cleanInternalLanguage)
      : fallback.evidenceNotes;

  return {
    deck: cleanInternalLanguage(incoming.deck) || fallback.deck,
    overview: cleanInternalLanguage(incoming.overview) || fallback.overview,
    evidenceNotes,
    pathway: cleanInternalLanguage(incoming.pathway) || fallback.pathway,
    deeperRead: cleanInternalLanguage(incoming.deeperRead) || fallback.deeperRead,
    watch: cleanInternalLanguage(incoming.watch) || fallback.watch,
    changePicture: cleanInternalLanguage(incoming.changePicture) || fallback.changePicture,
    scenarioSpread: cleanInternalLanguage(incoming.scenarioSpread) || fallback.scenarioSpread,
    cardRead: cleanInternalLanguage(incoming.cardRead) || fallback.cardRead,
    watchShort: cleanInternalLanguage(incoming.watchShort) || fallback.watchShort,
  };
}

function normalizePatternUiModel(uiModel, signal) {
  if (!uiModel || typeof uiModel !== "object") return null;
  const score = Number.isFinite(Number(uiModel.score)) ? Number(uiModel.score) : signal.confidence || 58;
  const incomingScores = uiModel.scores || {};
  const uncertainty = Number.isFinite(Number(incomingScores.uncertainty))
    ? Number(incomingScores.uncertainty)
    : 50;
  const horizon = parseHorizonMonths(signal.horizon);
  const scores = {
    baseRate: Number(incomingScores.baseRate) || signal.referenceClassPrior?.base_rate || 56,
    evidence: Number(incomingScores.evidence) || Number(incomingScores.evidenceQuality) || 58,
    weakSignalBurst: Number(incomingScores.weakSignalBurst) || Number(incomingScores.recencyPulse) || 58,
    convergence: Number(incomingScores.convergence) || signal.signalCount || 58,
    causalTension: Number(incomingScores.causalTension) || Number(incomingScores.persistence) || 58,
    friction: Number(incomingScores.friction) || Number(incomingScores.acceleration) || 58,
    asymmetry: Number(incomingScores.asymmetry) || Number(incomingScores.impact) || 58,
    leadLag: Number(incomingScores.leadLag) || Number(incomingScores.falsifiability) || 58,
    timing: Number(incomingScores.timing) || Math.max(20, 100 - uncertainty),
    falsifiability: Number(incomingScores.falsifiability) || 58,
    novelty: Number(incomingScores.novelty) || 58,
    uncertainty,
    sourceDiversity: Number(incomingScores.sourceDiversity) || 1,
    sourceReliability: Number(incomingScores.sourceReliability) || Number(incomingScores.evidenceQuality) || 58,
    domains: Array.isArray(incomingScores.domains) ? incomingScores.domains : [],
    referenceClass:
      incomingScores.referenceClass ||
      signal.patternModel?.referenceClass?.label ||
      signal.referenceClassPrior?.label ||
      "nightly weak-signal reference class",
  };
  const scenarioWeights =
    uiModel.scenarioWeights && typeof uiModel.scenarioWeights === "object"
      ? uiModel.scenarioWeights
      : buildScenarioWeights({
          score,
          baseRate: scores.baseRate,
          uncertainty: scores.uncertainty,
          asymmetry: scores.asymmetry,
          weakSignalBurst: scores.weakSignalBurst,
          friction: scores.friction,
        });

  return {
    version: uiModel.version || signal.patternModel?.version || "PFE-3.0-deterministic",
    generatedAt: uiModel.generatedAt || signal.patternModel?.generatedAt || signal.generatedAt,
    score,
    scores,
    scenarioWeights,
    convictionBand: uiModel.convictionBand || convictionBand(score, horizon, scores.uncertainty),
    archetype: uiModel.archetype || signal.patternModel?.archetype?.name || "Pattern convergence",
    hiddenVariable:
      uiModel.hiddenVariable ||
      signal.patternModel?.archetype?.hiddenVariable ||
      "the earliest observable behavior change",
    pressurePath:
      uiModel.pressurePath ||
      signal.patternModel?.archetype?.pressurePath ||
      "recent evidence -> structural comparison -> forecast update",
    leadingIndicators: Array.isArray(uiModel.leadingIndicators)
      ? uiModel.leadingIndicators
      : signal.patternModel?.leadingIndicators || [],
    disconfirmers: Array.isArray(uiModel.disconfirmers)
      ? uiModel.disconfirmers
      : signal.patternModel?.falsifiers || [],
    baseCase: uiModel.baseCase || signal.patternModel?.scenarioSpread?.baseCase?.summary || signal.summary,
    upsideCase: uiModel.upsideCase || signal.patternModel?.scenarioSpread?.upsideCase?.summary || signal.implication,
    downsideCase:
      uiModel.downsideCase ||
      signal.patternModel?.scenarioSpread?.downsideCase?.summary ||
      "Downgrade if the falsifiers dominate the next evidence window.",
    nonObviousRead: uiModel.nonObviousRead || signal.patternModel?.nonObviousRead || signal.why,
    confidenceReason: uiModel.confidenceReason || signal.patternModel?.reasoningSummary || signal.rationale,
    executiveRead: uiModel.executiveRead || `${signal.region}. ${signal.summary}`,
    evidenceStack:
      Array.isArray(uiModel.evidenceStack) && uiModel.evidenceStack.length
        ? uiModel.evidenceStack
        : signal.patternModel?.evidenceStack || signal.signals,
    publicNarrative: uiModel.publicNarrative || signal.patternModel?.publicNarrative || null,
    automationContract: uiModel.automationContract || signal.patternModel?.automationContract || [],
  };
}

function hydrateSignal(signal) {
  const readout = signalReadouts[signal.id] || {
    surprise:
      "The important signal is the second-order behavior that becomes rational before the headline trend is obvious.",
    watch:
      "Watch for confirming and disconfirming signals across policy, price, geography, and institutional behavior.",
  };
  const additions = categorySignalAdditions[signal.category] || categorySignalAdditions.default;
  signal.watch = signal.watch || readout.watch;
  signal.signals = uniqueItems([...(signal.signals || []), ...additions]);
  signal.model = normalizePatternUiModel(signal.patternModel?.uiModel, signal) || buildPredictionModel(signal, readout);
  signal.confidence = signal.model.score;
  signal.signalCount = signal.model.scores.convergence;
  signal.surprise = signal.model.hiddenVariable;
  return signal;
}

signals = signals.map((signal) => hydrateSignal(signal));

const sourceIndex = {
  arXiv: "https://arxiv.org/",
  Crossref: "https://www.crossref.org/",
  Eurostat: "https://ec.europa.eu/eurostat",
  FAOSTAT: "https://www.fao.org/faostat/",
  GDELT: "https://www.gdeltproject.org/",
  "GDELT DOC 2.1": "https://www.gdeltproject.org/",
  IEA: "https://www.iea.org/data-and-statistics",
  ILOSTAT: "https://ilostat.ilo.org/data/",
  "NASA FIRMS": "https://firms.modaps.eosdis.nasa.gov/",
  "NASA POWER": "https://power.larc.nasa.gov/",
  NOAA: "https://www.noaa.gov/",
  "OECD AI": "https://oecd.ai/",
  "Open-Meteo Forecast": "https://open-meteo.com/",
  "OpenStreetMap Overpass": "https://overpass-api.de/",
  ReliefWeb: "https://reliefweb.int/",
  "UN Population": "https://population.un.org/wpp/",
  USGS: "https://www.usgs.gov/programs/national-geospatial-program",
  "USGS Earthquake Catalog": "https://earthquake.usgs.gov/fdsnws/event/1/",
  "V-Dem": "https://www.v-dem.net/data/",
  "WHO GHO": "https://www.who.int/data/gho",
  "Wikipedia / MediaWiki": "https://www.mediawiki.org/wiki/API:Action_API",
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

let signalsById = new Map();
let ambientLinkRefs = [];

function rebuildSignalIndexes() {
  signalsById = new Map(signals.map((signal) => [signal.id, signal]));
  ambientLinkRefs = ambientLinks
    .map(([from, to]) => ({
      from: signalsById.get(from),
      to: signalsById.get(to),
    }))
    .filter((link) => link.from && link.to)
    .map((link) => ({
      ...link,
      points: greatCirclePoints(link.from, link.to, 42),
    }));
}

rebuildSignalIndexes();

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

const GEOGRAPHY_TOPOLOGY_URL = "./assets/countries-50m.json";
let landRings = landMasses;
let landPointCount = landMasses.reduce((total, ring) => total + ring.length, 0);
let countryRings = [];
let countryPointCount = 0;
let landSource = "fallback";
const ENABLE_DETAILED_GLOBE = true;
const ENABLE_TOPOLOGY_TEXTURE = true;
const HIDDEN_FRAME_INTERVAL_MS = 250;
let lastTelemetryAt = 0;
let desktopMedia = window.matchMedia("(min-width: 821px)");
let isDesktopViewport = desktopMedia.matches;

function setLandTelemetry() {
  document.documentElement.dataset.landSource = landSource;
  document.documentElement.dataset.landPoints = String(landPointCount);
  document.documentElement.dataset.countryPoints = String(countryPointCount);
}

function setRuntimeTelemetry(now = performance.now()) {
  if (now - lastTelemetryAt < 500) return;
  lastTelemetryAt = now;
  document.documentElement.dataset.centerLon = centerLon.toFixed(2);
  document.documentElement.dataset.centerLat = centerLat.toFixed(2);
  document.documentElement.dataset.targetLon = targetLon.toFixed(2);
  document.documentElement.dataset.targetLat = targetLat.toFixed(2);
  document.documentElement.dataset.zoom = currentZoom.toFixed(3);
  document.documentElement.dataset.signalCount = String(signals.length);
  document.documentElement.dataset.visibleSignals = String(projectedPins.filter((pin) => pin.type === "pin").length);
  document.documentElement.dataset.reliefSize = earthRenderer.ready ? "webgl" : "0";
  document.documentElement.dataset.reliefReady = String(earthRenderer.ready);
  document.documentElement.dataset.landMaskReady = String(earthRenderer.maskReady);
  document.documentElement.dataset.countryPoints = String(countryPointCount);
}

function createEarthRenderer(target) {
  const gl = target.getContext("webgl", {
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
    preserveDrawingBuffer: false,
  });

  const noop = {
    enabled: false,
    ready: false,
    maskReady: false,
    upload() {},
    uploadMask() {},
    resize() {},
    render() {
      return false;
    },
  };
  if (!gl) return noop;

  function compileShader(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(shader) || "WebGL shader compile failed");
    }
    return shader;
  }

  const vertexShader = compileShader(
    gl.VERTEX_SHADER,
    `
      attribute vec3 aPosition;
      attribute vec2 aUv;
      uniform vec2 uViewport;
      uniform vec2 uCenter;
      uniform float uRadius;
      uniform float uCenterLon;
      uniform float uPitch;
      varying vec2 vUv;
      varying float vZ;
      varying vec3 vNormal;

      void main() {
        float c = cos(uCenterLon);
        float s = sin(uCenterLon);
        float x = aPosition.x * c - aPosition.z * s;
        float z = aPosition.x * s + aPosition.z * c;
        float cp = cos(uPitch);
        float sp = sin(uPitch);
        float y = aPosition.y * cp - z * sp;
        float z2 = aPosition.y * sp + z * cp;
        vec2 screen = uCenter + vec2(x * uRadius, -y * uRadius);
        vec2 clip = vec2(
          (screen.x / uViewport.x) * 2.0 - 1.0,
          1.0 - (screen.y / uViewport.y) * 2.0
        );
        gl_Position = vec4(clip, 0.0, 1.0);
        vUv = aUv;
        vZ = z2;
        vNormal = normalize(vec3(x, y, z2));
      }
    `,
  );

  const fragmentShader = compileShader(
    gl.FRAGMENT_SHADER,
    `
      precision mediump float;
      uniform sampler2D uTopo;
      uniform sampler2D uMask;
      uniform vec2 uTexel;
      uniform float uMaskReady;
      uniform float uZoom;
      varying vec2 vUv;
      varying float vZ;
      varying vec3 vNormal;

      void main() {
        if (vZ <= 0.0) discard;
        float h = texture2D(uTopo, vUv).r;
        float land = texture2D(uMask, vUv).a * step(0.5, uMaskReady);
        float e = texture2D(uTopo, vUv + vec2(uTexel.x, 0.0)).r;
        float w = texture2D(uTopo, vUv - vec2(uTexel.x, 0.0)).r;
        float n = texture2D(uTopo, vUv - vec2(0.0, uTexel.y)).r;
        float s = texture2D(uTopo, vUv + vec2(0.0, uTexel.y)).r;
        float eastWest = e - w;
        float northSouth = s - n;
        float slope = eastWest * -0.38 + northSouth * -0.52;
        float terrainSlope = abs(eastWest) + abs(northSouth);
        float zoomRelief = smoothstep(0.86, 1.7, uZoom);
        float zoomMicro = smoothstep(1.12, 1.78, uZoom);
        float ridge = smoothstep(0.01, 0.08, terrainSlope) * land;
        float relief = smoothstep(0.018, 0.55, h) * land;
        float mountainMass = smoothstep(0.16, 0.72, h) * land;
        float reliefScale = mix(6.0, 13.5, zoomRelief);
        vec3 reliefNormal = normalize(vec3(-eastWest * reliefScale, northSouth * reliefScale, 1.0));
        vec3 reliefLightDir = normalize(vec3(-0.48, 0.34, 0.81));
        float reliefLight = clamp(dot(reliefNormal, reliefLightDir), 0.0, 1.0);
        float ridgeShadow = (1.0 - reliefLight) * ridge * (0.08 + zoomMicro * 0.18);
        float mountainShadow = max(0.0, 0.58 - reliefLight) * mountainMass * (0.12 + zoomRelief * 0.2);
        float mountainHighlight = max(0.0, reliefLight - 0.62) * mountainMass * (0.08 + zoomRelief * 0.16);
        vec3 lightDir = normalize(vec3(-0.42, 0.36, 0.82));
        float light = clamp(dot(normalize(vNormal), lightDir) * 0.48 + 0.58, 0.0, 1.0);
        float limb = smoothstep(0.0, 0.5, vZ);
        float reliefDepth = mix(0.86, 1.08, limb);
        vec3 ocean = mix(vec3(0.985, 0.985, 0.965), vec3(0.90, 0.94, 0.93), 1.0 - light);
        vec3 landBase = mix(vec3(0.95, 0.955, 0.935), vec3(0.70, 0.76, 0.75), 1.0 - light);
        vec3 color = mix(ocean, landBase, land);
        color -= vec3(0.28, 0.30, 0.30) * (relief * 0.2 + mountainShadow + ridgeShadow) * reliefDepth;
        color -= vec3(0.43, 0.44, 0.42) * ridge * (0.1 + zoomMicro * 0.15) * reliefDepth;
        color += vec3(0.08, 0.08, 0.07) * mountainHighlight * reliefDepth;
        color += vec3(0.045, 0.045, 0.035) * max(0.0, slope) * land * (0.7 + zoomRelief * 0.25) * reliefDepth;
        float alpha = mix(0.62, 0.96, limb);
        gl_FragColor = vec4(color, alpha);
      }
    `,
  );

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn(gl.getProgramInfoLog(program) || "WebGL program link failed");
    return noop;
  }

  const lonSegments = 144;
  const latSegments = 72;
  const positions = [];
  const uvs = [];
  const indices = [];

  for (let latIndex = 0; latIndex <= latSegments; latIndex += 1) {
    const lat = -90 + (latIndex / latSegments) * 180;
    const latRad = (lat * Math.PI) / 180;
    const cosLat = Math.cos(latRad);
    const sinLat = Math.sin(latRad);
    for (let lonIndex = 0; lonIndex <= lonSegments; lonIndex += 1) {
      const lon = -180 + (lonIndex / lonSegments) * 360;
      const lonRad = (lon * Math.PI) / 180;
      positions.push(cosLat * Math.sin(lonRad), sinLat, cosLat * Math.cos(lonRad));
      uvs.push((lon + 180) / 360, (90 - lat) / 180);
    }
  }

  for (let latIndex = 0; latIndex < latSegments; latIndex += 1) {
    for (let lonIndex = 0; lonIndex < lonSegments; lonIndex += 1) {
      const a = latIndex * (lonSegments + 1) + lonIndex;
      const b = a + 1;
      const c = a + lonSegments + 1;
      const d = c + 1;
      indices.push(a, c, b, b, c, d);
    }
  }

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  const uvBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvs), gl.STATIC_DRAW);

  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

  const texture = gl.createTexture();
  const maskTexture = gl.createTexture();
  const locations = {
    position: gl.getAttribLocation(program, "aPosition"),
    uv: gl.getAttribLocation(program, "aUv"),
    viewport: gl.getUniformLocation(program, "uViewport"),
    center: gl.getUniformLocation(program, "uCenter"),
    radius: gl.getUniformLocation(program, "uRadius"),
    centerLon: gl.getUniformLocation(program, "uCenterLon"),
    pitch: gl.getUniformLocation(program, "uPitch"),
    texel: gl.getUniformLocation(program, "uTexel"),
    topo: gl.getUniformLocation(program, "uTopo"),
    mask: gl.getUniformLocation(program, "uMask"),
    maskReady: gl.getUniformLocation(program, "uMaskReady"),
    zoom: gl.getUniformLocation(program, "uZoom"),
  };

  const renderer = {
    enabled: true,
    ready: false,
    maskReady: false,
    textureWidth: 1,
    textureHeight: 1,
    upload(image) {
      this.textureWidth = image.naturalWidth || 1;
      this.textureHeight = image.naturalHeight || 1;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, gl.LUMINANCE, gl.UNSIGNED_BYTE, image);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      this.ready = true;
    },
    uploadMask(maskCanvas) {
      gl.bindTexture(gl.TEXTURE_2D, maskTexture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, maskCanvas);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      this.maskReady = true;
    },
    resize(targetWidth, targetHeight) {
      gl.viewport(0, 0, targetWidth, targetHeight);
    },
    render(metrics, lon, lat, zoom = 1) {
      gl.viewport(0, 0, target.width, target.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      if (!this.ready) return false;

      gl.useProgram(program);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(locations.topo, 0);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, maskTexture);
      gl.uniform1i(locations.mask, 1);
      gl.uniform1f(locations.maskReady, this.maskReady ? 1 : 0);
      gl.uniform2f(locations.viewport, target.width, target.height);
      gl.uniform2f(locations.center, metrics.cx * dpr, metrics.cy * dpr);
      gl.uniform1f(locations.radius, metrics.r * dpr);
      gl.uniform1f(locations.centerLon, (lon * Math.PI) / 180);
      gl.uniform1f(locations.pitch, ((lat - 7) * Math.PI) / 180);
      gl.uniform2f(locations.texel, 1 / this.textureWidth, 1 / this.textureHeight);
      gl.uniform1f(locations.zoom, zoom);

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.enableVertexAttribArray(locations.position);
      gl.vertexAttribPointer(locations.position, 3, gl.FLOAT, false, 0, 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
      gl.enableVertexAttribArray(locations.uv);
      gl.vertexAttribPointer(locations.uv, 2, gl.FLOAT, false, 0, 0);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
      return true;
    },
  };

  return renderer;
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

const graticuleLatLines = Array.from({ length: 7 }, (_, index) => {
  const lat = -60 + index * 20;
  return {
    lat,
    points: Array.from({ length: 91 }, (_, pointIndex) => [lat, -180 + pointIndex * 4]),
  };
});

const graticuleLonLines = Array.from({ length: 12 }, (_, index) => {
  const lon = -180 + index * 30;
  return {
    lon,
    points: Array.from({ length: 56 }, (_, pointIndex) => [-82 + pointIndex * 3, lon]),
  };
});

const landingLatLines = Array.from({ length: 5 }, (_, index) => {
  const lat = -60 + index * 30;
  return {
    lat,
    points: Array.from({ length: 61 }, (_, pointIndex) => [lat, -180 + pointIndex * 6]),
  };
});

const landingLonLines = Array.from({ length: 8 }, (_, index) => {
  const lon = -180 + index * 45;
  return {
    lon,
    points: Array.from({ length: 34 }, (_, pointIndex) => [-82 + pointIndex * 5, lon]),
  };
});

const landingPointer = {
  x: 0,
  y: 0,
  targetX: 0,
  targetY: 0,
};

const appShell = document.querySelector(".app-shell");
const landing = document.querySelector(".landing");
const landingCanvas = document.querySelector("#landingGlobeCanvas");
const landingCtx = landingCanvas.getContext("2d", { alpha: true });
const earthCanvas = document.querySelector("#earthCanvas");
const canvas = document.querySelector("#globeCanvas");
const ctx = canvas.getContext("2d");
const topologyTexture = {
  image: new Image(),
  width: 0,
  height: 0,
  ready: false,
};
const earthRenderer = createEarthRenderer(earthCanvas);
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
const LIVE_PREDICTIONS_URL = "./data/predictions/latest.json";
const LIVE_PREDICTIONS_SCHEMA = "future-signals.predictions.v1";

const fields = {
  kind: document.querySelector("#cardKind"),
  confidence: document.querySelector("#cardConfidence"),
  region: document.querySelector("#cardRegion"),
  title: document.querySelector("#cardTitle"),
  summary: document.querySelector("#cardSummary"),
  implication: document.querySelector("#cardImplication"),
  surprise: document.querySelector("#cardSurprise"),
  modelRead: document.querySelector("#cardModelRead"),
  horizon: document.querySelector("#cardHorizon"),
  conviction: document.querySelector("#cardConviction"),
  archetype: document.querySelector("#cardArchetype"),
  briefTitle: document.querySelector("#briefTitle"),
  briefDeck: document.querySelector("#briefDeck"),
  rationale: document.querySelector("#briefRationale"),
  why: document.querySelector("#briefWhy"),
  briefSurprise: document.querySelector("#briefSurprise"),
  briefWatch: document.querySelector("#briefWatch"),
  briefDisconfirmers: document.querySelector("#briefDisconfirmers"),
  briefScenarioSpread: document.querySelector("#briefScenarioSpread"),
  signalList: document.querySelector("#signalList"),
  sourceList: document.querySelector("#sourceList"),
};

topologyTexture.image.addEventListener("load", () => {
  topologyTexture.width = topologyTexture.image.naturalWidth;
  topologyTexture.height = topologyTexture.image.naturalHeight;
  topologyTexture.ready = true;
  earthRenderer.upload(topologyTexture.image);
});

let width = 1;
let height = 1;
let landingWidth = 1;
let landingHeight = 1;
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
let landingLon = -24;
let landingLat = 8;
let detailedAssetsStarted = false;
let nightlyPredictionMeta = null;
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
let framePaths = {
  landFill: null,
  coast: null,
  countries: null,
};

function isDesktop() {
  return isDesktopViewport;
}

function passesFilter(signal) {
  return signalVisibleAtZoom(signal);
}

function getSignal(id) {
  return signalsById.get(id);
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
  return signal.model?.score ?? signal.impact ?? Math.max(48, 96 - signal.labelRank * 1.45);
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
  if (!isDesktop()) return currentZoom > 1.22 ? 7 : 4;
  if (currentZoom < 0.88) return 7;
  if (currentZoom < 1.12) return 9;
  if (currentZoom < 1.42) return 14;
  return 22;
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

function collectTopologyRings(topology, objectName) {
  const geometry = topology.objects[objectName];
  if (!geometry) return [];
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

function collectLandRings(topology) {
  return collectTopologyRings(topology, "land");
}

function countLandPoints(rings) {
  return rings.reduce((total, ring) => total + ring.length, 0);
}

function prepareRings(rings, stepLarge = 2, simplifyThreshold = 420) {
  return rings
    .map((ring) => {
      if (ring.length < simplifyThreshold) return ring;
      return ring.filter((_, index) => index % stepLarge === 0 || index === ring.length - 1);
    })
    .filter((ring) => ring.length > 3);
}

function createLandMask(rings, widthValue = 2048, heightValue = 1024) {
  const mask = document.createElement("canvas");
  const maskCtx = mask.getContext("2d");
  mask.width = widthValue;
  mask.height = heightValue;
  maskCtx.clearRect(0, 0, widthValue, heightValue);
  maskCtx.fillStyle = "rgba(255, 255, 255, 1)";

  for (const ring of rings) {
    if (ring.length < 4) continue;
    const unwrapped = [];
    let lonOffset = 0;
    let previousLon = ring[0][1];

    for (const [lat, lon] of ring) {
      let adjustedLon = lon + lonOffset;
      while (adjustedLon - previousLon > 180) {
        lonOffset -= 360;
        adjustedLon = lon + lonOffset;
      }
      while (adjustedLon - previousLon < -180) {
        lonOffset += 360;
        adjustedLon = lon + lonOffset;
      }
      previousLon = adjustedLon;
      unwrapped.push([lat, adjustedLon]);
    }

    for (const shift of [-360, 0, 360]) {
      maskCtx.beginPath();
      unwrapped.forEach(([lat, lon], index) => {
        const x = ((lon + shift + 180) / 360) * widthValue;
        const y = ((90 - lat) / 180) * heightValue;
        if (index === 0) {
          maskCtx.moveTo(x, y);
        } else {
          maskCtx.lineTo(x, y);
        }
      });
      maskCtx.closePath();
      maskCtx.fill();
    }
  }

  return mask;
}

async function loadDetailedGeography() {
  try {
    const response = await fetch(GEOGRAPHY_TOPOLOGY_URL, { cache: "force-cache" });
    if (!response.ok) throw new Error(`geography topology ${response.status}`);
    const topology = await response.json();
    const detailedLand = prepareRings(collectLandRings(topology), 4, 20);
    const detailedCountries = prepareRings(collectTopologyRings(topology, "countries"), 8, 20);
    if (detailedLand.length < 20 || detailedCountries.length < 20) {
      throw new Error("geography topology empty");
    }
    landRings = detailedLand;
    countryRings = detailedCountries;
    landPointCount = countLandPoints(landRings);
    countryPointCount = countLandPoints(countryRings);
    landSource = "natural-earth-50m";
    earthRenderer.uploadMask(createLandMask(landRings));
    setLandTelemetry();
  } catch (error) {
    landSource = "fallback";
    landRings = landMasses;
    landPointCount = countLandPoints(landRings);
    countryRings = [];
    countryPointCount = 0;
    setLandTelemetry();
    console.warn("Using coastline-only globe", error);
  }
}

function startDetailedAssets() {
  if (!ENABLE_DETAILED_GLOBE) return;
  if (detailedAssetsStarted) return;
  detailedAssetsStarted = true;
  if (ENABLE_TOPOLOGY_TEXTURE) {
    topologyTexture.image.src = "./assets/earth-topology.png";
  }
  loadDetailedGeography();
}

function resize() {
  const rect = canvas.getBoundingClientRect();
  const landingRect = landingCanvas.getBoundingClientRect();
  dpr = 1;
  width = Math.max(1, rect.width);
  height = Math.max(1, rect.height);
  landingWidth = Math.max(1, landingRect.width);
  landingHeight = Math.max(1, landingRect.height);
  earthCanvas.width = Math.floor(width * dpr);
  earthCanvas.height = Math.floor(height * dpr);
  earthRenderer.resize(Math.floor(width * dpr), Math.floor(height * dpr));
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  landingCanvas.width = Math.floor(landingWidth * dpr);
  landingCanvas.height = Math.floor(landingHeight * dpr);
  landingCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
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

function breaksProjectedSegment(point, previousPoint, lat, lon, previousLat, previousLon, metrics) {
  if (!previousPoint || previousLat === null || previousLon === null) return false;
  if (Math.abs(lat - previousLat) > 34 || Math.abs(shortestAngle(previousLon, lon)) > 42) {
    return true;
  }
  return Math.hypot(point.x - previousPoint.x, point.y - previousPoint.y) > metrics.r * 0.42;
}

function drawBackground(now) {
  ctx.clearRect(0, 0, width, height);
}

function drawSphere(metrics) {
  if (earthRenderer.ready) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(metrics.cx, metrics.cy, metrics.r, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(28, 31, 34, 0.14)";
    ctx.lineWidth = 1;
    ctx.stroke();

    const rim = ctx.createRadialGradient(
      metrics.cx,
      metrics.cy,
      metrics.r * 0.68,
      metrics.cx,
      metrics.cy,
      metrics.r * 1.08,
    );
    rim.addColorStop(0, "rgba(255,255,255,0)");
    rim.addColorStop(0.76, "rgba(240, 242, 240, 0.06)");
    rim.addColorStop(1, "rgba(18, 22, 24, 0.13)");
    ctx.fillStyle = rim;
    ctx.fill();
    ctx.restore();
    return;
  }

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

function strokeProjectedLine(points, metrics, options = {}) {
  ctx.save();
  ctx.lineWidth = options.width || 1;
  ctx.strokeStyle = options.color || "rgba(17, 20, 24, 0.1)";
  ctx.globalAlpha = options.alpha ?? 1;
  ctx.beginPath();

  let drawing = false;
  let previousPoint = null;
  let previousLat = null;
  let previousLon = null;
  for (const [lat, lon] of points) {
    const point = project(lat, lon, metrics);
    if (
      !point.visible ||
      breaksProjectedSegment(point, previousPoint, lat, lon, previousLat, previousLon, metrics)
    ) {
      drawing = false;
    }
    if (point.visible && !drawing) {
      ctx.moveTo(point.x, point.y);
      drawing = true;
    } else if (point.visible) {
      ctx.lineTo(point.x, point.y);
    }
    previousPoint = point;
    previousLat = lat;
    previousLon = lon;
  }
  ctx.stroke();
  ctx.restore();
}

function drawGraticule(metrics) {
  if (earthRenderer.ready) return;

  ctx.save();
  ctx.beginPath();
  ctx.arc(metrics.cx, metrics.cy, metrics.r, 0, Math.PI * 2);
  ctx.clip();

  for (const line of graticuleLatLines) {
    if (line.lat === 0) continue;
    strokeProjectedLine(line.points, metrics, {
      color: "rgba(20, 24, 28, 0.045)",
      width: 0.55,
    });
  }

  for (const line of graticuleLonLines) {
    strokeProjectedLine(line.points, metrics, {
      color: "rgba(20, 24, 28, 0.035)",
      width: 0.5,
    });
  }
  ctx.restore();
}

function buildRingPath(rings, metrics, options = {}) {
  const path = new Path2D();
  let traced = 0;
  for (const ring of rings) {
    let drawing = false;
    let segmentPoints = 0;
    let segmentWasClipped = false;
    let lastLat = null;
    let lastLon = null;
    let lastPoint = null;
    for (const [lat, lon] of ring) {
      const point = project(lat, lon, metrics);
      const jumps =
        breaksProjectedSegment(point, lastPoint, lat, lon, lastLat, lastLon, metrics);
      if (point.visible && point.z > (options.minZ ?? -0.012) && !jumps) {
        if (!drawing) {
          path.moveTo(point.x, point.y);
          drawing = true;
          segmentPoints = 1;
        } else {
          path.lineTo(point.x, point.y);
          segmentPoints += 1;
        }
      } else {
        if (drawing && options.closeSegments && !segmentWasClipped && segmentPoints > 2) {
          path.closePath();
          traced += 1;
        }
        drawing = false;
        segmentPoints = 0;
        segmentWasClipped = true;
      }
      lastLat = lat;
      lastLon = lon;
      lastPoint = point;
    }
    if (drawing && options.closeSegments && !segmentWasClipped && segmentPoints > 2) {
      path.closePath();
      traced += 1;
    }
  }
  return { path, traced };
}

function prepareFramePaths(metrics) {
  framePaths = {
    landFill: null,
    coast: buildRingPath(landRings, metrics, { closeSegments: false, minZ: -0.006 }).path,
    countries:
      countryRings.length > 0
        ? buildRingPath(countryRings, metrics, { closeSegments: false, minZ: -0.006 }).path
        : null,
  };
}

function strokePath(path, color, widthValue, alpha = 1) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = widthValue;
  ctx.globalAlpha = alpha;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.stroke(path);
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
  const fillBoost = earthRenderer.ready ? 0.24 : 1;
  landGradient.addColorStop(0, `rgba(237, 239, 239, ${0.72 * fillBoost})`);
  landGradient.addColorStop(0.46, `rgba(216, 221, 220, ${0.54 * fillBoost})`);
  landGradient.addColorStop(0.74, `rgba(191, 198, 197, ${0.4 * fillBoost})`);
  landGradient.addColorStop(1, `rgba(155, 165, 164, ${0.24 * fillBoost})`);

  if (!earthRenderer.ready && framePaths.landFill) {
    ctx.fillStyle = landGradient;
    ctx.fill(framePaths.landFill);
  }
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.arc(metrics.cx, metrics.cy, metrics.r, 0, Math.PI * 2);
  ctx.clip();
  ctx.translate(-0.45, -0.55);
  if (framePaths.coast) strokePath(framePaths.coast, "rgba(255, 255, 255, 0.74)", 1.1, 0.68);
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.arc(metrics.cx, metrics.cy, metrics.r, 0, Math.PI * 2);
  ctx.clip();
  if (framePaths.coast) {
    strokePath(
      framePaths.coast,
      landSource === "natural-earth" ? "rgba(29, 33, 36, 0.24)" : "rgba(29, 33, 36, 0.18)",
      landSource === "natural-earth" ? 0.58 : 0.82,
      0.9,
    );
  }
  if (framePaths.countries) {
    strokePath(framePaths.countries, "rgba(31, 34, 37, 0.17)", 0.46, 0.72);
  }
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

function drawArc(points, color, alpha = 0.3, widthValue = 1) {
  const metrics = globeMetrics();
  ctx.save();
  ctx.lineCap = "round";
  strokeProjectedLine(points, metrics, { color, alpha, width: widthValue });
  ctx.restore();
}

function drawLinks() {
  return;
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
  if (isSelected || isHovered) {
    ctx.fillStyle = kindColor(signal, isSelected ? 0.1 : 0.07, true);
    ctx.beginPath();
    ctx.arc(projected.x, projected.y, radius + (isSelected ? 13 : 9), 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = kindColor(signal, isSelected ? 0.95 : 0.76, isSelected || isHovered);
  ctx.beginPath();
  ctx.arc(projected.x, projected.y, radius, 0, Math.PI * 2);
  ctx.fill();

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
  const maxTextLength = desktop ? 31 : 18;
  const displayText =
    text.length > maxTextLength ? `${text.slice(0, maxTextLength)}...` : text;
  const labelWidth = Math.min(ctx.measureText(displayText).width, desktop ? 220 : 150);
  let x = projected.x + 11;
  let y = projected.y - 18;
  if (x + labelWidth + 18 > width - 10) x = projected.x - labelWidth - 29;
  x = clamp(x, 10, Math.max(10, width - labelWidth - 28));
  y = clamp(y, 42, height - 34);
  const box = { x, y: y - 2, w: labelWidth + 18, h: 20 };

  if (!shouldForce && boxes.some((existing) => rectsOverlap(existing, box))) {
    ctx.restore();
    return;
  }

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
  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
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

function landingMetrics() {
  const desktop = isDesktop();
  const baseRadius = Math.min(
    landingWidth * (desktop ? 0.2 : 0.44),
    landingHeight * (desktop ? 0.31 : 0.25),
  );
  return {
    cx: landingWidth * (desktop ? 0.49 : 0.5) + landingPointer.x * 8,
    cy: landingHeight * (desktop ? 0.49 : 0.43) + landingPointer.y * 6,
    r: baseRadius,
  };
}

function projectLanding(lat, lon, metrics) {
  const latRad = (lat * Math.PI) / 180;
  const lonRad = ((lon - landingLon) * Math.PI) / 180;
  const pitch = ((landingLat - 7) * Math.PI) / 180;
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
    visible: z2 > -0.03,
  };
}

function strokeLandingLine(points, metrics, color, widthValue = 0.7) {
  landingCtx.beginPath();
  let drawing = false;
  let previousPoint = null;
  let previousLat = null;
  let previousLon = null;
  for (const [lat, lon] of points) {
    const point = projectLanding(lat, lon, metrics);
    if (
      !point.visible ||
      breaksProjectedSegment(point, previousPoint, lat, lon, previousLat, previousLon, metrics)
    ) {
      drawing = false;
    }
    if (point.visible && !drawing) {
      landingCtx.moveTo(point.x, point.y);
      drawing = true;
    } else if (point.visible) {
      landingCtx.lineTo(point.x, point.y);
    }
    previousPoint = point;
    previousLat = lat;
    previousLon = lon;
  }
  landingCtx.strokeStyle = color;
  landingCtx.lineWidth = widthValue;
  landingCtx.stroke();
}

function drawLandingGraticule(metrics) {
  landingCtx.save();
  landingCtx.beginPath();
  landingCtx.arc(metrics.cx, metrics.cy, metrics.r, 0, Math.PI * 2);
  landingCtx.clip();

  for (const line of landingLatLines) {
    strokeLandingLine(
      line.points,
      metrics,
      line.lat === 0 ? "rgba(198, 33, 31, 0.16)" : "rgba(24, 28, 31, 0.08)",
      line.lat === 0 ? 0.9 : 0.62,
    );
  }

  for (const line of landingLonLines) {
    strokeLandingLine(line.points, metrics, "rgba(24, 28, 31, 0.07)", 0.58);
  }
  landingCtx.restore();
}

function drawLandingLand(metrics) {
  landingCtx.save();
  landingCtx.beginPath();
  landingCtx.arc(metrics.cx, metrics.cy, metrics.r, 0, Math.PI * 2);
  landingCtx.clip();

  const landGradient = landingCtx.createRadialGradient(
    metrics.cx - metrics.r * 0.26,
    metrics.cy - metrics.r * 0.28,
    metrics.r * 0.08,
    metrics.cx + metrics.r * 0.12,
    metrics.cy + metrics.r * 0.08,
    metrics.r,
  );
  landGradient.addColorStop(0, "rgba(34, 38, 40, 0.16)");
  landGradient.addColorStop(0.62, "rgba(34, 38, 40, 0.1)");
  landGradient.addColorStop(1, "rgba(34, 38, 40, 0.045)");

  landingCtx.beginPath();
  for (const ring of landMasses) {
    let drawing = false;
    let segmentPoints = 0;
    let clipped = false;
    const ringPath = [];
    let lastLat = null;
    let lastLon = null;
    let lastPoint = null;
    for (const [lat, lon] of ring) {
      const point = projectLanding(lat, lon, metrics);
      const jumps = breaksProjectedSegment(point, lastPoint, lat, lon, lastLat, lastLon, metrics);
      if (point.visible && point.z > -0.015 && !jumps) {
        if (!drawing) {
          drawing = true;
          segmentPoints = 1;
        } else {
          segmentPoints += 1;
        }
        ringPath.push(point);
      } else if (drawing) {
        drawing = false;
        clipped = true;
        segmentPoints = 0;
      } else {
        clipped = true;
      }
      lastLat = lat;
      lastLon = lon;
      lastPoint = point;
    }
    if (drawing && !clipped && segmentPoints > 3 && ringPath.length > 3) {
      landingCtx.moveTo(ringPath[0].x, ringPath[0].y);
      for (const point of ringPath.slice(1)) {
        landingCtx.lineTo(point.x, point.y);
      }
      landingCtx.closePath();
    }
  }
  landingCtx.fillStyle = landGradient;
  landingCtx.fill();

  landingCtx.lineCap = "round";
  landingCtx.lineJoin = "round";
  for (const ring of landMasses) {
    strokeLandingLine(ring, metrics, "rgba(24, 28, 31, 0.16)", 0.74);
  }
  landingCtx.restore();
}

function drawLandingSignals(metrics) {
  landingCtx.save();
  landingCtx.beginPath();
  landingCtx.arc(metrics.cx, metrics.cy, metrics.r, 0, Math.PI * 2);
  landingCtx.clip();

  for (const signal of signals) {
    if (signal.labelRank > 18) continue;
    const point = projectLanding(signal.lat, signal.lon, metrics);
    if (!point.visible || point.z < 0.04) continue;
    const alpha = Math.min(0.32, 0.08 + point.z * 0.17);
    landingCtx.fillStyle = `rgba(198, 33, 31, ${alpha})`;
    landingCtx.beginPath();
    landingCtx.arc(point.x, point.y, point.z > 0.62 ? 2.2 : 1.65, 0, Math.PI * 2);
    landingCtx.fill();
  }
  landingCtx.restore();
}

function drawLandingGlobe(now) {
  if (!landingCtx || landingCanvas.offsetParent === null) return;

  landingCtx.clearRect(0, 0, landingWidth, landingHeight);
  landingPointer.x += (landingPointer.targetX - landingPointer.x) * 0.08;
  landingPointer.y += (landingPointer.targetY - landingPointer.y) * 0.08;

  const metrics = landingMetrics();
  const launching = mode === "launching";
  const glow = landingCtx.createRadialGradient(
    metrics.cx,
    metrics.cy,
    metrics.r * 0.1,
    metrics.cx,
    metrics.cy,
    metrics.r * (launching ? 1.45 : 1.28),
  );
  glow.addColorStop(0, launching ? "rgba(255, 255, 255, 0.92)" : "rgba(255, 255, 255, 0.74)");
  glow.addColorStop(0.58, "rgba(235, 237, 236, 0.24)");
  glow.addColorStop(1, "rgba(247, 246, 242, 0)");
  landingCtx.fillStyle = glow;
  landingCtx.fillRect(0, 0, landingWidth, landingHeight);

  const sphere = landingCtx.createRadialGradient(
    metrics.cx - metrics.r * 0.34,
    metrics.cy - metrics.r * 0.32,
    metrics.r * 0.08,
    metrics.cx,
    metrics.cy,
    metrics.r * 1.05,
  );
  sphere.addColorStop(0, "rgba(255, 255, 255, 0.98)");
  sphere.addColorStop(0.54, "rgba(247, 248, 247, 0.72)");
  sphere.addColorStop(0.86, "rgba(216, 221, 221, 0.34)");
  sphere.addColorStop(1, "rgba(184, 193, 193, 0.16)");

  landingCtx.save();
  landingCtx.globalAlpha = launching ? 0.92 : 0.78;
  landingCtx.beginPath();
  landingCtx.arc(metrics.cx, metrics.cy, metrics.r, 0, Math.PI * 2);
  landingCtx.fillStyle = sphere;
  landingCtx.fill();
  landingCtx.lineWidth = 1;
  landingCtx.strokeStyle = "rgba(24, 28, 31, 0.13)";
  landingCtx.stroke();
  landingCtx.restore();

  landingCtx.globalAlpha = launching ? 0.9 : 0.75;
  drawLandingLand(metrics);
  drawLandingGraticule(metrics);
  drawLandingSignals(metrics);
  landingCtx.globalAlpha = 1;
}

function queueNextFrame() {
  if (document.hidden) {
    window.setTimeout(() => requestAnimationFrame(animate), HIDDEN_FRAME_INTERVAL_MS);
    return;
  }
  requestAnimationFrame(animate);
}

function animate(now = performance.now()) {
  if (document.hidden) {
    lastTime = now;
    queueNextFrame();
    return;
  }

  const delta = Math.min(40, now - lastTime);
  lastTime = now;

  if (mode === "landing" || mode === "launching") {
    landingLon = normalizeLon(landingLon + delta * (mode === "launching" ? 0.018 : 0.0045));
    landingLat += (8 - landingLat) * 0.02;
    drawLandingGlobe(now);
  }

  if (mode === "landing") {
    queueNextFrame();
    return;
  }

  const hasInertia = Math.hypot(spin.velocityX, spin.velocityY) > 0.001;
  if (!spin.dragging && hasInertia) {
    targetLon = normalizeLon(targetLon + spin.velocityX * delta);
    targetLat = clamp(targetLat + spin.velocityY * delta, -72, 72);
    spin.velocityX *= 0.94;
    spin.velocityY *= 0.94;
  } else if (mode === "browse" && now > spin.manualUntil) {
    autoLon = normalizeLon(autoLon + delta * 0.0012);
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
  prepareFramePaths(metrics);
  earthRenderer.render(metrics, centerLon, centerLat, currentZoom);
  drawBackground(now);
  drawSphere(metrics);
  drawLand(metrics);
  drawGraticule(metrics);
  drawLinks();
  drawPins(metrics);
  drawCalibration(metrics);
  setRuntimeTelemetry(now);

  queueNextFrame();
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
  readoutMode.textContent =
    nextMode === "browse" || nextMode === "launching"
      ? "BROWSE"
      : nextMode === "brief"
        ? "BRIEF"
        : "SELECTED";
  readoutLocation.textContent =
    nextMode === "browse" || nextMode === "launching"
      ? "GLOBAL SIGNAL SURFACE"
      : selectedSignal.region;
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
  const model = signal.model;
  const narrative = publicNarrativeFor(signal, model);
  signalCard.dataset.kind = "signal";
  fields.kind.textContent = "SIGNAL";
  fields.kind.dataset.kind = "signal";
  fields.confidence.textContent = model.convictionBand.toUpperCase();
  fields.region.textContent = signal.region;
  fields.title.textContent = signal.title;
  fields.summary.textContent = signal.summary;
  fields.implication.textContent = signal.implication;
  fields.surprise.textContent = narrative.watchShort;
  fields.modelRead.textContent = narrative.cardRead;
  fields.horizon.textContent = signal.horizon;
  fields.conviction.textContent = `${model.score}/100`;
  fields.archetype.textContent = model.archetype;
}

function updateBrief(signal) {
  const model = signal.model;
  const narrative = publicNarrativeFor(signal, model);
  fields.briefTitle.textContent = signal.title;
  fields.briefDeck.textContent = narrative.deck;
  fields.rationale.textContent = narrative.overview;
  fields.why.textContent = narrative.pathway;
  fields.briefSurprise.textContent = narrative.deeperRead;
  fields.briefWatch.textContent = narrative.watch;
  fields.briefDisconfirmers.textContent = narrative.changePicture;
  fields.briefScenarioSpread.textContent = narrative.scenarioSpread;
  fields.signalList.replaceChildren(
    ...(narrative.evidenceNotes || model.evidenceStack || signal.signals).map((signal) => {
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
  if (mode !== "landing") return;
  enterButton.disabled = true;
  centerLon = normalizeLon(landingLon);
  targetLon = centerLon;
  autoLon = centerLon;
  centerLat = 8;
  targetLat = 8;
  currentZoom = 0.92;
  targetZoom = 1;
  spin.velocityX = 0;
  spin.velocityY = 0;
  setMode("launching");
  window.setTimeout(startDetailedAssets, 520);
  window.setTimeout(() => {
    setMode("browse");
    enterButton.disabled = false;
    canvas.focus?.();
  }, 860);
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
  startDetailedAssets();
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

function predictionCacheKey() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .formatToParts(now)
    .reduce((values, part) => ({ ...values, [part.type]: part.value }), {});
  return `${parts.year}-${parts.month}-${parts.day}`;
}

function normalizeNightlySignal(signal, index) {
  const lat = Number(signal.lat);
  const lon = Number(signal.lon);
  if (!signal?.id || !Number.isFinite(lat) || !Number.isFinite(lon)) return null;

  return hydrateSignal({
    id: String(signal.id),
    kind: "signal",
    title: String(signal.title || "Untitled future signal"),
    lat,
    lon,
    labelRank: Number.isFinite(Number(signal.labelRank)) ? Number(signal.labelRank) : index + 1,
    confidence: Number.isFinite(Number(signal.confidence)) ? Number(signal.confidence) : 58,
    region: String(signal.region || "GLOBAL / NIGHTLY SIGNAL"),
    category: String(signal.category || "default"),
    horizon: String(signal.horizon || "12-36 months"),
    signalCount: Number.isFinite(Number(signal.signalCount)) ? Number(signal.signalCount) : 0,
    summary: String(signal.summary || "A nightly evidence scan surfaced this directional signal."),
    implication: String(signal.implication || "Watch whether this weak signal compounds into behavior change."),
    rationale: String(signal.rationale || "Generated from the nightly evidence pipeline."),
    why: String(signal.why || "The useful signal is whether evidence keeps converging across independent sources."),
    signals: Array.isArray(signal.signals) ? signal.signals.map(String) : [],
    sources: Array.isArray(signal.sources) ? signal.sources.map(String) : [],
    evidence: Array.isArray(signal.evidence) ? signal.evidence : [],
    sourceMix: Array.isArray(signal.sourceMix) ? signal.sourceMix : [],
    referenceClassPrior: signal.referenceClassPrior || null,
    leadingIndicators: Array.isArray(signal.leadingIndicators) ? signal.leadingIndicators : [],
    disconfirmers: Array.isArray(signal.disconfirmers) ? signal.disconfirmers : [],
    evidenceWindows: signal.evidenceWindows || null,
    evidencePairs: Array.isArray(signal.evidencePairs) ? signal.evidencePairs : [],
    patternModel: signal.patternModel || null,
    forecast: signal.forecast || null,
    resolutionCriteria: Array.isArray(signal.resolutionCriteria) ? signal.resolutionCriteria : [],
    brierTracking: signal.brierTracking || null,
    generatedAt: signal.generatedAt || null,
    nightly: true,
  });
}

function applyNightlyPredictions(payload) {
  const incomingSignals = Array.isArray(payload.signals)
    ? payload.signals
        .map((signal, index) => normalizeNightlySignal(signal, index))
        .filter(Boolean)
    : [];
  if (!incomingSignals.length) return false;

  const previousSelectedId = selectedSignal?.id;
  const passiveMode = mode === "landing" || mode === "browse" || mode === "launching";
  const incomingIds = new Set(incomingSignals.map((signal) => signal.id));
  const fallbackSignals = signals.filter((signal) => !signal.nightly && !incomingIds.has(signal.id));
  signals = [...incomingSignals, ...fallbackSignals];
  rebuildSignalIndexes();

  nightlyPredictionMeta = {
    generatedAt: payload.generatedAt || payload.generator?.generatedAt || null,
    runId: payload.generator?.runId || null,
    mode: payload.generator?.mode || null,
    count: incomingSignals.length,
  };
  document.documentElement.dataset.predictionSource = "nightly";
  document.documentElement.dataset.predictionGeneratedAt = nightlyPredictionMeta.generatedAt || "";
  document.documentElement.dataset.predictionCount = String(incomingSignals.length);

  selectedSignal = passiveMode
    ? incomingSignals[0]
    : signalsById.get(previousSelectedId) || incomingSignals[0];
  updateCard(selectedSignal);
  updateBrief(selectedSignal);

  const params = new URLSearchParams(window.location.search);
  const launchSignal = getSignal(params.get("signal"));
  const wasBrief = mode === "brief";
  if ((mode === "selected" || mode === "brief") && launchSignal && selectedSignal.id !== launchSignal.id) {
    setSelectedSignal(launchSignal);
    if (wasBrief) setMode("brief");
  }

  return true;
}

async function loadNightlyPredictions() {
  const url = `${LIVE_PREDICTIONS_URL}?v=${predictionCacheKey()}`;
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    if (payload.schemaVersion !== LIVE_PREDICTIONS_SCHEMA) {
      throw new Error(`Unexpected prediction schema: ${payload.schemaVersion || "missing"}`);
    }
    if (!applyNightlyPredictions(payload)) {
      throw new Error("No usable nightly predictions");
    }
  } catch (error) {
    document.documentElement.dataset.predictionSource = "static-fallback";
    document.documentElement.dataset.predictionLoadError = error.message;
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
  landingPointer.targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
  landingPointer.targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  landing.style.setProperty("--landing-x", landingPointer.targetX.toFixed(3));
  landing.style.setProperty("--landing-y", landingPointer.targetY.toFixed(3));
}

function handleLandingPointerLeave() {
  landingPointer.targetX = 0;
  landingPointer.targetY = 0;
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

function handleViewportChange() {
  isDesktopViewport = desktopMedia.matches;
  resize();
}

window.addEventListener("resize", resize);
desktopMedia.addEventListener?.("change", handleViewportChange);
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
loadNightlyPredictions();
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
  landPoints: landPointCount,
  countryPoints: countryPointCount,
  reliefReady: earthRenderer.ready,
  reliefSize: earthRenderer.ready ? "webgl" : "0",
  detailedAssetsStarted,
  predictionSource: nightlyPredictionMeta ? "nightly" : "static",
  predictionGeneratedAt: nightlyPredictionMeta?.generatedAt || null,
});
window.__futurePredictionEngineState = () => ({
  version: predictionEngineConfig.version,
  generatedAt: predictionEngineConfig.generatedAt,
  cadenceTarget: predictionEngineConfig.cadenceTarget,
  source: nightlyPredictionMeta ? "nightly" : "static",
  nightly: nightlyPredictionMeta,
  signalCount: signals.length,
  dimensions: Object.keys(predictionEngineConfig.weights),
  nightlyInputContract: predictionEngineConfig.nightlyInputContract,
  selected: {
    id: selectedSignal.id,
    score: selectedSignal.model.score,
    uncertainty: selectedSignal.model.scores.uncertainty,
    scenarioWeights: selectedSignal.model.scenarioWeights,
    archetype: selectedSignal.model.archetype,
    referenceClass: selectedSignal.model.scores.referenceClass,
  },
  scoreRange: signals.reduce(
    (range, signal) => ({
      min: Math.min(range.min, signal.model.score),
      max: Math.max(range.max, signal.model.score),
    }),
    { min: 100, max: 0 },
  ),
});
requestAnimationFrame(animate);
