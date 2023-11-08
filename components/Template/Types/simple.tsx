import React from "react";
import {
  Text,
  Font,
  Page,
  View,
  Image,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { experienceData } from "../DummyData/experienceData";
import { skills } from "../DummyData/skillsData";

const styles = StyleSheet.create({
  page: {},
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftColumn: {
    width: "40%",
    padding: 10,
    backgroundColor: "#FFDD56", // Yellow background color for left column
  },
  rightColumn: {
    width: "60%",
    padding: 10,
    backgroundColor: "#fff", // White background color for right column
  },
  header: {
    fontSize: 24,
    color: "#333", // Dark text color for header
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 14,
    color: "#333",
    textTransform: "uppercase",
  },
  contactInfo: {
    fontSize: 10,
    color: "#333",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16, // Prominent heading size
    color: "#333",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  content: {
    fontSize: 12,
    color: "#333",
    marginBottom: 10,
  },
  experienceItem: {
    marginBottom: 15, // Increase spacing between experience items
  },
  profileImage: {
    width: "100%",
    height: "auto",
    borderRadius: 100, // Add a border radius for rounded corners
  },
});

Font.register({
  family: "Lato",
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
  // Add fonts as needed
});

const Simple = () => (
  <Page style={styles.page}>
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Image
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          style={styles.profileImage}
        />
        <Text style={styles.header}>Luke Skywalker</Text>
        <Text style={styles.subHeader}>Jedi Master</Text>
        <Text style={styles.contactInfo}>Email: luke@theforce.com</Text>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.content}>Jedi Academy</Text>
        <Text style={styles.content}>Jedi Master</Text>
        <Text style={styles.content}>A long, long time ago</Text>

        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.content}>
          {skills.join(", ")} {/* Display skills as a comma-separated list */}
        </Text>

        <Text style={styles.sectionTitle}>Experience</Text>
        {experienceData.map(({ company, date, details, position }, index) => (
          <View key={index} style={styles.experienceItem}>
            <Text style={styles.subHeader}>{position}</Text>
            <Text style={styles.content}>{company}</Text>
            <Text style={styles.content}>{date}</Text>
            {details.map((detail, i) => (
              <Text key={i} style={styles.content}>
                {detail}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </View>
  </Page>
);

export default Simple;
