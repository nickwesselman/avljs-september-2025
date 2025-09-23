import {Box, Text, render} from 'ink';
import { type } from 'os';

type Brewery = {
    id: string, name: string, city: string, state_province: string, brewery_type: string
}

type BreweryTableProps = {
    breweries: Array<Brewery>
}

const BreweryTable = (props: BreweryTableProps) => {
    const tableHeaderProps = {
        bold: true,
        color: "green"
    }

    const tableHeaderBox = <Box borderStyle={'single'} borderTop={false} borderLeft={false} borderRight={false} />

	return (
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

			{props.breweries.map((brewery, i) => (
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
	);
}

const renderBreweries = (breweries: Array<Brewery>) => {
    render(<BreweryTable breweries={breweries} />)
}

export type { Brewery }
export { renderBreweries }