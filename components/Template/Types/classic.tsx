import React from "react";
import ReactPDF, {
  Text,
  Font,
  Page,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { experienceData } from "../DummyData/experienceData";
import { skills } from "../DummyData/skillsData";

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

const Classic = (
  props: React.JSX.IntrinsicAttributes &
    React.JSX.IntrinsicClassAttributes<ReactPDF.Page> &
    Readonly<React.PropsWithChildren<ReactPDF.PageProps>>
) => (
  <Page {...props} style={styles.page}>
    <View style={styles.container}>
      <Text style={styles.header}>John Doe</Text>
      <Text style={styles.sectionTitle}>Education</Text>
      <Text style={styles.sectionContent}>Bachelor of Arts</Text>
      <Text style={styles.sectionContent}>University of Classic</Text>
      <Text style={styles.sectionContent}>Class of 20XX</Text>

      <Text style={styles.sectionTitle}>Skills</Text>
      {skills.map((skill, i) => (
        <Text key={i} style={styles.sectionContent}>
          {skill}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>Experience</Text>
      {experienceData.map(({ company, date, details, position }, i) => (
        <View key={i}>
          <Text style={styles.expHeading}>{position}</Text>
          <Text style={styles.sectionContent}>{company}</Text>
          <Text style={styles.sectionContent}>{date}</Text>
          {details.map((detail, j) => (
            <Text key={j} style={styles.sectionContent}>
              {detail}
            </Text>
          ))}
        </View>
      ))}
    </View>
    <Text style={styles.footer}>This is the classic resume template</Text>
  </Page>
);

export default Classic;
