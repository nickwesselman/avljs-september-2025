import { Box, Text, render, useInput } from 'ink';
import { useEffect, useState } from 'react';
import TextInput from 'ink-text-input'

type Brewery = {
	id: string, name: string, city: string, state_province: string, brewery_type: string
}

type BreweryTableProps = {
	defaultCity?: string,
	defaultName?: string,
	getBreweries: (city?: string, name?: string) => Promise<Brewery[]>
}

const BreweryTable = ({ defaultCity, defaultName, getBreweries }: BreweryTableProps) => {
	const [breweries, setBreweries] = useState<Brewery[]>()
	const [city, setCity] = useState(defaultCity)
	const [name, setName] = useState(defaultName)
	const [focus, setFocus] = useState(0)

	const tableHeaderProps = {
		bold: true,
		color: "green"
	}
	const tableHeaderBox = <Box borderStyle={'single'} borderTop={false} borderLeft={false} borderRight={false} />

	useInput((input, key) => {
		if (key.return || key.tab || key.downArrow || key.rightArrow) {
			setFocus(focus + 1)
		} else if (key.upArrow || key.leftArrow) {
			setFocus(focus - 1)
		}
	})

	useEffect(() => {
		const fetchBreweries = async () => setBreweries(await getBreweries(city, name))
		fetchBreweries()
	}, [city, name])

	if (!breweries) {
		return
	}

	return (
		<Box flexDirection="column">

			<Box>
				<Box marginRight={1}>
					<Text>Name:</Text>
				</Box>
				<TextInput value={name ?? ''} onChange={setName} focus={focus % 2 == 0} />
			</Box>

			<Box>
				<Box marginRight={1}>
					<Text>City:</Text>
				</Box>
				<TextInput value={city ?? ''} onChange={setCity} focus={focus % 2 == 1} />
			</Box>

			<Box flexDirection="column" width="80%" borderStyle="round">
				<Box>
					<Box width="40%" {...tableHeaderBox.props}>
						<Text {...tableHeaderProps}>Name</Text>
					</Box>

					<Box width="20%" {...tableHeaderBox.props}>
						<Text {...tableHeaderProps}>City</Text>
					</Box>

					<Box width="15%" {...tableHeaderBox.props}>
						<Text {...tableHeaderProps}>State</Text>
					</Box>

					<Box width="35%" {...tableHeaderBox.props}>
						<Text {...tableHeaderProps}>Type</Text>
					</Box>
				</Box>

				{breweries.map((brewery, i) => (
					<Box key={brewery.id} backgroundColor={i % 2 == 0 ? 'gray' : undefined}>
						<Box width="40%">
							<Text>{brewery.name}</Text>
						</Box>

						<Box width="20%">
							<Text>{brewery.city}</Text>
						</Box>

						<Box width="15%">
							<Text>{brewery.state_province}</Text>
						</Box>

						<Box width="35%">
							<Text>{brewery.brewery_type}</Text>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
}

const renderBreweries = (props: BreweryTableProps) => {
	render(<BreweryTable {...props} />)
}

export type { Brewery, BreweryTableProps }
export { renderBreweries }