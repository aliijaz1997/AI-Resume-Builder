import React from "react";
import { Text, Font, Page, View, Image, StyleSheet } from "@react-pdf/renderer";
import { FormValues } from "../../../utils/types/formValues";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftColumn: {
    width: "45%",
    padding: 20,
    backgroundColor: "#FFD700", // Gold color for left column
  },
  rightColumn: {
    width: "45%",
    padding: 20,
    backgroundColor: "#E0FFFF", // Light blue color for right column
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    color: "#333",
    textTransform: "uppercase",
  },
  subHeader: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 10,
    color: "#777",
    marginBottom: 3,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#333",
    marginTop: 15,
    marginBottom: 10,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },
  content: {
    fontSize: 12,
    color: "#444",
    marginBottom: 8,
  },
  experienceItem: {
    marginBottom: 15,
    borderLeftWidth: 2,
    borderLeftColor: "#F8C44C",
    paddingLeft: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});

Font.register({
  family: "Montserrat",
  src: `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap`,
});

interface ComplexProps {
  values: FormValues;
}

const Complex = ({ values }: ComplexProps) => {
  return (
    <Page size="A4">
      wdasdasda
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          {/* Left Column */}
          <Image
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            style={styles.profileImage}
          />
          <Text style={styles.header}>{values.name}</Text>
          <Text style={styles.subHeader}>{values.title}</Text>
          <Text style={styles.contactInfo}>Email: {values.email}</Text>
          <Text style={styles.contactInfo}>Phone: {values.phone}</Text>
          <Text style={styles.contactInfo}>Address: {values.address}</Text>
        </View>
        <View style={styles.rightColumn}>
          {/* Right Column */}
          <Text style={styles.sectionTitle}>Education</Text>
          {values.education.map((item, index) => (
            <View key={index}>
              <Text style={styles.content}>{item.degree}</Text>
              <Text style={styles.content}>{item.school}</Text>
              <Text style={styles.content}>
                {item.startDate} - {item.endDate}
              </Text>
            </View>
          ))}
          {values.custom.map((c, idx) => (
            <View key={idx}>
              <Text style={styles.sectionTitle}>{c.name}</Text>
              <Text style={styles.content}>{c.items.join(", ")}</Text>
            </View>
          ))}
          <Text style={styles.sectionTitle}>Experience</Text>
          {values.workExperience.map(
            ({ company, endDate, startDate, description, title }, index) => (
              <View key={index} style={styles.experienceItem}>
                <Text style={styles.subHeader}>{title}</Text>
                <Text style={styles.content}>{company}</Text>
                <Text style={styles.content}>
                  {startDate} - {endDate}
                </Text>
                {description
                  .split("- ")
                  .filter((item, index) => index !== 0 && item.trim() !== "")
                  .map((detail, i) => (
                    <Text key={i} style={styles.content}>
                      {detail}
                    </Text>
                  ))}
              </View>
            )
          )}
        </View>
      </View>
    </Page>
  );
};

export default Complex;
