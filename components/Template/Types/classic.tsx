import React from "react";
import { Text, Font, Page, View, StyleSheet } from "@react-pdf/renderer";
import { FormValues } from "../../../utils/types/formValues";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#f2f2f2", // Classic background color
  },
  container: {
    flexDirection: "column",
  },
  header: {
    fontSize: 24,
    fontFamily: "Lato Bold",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Lato Bold",
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 12,
    fontFamily: "Lato",
    marginBottom: 5,
  },
  expHeading: {
    fontSize: 12,
    fontFamily: "Lato Bold",
  },
  footer: {
    fontSize: 12,
    fontFamily: "Lato Bold",
    textAlign: "center",
    marginTop: 15,
  },
});

Font.register({
  family: "Lato",
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: "Lato Bold",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

interface ClassicProps {
  values: FormValues;
}

const Classic = ({ values }: ClassicProps) => (
  <Page style={styles.page}>
    <View style={styles.container}>
      <Text style={styles.header}>{values.name || "Your Name"}</Text>
      <Text style={styles.sectionTitle}>
        {values.educationCustomName ? values.educationCustomName : "Education"}
      </Text>
      {values.education.map((edu) => {
        return (
          <Text>
            <Text style={styles.sectionContent}>{edu.degree}</Text>
            <Text style={styles.sectionContent}>{edu.school}</Text>
            <Text style={styles.sectionContent}>
              {edu.startDate}.{edu.endDate}
            </Text>
          </Text>
        );
      })}

      <Text style={styles.sectionTitle}>
        {values.experienceCustomName
          ? values.experienceCustomName
          : "Work Experience"}
      </Text>
      {values.workExperience.map(
        ({ company, description, endDate, startDate, title }, i) => (
          <View key={i}>
            <Text style={styles.expHeading}>{title}</Text>
            <Text style={styles.sectionContent}>{company}</Text>
            <Text style={styles.sectionContent}>
              {startDate}.{endDate}
            </Text>

            {description
              .split(description.includes("-") ? "- " : ". ")
              .filter((item, index) => index !== 0 && item.trim() !== "")
              .map((item, index) => {
                return (
                  <Text key={index} style={styles.sectionContent}>
                    {item}
                  </Text>
                );
              })}
          </View>
        )
      )}
    </View>
    <view>
      {values.custom.map((c) => (
        <view>
          <Text style={styles.sectionTitle}>{c.name}</Text>
          {c.items.map((item, idx) => (
            <Text key={idx} style={styles.sectionContent}>
              {item}
            </Text>
          ))}
        </view>
      ))}
    </view>

    <Text style={styles.footer}>This is the classic resume template</Text>
  </Page>
);

export default Classic;
