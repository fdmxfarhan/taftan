import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import colors from './colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReportQuestionnaire = () => {
    const [answers, setAnswers] = useState({});
    const [descriptions, setDescriptions] = useState({});
    const [expandedGroups, setExpandedGroups] = useState({});

    const questionnaires = [
        {
            id: 1,
            title: 'پرسشنامه نصب و راه‌اندازی',
            groups: [
                {
                    id: 1,
                    title: 'اطلاعات اولیه نصب',
                    questions: [
                        {
                            id: 1,
                            type: 'single',
                            question: 'آیا دستگاه به درستی نصب شده است؟',
                            options: [
                                { text: 'بله', needsDescription: false },
                                { text: 'خیر', needsDescription: true, placeholder: 'لطفاً دلیل عدم نصب صحیح را توضیح دهید' },
                                { text: 'تا حدی', needsDescription: true, placeholder: 'لطفاً موارد ناقص را توضیح دهید' },
                            ],
                        },
                        {
                            id: 2,
                            type: 'number',
                            question: 'مدت زمان نصب دستگاه (به دقیقه):',
                        },
                    ],
                },
                {
                    id: 2,
                    title: 'مشکلات احتمالی',
                    questions: [
                        {
                            id: 3,
                            type: 'multiple',
                            question: 'کدام موارد در دستگاه مشکل دارند؟',
                            options: [
                                { text: 'صفحه نمایش', needsDescription: true, placeholder: 'لطفاً مشکل صفحه نمایش را توضیح دهید' },
                                { text: 'صدا', needsDescription: true, placeholder: 'لطفاً مشکل صدا را توضیح دهید' },
                                { text: 'اتصال به اینترنت', needsDescription: true, placeholder: 'لطفاً مشکل اتصال را توضیح دهید' },
                                { text: 'باتری', needsDescription: true, placeholder: 'لطفاً مشکل باتری را توضیح دهید' },
                            ],
                        },
                        {
                            id: 4,
                            type: 'string',
                            question: 'توضیحات تکمیلی در مورد مشکل دستگاه:',
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            title: 'پرسشنامه تعمیرات',
            groups: [
                {
                    id: 3,
                    title: 'اطلاعات تعمیر',
                    questions: [
                        {
                            id: 5,
                            type: 'single',
                            question: 'آیا قطعه معیوب تعویض شده است؟',
                            options: [
                                { text: 'بله', needsDescription: true, placeholder: 'لطفاً نام قطعه تعویض شده را ذکر کنید' },
                                { text: 'خیر', needsDescription: true, placeholder: 'لطفاً دلیل عدم تعویض را توضیح دهید' },
                            ],
                        },
                        {
                            id: 6,
                            type: 'number',
                            question: 'مدت زمان تعمیر (به دقیقه):',
                        },
                    ],
                },
            ],
        },
    ];

    useEffect(() => {
        // Initialize all groups as expanded
        const initialExpandedGroups = {};
        questionnaires.forEach(questionnaire => {
            questionnaire.groups.forEach(group => {
                initialExpandedGroups[group.id] = true;
            });
        });
        setExpandedGroups(initialExpandedGroups);
    }, []);

    const handleAnswerChange = (questionId, value) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value
        }));
    };

    const handleDescriptionChange = (questionId, optionText, text) => {
        setDescriptions(prev => ({
            ...prev,
            [`${questionId}_${optionText}`]: text
        }));
    };

    const toggleGroup = (groupId) => {
        setExpandedGroups(prev => ({
            ...prev,
            [groupId]: !prev[groupId]
        }));
    };

    const isGroupComplete = (group) => {
        return group.questions.every(question => {
            const answer = answers[question.id];
            if (!answer) return false;

            if (question.type === 'multiple') {
                if (answer.length === 0) return false;
            }

            // Check required descriptions for selected options
            if (question.type === 'single' || question.type === 'multiple') {
                const selectedOptions = question.options.filter(option => 
                    option.needsDescription && 
                    (answer === option.text || (Array.isArray(answer) && answer.includes(option.text)))
                );
                
                return selectedOptions.every(option => 
                    option.isDescriptionRequired ? descriptions[`${question.id}_${option.text}`] : true
                );
            }

            return true;
        });
    };

    const renderDescriptionInput = (questionId, option) => {
        if (!option.needsDescription) return null;
        
        const isSelected = answers[questionId] === option.text || 
                         (Array.isArray(answers[questionId]) && answers[questionId].includes(option.text));

        if (!isSelected) return null;

        return (
            <View style={styles.descriptionContainer}>
                <TextInput
                    style={styles.descriptionInput}
                    value={descriptions[`${questionId}_${option.text}`] || ''}
                    onChangeText={(text) => handleDescriptionChange(questionId, option.text, text)}
                    placeholder={option.placeholder}
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

        switch (question.type) {
            case 'single':
                return (
                    <View style={styles.questionContainer}>
                        <View style={styles.questionHeader}>
                            <Text style={styles.questionText}>{question.question}</Text>
                            {renderRequiredStar()}
                        </View>
                        <View style={styles.optionsContainer}>
                            {question.options.map((option, index) => (
                                <View key={index} style={styles.optionWrapper}>
                                    <TouchableOpacity
                                        style={[
                                            styles.optionButton,
                                            answers[question.id] === option.text && styles.selectedOption
                                        ]}
                                        onPress={() => handleAnswerChange(question.id, option.text)}
                                    >
                                        <Text style={[
                                            styles.optionText,
                                            answers[question.id] === option.text && styles.selectedOptionText
                                        ]}>
                                            {option.text}
                                        </Text>
                                    </TouchableOpacity>
                                    {renderDescriptionInput(question.id, option)}
                                </View>
                            ))}
                        </View>
                    </View>
                );

            case 'multiple':
                return (
                    <View style={styles.questionContainer}>
                        <View style={styles.questionHeader}>
                            <Text style={styles.questionText}>{question.question}</Text>
                            {renderRequiredStar()}
                        </View>
                        <View style={styles.optionsContainer}>
                            {question.options.map((option, index) => (
                                <View key={index} style={styles.optionWrapper}>
                                    <TouchableOpacity
                                        style={[
                                            styles.optionButton,
                                            answers[question.id]?.includes(option.text) && styles.selectedOption
                                        ]}
                                        onPress={() => {
                                            const currentAnswers = answers[question.id] || [];
                                            const newAnswers = currentAnswers.includes(option.text)
                                                ? currentAnswers.filter(ans => ans !== option.text)
                                                : [...currentAnswers, option.text];
                                            handleAnswerChange(question.id, newAnswers);
                                        }}
                                    >
                                        <Text style={[
                                            styles.optionText,
                                            answers[question.id]?.includes(option.text) && styles.selectedOptionText
                                        ]}>
                                            {option.text}
                                        </Text>
                                    </TouchableOpacity>
                                    {renderDescriptionInput(question.id, option)}
                                </View>
                            ))}
                        </View>
                    </View>
                );

            case 'string':
                return (
                    <View style={styles.questionContainer}>
                        <View style={styles.questionHeader}>
                            <Text style={styles.questionText}>{question.question}</Text>
                            {renderRequiredStar()}
                        </View>
                        <TextInput
                            style={styles.textInput}
                            value={answers[question.id] || ''}
                            onChangeText={(text) => handleAnswerChange(question.id, text)}
                            multiline
                            textAlignVertical="top"
                        />
                    </View>
                );

            case 'number':
                return (
                    <View style={styles.questionContainer}>
                        <View style={styles.questionHeader}>
                            <Text style={styles.questionText}>{question.question}</Text>
                            {renderRequiredStar()}
                        </View>
                        <TextInput
                            style={styles.textInput}
                            value={answers[question.id] || ''}
                            onChangeText={(text) => {
                                if (text === '' || /^\d+$/.test(text)) {
                                    handleAnswerChange(question.id, text);
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

    const renderQuestionGroup = (group) => {
        const isComplete = isGroupComplete(group);
        const isExpanded = expandedGroups[group.id] !== false;

        return (
            <View key={group.id} style={styles.groupContainer}>
                <TouchableOpacity 
                    style={styles.groupHeader}
                    onPress={() => toggleGroup(group.id)}
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
                            {group.title}
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
                {isExpanded && group.questions.map(question => (
                    <View key={question.id}>
                        {renderQuestion(question)}
                    </View>
                ))}
            </View>
        );
    };

    const renderQuestionnaire = (questionnaire) => (
        <View key={questionnaire.id} style={styles.questionnaireContainer}>
            <Text style={styles.questionnaireTitle}>{questionnaire.title}</Text>
            {questionnaire.groups.map(group => renderQuestionGroup(group))}
        </View>
    );

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
    questionnaireContainer: {
        marginBottom: 30,
    },
    questionnaireTitle: {
        fontFamily: 'iransansbold',
        fontSize: 16,
        color: colors.darkBackground,
        marginBottom: 15,
        textAlign: 'right',
    },
    groupContainer: {
        marginBottom: 20,
        backgroundColor: colors.white,
        padding: 15,
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
        fontSize: 15,
        color: colors.darkBackground,
        marginRight: 10,
    },
    completeGroupTitle: {
        color: colors.emerald,
    },
    questionContainer: {
        marginBottom: 20,
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
        fontSize: 14,
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
        fontSize: 13,
        textAlign: 'right',
        minHeight: 60,
        backgroundColor: colors.antiflashWhite,
    },
    textInput: {
        borderWidth: 1,
        borderColor: colors.lightgray,
        borderRadius: 8,
        padding: 10,
        fontFamily: 'iransans',
        fontSize: 13,
        textAlign: 'right',
    },
    requiredStar: {
        color: colors.red,
        fontSize: 16,
        marginRight: 5,
    },
});

export default ReportQuestionnaire; 