import React, { useState } from "react";
import { Box, Divider, IconButton, Stack, useTheme } from "@mui/material";
import { Nav_Buttons, Nav_Setting } from "../../data";
const Logo = require("../../../src/assets/img/logo.ico");
const GeneralApp = () => {
	const theme = useTheme();
	console.log(theme);
	const [selected, useSelected] = useState(0);
	return (
		<div>
			<Box
				sx={{
					height: "100vh",
					width: 100,
					backgroundColor: theme.palette.background.paper,
					boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
				}}
			>
				<Stack
					py={3}
					alignItems={"center"}
					justifyContent={"space-between"}
					sx={{ height: "100%" }}
				>
					<Stack alignItems={"center"} spacing={4}>
						<Box
							sx={{
								height: 64,
								width: 64,
								borderRadius: 1.5,
								backgroundColor: theme.palette.primary.main,
							}}
							p={1}
						>
							<img
								style={{
									height: 64,
									width: 64,
								}}
								src={Logo}
								alt="Tawk"
							/>
						</Box>
						<Stack
							sx={{ width: "max-content" }}
							direction="column"
							alignItems={"center"}
							spacing={3}
						>
							{Nav_Buttons.map((el) => (
								<Box
									sx={{
										backgroundColor: theme.palette.primary.main,
										borderRadius: 1.5,
									}}
									key={el.index}
								>
									<IconButton sx={{ width: "max-content", color: "#ffffff" }}>
										{el.icon}
									</IconButton>
								</Box>
							))}
						</Stack>
						<Divider sx={{ width: 48 }} />
						{Nav_Setting.map((el) => (
							<IconButton key={el.index}>{el.icon}</IconButton>
						))}
					</Stack>
				</Stack>
			</Box>
		</div>
	);
};

export default GeneralApp;
