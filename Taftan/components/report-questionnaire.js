import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import colors from './colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { loadQuestionnaireWithQuestionList } from '../services/report-load-questionnaire';

const ReportQuestionnaire = ({ setIsValid, answers, setAnswers, descriptions, setDescriptions, requestId }) => {
    const [expandedGroups, setExpandedGroups] = useState({});
    const [questionnaires, setQuestionnaires] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadQuestionnaires = async () => {
            if (!requestId) return;
            
            try {
                const response = await loadQuestionnaireWithQuestionList(requestId);
                if (response.success) {
                    setQuestionnaires(response.data);
                    // Initialize all groups as expanded with unique identifiers
                    const initialExpandedGroups = {};
                    response.data.forEach(questionnaire => {
                        questionnaire.Questions.forEach(category => {
                            const uniqueGroupId = `${questionnaire.Id}_${category.categoryId}`;
                            initialExpandedGroups[uniqueGroupId] = true;
                        });
                    });
                    setExpandedGroups(initialExpandedGroups);
                }
            } catch (error) {
                console.error('Error loading questionnaires:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadQuestionnaires();
    }, [requestId]);

    useEffect(() => {
        // Check if all questions in all questionnaires are complete
        const allQuestionsComplete = questionnaires.every(questionnaire => 
            questionnaire.Questions.every(category => 
                category.QuestionList.every(question => {
                    const answer = answers[question.questionnaireId];
                    if (!answer) return false;

                    if (question.questionType === 1) { // Multiple choice
                        if (answer.length === 0) return false;
                    }

                    // Check required descriptions for selected options
                    if (question.questionType === 1 || question.questionType === 2) { // Multiple or Single choice
                        const selectedOptions = question.options.filter(option => 
                            option.isDescriptionMandatory && 
                            (answer === option.title || (Array.isArray(answer) && answer.includes(option.title)))
                        );
                        
                        return selectedOptions.every(option => 
                            descriptions[`${question.questionnaireId}_${option.title}`]
                        );
                    }

                    return true;
                })
            )
        );
        
        setIsValid(allQuestionsComplete);
    }, [answers, descriptions, setIsValid, questionnaires]);

    const handleAnswerChange = (questionnaireId, value) => {
        setAnswers(prev => ({
            ...prev,
            [questionnaireId]: value
        }));
    };

    const handleDescriptionChange = (questionnaireId, optionText, text) => {
        setDescriptions(prev => ({
            ...prev,
            [`${questionnaireId}_${optionText}`]: text
        }));
    };

    const toggleGroup = (questionnaireId, categoryId) => {
        const uniqueGroupId = `${questionnaireId}_${categoryId}`;
        setExpandedGroups(prev => ({
            ...prev,
            [uniqueGroupId]: !prev[uniqueGroupId]
        }));
    };

    const renderDescriptionInput = (questionnaireId, option) => {
        if (!option.isDescriptionShow) return null;
        
        const isSelected = answers[questionnaireId] === option.title || 
                         (Array.isArray(answers[questionnaireId]) && answers[questionnaireId].includes(option.title));

        if (!isSelected) return null;

        return (
            <View style={styles.descriptionContainer}>
                <TextInput
                    style={styles.descriptionInput}
                    value={descriptions[`${questionnaireId}_${option.title}`] || ''}
                    onChangeText={(text) => handleDescriptionChange(questionnaireId, option.title, text)}
                    placeholder={option.description}
                    multiline
                    textAlignVertical="top"
                />
            </View>
        );
    };

    const renderQuestion = (question) => {
        const renderRequiredStar = () => (
            <Text style={styles.requiredStar}>*</Text>
        );

        switch (question.questionType) {
            case 1: // Multiple choice
                return (
                    <View style={styles.questionContainer}>
                        <View style={styles.questionHeader}>
                            <Text style={styles.questionText}>{question.title}</Text>
                            {renderRequiredStar()}
                        </View>
                        <View style={styles.optionsContainer}>
                            {question.options.map((option, index) => (
                                <View key={index} style={styles.optionWrapper}>
                                    <TouchableOpacity
                                        style={[
                                            styles.optionButton,
                                            answers[question.questionnaireId]?.includes(option.title) && styles.selectedOption
                                        ]}
                                        onPress={() => {
                                            const currentAnswers = answers[question.questionnaireId] || [];
                                            const newAnswers = currentAnswers.includes(option.title)
                                                ? currentAnswers.filter(ans => ans !== option.title)
                                                : [...currentAnswers, option.title];
                                            handleAnswerChange(question.questionnaireId, newAnswers);
                                        }}
                                    >
                                        <Text style={[
                                            styles.optionText,
                                            answers[question.questionnaireId]?.includes(option.title) && styles.selectedOptionText
                                        ]}>
                                            {option.title}
                                        </Text>
                                    </TouchableOpacity>
                                    {renderDescriptionInput(question.questionnaireId, option)}
                                </View>
                            ))}
                        </View>
                    </View>
                );

            case 2: // Single choice
                return (
                    <View style={styles.questionContainer}>
                        <View style={styles.questionHeader}>
                            <Text style={styles.questionText}>{question.title}</Text>
                            {renderRequiredStar()}
                        </View>
                        <View style={styles.optionsContainer}>
                            {question.options.map((option, index) => (
                                <View key={index} style={styles.optionWrapper}>
                                    <TouchableOpacity
                                        style={[
                                            styles.optionButton,
                                            answers[question.questionnaireId] === option.title && styles.selectedOption
                                        ]}
                                        onPress={() => handleAnswerChange(question.questionnaireId, option.title)}
                                    >
                                        <Text style={[
                                            styles.optionText,
                                            answers[question.questionnaireId] === option.title && styles.selectedOptionText
                                        ]}>
                                            {option.title}
                                        </Text>
                                    </TouchableOpacity>
                                    {renderDescriptionInput(question.questionnaireId, option)}
                                </View>
                            ))}
                        </View>
                    </View>
                );

            case 3: // String
                return (
                    <View style={styles.questionContainer}>
                        <View style={styles.questionHeader}>
                            <Text style={styles.questionText}>{question.title}</Text>
                            {renderRequiredStar()}
                        </View>
                        <TextInput
                            style={styles.textInput}
                            value={answers[question.questionnaireId] || ''}
                            onChangeText={(text) => handleAnswerChange(question.questionnaireId, text)}
                            multiline
                            textAlignVertical="top"
                        />
                    </View>
                );

            case 4: // Number
                return (
                    <View style={styles.questionContainer}>
                        <View style={styles.questionHeader}>
                            <Text style={styles.questionText}>{question.title}</Text>
                            {renderRequiredStar()}
                        </View>
                        <TextInput
                            style={styles.textInput}
                            value={answers[question.questionnaireId] || ''}
                            onChangeText={(text) => {
                                if (text === '' || /^\d+$/.test(text)) {
                                    handleAnswerChange(question.questionnaireId, text);
                                }
                            }}
                            keyboardType="numeric"
                        />
                    </View>
                );

            default:
                return null;
        }
    };

    const renderQuestionGroup = (questionnaire, category) => {
        const uniqueGroupId = `${questionnaire.Id}_${category.categoryId}`;
        const isExpanded = expandedGroups[uniqueGroupId] !== false;
        const isComplete = category.QuestionList.every(question => {
            const answer = answers[question.questionnaireId];
            if (!answer) return false;

            if (question.questionType === 1) {
                if (answer.length === 0) return false;
            }

            if (question.questionType === 1 || question.questionType === 2) {
                const selectedOptions = question.options.filter(option => 
                    option.isDescriptionMandatory && 
                    (answer === option.title || (Array.isArray(answer) && answer.includes(option.title)))
                );
                
                return selectedOptions.every(option => 
                    descriptions[`${question.questionnaireId}_${option.title}`]
                );
            }

            return true;
        });

        return (
            <View key={uniqueGroupId} style={styles.groupContainer}>
                <TouchableOpacity 
                    style={styles.groupHeader}
                    onPress={() => toggleGroup(questionnaire.Id, category.categoryId)}
                >
                    <View style={styles.groupHeaderContent}>
                        <Ionicons 
                            name={isExpanded ? "chevron-down" : "chevron-forward"} 
                            size={20} 
                            color={colors.darkBackground} 
                        />
                        <Text style={[
                            styles.groupTitle,
                            isComplete && styles.completeGroupTitle
                        ]}>
                            {category.categoryTitle}
                        </Text>
                    </View>
                    {isComplete && (
                        <Ionicons 
                            name="checkmark-circle" 
                            size={20} 
                            color={colors.emerald} 
                        />
                    )}
                </TouchableOpacity>
                {isExpanded && category.QuestionList.map(question => (
                    <View key={question.questionnaireId}>
                        {renderQuestion(question)}
                    </View>
                ))}
            </View>
        );
    };

    const renderQuestionnaire = (questionnaire) => (
        <View key={questionnaire.Id} style={styles.questionnaireContainer}>
            <Text style={styles.questionnaireTitle}>{questionnaire.Title}</Text>
            {questionnaire.Questions.map(category => renderQuestionGroup(questionnaire, category))}
        </View>
    );

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <Text>در حال بارگیری اطلاعات...</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            {questionnaires.map(questionnaire => renderQuestionnaire(questionnaire))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'iransansbold',
    },
    questionnaireContainer: {
        marginBottom: 5,
    },
    questionnaireTitle: {
        fontFamily: 'iransansbold',
        fontSize: 14,
        color: colors.darkBackground,
        marginBottom: 0,
        textAlign: 'right',
    },
    groupContainer: {
        marginBottom: 10,
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    groupHeader: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    groupHeaderContent: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    groupTitle: {
        fontFamily: 'iransansbold',
        fontSize: 13,
        color: colors.darkBackground,
        marginRight: 10,
    },
    completeGroupTitle: {
        color: colors.emerald,
    },
    questionContainer: {
        marginBottom: 10,
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 10,
        elevation: 2,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    questionHeader: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    questionText: {
        fontFamily: 'iransansbold',
        fontSize: 13,
        color: colors.darkBackground,
    },
    optionsContainer: {
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    optionWrapper: {
        width: '100%',
        marginBottom: 5,
    },
    optionButton: {
        backgroundColor: colors.lightBackground,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 15,
        margin: 5,
        borderWidth: 1,
        borderColor: colors.lightgray,
    },
    selectedOption: {
        backgroundColor: colors.blue,
        borderColor: colors.blue,
    },
    optionText: {
        fontFamily: 'iransans',
        fontSize: 12,
        color: colors.darkBackground,
        textAlign: 'center',
    },
    selectedOptionText: {
        color: colors.white,
    },
    descriptionContainer: {
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    descriptionInput: {
        borderWidth: 1,
        borderColor: colors.lightgray,
        borderRadius: 8,
        padding: 10,
        fontFamily: 'iransans',
        fontSize: 12,
        textAlign: 'right',
        minHeight: 60,
        backgroundColor: colors.antiflashWhite,
    },
    textInput: {
        borderWidth: 1,
        borderColor: colors.lightgray,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontFamily: 'iransans',
        fontSize: 12,
        textAlign: 'center',
    },
    requiredStar: {
        color: colors.red,
        fontSize: 16,
        marginRight: 5,
    },
});

export default ReportQuestionnaire; 