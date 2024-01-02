import React from "react";
import { Text, Font, Page, View, Image, StyleSheet } from "@react-pdf/renderer";
import { FormValues } from "../../../../utils/types/formValues";

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
    backgroundColor: "#F8C44C",
    color: "#000", // Yellow background color for left column
  },
  rightColumn: {
    width: "60%",
    padding: 10,
    backgroundColor: "#fff", // White background color for right column
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 14,
    textTransform: "uppercase",
  },
  contactInfo: {
    fontSize: 10,
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

interface SimpleProps {
  values: FormValues;
}
const Simple = ({ values }: SimpleProps) => {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <View style={styles.leftColumn}>
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
          <Text style={styles.sectionTitle}>Education</Text>
          {values.education.map((item) => {
            return (
              <>
                <Text style={styles.content}>{item.degree}</Text>
                <Text style={styles.content}>{item.school}</Text>
                <Text style={styles.content}>
                  {item.startDate}.{item.endDate}
                </Text>
              </>
            );
          })}
          {values.custom.map((c, idx) => (
            <view key={idx}>
              <Text style={styles.sectionTitle}>{c.name}</Text>
              <Text style={styles.content}>{c.items.join(", ")}</Text>
            </view>
          ))}

          <Text style={styles.sectionTitle}>Experience</Text>
          {values.workExperience.map(
            ({ company, endDate, startDate, description, title }, index) => (
              <View key={index} style={styles.experienceItem}>
                <Text style={styles.subHeader}>{title}</Text>
                <Text style={styles.content}>{company}</Text>
                <Text style={styles.content}>
                  {startDate}.{endDate}
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

export default Simple;
